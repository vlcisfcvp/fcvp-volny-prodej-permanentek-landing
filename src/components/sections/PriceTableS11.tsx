import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SecondaryButton } from "../ui/SecondaryButton";

const rows = [
  { sector: "[SEKTOR_A]", standard: "[CENA_A_STD]", extra: "[CENA_A_EXT]", savings: "[USP_A]", highlight: true },
  { sector: "[SEKTOR_B]", standard: "[CENA_B_STD]", extra: "[CENA_B_EXT]", savings: "[USP_B]" },
  { sector: "[SEKTOR_C]", standard: "[CENA_C_STD]", extra: "[CENA_C_EXT]", savings: "[USP_C]" },
  { sector: "[SEKTOR_D]", standard: "[CENA_D_STD]", extra: "[CENA_D_EXT]", savings: "[USP_D]" },
];

export function PriceTableS11() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  return (
    <section id="s11" aria-label="Ceník" className="bg-bg-section border-b border-border-subtle py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-reading text-center">
          <span className="t-label text-text-secondary">Ceník</span>
          <h2 className="mt-4 t-h2-m md:t-h2-d text-text-primary">Vyber si svůj sektor</h2>
          <p className="mt-4 t-body-large-m md:t-body-large-d text-text-secondary">
            Transparentní ceny pro každý sektor stadionu.
          </p>
        </div>

        {/* Desktop table */}
        <div ref={ref} className="mx-auto mt-12 hidden max-w-table md:block">
          <div className="grid grid-cols-4 rounded-t-md bg-bg-elevated p-4 t-label text-text-secondary">
            <div>Sektor</div>
            <div>Standard</div>
            <div>Extra</div>
            <div>Úspora vs. jednotlivé vstupenky</div>
          </div>
          {rows.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className={`grid grid-cols-4 p-4 ${i % 2 === 0 ? "bg-bg-section" : "bg-white/[0.02]"} ${r.highlight ? "border-l-[3px] border-cta-primary" : ""}`}
            >
              <div className="t-body text-text-primary">{r.sector}</div>
              <div className="tabular t-body-large-d font-semibold text-text-primary">{r.standard} Kč</div>
              <div className="tabular t-body-large-d font-semibold text-text-primary">{r.extra} Kč</div>
              <div>
                <span className="inline-block rounded-sm px-2 py-1 t-label" style={{ background: "rgba(224,0,26,0.12)", color: "#ff2a3d" }}>
                  ŠETŘÍŠ {r.savings}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile cards */}
        <div className="mx-auto mt-12 flex max-w-table flex-col gap-4 md:hidden">
          {rows.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="relative rounded-lg bg-bg-elevated p-5"
            >
              <span className="absolute right-3 top-3 rounded-pill bg-cta-primary px-3 py-1 t-label text-white">
                ŠETŘÍŠ {r.savings}
              </span>
              <h3 className="t-h3-m text-text-primary">{r.sector}</h3>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <div className="t-label text-text-tertiary">Standard</div>
                  <div className="tabular text-text-primary" style={{ fontSize: 32, fontWeight: 700, lineHeight: 1 }}>
                    {r.standard} Kč
                  </div>
                </div>
                <div>
                  <div className="t-label text-text-tertiary">Extra</div>
                  <div className="tabular text-text-primary" style={{ fontSize: 32, fontWeight: 700, lineHeight: 1 }}>
                    {r.extra} Kč
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-pricing flex-col gap-3 md:flex-row md:justify-center md:gap-4">
          <SecondaryButton href="https://bit.ly/4j7TSS2">Koupit STANDARD</SecondaryButton>
          <SecondaryButton href="https://bit.ly/4jWo0ke">Koupit EXTRA</SecondaryButton>
        </div>
      </div>
      <div id="sticky-exit-marker" />
    </section>
  );
}
