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
      className="relative w-full max-w-[100vw] overflow-hidden md:h-[100vh]"
    >
      {/* mobile: img element drives section height */}
      <img
        src="/hero-mobile.jpg"
        alt=""
        aria-hidden
        className="block h-auto w-full max-w-full md:hidden"
      />
      {/* desktop: background image */}
      <div
        className="absolute inset-0 hidden md:block bg-[url('/hero-desktop.jpg')] bg-cover bg-no-repeat"
        style={{ backgroundPosition: "center center" }}
        aria-hidden
      />

      <motion.div
        className="absolute inset-0 z-10"
        style={{ y, opacity }}
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={item}
          className="absolute bottom-12 left-6 md:left-auto md:right-12"
        >
          <PrimaryButton href="#pricing" className="whitespace-nowrap">Koupit permanentku</PrimaryButton>
        </motion.div>
      </motion.div>

      <div className="hidden md:block">
        <ScrollIndicator />
      </div>
    </section>
  );
}
