import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import { ScrollIndicator } from "../layout/ScrollIndicator";
import { PrimaryButton } from "../ui/PrimaryButton";

export function HeroS01() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
  const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section
      id="s01"
      ref={ref}
      aria-label="Hero"
      className="relative h-[100svh] w-full overflow-hidden md:h-screen"
    >
      {/* background image - responsive */}
      <div
        className="absolute inset-0 bg-[url('/hero-mobile.jpg')] md:bg-[url('/hero-desktop.jpg')] bg-cover bg-center"
        aria-hidden
      />
      {/* logo top-left */}

      <motion.div
        className="relative z-10 h-full w-full"
        style={{ y, opacity }}
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={item}
          className="absolute left-6 md:left-12 lg:left-16"
          style={{ top: "85%" }}
        >
          <PrimaryButton href="#pricing">Koupit permanentku</PrimaryButton>
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
}
