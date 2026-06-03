export function FilmGrain() {
  return (
    <div
      aria-hidden
      className="film-grain pointer-events-none fixed inset-0 z-[100]"
      style={{
        opacity: 0.04,
        mixBlendMode: "overlay",
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        backgroundSize: "200px 200px",
      }}
    />
  );
}
