import { useMemo, useRef, useState } from "react";
import { extractText } from "../Utils/ReadPdf";

const MIN_JOB_DESCRIPTION_LENGTH = 40;
const hasGeminiApiKey = Boolean(import.meta.env.VITE_API_KEY);

const buildPrompt = ({ jobDescription, resumeText }) => `
You are a Senior Technical Recruiter and ATS (Applicant Tracking System) expert with over 15 years of experience hiring software engineers at leading technology companies.

Compare the candidate's resume against the provided job description exactly as an experienced recruiter and ATS software would.

Evaluate:
- Technical skills match
- Relevant experience
- Projects
- Education
- ATS keyword optimization
- Missing required skills
- Overall suitability for the role

Return ONLY valid JSON.

Rules:
- Do not return markdown.
- Do not wrap the response in a code fence.
- Do not include any explanation outside the JSON.
- Do not invent any information.
- Penalize only genuinely missing requirements.
- ATS score must be an integer between 0 and 100.
- Every good point, bad point, and suggestion should be 1-2 concise sentences.

The JSON MUST exactly match this structure:

{
  "atsScore": 0,
  "summary": "",
  "goodPoints": ["", "", "", "", ""],
  "badPoints": ["", "", "", "", ""],
  "suggestions": ["", "", "", "", ""]
}

Job Description:
${jobDescription}

Resume:
${resumeText}
`;

const getErrorMessage = (error) => {
  const message = error?.message || "";

  if (!navigator.onLine) {
    return "You appear to be offline. Check your connection and try again.";
  }

  if (/429|quota|rate/i.test(message)) {
    return "Gemini is rate limiting requests right now. Please wait a moment and try again.";
  }

  if (/api key|permission|unauthorized|forbidden/i.test(message)) {
    return "Gemini could not authorize this request. Check that your VITE_API_KEY is configured correctly.";
  }

  if (/json|parse|schema/i.test(message)) {
    return "Gemini returned an unexpected response format. Please try again.";
  }

  return message || "Something went wrong while analyzing the resume.";
};

const parseAiResponse = (rawText) => {
  const cleanedText = String(rawText || "")
    .trim()
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```$/i, "")
    .trim();

  const jsonStart = cleanedText.indexOf("{");
  const jsonEnd = cleanedText.lastIndexOf("}");

  if (jsonStart === -1 || jsonEnd === -1) {
    throw new Error("The AI response did not include valid JSON.");
  }

  const parsed = JSON.parse(cleanedText.slice(jsonStart, jsonEnd + 1));
  const score = Number(parsed.atsScore);

  return {
    atsScore: Number.isFinite(score)
      ? Math.min(100, Math.max(0, Math.round(score)))
      : 0,
    summary:
      typeof parsed.summary === "string" && parsed.summary.trim()
        ? parsed.summary.trim()
        : "No summary was provided for this analysis.",
    goodPoints: Array.isArray(parsed.goodPoints)
      ? parsed.goodPoints.filter(Boolean).map(String)
      : [],
    badPoints: Array.isArray(parsed.badPoints)
      ? parsed.badPoints.filter(Boolean).map(String)
      : [],
    suggestions: Array.isArray(parsed.suggestions)
      ? parsed.suggestions.filter(Boolean).map(String)
      : [],
  };
};

const InputComp = ({ setAiRes, setStatus, status, onResetReport }) => {
  const fileInputRef = useRef(null);
  const uploadRequestRef = useRef(0);

  const [resumeFile, setResumeFile] = useState(null);
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [uploadState, setUploadState] = useState({
    type: "idle",
    message: "Upload a PDF resume to begin.",
  });

  const isAnalyzing = status.type === "loading";
  const isUploading = uploadState.type === "loading";
  const trimmedJobDescription = jobDescription.trim();

  const validationMessage = useMemo(() => {
    if (!resumeText) return "Upload a readable PDF resume.";
    if (trimmedJobDescription.length < MIN_JOB_DESCRIPTION_LENGTH) {
      return "Paste a complete job description.";
    }
    return "";
  }, [resumeText, trimmedJobDescription.length]);

  const canAnalyze = !isAnalyzing && !isUploading && !validationMessage;

  const handleFileChange = async (event) => {
    const file = event.target.files?.[0];
    const requestId = uploadRequestRef.current + 1;
    uploadRequestRef.current = requestId;

    setAiRes(null);
    setResumeText("");

    if (!file) {
      setResumeFile(null);
      setUploadState({
        type: "idle",
        message: "Upload a PDF resume to begin.",
      });
      return;
    }

    setResumeFile(file);
    setUploadState({
      type: "loading",
      message: "Reading resume text from the PDF...",
    });
    setStatus({ type: "idle", message: "" });

    try {
      const extractedText = await extractText(file);

      if (uploadRequestRef.current !== requestId) return;

      setResumeText(extractedText);
      setUploadState({
        type: "success",
        message: "Resume text extracted successfully.",
      });
    } catch (error) {
      if (uploadRequestRef.current !== requestId) return;

      setResumeFile(null);
      setResumeText("");
      setUploadState({
        type: "error",
        message: getErrorMessage(error),
      });
      event.target.value = "";
    }
  };

  const handleJobDescriptionChange = (event) => {
    setJobDescription(event.target.value);

    if (status.type === "error") {
      setStatus({ type: "idle", message: "" });
    }
  };

  const handleReset = () => {
    uploadRequestRef.current += 1;
    setResumeFile(null);
    setResumeText("");
    setJobDescription("");
    setUploadState({
      type: "idle",
      message: "Upload a PDF resume to begin.",
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    onResetReport();
  };

  const handleCheckResume = async () => {
    if (validationMessage) {
      setStatus({ type: "error", message: validationMessage });
      return;
    }

    if (!hasGeminiApiKey) {
      setStatus({
        type: "error",
        message:
          "Missing Gemini API key. Add VITE_API_KEY to your environment before analyzing.",
      });
      return;
    }

    try {
      setAiRes(null);
      setStatus({
        type: "loading",
        message: "Comparing the resume with the job description...",
      });

      const { ai } = await import("../Utils/Gemini");
      const result = await ai.models.generateContent({
        model: "gemini-3.5-flash-lite",
        contents: buildPrompt({
          jobDescription: trimmedJobDescription,
          resumeText,
        }),
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: "OBJECT",
            properties: {
              atsScore: { type: "INTEGER" },
              summary: { type: "STRING" },
              goodPoints: { type: "ARRAY", items: { type: "STRING" } },
              badPoints: { type: "ARRAY", items: { type: "STRING" } },
              suggestions: { type: "ARRAY", items: { type: "STRING" } },
            },
            required: [
              "atsScore",
              "summary",
              "goodPoints",
              "badPoints",
              "suggestions",
            ],
          },
        },
      });

      const data = parseAiResponse(result.text);

      setAiRes(data);
      setStatus({
        type: "success",
        message: "Analysis complete. Review the report on the right.",
      });
    } catch (error) {
      setAiRes(null);
      setStatus({
        type: "error",
        message: getErrorMessage(error),
      });
    }
  };

  const uploadButtonLabel = resumeFile ? resumeFile.name : "Choose PDF";

  return (
    <section className="panel flex min-h-[640px] flex-col rounded-2xl p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <p className="text-sm font-semibold text-blue-600">Resume input</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-950">
            Build the match profile
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
            Upload a readable PDF resume, paste the target role, and generate a
            recruiter-style ATS report.
          </p>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="focus-ring rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 disabled:opacity-50"
          disabled={isAnalyzing || isUploading}
        >
          Reset
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-5 pt-5">
        <div>
          <div className="mb-2 flex items-center justify-between gap-3">
            <label
              htmlFor="resume-upload"
              className="text-sm font-semibold text-slate-800"
            >
              Resume PDF
            </label>
            <span className="text-xs font-medium text-slate-500">
              Max 10 MB
            </span>
          </div>

          <input
            ref={fileInputRef}
            id="resume-upload"
            className="sr-only"
            type="file"
            accept="application/pdf,.pdf"
            onChange={handleFileChange}
            disabled={isAnalyzing}
          />

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={isAnalyzing || isUploading}
            className="focus-ring flex min-h-24 w-full items-center justify-between gap-4 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-4 text-left transition hover:border-blue-400 hover:bg-blue-50/70 disabled:opacity-60"
          >
            <span className="flex min-w-0 items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-sm">
                PDF
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-slate-900">
                  {uploadButtonLabel}
                </span>
                <span className="mt-1 block text-sm text-slate-500">
                  {isUploading ? "Extracting text..." : uploadState.message}
                </span>
              </span>
            </span>
            {isUploading ? (
              <span className="h-5 w-5 shrink-0 animate-spin rounded-full border-2 border-blue-200 border-t-blue-600" />
            ) : (
              <span className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-blue-700 shadow-sm">
                Browse
              </span>
            )}
          </button>

          {uploadState.type === "error" ? (
            <p className="mt-2 text-sm font-medium text-red-600" role="alert">
              {uploadState.message}
            </p>
          ) : null}
        </div>

        <div className="flex flex-1 flex-col">
          <div className="mb-2 flex items-center justify-between gap-3">
            <label
              htmlFor="job-description"
              className="text-sm font-semibold text-slate-800"
            >
              Job description
            </label>
            <span className="text-xs font-medium text-slate-500">
              {trimmedJobDescription.length} characters
            </span>
          </div>

          <textarea
            id="job-description"
            value={jobDescription}
            onChange={handleJobDescriptionChange}
            placeholder="Paste the complete job description, including responsibilities, required skills, and nice-to-have qualifications..."
            className="focus-ring min-h-72 flex-1 resize-none rounded-xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-800 shadow-sm transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500"
            disabled={isAnalyzing}
          />
        </div>

        <div
          className={`rounded-xl border px-4 py-3 text-sm ${
            status.type === "error"
              ? "border-red-200 bg-red-50 text-red-700"
              : status.type === "success"
                ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                : "border-slate-200 bg-slate-50 text-slate-600"
          }`}
          role={status.type === "error" ? "alert" : "status"}
        >
          {status.message || validationMessage || "Ready when your inputs are complete."}
        </div>

        <button
          type="button"
          onClick={handleCheckResume}
          disabled={!canAnalyze}
          className="focus-ring inline-flex h-12 items-center justify-center rounded-xl bg-blue-600 px-5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md active:scale-[0.99] disabled:bg-slate-300 disabled:text-slate-500 disabled:shadow-none"
        >
          {isAnalyzing ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              Analyzing resume
            </span>
          ) : (
            "Check resume"
          )}
        </button>
      </div>
    </section>
  );
};

export default InputComp;
