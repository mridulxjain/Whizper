import { useState } from "react";
import ConfessionCard from "../components/ConfessionCard";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import { useEffect } from "react";

export default function Confessions() {

  const [confessions, setConfessions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConfessions = async () => {
      try {
        const res = await fetch("https://whizper.onrender.com/api/confessions");
        const data = await res.json();
        setConfessions(data);
      } catch (error) {
        console.error("Error fetching confessions:", error);

      } finally {
        setLoading(false);
      }
    };

    fetchConfessions();
  },[]);


  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(confessions.length / itemsPerPage);
  const currentConfessions = confessions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) return <Loader />;

  return (
    <section className="relative min-h-[calc(100svh-4rem)] md:min-h-[calc(100vh-4rem)] bg-background text-text px-6 py-10 md:py-12 overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(var(--border-rgb), 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(var(--border-rgb), 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <header className="text-center mb-10 animate-fade-in">

          <h1 className="font-megrim text-4xl md:text-6xl leading-[0.95] mb-3">Confessions</h1>
          <p className="font-inter text-muted text-sm md:text-base max-w-2xl mx-auto">
            Read honest anonymous thoughts from the community.
          </p>
          <p className="font-inter text-xs text-text/60 mt-3">{confessions.length} entries available</p>
        </header>

        {currentConfessions.length === 0 ? (
          <div className="rounded-2xl border border-text/15 bg-surface/70 px-8 py-14 text-center animate-fade-soft">
            <h2 className="font-inter text-xl text-text mb-2">No confessions yet</h2>
            <p className="font-inter text-sm text-muted">Be the first one to share something anonymous.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-7 animate-fade-soft">
            {currentConfessions.map((c) => (
              <ConfessionCard key={c.id} text={c.text} date={c.date} />
            ))}
          </div>
        )}

        <div className="mt-9">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
}