import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Play } from "lucide-react";

export function VideoS06() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (!inView && videoRef.current) videoRef.current.pause();
  }, [inView]);

  const onPlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); } else { v.pause(); setPlaying(false); }
  };

  return (
    <section id="s06" aria-label="Video" className="bg-bg-base py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-8 lg:px-12">
        <div className="text-center">
          <span className="t-label text-text-accent-red">Atmosféra doma</span>
          <h2 className="mt-4 t-h2-m md:t-h2-d text-text-primary">Doma to žije</h2>
        </div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative mx-auto mt-10 overflow-hidden rounded-lg border border-border-subtle"
          style={{ aspectRatio: "16/9" }}
        >
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full bg-bg-section"
            poster="/video-poster.jpg"
            controls={playing}
            playsInline
            muted
          >
            <source src="[VIDEO_URL]" type="video/mp4" />
          </video>
          {!playing && (
            <button
              onClick={onPlay}
              aria-label="Přehrát video"
              className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full backdrop-blur-md transition-transform hover:scale-110 md:h-20 md:w-20"
              style={{ background: "rgba(37,42,82,0.8)", boxShadow: "0 0 32px rgba(0,94,167,0.35)" }}
            >
              <Play className="text-text-primary ml-1" size={28} />
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
