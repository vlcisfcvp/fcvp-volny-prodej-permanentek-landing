import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const paragraphs = [
  "Vyhrávat se nedá bez boje. Na hřišti ani v hledišti.",
  "Každý domácí zápas je další bitva, do které jdeme naplno. A stejné je to i na tribunách. Permanentka není jen vstupenka na sezonu. Je to závazek. Být na svém místě. Podporovat Viktorii v každém zápase. Stát za svým týmem, když se vyhrává i když je potřeba bojovat až do poslední minuty.",
  "Právě domácí stadion je místem, kde se vítězství rodí společně. V atmosféře, která žene hráče dopředu. V emocích, které spojují celý stadion. V každém potlesku, chorálu i momentu, kdy tým potřebuje cítit, že za ním stojí celé město.",
  "Sezona 2026/2027 přinese nové výzvy, velké zápasy i další boje o úspěch. A každý domácí zápas bude znovu o nás všech.",
  "Buď u toho od první do poslední minuty. Bojuj za Viktorku v každém domácím zápase.",
  "Permanentkou to začíná.",
];

export function IntroS02() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <section id="s02" aria-label="Proč permanentka" className="bg-bg-section py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-content px-6 md:px-8 lg:px-12">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="t-body-small font-semibold tracking-widest uppercase text-text-accent-blue">Proč permanentka</span>
            <h2 className="mt-4 t-h1-m md:t-h1-d text-text-primary">Permanentkou to začíná.</h2>
            <div className="mt-6 space-y-5">
              {paragraphs.map((p, i) => (
                <p key={i} className="t-body-large-m md:t-body-large-d text-text-secondary">{p}</p>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden"
            style={{ aspectRatio: "4/5", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div
              className="absolute inset-0"
              style={{ backgroundImage: "url(/s02-fans.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
              aria-hidden
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(14,17,41,0) 0%, rgba(14,17,41,0.4) 50%, rgba(14,17,41,0.95) 100%)" }} aria-hidden />

          </motion.div>
        </div>
      </div>
    </section>
  );
}
