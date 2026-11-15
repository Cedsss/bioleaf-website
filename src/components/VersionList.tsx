import { releases, type Release } from "@/data/releases";

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-PH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function DownloadButton({ release, large = false }: { release: Release; large?: boolean }) {
  const size = large ? "px-8 py-4 text-base" : "px-5 py-2.5 text-sm";
  if (!release.file) {
    return (
      <span
        className={`inline-flex cursor-not-allowed items-center rounded-full bg-brand-100 font-semibold text-muted ${size}`}
        title="This file is no longer hosted"
      >
        No longer available
      </span>
    );
  }
  return (
    <a
      href={release.file}
      download
      className={`inline-flex items-center gap-2 rounded-full bg-brand-800 font-semibold text-white shadow-lg shadow-brand-800/20 transition hover:bg-brand-700 ${size}`}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5M4 20h16" />
      </svg>
      Download v{release.version}
      {release.sizeMB ? <span className="font-normal opacity-80">({release.sizeMB} MB)</span> : null}
    </a>
  );
}

export function VersionList() {
  return (
    <ol className="space-y-4">
      {releases.map((r, i) => (
        <li
          key={r.version}
          className={`rounded-2xl border p-5 sm:p-6 ${
            i === 0 ? "border-brand-500/40 bg-white shadow-sm" : "border-line bg-white/60"
          }`}
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-bold text-brand-900">Version {r.version}</h3>
                {i === 0 && (
                  <span className="rounded-full bg-brand-700 px-2.5 py-0.5 text-xs font-bold text-white">LATEST</span>
                )}
              </div>
              <p className="text-sm text-muted">
                {formatDate(r.date)} &middot; {r.title}
              </p>
            </div>
            <DownloadButton release={r} />
          </div>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
            {r.notes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
