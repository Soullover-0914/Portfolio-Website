export function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div
        className="absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px] animate-glow-pulse"
      />
      <div
        className="absolute bottom-[-15%] right-[-10%] h-[500px] w-[700px] rounded-full bg-accent/5 blur-[160px]"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, transparent 40%, rgba(2, 6, 23, 0.6) 100%)",
        }}
      />
    </div>
  );
}
