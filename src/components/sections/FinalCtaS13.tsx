import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PrimaryButton } from "../ui/PrimaryButton";
import { SecondaryButton } from "../ui/SecondaryButton";

export function FinalCtaS13() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <section
      id="s13"
      aria-label="Poslední krok"
      className="relative flex items-center justify-center bg-bg-base v-edge-top overflow-hidden"
      style={{ paddingTop: "96px", paddingBottom: "96px" }}
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(224,0,26,0.08) 0%, transparent 60%)" }}
      />
      <div ref={ref} className="relative z-10 mx-auto max-w-narrow px-6 py-24 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="block t-label text-text-accent-red"
        >Poslední krok</motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="mt-4 t-display-m md:t-display-d uppercase text-text-primary"
        >BUĎ READY NA SEZONU</motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.36 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 md:flex-row md:gap-4"
        >
          <SecondaryButton href="https://bit.ly/43LBokQ">Koupit STANDARD</SecondaryButton>
          <motion.div animate={{ boxShadow: ["0 8px 24px rgba(224,0,26,0.35)", "0 8px 32px rgba(224,0,26,0.6)", "0 8px 24px rgba(224,0,26,0.35)"] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="rounded-md">
            <PrimaryButton href="https://bit.ly/4jWo0ke">Koupit EXTRA</PrimaryButton>
          </motion.div>

        </motion.div>
        <p className="mt-6 t-body-small text-text-tertiary">
          &#8203;
        </p>
      </div>
    </section>
  );
}
