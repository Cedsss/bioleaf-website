/** A stylised illustration of the BioLeaf result screen (not a real screenshot). */
export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[270px] sm:w-[300px]" aria-hidden="true">
      <div className="absolute -inset-8 -z-10 rounded-full bg-brand-300/30 blur-3xl" />
      <div className="rounded-[2.6rem] border-[10px] border-brand-900 bg-brand-900 shadow-2xl shadow-brand-900/30">
        <div className="overflow-hidden rounded-[2rem] bg-background">
          <div className="mx-auto mt-2 h-1.5 w-16 rounded-full bg-brand-900/15" />
          <div className="px-4 pb-6 pt-3">
            <div className="flex items-center justify-between text-xs font-semibold text-brand-800">
              <span>&lsaquo;</span>
              <span>Result</span>
              <span>&hearts;</span>
            </div>

            <div className="mt-3 flex h-36 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-300 to-brand-700">
              <svg viewBox="0 0 64 64" className="h-20 w-20 text-white/90" fill="currentColor">
                <path d="M32 4C18 14 10 28 14 42c3 10 12 16 18 18 6-2 15-8 18-18C54 28 46 14 32 4Zm0 8c8 8 12 18 9 28-2 7-7 11-9 12V12Z" />
              </svg>
            </div>

            <div className="mt-4 text-center">
              <p className="text-xl font-bold text-foreground">Lagundi</p>
              <p className="text-sm italic text-muted">Vitex negundo</p>
              <span className="mt-2 inline-flex items-center gap-1 rounded-full border border-brand-500/30 bg-brand-100 px-3 py-1 text-[10px] font-bold tracking-wide text-brand-700">
                DOH-APPROVED HERBAL MEDICINE
              </span>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between text-[10px] font-semibold tracking-wide text-muted">
                <span>CONFIDENCE SCORE</span>
                <span className="text-sm text-foreground">94%</span>
              </div>
              <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-brand-100">
                <div className="h-full w-[94%] rounded-full bg-brand-700" />
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-brand-800 py-2.5 text-center text-sm font-semibold text-white">
              View Plant Information
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
