import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Key } from "lucide-react";
import { PrimaryButton } from "../ui/PrimaryButton";

const steps = [
  { n: "V01", title: "[STEP_1_TITLE]", desc: "[VIKTORIA_KEY_DESC]", icon: true },
  { n: "V02", title: "[STEP_2_TITLE]", desc: "[STEP_2_DESC]" },
  { n: "V03", title: "[STEP_3_TITLE]", desc: "[STEP_3_DESC]" },
];

function StepNumber({ label, inView }: { label: string; inView: boolean }) {
  return (
    <svg width="160" height="84" viewBox="0 0 160 84" className="md:w-[180px] md:h-[96px]" aria-hidden>
      <text
        x="0" y="68"
        fontFamily="Rajdhani" fontWeight={700} fontSize={72}
        fill="transparent" stroke="#ff2a3d" strokeWidth={1.5}
        style={{
          strokeDasharray: 600,
          strokeDashoffset: inView ? 0 : 600,
          transition: "stroke-dashoffset 800ms ease-out",
        }}
      >{label}</text>
    </svg>
  );
}

export function HowToBuyS10() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  return (
    <section id="s10" aria-label="Jak na to" className="bg-bg-section py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-reading text-center">
          <span className="t-label text-text-accent-blue">Jak na to</span>
          <h2 className="mt-4 t-h2-m md:t-h2-d text-text-primary">Tři kroky k permanentce</h2>
        </div>
        <div ref={ref} className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              <StepNumber label={s.n} inView={inView} />
              <div className="mt-4 flex items-center gap-2">
                <h3 className="t-h3-m md:t-h3-d text-text-primary">{s.title}</h3>
                {s.icon && <Key size={24} className="text-text-accent-blue" />}
              </div>
              <p className="mt-3 t-body text-text-secondary">{s.desc}</p>
              {i < steps.length - 1 && (
                <div aria-hidden className="hidden md:block absolute top-12 -right-3 h-px w-6 bg-border-default" />
              )}
            </motion.div>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-[320px] text-center">
          <PrimaryButton href="#pricing" className="w-full">Přejít na nákup</PrimaryButton>
          <a href="#" className="mt-3 inline-block t-body-small text-text-accent-blue hover:underline">Co je Viktoria Key?</a>
        </div>
      </div>
    </section>
  );
}
