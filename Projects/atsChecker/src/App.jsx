import { useCallback, useState } from "react";
import InputComp from "./Components/InputComp";
import DisplayComp from "./Components/DisplayComp";

const initialStatus = {
  type: "idle",
  message: "",
};

const App = () => {
  const [aiRes, setAiRes] = useState(null);
  const [status, setStatus] = useState(initialStatus);

  const handleResetReport = useCallback(() => {
    setAiRes(null);
    setStatus(initialStatus);
  }, []);

  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-900">
      <div className="mx-auto flex min-h-screen w-full max-w-[1680px] flex-col px-4 py-4 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white/85 px-5 py-4 shadow-sm backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
              ATS Resume Checker
            </p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Match every resume to the role with clarity.
            </h1>
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.16)]" />
            Gemini-powered analysis
          </div>
        </header>

        <div className="grid flex-1 gap-5 py-5 lg:grid-cols-[minmax(360px,0.9fr)_minmax(0,1.25fr)] xl:grid-cols-[minmax(420px,0.85fr)_minmax(0,1.35fr)]">
          <InputComp
            setAiRes={setAiRes}
            setStatus={setStatus}
            status={status}
            onResetReport={handleResetReport}
          />
          <DisplayComp aiRes={aiRes} status={status} />
        </div>
      </div>
    </main>
  );
};

export default App;
