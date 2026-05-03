export default function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6">
        
        {/* Loading Text */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-text font-inter font-medium">Loading confessions</p>
          <div className="flex gap-1">
            <span
              className="w-2 h-2 rounded-full bg-accent"
              style={{
                animation: "bounce 1.4s infinite",
                animationDelay: "0s",
              }}
            />
            <span
              className="w-2 h-2 rounded-full bg-accent"
              style={{
                animation: "bounce 1.4s infinite",
                animationDelay: "0.2s",
              }}
            />
            <span
              className="w-2 h-2 rounded-full bg-accent"
              style={{
                animation: "bounce 1.4s infinite",
                animationDelay: "0.4s",
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-8px);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
