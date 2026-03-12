export const NoteBox = ({ children }) => (
  <div
    className="not-prose my-4 rounded-xl border border-sky-200/70 bg-sky-50/80 px-4 py-3 text-sm shadow-sm dark:border-sky-400/25 dark:bg-sky-500/10 dark:text-white/90"
  >
    <div className="mb-2 flex items-center gap-2 text-sky-900 dark:text-sky-200">
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-100 text-[11px] font-bold dark:bg-sky-400/20">
        i
      </span>
      <p className="m-0 text-sm font-semibold">Note</p>
    </div>
    <div className="text-zinc-700 dark:text-zinc-200">{children}</div>
  </div>
);

export const InfoBox = ({ children }) => (
  <div
    className="not-prose my-4 rounded-xl border border-cyan-200/70 bg-cyan-50/80 px-4 py-3 text-sm shadow-sm dark:border-cyan-400/25 dark:bg-cyan-500/10 dark:text-white/90"
  >
    <div className="mb-2 flex items-center gap-2 text-cyan-900 dark:text-cyan-200">
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-100 text-[11px] font-bold dark:bg-cyan-400/20">
        i
      </span>
      <p className="m-0 text-sm font-semibold">Info</p>
    </div>
    <div className="text-zinc-700 dark:text-zinc-200">{children}</div>
  </div>
);

export const TipBox = ({ children }) => (
  <div
    className="not-prose my-4 rounded-xl border border-emerald-200/70 bg-emerald-50/80 px-4 py-3 text-sm shadow-sm dark:border-emerald-400/25 dark:bg-emerald-500/10 dark:text-white/90"
  >
    <div className="mb-2 flex items-center gap-2 text-emerald-900 dark:text-emerald-200">
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-[11px] font-bold dark:bg-emerald-400/20">
        +
      </span>
      <p className="m-0 text-sm font-semibold">Tip</p>
    </div>
    <div className="text-zinc-700 dark:text-zinc-200">{children}</div>
  </div>
);

export const WarningBox = ({ children }) => (
  <div
    className="not-prose my-4 rounded-xl border border-amber-200/70 bg-amber-50/80 px-4 py-3 text-sm shadow-sm dark:border-amber-400/25 dark:bg-amber-500/10 dark:text-white/90"
  >
    <div className="mb-2 flex items-center gap-2 text-amber-900 dark:text-amber-200">
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-[11px] font-bold dark:bg-amber-400/20">
        !
      </span>
      <p className="m-0 text-sm font-semibold">Warning</p>
    </div>
    <div className="text-zinc-700 dark:text-zinc-200">{children}</div>
  </div>
);
