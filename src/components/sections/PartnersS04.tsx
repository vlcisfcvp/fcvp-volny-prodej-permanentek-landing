import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ImageIcon } from "lucide-react";
import benefityPdf from "@/assets/Benefity-2026-2027.pdf.asset.json";


const partners: { name: string; url: string; benefit: string; photo: string }[] = [
  {
    name: "Restaurace Klubovka",
    url: "https://fcvpklubovka.cz/",
    benefit:
      "Voucher na jednorázovou slevu 200 Kč při útratě nad 600 Kč, dále stálá 10% sleva.",
    photo: "/s04-partner-1.jpg",
  },
  {
    name: "Viktoria Shop",
    url: "https://eshop.fcviktoria.cz/",
    benefit:
      "Voucher na jednorázovou slevu 300 Kč při útratě nad 1000 Kč, dále stálá 10% sleva.",
    photo: "/s04-partner-2.jpg",
  },
  {
    name: "Keramika Soukup",
    url: "https://www.keramikasoukup.cz/",
    benefit:
      "Sleva 15 % na veškerý nezlevněný sortiment. Uplatnění v prodejně po předložení permanentky.",
    photo: "/s04-partner-3.jpg",
  },
  {
    name: "Porsche Plzeň",
    url: "https://borska-pole.porsche-plzen.cz/",
    benefit:
      "Sleva 15 % na servisní práce a 5 % na materiál po předložení permanentky.",
    photo: "/s04-partner-4.jpg",
  },
  {
    name: "Merlot d'Or",
    url: "https://www.merlot.cz/",
    benefit: "Sleva 10 % po předložení permanentky.",
    photo: "/s04-partner-5.jpg",
  },
  {
    name: "Statek Česká Lípa",
    url: "https://www.statek-ceskalipa.cz/",
    benefit: "Sleva 10 % z ceny ubytování a konzumace v restauraci.",
    photo: "/s04-partner-6.jpg",
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function PartnersS04() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="s04"
      aria-label="Partneři"
      className="py-24 md:py-32 v-edge-top"
      style={{ background: "#0e1129" }}
    >
      <div className="mx-auto max-w-content px-6 md:px-12">
        <div className="text-center">
          <span
            className="text-[13px] font-semibold tracking-widest uppercase"
            style={{ fontFamily: "Rajdhani, sans-serif", color: "#3a8fd6" }}
          >
            Partneři klubu
          </span>
          <h2 className="mt-4 t-h1-m md:t-h1-d text-text-primary">
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
              initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
              animate={inView || reduceMotion ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: reduceMotion ? 0 : 0.4,
                delay: reduceMotion ? 0 : i * 0.06,
                ease: EASE,
              }}
              className="group relative block cursor-pointer overflow-hidden"
              style={{
                background: "#252a52",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                transitionProperty: "background, border-color, box-shadow, transform",
                transitionDuration: reduceMotion ? "100ms" : "280ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "#2d3360";
                el.style.borderColor = "#005ea7";
                el.style.boxShadow =
                  "0 0 0 1px #005ea7, 0 8px 32px rgba(0,94,167,0.2)";
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "#252a52";
                el.style.borderColor = "rgba(255,255,255,0.08)";
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Layer 1 — Photo */}
              <div
                className="relative w-full overflow-hidden h-[180px] md:h-[220px]"
                style={{
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                  background: "#2d3360",
                  lineHeight: 0,
                  fontSize: 0,
                  margin: 0,
                  padding: 0,
                  display: "block",
                }}
              >
                <img
                  src={p.photo}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-center transition-transform md:group-hover:scale-[1.04]"
                  style={{
                    display: "block",
                    margin: 0,
                    padding: 0,
                    verticalAlign: "top",
                    transitionDuration: reduceMotion ? "100ms" : "400ms",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                <div
                  className="pointer-events-none absolute inset-0 flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(14,17,41,0) 40%, rgba(14,17,41,0.35) 100%)",
                  }}
                >
                  <ImageIcon
                    size={24}
                    style={{ color: "rgba(255,255,255,0.2)" }}
                    className="opacity-0 [.group:has(img[style*='display:none'])_&]:opacity-100"
                  />
                </div>
              </div>

              {/* Layer 2 — Logo */}
              <div className="flex items-center justify-center pb-4 pt-4 md:pt-5" style={{ marginTop: 0 }}>
                <span
                  className="uppercase transition-opacity md:group-hover:opacity-100"
                  style={{
                    fontFamily: "Rajdhani, sans-serif",
                    fontWeight: 600,
                    fontSize: 13,
                    letterSpacing: "0.08em",
                    color: "rgba(255,255,255,0.85)",
                    opacity: 0.85,
                  }}
                >
                  {p.name}
                </span>
              </div>

              {/* Layer 3 — Separator */}
              <div
                className="mx-auto"
                style={{
                  width: 32,
                  height: 1,
                  background: "rgba(255,255,255,0.14)",
                  margin: "0 auto",
                }}
              />

              {/* Layer 4 — Benefit text */}
              <p
                className="text-center"
                style={{
                  fontFamily: "Rajdhani, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: 1.57,
                  color: "rgba(255,255,255,0.75)",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  marginTop: 16,
                  marginLeft: 16,
                  marginRight: 16,
                  marginBottom: 24,
                }}
              >
                {p.benefit}
              </p>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={benefityPdf.url}
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase"
            style={{
              background: "transparent",
              border: "1.5px solid rgba(255,255,255,0.24)",
              color: "#ffffff",
              borderRadius: 8,
              padding: "16px 32px",
              fontFamily: "Rajdhani, sans-serif",
              fontWeight: 700,
              fontSize: 16,
              letterSpacing: "0.08em",
              transition: "all 220ms cubic-bezier(0.16, 1, 0.3, 1)",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#005ea7";
              e.currentTarget.style.background = "rgba(0,94,167,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.24)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            Všechny slevy a benefity
          </a>
        </div>
      </div>
    </section>
  );
}
