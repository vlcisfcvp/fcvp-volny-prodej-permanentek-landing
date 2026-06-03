import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Hand, VolumeX, Volume2, Maximize2, Minimize2, X, Play, Pause } from "lucide-react";
import cardFrontImage from "@/assets/permanentka-extra.png.asset.json";
import cardBackVideo from "@/assets/card-back.mp4.asset.json";

export function CardFlipS08() {
  const [flipped, setFlipped] = useState(false);
  const [hasFlipped, setHasFlipped] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [muted, setMuted] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [playing, setPlaying] = useState(true);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const cardRef = useRef<HTMLDivElement>(null);
  const backVideoRef = useRef<HTMLVideoElement>(null);
  const lightboxVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = backVideoRef.current;
    if (!v) return;
    if (flipped) {
      v.play().catch(() => {});
    } else {
      v.pause();
      try { v.currentTime = 0; } catch {}
    }
  }, [flipped]);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("s08-flipped-once")) {
      setHasFlipped(true);
    }
  }, []);

  const closeLightbox = () => {
    const back = backVideoRef.current;
    const lv = lightboxVideoRef.current;
    if (back && lv) {
      try { back.currentTime = lv.currentTime; } catch {}
      back.muted = lv.muted;
    }
    if (back) back.pause();
    setPlaying(false);
    setLightboxOpen(false);
  };

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen]);

  // Sync state into lightbox video when it opens
  useEffect(() => {
    const lv = lightboxVideoRef.current;
    const back = backVideoRef.current;
    if (lightboxOpen && lv) {
      if (back) {
        try { lv.currentTime = back.currentTime; } catch {}
      }
      lv.muted = muted;
      if (playing) {
        lv.play().catch(() => {});
      } else {
        lv.pause();
      }
    }
  }, [lightboxOpen]);

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

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = !muted;
    const back = backVideoRef.current;
    const lv = lightboxVideoRef.current;
    if (back) back.muted = next;
    if (lv) lv.muted = next;
    setMuted(next);
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const lv = lightboxVideoRef.current;
    const back = backVideoRef.current;
    const next = !playing;
    if (next) {
      lv?.play().catch(() => {});
      back?.play().catch(() => {});
    } else {
      lv?.pause();
      back?.pause();
    }
    setPlaying(next);
  };

  const toggleLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxOpen) {
      closeLightbox();
    } else {
      setPlaying(true);
      setLightboxOpen(true);
    }
  };

  const controlStyle: React.CSSProperties = {
    width: 32,
    height: 32,
    background: "rgba(14,17,41,0.6)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    borderRadius: "50%",
    color: "rgba(255,255,255,0.75)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    border: "none",
    transition: "opacity 220ms ease, color 220ms ease",
  };

  return (
    <section id="s08" aria-label="Karta permanentky" className="relative bg-bg-section py-24 md:py-32 v-edge-top">
      <div className="mx-auto max-w-content px-6 md:px-8 lg:px-12">
        <p className="text-center t-body-large-m md:t-body-large-d text-text-secondary">
          Otoč permanentku kliknutím na kartu a podívej se, jak to vypadalo loni.
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
              className="absolute inset-0 overflow-hidden border"
              style={{
                backfaceVisibility: "hidden",
                borderColor: "rgba(255,255,255,0.18)",
                boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
                borderRadius: 24,
              }}
            >
              <img
                src={cardFrontImage.url}
                alt="Permanentka Extra 2026/2027"
                className="absolute inset-0 h-full w-full"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(14,17,41,0.15) 0%, rgba(14,17,41,0.55) 100%)",
                }}
              />
            </div>
            {/* Back */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                boxShadow: "0 0 32px rgba(0,94,167,0.35)",
                border: "1px solid #005ea7",
                borderRadius: 24,
              }}
            >
              <video
                ref={backVideoRef}
                className="h-full w-full"
                style={{ objectFit: "cover", borderRadius: 24 }}
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={cardBackVideo.url} type="video/mp4" />
              </video>
              <div
                className="absolute flex items-center"
                style={{ bottom: 12, right: 12, gap: 8, zIndex: 2 }}
              >
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={muted ? "Zapnout zvuk" : "Vypnout zvuk"}
                  aria-pressed={!muted}
                  style={controlStyle}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#ffffff"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.75)"; }}
                >
                  {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
                <button
                  type="button"
                  onClick={toggleLightbox}
                  aria-label={lightboxOpen ? "Zavřít celou obrazovku" : "Zobrazit na celou obrazovku"}
                  style={controlStyle}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#ffffff"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.75)"; }}
                >
                  {lightboxOpen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                </button>
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

      {lightboxOpen && (
        <div
          onClick={closeLightbox}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(14,17,41,0.92)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            aria-label="Zavřít"
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              width: 40,
              height: 40,
              background: "rgba(255,255,255,0.1)",
              borderRadius: "50%",
              color: "#ffffff",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              border: "none",
            }}
          >
            <X size={20} />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ position: "relative", display: "inline-block" }}
          >
            <video
              ref={lightboxVideoRef}
              style={{
                maxWidth: "90vw",
                maxHeight: "85vh",
                borderRadius: 12,
                objectFit: "contain",
                display: "block",
              }}
              loop
              playsInline
            >
              <source src={cardBackVideo.url} type="video/mp4" />
            </video>
            <button
              type="button"
              onClick={togglePlay}
              aria-label={playing ? "Pozastavit" : "Přehrát"}
              style={{ ...controlStyle, position: "absolute", bottom: 12, right: 12, zIndex: 2 }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#ffffff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.75)"; }}
            >
              {playing ? <Pause size={16} /> : <Play size={16} />}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
