export default function ConfessionCard({ text, date }) {
  return (
    <article className="h-full rounded-2xl border border-text/12 bg-surface/80 backdrop-blur-sm p-6 md:p-7 shadow-[0_10px_25px_-22px_rgba(15,23,42,0.55)] transition-all duration-300 hover:border-text/20 hover:bg-surface">
      <p className="text-text text-base md:text-lg leading-relaxed break-words font-inter">
        {text}
      </p>

      <div className="mt-5 pt-4 border-t border-text/10 flex items-center justify-between">
        <span className="text-[11px] uppercase tracking-[0.12em] text-muted font-inter">Anonymous</span>
        <p className="text-xs text-muted font-inter">{date}</p>
      </div>
    </article>
  );
}