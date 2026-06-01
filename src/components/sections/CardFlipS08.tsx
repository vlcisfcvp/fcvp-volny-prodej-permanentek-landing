import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Cpu, Check, Hand } from "lucide-react";
import { PrimaryButton } from "../ui/PrimaryButton";
import cardFrontImage from "@/assets/permanentka-extra.png.asset.json";

const benefits = [
  "Své místo na celou sezonu",
  "Sleva oproti jednotlivým vstupenkám",
  "Bonusy v Klubovce a fanshopu",
  "Výhody u partnerů Viktorie",
];

export function CardFlipS08() {
  const [flipped, setFlipped] = useState(false);
  const [hasFlipped, setHasFlipped] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("s08-flipped-once")) {
      setHasFlipped(true);
    }
  }, []);

  const onFlip = () => {
    setFlipped((f) => !f);
    if (!hasFlipped) {
      setHasFlipped(true);
      try { sessionStorage.setItem("s08-flipped-once", "1"); } catch {}
    }
  };

  const onMove = (e: React.MouseEvent) => {
    if (flipped) return;
    const r = cardRef.current?.getBoundingClientRect();
    if (!r) return;
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: -py * 6, y: px * 6 });
  };
  const onLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <section id="s08" aria-label="Karta permanentky" className="relative bg-bg-section py-24 md:py-32 v-edge-top">
      <div className="mx-auto max-w-content px-6 md:px-8 lg:px-12">
        <p className="text-center t-body-large-m md:t-body-large-d text-text-secondary">
          Otoč permanentku a podívej se, jak to vypadalo loni.
        </p>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-10 max-w-[480px]"
          style={{ perspective: "1000px" }}
        >
          <div
            ref={cardRef}
            onClick={onFlip}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className="relative w-full cursor-pointer"
            style={{
              aspectRatio: "1.6/1",
              transformStyle: "preserve-3d",
              transition: "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",
              transform: `rotateY(${flipped ? 180 : 0}deg) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}
          >
            {/* Front */}
            <div
              className="absolute inset-0 overflow-hidden rounded-xl border p-6"
              style={{
                backfaceVisibility: "hidden",
                background: "linear-gradient(135deg, #1c2143 0%, #005ea7 100%)",
                borderColor: "rgba(255,255,255,0.18)",
                boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
              }}
            >
              <div className="flex items-start justify-between">
                <span className="t-label text-text-primary">FCVP</span>
                <Cpu size={24} className="text-text-secondary opacity-60" />
              </div>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
                style={{ fontFamily: "Rajdhani", fontWeight: 700, fontSize: 200, color: "#fff", opacity: 0.08, lineHeight: 1 }}
              >V</div>
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <span className="t-label text-text-primary">[CARD_SECTOR_NAME]</span>
                <span className="t-label text-text-accent-red">2026/2027</span>
              </div>
            </div>
            {/* Back */}
            <div
              className="absolute inset-0 rounded-xl border border-border-blue bg-bg-elevated p-6"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                boxShadow: "0 0 32px rgba(0,94,167,0.35)",
              }}
            >
              <span className="t-label text-text-accent-blue">Tvoje výhody</span>
              <ul className="mt-3 space-y-2">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 t-body-small text-text-primary">
                    <Check size={16} className="mt-0.5 flex-none text-text-accent-red" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <PrimaryButton href="#pricing" onClick={(e) => e.stopPropagation()} style={{ padding: "10px 20px", minHeight: 40, fontSize: 14 }}>
                  Vybrat variantu
                </PrimaryButton>
              </div>
            </div>
          </div>
        </motion.div>

        {!hasFlipped && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-6 flex items-center justify-center gap-2 text-text-accent-blue"
          >
            <span className="t-body-small">Klepni a otoč kartu</span>
            <motion.span animate={{ y: [0, 4, 0], opacity: [0.6, 1, 0.6] }} transition={{ duration: 1.4, repeat: Infinity }}>
              <Hand size={20} />
            </motion.span>
          </motion.div>
        )}
      </div>
    </section>
  );
}
