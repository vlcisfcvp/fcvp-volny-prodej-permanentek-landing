import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, TrendingDown, Ticket, Beer, ShoppingBag, Gift, type LucideIcon } from "lucide-react";

const items: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: MapPin, title: "Tvoje místo na každém domácím utkání", desc: "Chance liga a MOL Cup bez starostí." },
  { icon: TrendingDown, title: "Nižší cena než u jednotlivých vstupenek", desc: "Úspora několik stovek korun za sezonu." },
  { icon: Ticket, title: "Přednostní nákup vstupenek na evropské poháry", desc: "Buď první v řadě, když Viktoria postoupí." },
  { icon: Beer, title: "200 Kč sleva do Klubovky", desc: "Tvoje místo pro předzápasovou náladu." },
  { icon: ShoppingBag, title: "300 Kč sleva do fanshopu", desc: "Dresy, šály a oficiální merchandise." },
  { icon: Gift, title: "Celoroční výhody u partnerů klubu", desc: "Slevy a benefity mimo stadion. Viz sekce Partneři." },
];

export function BenefitsS03() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  return (
    <section id="s03" aria-label="Výhody" className="bg-bg-section py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-reading text-center">
          <span className="t-label text-text-accent-red">Výhody permanentky</span>
          <h2 className="mt-4 t-h2-m md:t-h2-d text-text-primary">Víc než jen místo na stadionu</h2>
          <p className="mt-4 t-body-large-m md:t-body-large-d text-text-secondary text-center">Permanentka znamená být u každého domácího zápasu. Mít své místo v Doosan Areně, zažívat atmosféru velkých večerů a stát za Viktorkou po celou sezonu. Kromě jistoty svého místa přináší také řadu výhod, které ocení každý viktorián.</p>
        </div>
        <div ref={ref} className="mt-12 grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-lg border border-border-default bg-bg-elevated p-6 md:p-12 md:min-h-[280px] transition-all duration-300 md:hover:-translate-y-1 md:hover:bg-bg-elevated-hover md:hover:border-border-strong"
              >
                <Icon size={48} strokeWidth={1.5} className="text-text-accent-blue transition-colors md:group-hover:text-[#5fb0e6]" />
                <h3 className="mt-6 t-h3-m md:t-h3-d text-text-primary">{it.title}</h3>
                <p className="mt-4 t-body text-text-secondary">{it.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
