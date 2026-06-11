import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Musí i senioři mít e-mailovou adresu?",
    a: "Ano, protože bez e-mailové adresy není možné vytvořit si Viktoria Key, který je nezbytné ke koupení permanentky. Pomoci vám mohou mladší generace.",
  },
  {
    q: "Musí mít e-mailovou adresu i děti?",
    a: "Ano, protože bez e-mailové adresy není možné vytvořit si Viktoria Key, který je nezbytné ke koupení permanentky. Po vytvoření Viktoria Key si můžete permanentky svých dětí nasdílet do svého Viktoria Key a permanentky mít pod kontrolou.",
  },
  {
    q: "Mohou se kontaktní údaje opakovat?",
    a: "Ano, jediným unikátním údajem bude e-mail. Ostatní informace se mohou objevovat vícekrát.",
  },
  {
    q: "Půjde permanentka nahrát do stadionové aplikace FC Viktoria Plzeň?",
    a: "Ne, permanentka nepůjde nahrát do stadionové aplikace. Budete ji ovšem mít ve svém Viktoria Key.",
  },
  {
    q: "Musí i důchodci nad 65 let platit fyzickou kartičku?",
    a: "Ne, důchodci nad 65 let nebudou muset platit 150 Kč za fyzickou permanentku. Musí si ji ale vyzvednout ve Viktoria shopu.",
  },
];

export function FaqS12() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="s12" aria-label="Časté dotazy" className="bg-bg-section-alt py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-8 lg:px-12">
        <div className="text-center">
          <span className="text-[13px] font-semibold tracking-widest uppercase text-text-accent-blue">Časté dotazy</span>
          <h2 className="mt-4 t-h1-m md:t-h1-d text-text-primary">Otázky a odpovědi</h2>
        </div>
        <div className="mt-10 mx-auto" style={{ maxWidth: 880 }}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`border-b py-4 transition-colors ${isOpen ? "border-border-blue" : "border-border-default"}`}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full items-center justify-between text-left"
                >
                  <span className={`t-body-large-m md:t-body-large-d font-semibold transition-colors ${isOpen ? "text-text-accent-blue" : "text-text-primary group-hover:text-text-accent-blue"}`}>
                    {f.q}
                  </span>
                  <Plus
                    size={20}
                    className="flex-none text-text-accent-blue transition-transform duration-240"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0)" }}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 t-body text-text-secondary max-w-reading">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
