import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Mail } from "lucide-react";

const faqs = Array.from({ length: 6 }).map((_, i) => ({
  q: `[FAQ_${i + 1}_QUESTION]`,
  a: `[FAQ_${i + 1}_ANSWER]`,
}));

export function FaqS12() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="s12" aria-label="Časté dotazy" className="bg-bg-section-alt py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-8 lg:px-12">
        <div className="text-left">
          <span className="t-label text-text-accent-blue">Časté dotazy</span>
          <h2 className="mt-4 t-display-m md:t-display-d text-text-primary">Otázky a odpovědi</h2>
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_320px] md:gap-12">
          <div className="max-w-narrow">
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
          <aside className="h-fit rounded-lg border border-border-default bg-bg-elevated p-6">
            <Mail size={24} className="text-text-accent-blue" />
            <h3 className="mt-3 t-h3-m text-text-primary">Nenašli jste odpověď?</h3>
            <p className="mt-2 t-body text-text-secondary">Napište nám a obratem se ozveme.</p>
            <a href="mailto:permanentky@fcviktoria.cz" className="mt-4 inline-block t-body font-semibold text-text-accent-blue hover:underline">
              permanentky@fcviktoria.cz
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
