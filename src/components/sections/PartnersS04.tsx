import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const partners: { name: string; url: string; benefit: string }[] = [
  {
    name: "Restaurace Klubovka",
    url: "https://fcvpklubovka.cz/",
    benefit:
      "Voucher na jednorázovou slevu 200 Kč při útratě nad 600 Kč, dále stálá 10% sleva.",
  },
  {
    name: "Viktoria Shop",
    url: "https://eshop.fcviktoria.cz/",
    benefit:
      "Voucher na jednorázovou slevu 300 Kč při útratě nad 1000 Kč, dále stálá 10% sleva.",
  },
  {
    name: "Keramika Soukup",
    url: "https://www.keramikasoukup.cz/",
    benefit:
      "Sleva 15 % na veškerý nezlevněný sortiment. Uplatnění v prodejně po předložení permanentky.",
  },
  {
    name: "Porsche Plzeň",
    url: "https://borska-pole.porsche-plzen.cz/",
    benefit:
      "Sleva 15 % na servisní práce a 5 % na materiál po předložení permanentky.",
  },
  {
    name: "Merlot d'Or",
    url: "https://www.merlot.cz/",
    benefit: "Sleva 10 % po předložení permanentky.",
  },
  {
    name: "Statek Česká Lípa",
    url: "https://www.statek-ceskalipa.cz/",
    benefit: "Sleva 10 % z ceny ubytování a konzumace v restauraci.",
  },
];

export function PartnersS04() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  return (
    <section id="s04" aria-label="Partneři" className="bg-bg-section-alt py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-reading text-center">
          <span className="text-[13px] font-semibold tracking-widest uppercase text-text-accent-blue">
            Partneři klubu
          </span>
          <h2 className="mt-4 t-h1-m md:t-h1-d uppercase text-text-primary">
            Výhody pro permanentkáře
          </h2>
        </div>

        <div
          ref={ref}
          className="mx-auto mt-12 grid max-w-[960px] grid-cols-2 gap-4 md:grid-cols-3 md:gap-6"
        >
          {partners.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group flex cursor-pointer flex-col items-center rounded-lg border border-border-subtle bg-bg-elevated p-5 md:p-8 transition-all duration-[280ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] md:hover:bg-bg-elevated-hover md:hover:border-[rgba(0,94,167,0.6)] md:hover:shadow-[0_0_20px_rgba(0,94,167,0.2)]"
              style={{ borderRadius: 16 }}
            >
              <div className="flex h-14 w-full items-center justify-center">
                <span
                  className="uppercase transition-colors md:group-hover:text-white"
                  style={{
                    fontFamily: "Rajdhani, sans-serif",
                    fontWeight: 600,
                    fontSize: 13,
                    letterSpacing: "0.08em",
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  {p.name}
                </span>
              </div>
              <div className="mx-auto my-3 h-px w-8 bg-border-default" />
              <p
                className="text-center"
                style={{
                  fontFamily: "Rajdhani, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: 1.57,
                  color: "rgba(255,255,255,0.75)",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {p.benefit}
              </p>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a href="#" className="cta-secondary">
            Všechny slevy a benefity
          </a>
        </div>
      </div>
    </section>
  );
}
