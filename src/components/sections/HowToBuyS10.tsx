import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Key, ArrowRight } from "lucide-react";
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

function ViktoriaKeyCard({ inView }: { inView: boolean }) {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="group rounded-[16px] p-8 md:p-12 transition-all duration-[280ms] hover:bg-bg-elevated-hover"
      style={{
        background: "#252a52",
        border: "1px solid rgba(255,255,255,0.14)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#005ea7")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)")}
    >
      <span
        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 t-label"
        style={{
          background: "rgba(0,94,167,0.15)",
          border: "1px solid rgba(58,143,214,0.3)",
          color: "#3a8fd6",
        }}
      >
        <Key size={14} style={{ color: "#3a8fd6" }} />
        Viktoria Key
      </span>
      <h3 className="mt-4 t-h3-m md:t-h3-d text-text-primary">Nákup přes Viktoria Key</h3>
      <div className="mt-4 flex flex-col gap-4">
        <p className="t-body text-text-secondary">
          Nově už nebude potřeba vyplňovat obsáhlé papírové formuláře jako v minulých sezonách.
          K nákupu permanentky vám postačí registrace do systému Viktoria Key, kterou zvládnete
          během minuty pouze za pomoci své e-mailové adresy.
        </p>
        <p className="t-body text-text-secondary">
          Viktoria Key se stane vaším osobním účtem a dlouhodobým klíčem do viktoriánského světa.
          Kromě nákupu permanentní vstupenky vám v budoucnu otevře přístup také k dalším novým
          digitálním platformám a službám, které klub postupně představí.
        </p>
      </div>
      <hr className="my-6 border-0" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />
      <a
        href="https://bit.ly/4vWPVqV"
        target="_blank"
        rel="noopener"
        className="inline-flex items-center t-body font-semibold underline underline-offset-[3px] transition-colors"
        style={{ color: "#3a8fd6" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#5fb0e6")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#3a8fd6")}
      >
        Více informací k Viktoria Key najdete ZDE
        <ArrowRight size={16} style={{ marginLeft: 6 }} />
      </a>
      <div
        className="relative mt-6 hidden md:block overflow-hidden"
        style={{
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.14)",
          aspectRatio: "16 / 7",
          maxHeight: 220,
        }}
      >
        <img
          src="/viktoria-key-banner.jpg"
          alt=""
          className="w-full h-full object-cover block"
        />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(14,17,41,0) 0%, rgba(14,17,41,0.4) 50%, rgba(14,17,41,0.95) 100%)",
          }}
        />
      </div>
    </motion.aside>
  );
}

export function HowToBuyS10() {
  const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: true });
  return (
    <section id="s10" aria-label="Jak na to" className="bg-bg-section py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-8 lg:px-12">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">
          <div className="md:col-span-7">
            <div>
              <span className="t-label text-text-accent-blue">Jak na to</span>
              <h2 className="mt-4 t-h2-m md:t-h2-d text-text-primary">Tři kroky k permanentce</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
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
                  {s.n === "V01" && (
                    <p className="mt-2 t-body-small text-text-tertiary md:hidden">
                      Podrobnosti níže ↓
                    </p>
                  )}
                  {i < steps.length - 1 && (
                    <div aria-hidden className="hidden md:block absolute top-12 -right-3 h-px w-6 bg-border-default" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="md:col-span-5">
            <ViktoriaKeyCard inView={inView} />
            <div
              className="relative mt-6 md:hidden overflow-hidden"
              style={{
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.14)",
                aspectRatio: "1 / 1",
              }}
            >
              <img
                src="/viktoria-key-banner.jpg"
                alt=""
                className="w-full h-full object-cover block"
              />
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(14,17,41,0) 0%, rgba(14,17,41,0.4) 50%, rgba(14,17,41,0.95) 100%)",
                }}
              />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-[320px] text-center">
          <PrimaryButton href="#pricing" className="w-full">Přejít na nákup</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
