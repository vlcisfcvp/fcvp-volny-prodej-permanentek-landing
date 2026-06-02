import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Play, Volume2, VolumeX } from "lucide-react";
import atmosphereVideo from "@/assets/atmosphere.mp4.asset.json";

export function VideoS06() {
  const { ref: animRef, inView: animInView } = useInView({ threshold: 0.3, triggerOnce: true });
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [showFallback, setShowFallback] = useState(false);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !video.muted;
    video.muted = next;
    setMuted(next);
  };

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const p = video.play();
            if (p !== undefined) {
              p.then(() => setShowFallback(false)).catch(() => setShowFallback(true));
            }
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const handlePlayClick = () => {
    const video = videoRef.current;
    if (!video) return;
    video.play().then(() => setShowFallback(false)).catch(() => {});
  };

  return (
    <section id="s06" aria-label="Video" className="bg-bg-base py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-8 lg:px-12">
        <div className="text-center">
          <span className="t-label text-text-accent-red">Atmosféra doma</span>
          <h2 className="mt-4 t-h1-m md:t-h1-d text-text-primary">Doma to žije</h2>
        </div>
        <motion.div
          ref={(node) => {
            animRef(node);
            containerRef.current = node;
          }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={animInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative mx-auto mt-10 w-full overflow-hidden rounded-lg"
          style={{
            aspectRatio: "16/9",
            maxWidth: "1280px",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover bg-bg-section"
            muted
            loop
            playsInline
          >
            <source src={atmosphereVideo.url} type="video/mp4" />
          </video>
          {showFallback && (
            <button
              type="button"
              onClick={handlePlayClick}
              aria-label="Přehrát video"
              className="group absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-all duration-[240ms] hover:scale-[1.08]"
              style={{
                background: "rgba(28, 33, 67, 0.85)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 32px rgba(0, 94, 167, 0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <Play size={32} className="text-white" fill="white" />
            </button>
          )}
          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? "Zapnout zvuk" : "Vypnout zvuk"}
            aria-pressed={!muted}
            className="absolute flex items-center justify-center"
            style={{
              bottom: 16,
              right: 16,
              width: 40,
              height: 40,
              borderRadius: 9999,
              background: "rgba(28, 33, 67, 0.85)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.14)",
              cursor: "pointer",
              transition: "all 220ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(28, 33, 67, 1)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.24)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(28, 33, 67, 0.85)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.14)";
            }}
          >
            {muted ? <VolumeX size={18} color="#ffffff" /> : <Volume2 size={18} color="#ffffff" />}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
