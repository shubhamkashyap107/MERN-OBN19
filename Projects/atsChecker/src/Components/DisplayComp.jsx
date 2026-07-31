const ensureList = (items) => (Array.isArray(items) ? items.filter(Boolean) : []);

const getScoreMeta = (score = 0) => {
  if (score >= 80) {
    return {
      label: "Strong match",
      color: "text-emerald-700",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      bar: "#059669",
    };
  }

  if (score >= 60) {
    return {
      label: "Moderate match",
      color: "text-amber-700",
      bg: "bg-amber-50",
      border: "border-amber-200",
      bar: "#d97706",
    };
  }

  return {
    label: "Needs work",
    color: "text-red-700",
    bg: "bg-red-50",
    border: "border-red-200",
    bar: "#dc2626",
  };
};

const EmptyState = ({ status }) => {
  const isLoading = status.type === "loading";
  const isError = status.type === "error";

  return (
    <section className="panel flex min-h-[640px] flex-col rounded-2xl p-5 sm:p-6">
      <div className="border-b border-slate-200 pb-5">
        <p className="text-sm font-semibold text-blue-600">ATS report</p>
        <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-950">
          Your match report appears here
        </h2>
      </div>

      <div className="grid flex-1 place-items-center py-12 text-center">
        <div className="max-w-md">
          <div
            className={`mx-auto grid h-16 w-16 place-items-center rounded-2xl ${
              isError ? "bg-red-50 text-red-700" : "bg-blue-50 text-blue-700"
            }`}
          >
            {isLoading ? (
              <span className="h-7 w-7 animate-spin rounded-full border-2 border-blue-200 border-t-blue-700" />
            ) : (
              <span className="text-xl font-black">{isError ? "!" : "0"}</span>
            )}
          </div>

          <h3 className="mt-5 text-xl font-bold text-slate-950">
            {isLoading
              ? "Analyzing resume"
              : isError
                ? "Analysis needs attention"
                : "No report generated yet"}
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            {status.message ||
              "Upload a resume and paste a job description to generate a structured ATS score, summary, strengths, gaps, and suggestions."}
          </p>
        </div>
      </div>
    </section>
  );
};

const InsightList = ({ title, items, tone, emptyText }) => {
  const tones = {
    good: {
      shell: "border-emerald-200 bg-emerald-50",
      badge: "bg-emerald-600 text-white",
      title: "text-emerald-900",
    },
    bad: {
      shell: "border-red-200 bg-red-50",
      badge: "bg-red-600 text-white",
      title: "text-red-900",
    },
    suggest: {
      shell: "border-blue-200 bg-blue-50",
      badge: "bg-blue-600 text-white",
      title: "text-blue-900",
    },
  };

  const style = tones[tone];
  const listItems = ensureList(items);

  return (
    <section className={`rounded-2xl border p-5 ${style.shell}`}>
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className={`text-base font-bold ${style.title}`}>{title}</h3>
        <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${style.badge}`}>
          {listItems.length}
        </span>
      </div>

      {listItems.length ? (
        <ul className="space-y-3">
          {listItems.map((point, index) => (
            <li
              key={`${tone}-${index}-${point.slice(0, 16)}`}
              className="rounded-xl border border-white/80 bg-white p-4 text-sm leading-6 text-slate-700 shadow-sm"
            >
              {point}
            </li>
          ))}
        </ul>
      ) : (
        <p className="rounded-xl border border-white/80 bg-white p-4 text-sm leading-6 text-slate-600 shadow-sm">
          {emptyText}
        </p>
      )}
    </section>
  );
};

const DisplayComp = ({ aiRes, status }) => {
  if (!aiRes) {
    return <EmptyState status={status} />;
  }

  const score = Number.isFinite(Number(aiRes.atsScore))
    ? Math.min(100, Math.max(0, Math.round(Number(aiRes.atsScore))))
    : 0;
  const scoreMeta = getScoreMeta(score);

  return (
    <section className="panel flex min-h-[640px] flex-col overflow-hidden rounded-2xl">
      <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-5 py-5 sm:px-6">
        <div>
          <p className="text-sm font-semibold text-blue-600">ATS report</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-950">
            Resume match analysis
          </h2>
        </div>
        <span
          className={`rounded-full border px-3 py-1.5 text-xs font-bold ${scoreMeta.bg} ${scoreMeta.border} ${scoreMeta.color}`}
        >
          {scoreMeta.label}
        </span>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6">
        <div className="space-y-5">
          <div className="grid gap-5 xl:grid-cols-[240px_minmax(0,1fr)]">
            <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mx-auto grid h-44 w-44 place-items-center rounded-full bg-slate-100">
                <div
                  className="grid h-40 w-40 place-items-center rounded-full"
                  style={{
                    background: `conic-gradient(${scoreMeta.bar} ${score * 3.6}deg, #e2e8f0 0deg)`,
                  }}
                >
                  <div className="grid h-32 w-32 place-items-center rounded-full bg-white text-center shadow-inner">
                    <div>
                      <p className={`text-5xl font-black ${scoreMeta.color}`}>
                        {score}
                      </p>
                      <p className="text-sm font-semibold text-slate-500">
                        /100
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-xl bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  Verdict
                </p>
                <p className={`mt-2 text-lg font-bold ${scoreMeta.color}`}>
                  {scoreMeta.label}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Use the notes and suggestions to tune keywords, evidence, and
                  role alignment.
                </p>
              </div>
            </aside>

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-bold text-slate-950">Summary</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                {aiRes.summary || "No summary was provided for this analysis."}
              </p>
            </section>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <InsightList
              title="Strengths"
              tone="good"
              items={aiRes.goodPoints}
              emptyText="No clear strengths were returned. Try a more detailed resume or job description."
            />
            <InsightList
              title="Weaknesses"
              tone="bad"
              items={aiRes.badPoints}
              emptyText="No weaknesses were returned. Review the summary and suggestions for next steps."
            />
          </div>

          <InsightList
            title="Suggestions"
            tone="suggest"
            items={aiRes.suggestions}
            emptyText="No suggestions were returned. Try running the analysis again."
          />
        </div>
      </div>
    </section>
  );
};

export default DisplayComp;
