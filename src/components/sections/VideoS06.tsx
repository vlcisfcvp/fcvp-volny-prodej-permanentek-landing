import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import atmosphereVideo from "@/assets/atmosphere.mp4.asset.json";

export function VideoS06() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

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
          className="relative mx-auto mt-10 w-full overflow-hidden rounded-lg"
          style={{
            aspectRatio: "16/9",
            maxWidth: "1280px",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <video
            className="absolute inset-0 h-full w-full object-cover bg-bg-section"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={atmosphereVideo.url} type="video/mp4" />
          </video>
        </motion.div>
      </div>
    </section>
  );
}
