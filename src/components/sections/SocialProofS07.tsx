import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";

function Stat({ value, label, trigger }: { value: string; label: string; trigger: boolean }) {
  const [n, setN] = useState(0);
  const numeric = parseInt(value.replace(/\D/g, ""), 10) || 0;
  useEffect(() => {
    if (!trigger || !numeric) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) { setN(numeric); return; }
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.round(numeric * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [trigger, numeric]);
  return (
    <div className="text-center">
      <div className="tabular t-numeric-m md:t-numeric-d text-text-accent-red">
        {numeric ? n.toLocaleString("cs-CZ") : value}
      </div>
      <div className="mt-2 t-label text-text-secondary">{label}</div>
    </div>
  );
}

const testimonials = [
  { text: "[TESTIMONIAL_1_TEXT]", name: "[TESTIMONIAL_1_NAME]", meta: "[TESTIMONIAL_1_META]" },
  { text: "[TESTIMONIAL_2_TEXT]", name: "[TESTIMONIAL_2_NAME]", meta: "[TESTIMONIAL_2_META]" },
  { text: "[TESTIMONIAL_3_TEXT]", name: "[TESTIMONIAL_3_NAME]", meta: "[TESTIMONIAL_3_META]" },
];

export function SocialProofS07() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <section id="s07" aria-label="Fanoušci" className="bg-bg-section-alt py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-reading text-center">
          <span className="t-label text-text-accent-red">Fanoušci Viktorie</span>
          <h2 className="mt-4 t-h2-m md:t-h2-d text-text-primary">Připoj se k těm, kdo jsou už doma</h2>
        </div>
        <div ref={ref} className="mt-12 grid gap-12 md:grid-cols-3 md:gap-8">
          <Stat value="[STAT_1_NUMBER]" label="[STAT_1_LABEL]" trigger={inView} />
          <Stat value="[STAT_2_NUMBER]" label="[STAT_2_LABEL]" trigger={inView} />
          <Stat value="[STAT_3_NUMBER]" label="[STAT_3_LABEL]" trigger={inView} />
        </div>
        <div className="mt-16 -mx-6 flex gap-4 overflow-x-auto px-6 no-scrollbar md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0" style={{ scrollSnapType: "x mandatory" }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex-none w-[85%] snap-center rounded-lg border border-border-default bg-bg-elevated p-6 md:w-auto"
            >
              <svg aria-hidden className="absolute left-4 top-4 opacity-15" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M8 8 L24 40 L40 8" stroke="#ff2a3d" strokeWidth="3" />
              </svg>
              <p className="relative t-body-large-m md:t-body-large-d italic text-text-primary">{t.text}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-bg-elevated-hover border border-border-default flex items-center justify-center t-label text-text-tertiary">
                  {t.name.charAt(1) || "?"}
                </div>
                <div>
                  <div className="t-body font-semibold text-text-primary">{t.name}</div>
                  <div className="t-body-small text-text-tertiary">{t.meta}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
