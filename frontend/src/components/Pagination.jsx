export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-3 md:gap-4">
      <button
        className="px-4 py-2 rounded-lg border border-text/20 bg-surface/70 text-text font-inter text-sm transition-all duration-300 hover:border-text/35 hover:bg-surface disabled:opacity-40 disabled:cursor-not-allowed"
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      <div className="min-w-28 text-center px-3 py-2 rounded-lg border border-text/12 bg-surface/50 text-xs md:text-sm font-inter text-muted">
        Page {currentPage} of {totalPages}
      </div>

      <button
        className="px-4 py-2 rounded-lg border border-text/20 bg-surface/70 text-text font-inter text-sm transition-all duration-300 hover:border-text/35 hover:bg-surface disabled:opacity-40 disabled:cursor-not-allowed"
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}