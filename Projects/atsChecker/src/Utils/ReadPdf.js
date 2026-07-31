const MAX_PDF_SIZE = 10 * 1024 * 1024;

let pdfJsPromise;

const getPdfJs = async () => {
  if (!pdfJsPromise) {
    pdfJsPromise = import("pdfjs-dist").then((pdfjsLib) => {
      pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
        "pdfjs-dist/build/pdf.worker.min.mjs",
        import.meta.url
      ).toString();

      return pdfjsLib;
    });
  }

  return pdfJsPromise;
};

export const extractText = async (file) => {
  if (!file) {
    throw new Error("Please choose a PDF resume before analyzing.");
  }

  if (file.type && file.type !== "application/pdf") {
    throw new Error("Only PDF resumes are supported right now.");
  }

  if (!file.name.toLowerCase().endsWith(".pdf")) {
    throw new Error("Please upload a file with a .pdf extension.");
  }

  if (file.size > MAX_PDF_SIZE) {
    throw new Error("Please upload a PDF smaller than 10 MB.");
  }

  const pdfjsLib = await getPdfJs();
  const arrayBuffer = await file.arrayBuffer();

  const pdf = await pdfjsLib.getDocument({
    data: arrayBuffer,
  }).promise;

  let fullText = "";

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);

    const textContent = await page.getTextContent();

    const pageText = textContent.items
      .map((item) => ("str" in item ? item.str : ""))
      .filter(Boolean)
      .join(" ");

    fullText += pageText + "\n";
  }

  const normalizedText = fullText.replace(/\s+/g, " ").trim();

  if (!normalizedText) {
    throw new Error(
      "We could not read text from this PDF. Try a text-based resume instead of a scanned image."
    );
  }

  return normalizedText;
};
