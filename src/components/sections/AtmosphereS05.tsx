import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function AtmosphereS05() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  return (
    <section
      id="s05"
      ref={ref}
      aria-label="Atmosféra"
      className="relative w-full overflow-hidden v-edge-top"
      style={{ height: "60vh" }}
    >
      <motion.div
        style={{
          y,
          backgroundImage: "url(/placeholder-atmosphere.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-[-10%] bg-bg-section"
        aria-hidden
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(14,17,41,0) 0%, rgba(14,17,41,0.4) 50%, rgba(14,17,41,0.95) 100%)" }} aria-hidden />
      <style>{`@media (min-width: 768px) { #s05 { height: 80vh !important; } }`}</style>
    </section>
  );
}
