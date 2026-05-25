import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function PartnersS04() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  return (
    <section id="s04" aria-label="Partneři" className="bg-bg-section-alt py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-reading text-center">
          <span className="t-label text-text-accent-blue">Partneři</span>
          <h2 className="mt-4 t-h2-m md:t-h2-d text-text-primary">Výhody mimo stadion</h2>
          <p className="mt-4 t-body-large-m md:t-body-large-d text-text-secondary">Permanentka ti otevírá dveře i k partnerům Viktorie.</p>
        </div>
        <div ref={ref} className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group flex flex-col items-center rounded-lg border border-border-subtle bg-bg-elevated p-5 transition-all duration-300 md:hover:bg-bg-elevated-hover md:hover:border-border-blue md:hover:[box-shadow:var(--shadow-glow-blue)]"
            >
              <div
                className="flex h-14 w-full items-center justify-center text-text-tertiary"
                style={{ filter: "brightness(0) invert(1) opacity(0.85)" }}
              >
                <span className="t-label">[PARTNER_{i + 1}_LOGO]</span>
              </div>
              <div className="my-3 h-px w-8 bg-border-default" />
              <p className="t-body-small text-text-secondary text-center">[PARTNER_{i + 1}_BENEFIT]</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
