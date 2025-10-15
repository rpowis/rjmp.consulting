export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl dark:bg-blue-900/20" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-indigo-100/50 blur-3xl dark:bg-indigo-900/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center space-y-8 px-4 text-center">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-6xl md:text-7xl">
            RJMP Consulting
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 sm:text-2xl">
            Strategic Solutions. Expert Guidance.
          </p>
        </div>

        <div className="mt-12 inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300">
          <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-green-500" />
          Site launching soon
        </div>

        <div className="mt-8 text-sm text-slate-500 dark:text-slate-500">
          Get in touch:{" "}
          <a
            href="mailto:contact@rjmp.consulting"
            className="font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            contact@rjmp.consulting
          </a>
        </div>
      </div>
    </main>
  );
}
