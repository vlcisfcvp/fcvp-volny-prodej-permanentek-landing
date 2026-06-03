import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check } from "lucide-react";
import { PrimaryButton } from "../ui/PrimaryButton";
import { SecondaryButton } from "../ui/SecondaryButton";

const standardFeatures = [
  "Tvoje místo na každém domácím utkání (Chance liga + MOL Cup bez starostí)",
  "Nižší cena než u jednotlivých vstupenek (úspora několik stovek korun)",
  "Přednostní nákup vstupenek na evropské poháry",
  "200 Kč sleva do Klubovky",
  "300 Kč sleva do fanshopu",
  "Celoroční výhody u partnerů klubu",
];
const extraFeatures = [
  "Tvoje místo na každém domácím utkání (Chance liga + MOL Cup bez starostí)",
  "Nižší cena než u jednotlivých vstupenek (úspora několik stovek korun)",
  "Přednostní nákup vstupenek na evropské poháry",
  "200 Kč sleva do Klubovky",
  "300 Kč sleva do fanshopu",
  "Celoroční výhody u partnerů klubu",
  "Vstupenky na nadstavbu Chance ligy",
];

export function PricingS09() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  return (
    <section id="s09" aria-label="Varianty permanentky" className="bg-bg-section py-24 md:py-32 v-edge-top" style={{ clipPath: "polygon(0 4%, 50% 0%, 100% 4%, 100% 100%, 0 100%)" }}>
      <div id="pricing" className="mx-auto max-w-content px-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-reading text-center">
          <span className="text-[13px] font-semibold tracking-widest uppercase text-text-accent-red">Vyber si variantu</span>
          <h2 className="mt-4 t-h1-m md:t-h1-d text-text-primary">
            STANDARD nebo EXTRA? Vyber si, co ti sedí nejlíp
          </h2>
          <p className="mt-4 t-body-large-m md:t-body-large-d text-text-secondary">
            Dvě varianty permanentek. Každá má něco navíc – a obě ti zaručí sezónu plnou fotbalu.
          </p>
        </div>

        <div ref={ref} className="mx-auto mt-12 grid max-w-pricing gap-4 md:grid-cols-2 md:gap-6 items-stretch">
          {/* EXTRA first (left/top) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0 }}
            className="relative order-1 md:order-2 flex flex-col rounded-xl p-6 md:p-8 transition-all duration-300 md:hover:-translate-y-1"
            style={{
              background: "linear-gradient(#252a52, #252a52) padding-box, linear-gradient(135deg, #e0001a 0%, #005ea7 100%) border-box",
              border: "1.5px solid transparent",
              boxShadow: "0 16px 48px rgba(224, 0, 26, 0.15)",
            }}
          >
            <motion.span
              animate={{ boxShadow: ["0 0 16px rgba(224,0,26,0.4)", "0 0 24px rgba(224,0,26,0.7)", "0 0 16px rgba(224,0,26,0.4)"] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-pill bg-cta-primary px-4 py-1 t-label text-white"
            >
              Doporučujeme
            </motion.span>
            <span className="t-label text-text-accent-red">Extra</span>
            <p className="mt-3 t-body text-text-secondary">
              Chceš jít ještě dál a fandit i v napínavé nadstavbě? EXTRA je pro tebe ta pravá.
            </p>
            <ul className="mt-6 space-y-3">
              {extraFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-2 t-body text-text-primary" style={{ fontWeight: i === extraFeatures.length - 1 ? 700 : 400 }}>
                  <Check size={16} className="mt-1 flex-none text-text-accent-blue" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <PrimaryButton href="https://bit.ly/4jWo0ke" className="w-full">Koupit EXTRA</PrimaryButton>
            </div>
          </motion.div>

          {/* STANDARD */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="order-2 md:order-1 flex flex-col rounded-xl border border-border-default bg-bg-elevated p-6 md:p-8 transition-all duration-300 md:hover:-translate-y-1 md:hover:border-border-strong"
          >
            <span className="t-label text-text-secondary">Standard</span>
            <p className="mt-3 t-body text-text-secondary">
              Chceš mít své místo jisté na každý zápas ligy a domácího poháru? Sáhni po variantě STANDARD.
            </p>
            <ul className="mt-6 space-y-3">
              {standardFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-2 t-body text-text-primary">
                  <Check size={16} className="mt-1 flex-none text-text-accent-blue" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <SecondaryButton href="https://bit.ly/4j7TSS2" className="w-full">Koupit STANDARD</SecondaryButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
