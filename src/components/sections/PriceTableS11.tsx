import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SecondaryButton } from "../ui/SecondaryButton";

export function PriceTableS11() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  return (
    <section id="s11" aria-label="Ceník" className="bg-bg-section border-b border-border-subtle py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-reading text-center">
          <span className="t-label text-text-secondary">Ceník</span>
          <h2 className="mt-4 t-display-m md:t-display-d text-text-primary">Vyber si svou kategorii</h2>
          <p className="mt-4 t-body-large-m md:t-body-large-d text-text-secondary">
            Transparentní ceny pro každý sektor stadionu.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-12 w-full max-w-[1080px]"
        >
          <img
            src="/s11-pricing-banner.jpg"
            alt="Ceník permanentek Viktoria Plzeň"
            className="block h-auto w-full rounded-[16px]"
          />
          <p className="mt-4 t-body-small text-text-tertiary text-center">
            *V případě zájmu o fyzickou plastovou kartu je možné ji dokoupit za poplatek 150 Kč.
          </p>
        </motion.div>

        <div className="mx-auto mt-10 flex max-w-pricing flex-col gap-3 md:flex-row md:justify-center md:gap-4">
          <SecondaryButton href="https://bit.ly/4j7TSS2">Koupit STANDARD</SecondaryButton>
          <SecondaryButton href="https://bit.ly/4jWo0ke">Koupit EXTRA</SecondaryButton>
        </div>
      </div>
      <div id="sticky-exit-marker" />
    </section>
  );
}
