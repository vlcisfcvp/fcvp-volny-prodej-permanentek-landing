import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ScrollIndicator } from "../layout/ScrollIndicator";
import { PrimaryButton } from "../ui/PrimaryButton";

export function HeroS01() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      id="s01"
      ref={ref}
      aria-label="Hero"
      className="relative h-[100svh] w-full overflow-hidden md:h-screen"
    >
      {/* background image placeholder */}
      <div
        className="absolute inset-0 bg-bg-section"
        style={{
          backgroundImage: "url(/placeholder-hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      {/* overlays */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(14,17,41,0) 0%, rgba(14,17,41,0.4) 50%, rgba(14,17,41,0.95) 100%)" }} aria-hidden />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(14,17,41,0.7) 0%, rgba(14,17,41,0) 40%)" }} aria-hidden />

      {/* logo top-left */}
      <div className="absolute left-6 top-6 md:left-12 md:top-12 t-label text-text-primary">
        FC VIKTORIA PLZEŇ
      </div>

      {/* decorative V outline, desktop only */}
      <svg
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 hidden md:block"
        style={{ height: "80vh" }}
        viewBox="0 0 400 400"
        fill="none"
      >
        <path d="M40 40 L200 360 L360 40" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
      </svg>

      <motion.div
        className="relative z-10 flex h-full max-w-[720px] flex-col justify-center px-6 md:px-12 lg:px-16"
        style={{ y, opacity }}
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.span variants={item} className="t-label text-text-accent-red">
          Permanentka 2026/2027
        </motion.span>
        <motion.h1 variants={item} className="mt-4 t-display-m md:t-display-d uppercase text-text-primary">
          [HERO_CLAIM]
        </motion.h1>
        <motion.p variants={item} className="mt-4 t-body-large-m md:t-body-large-d text-text-secondary">
          [HERO_SUBCLAIM]
        </motion.p>
        <motion.div variants={item} className="mt-8">
          <PrimaryButton href="#pricing">Koupit permanentku</PrimaryButton>
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
}
