export default function Home() {

  return (
    <div className="min-h-[calc(100svh-4rem)] md:min-h-[calc(100vh-4rem)] box-border bg-background text-text flex flex-col justify-center px-6 py-8 md:py-10 relative overflow-hidden">
      {/* Premium Gradient Grid Background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(var(--border-rgb), 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(var(--border-rgb), 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Subtle Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background opacity-40 pointer-events-none" />
      
      <div className="text-center max-w-3xl mx-auto relative z-10 animate-fade-in">
        <div className="inline-flex items-center gap-2 rounded-full border border-text/15 bg-surface/70 px-4 py-1.5 mb-8 animate-fade-soft" style={{ animationDelay: "0.12s" }}>
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="text-[11px] tracking-[0.14em] uppercase font-inter text-muted">Anonymous Wall</span>
        </div>

        <div className="mb-10">
          <h1 className="text-5xl md:text-7xl font-megrim mb-4 leading-[0.95] animate-fade-soft" style={{ animationDelay: "0.18s" }}>
            <span className="bg-gradient-to-r from-accent via-accent to-secondary bg-clip-text text-transparent">
              Whizper
            </span>
          </h1>
          <p className="font-inter text-xl md:text-3xl font-light text-text/90 animate-fade-soft" style={{ animationDelay: "0.24s" }}>
            Speak freely. Stay unseen.
          </p>
        </div>

        <p className="font-inter text-base md:text-lg text-muted leading-relaxed mb-6 max-w-2xl mx-auto animate-fade-soft" style={{ animationDelay: "0.32s" }}>
          A quiet, safe space to post confessions without names, profiles, or pressure.
        </p>

        <p className="font-inter text-sm text-text/65 mb-12 animate-fade-soft" style={{ animationDelay: "0.38s" }}>
          No signup. No tracking. Just honest thoughts.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10 animate-fade-soft" style={{ animationDelay: "0.46s" }}>
          <a
            href="/new"
            className="group relative px-8 py-3.5 rounded-xl font-inter font-medium text-background overflow-hidden transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base bg-accent border border-accent/70 hover:bg-accent/90 hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35 active:translate-y-px active:shadow-none shadow-[0_10px_26px_-20px_rgba(244,63,94,0.7)]"
          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/5" />
            <span className="relative flex items-center gap-2">
              Write Anonymously
              <svg className="w-4 h-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>

          <a
            href="/confessions"
            className="group px-8 py-3.5 rounded-xl font-inter font-medium text-text border border-text/20 bg-surface/60 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base hover:border-text/35 hover:bg-surface/85 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/25 active:translate-y-px active:shadow-none shadow-[0_10px_26px_-22px_rgba(15,23,42,0.35)]"
          >
            Browse Confessions
            <svg className="w-4 h-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        <div className="flex justify-center items-center gap-2 text-xs text-muted/90 animate-fade-soft" style={{ animationDelay: "0.54s" }}>
          <span>100% Anonymous</span>
          <span>•</span>
          <span>Safe & Secure</span>
          <span>•</span>
          <span>No Account Needed</span>
        </div>
      </div>
    </div>
  );
}