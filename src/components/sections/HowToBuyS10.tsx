import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Key, ArrowRight, Smartphone, CreditCard, MapPin } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const cards = [
  {
    Icon: Smartphone,
    title: "Chci digitální permanentku",
    body: (
      <>
        Celý nákup vyřídíte pohodlně online z domova. Permanentka se automaticky propojí
        s vaším účtem Viktoria Key, přes který ji budete spravovat i využívat během celé
        sezony. Před startem nového ročníku klub zároveň představí možnosti, kam si bude
        možné digitální permanentku uložit.
      </>
    ),
  },
  {
    Icon: CreditCard,
    title: "Chci digitální permanentku i fyzickou kartu",
    body: (
      <>
        Pokud chcete mít kromě digitální verze také klasickou fyzickou kartu, můžete si ji
        při nákupu jednoduše objednat za poplatek{" "}
        <span style={{ fontWeight: 700, color: "#ff2a3d" }}>150 Kč</span> + poštovné. Kartu
        bude možné zaslat poštou nebo vyzvednout osobně na Ticketpointu Doosan Areny.
      </>
    ),
  },
  {
    Icon: MapPin,
    title: "Nákup online i na Ticketpointu",
    body: (
      <>
        Permanentku si můžete pořídit online nebo osobně na Ticketpointu Doosan Areny.
        Pokud už máte založený Viktoria Key, stačí při návštěvě Ticketpointu ukázat QR kód
        svého účtu nebo nadiktovat e-mailovou adresu. V případě osobního nákupu na
        Ticketpointu je fyzická karta povinná a je spojena s poplatkem{" "}
        <span style={{ fontWeight: 700, color: "#ff2a3d" }}>150 Kč</span>.
      </>
    ),
  },
];

function PurchaseCard({
  Icon,
  title,
  body,
  inView,
  delay,
}: {
  Icon: typeof Smartphone;
  title: string;
  body: React.ReactNode;
  inView: boolean;
  delay: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: EASE }}
      className="group flex flex-col rounded-[16px] p-8 md:p-12 md:min-h-[300px] transition-all duration-[280ms] md:hover:-translate-y-1"
      style={{
        background: "#252a52",
        border: "1px solid rgba(255,255,255,0.14)",
        transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#2d3360";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.24)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#252a52";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)";
      }}
    >
      <div
        className="flex items-center justify-center"
        style={{
          width: 48,
          height: 48,
          background: "rgba(0,94,167,0.15)",
          borderRadius: 8,
        }}
      >
        <Icon
          size={24}
          strokeWidth={1.5}
          className="transition-colors duration-[280ms] group-hover:!text-[#5fb0e6]"
          style={{ color: "#3a8fd6" }}
        />
      </div>
      <h3
        className="mt-4"
        style={{
          fontSize: "clamp(22px, 2.2vw, 28px)",
          fontWeight: 600,
          color: "#ffffff",
          lineHeight: 1.25,
        }}
      >
        {title}
      </h3>
      <p
        className="mt-4"
        style={{
          fontSize: 16,
          lineHeight: 1.625,
          fontWeight: 400,
          color: "rgba(255,255,255,0.75)",
        }}
      >
        {body}
      </p>
    </motion.article>
  );
}

function ViktoriaKeyInfo({ inView }: { inView: boolean }) {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: EASE }}
      className="mx-auto max-w-[880px] p-8 md:p-12"
      style={{
        background: "rgba(0,94,167,0.08)",
        borderLeft: "4px solid #005ea7",
        borderTop: "1px solid rgba(255,255,255,0.14)",
        borderRight: "1px solid rgba(255,255,255,0.14)",
        borderBottom: "1px solid rgba(255,255,255,0.14)",
        borderRadius: "0 16px 16px 0",
      }}
    >
      <span
        className="inline-flex items-center gap-1.5 rounded-full"
        style={{
          background: "rgba(0,94,167,0.15)",
          border: "1px solid rgba(58,143,214,0.3)",
          padding: "4px 12px",
          fontSize: 12,
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "#3a8fd6",
        }}
      >
        <Key size={14} style={{ color: "#3a8fd6" }} />
        Viktoria Key
      </span>
      <h3
        style={{
          marginTop: 12,
          fontSize: "clamp(22px, 2.2vw, 28px)",
          fontWeight: 600,
          color: "#ffffff",
          lineHeight: 1.25,
        }}
      >
        Nákup přes Viktoria Key
      </h3>
      <p
        style={{
          marginTop: 16,
          fontSize: 16,
          lineHeight: 1.625,
          fontWeight: 400,
          color: "rgba(255,255,255,0.75)",
        }}
      >
        Nově už nebude potřeba vyplňovat obsáhlé papírové formuláře jako v minulých
        sezonách. K nákupu permanentky vám postačí registrace do systému Viktoria Key,
        kterou zvládnete během minuty pouze za pomoci své e-mailové adresy.
      </p>
      <p
        style={{
          marginTop: 16,
          fontSize: 16,
          lineHeight: 1.625,
          fontWeight: 400,
          color: "rgba(255,255,255,0.75)",
        }}
      >
        Viktoria Key se stane vaším osobním účtem a dlouhodobým klíčem do viktoriánského
        světa. Kromě nákupu permanentní vstupenky vám v budoucnu otevře přístup také
        k dalším novým digitálním platformám a službám, které klub postupně představí.
      </p>
      <hr
        style={{
          margin: "24px 0",
          border: 0,
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      />
      <a
        href="https://bit.ly/4vWPVqV"
        target="_blank"
        rel="noopener"
        className="inline-flex items-center"
        style={{
          fontSize: 16,
          fontWeight: 600,
          color: "#3a8fd6",
          textDecoration: "underline",
          textUnderlineOffset: 3,
          transition: "color 200ms",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#5fb0e6")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#3a8fd6")}
      >
        Více informací k Viktoria Key najdete ZDE
        <ArrowRight size={16} style={{ marginLeft: 6 }} />
      </a>
    </motion.aside>
  );
}

function Banner({ inView }: { inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.7, ease: EASE }}
      className="relative mt-8 overflow-hidden s10-banner-wrap"
    >
      <img src="/s10-banner-desktop.jpg" alt="Viktoria Key" loading="lazy" decoding="async" className="s10-img-desktop" />
      <img src="/s10-banner-mobile.jpg" alt="Viktoria Key" loading="eager" decoding="async" className="s10-img-mobile" />
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1, background: "linear-gradient(180deg, rgba(14,17,41,0) 0%, rgba(14,17,41,0.4) 50%, rgba(14,17,41,0.95) 100%)" }} />
      <div className="hidden md:block absolute inset-0 rounded-[16px] pointer-events-none" style={{ border: "1px solid rgba(255,255,255,0.08)", zIndex: 2 }} />
      <style>{`
        .s10-img-desktop { display: none; width: 100%; height: auto; object-fit: cover; object-position: center top; }
        .s10-img-mobile { display: block; width: 100%; height: auto; object-fit: cover; object-position: center top; }
        .s10-banner-wrap { width: 100vw; margin-left: calc(-1 * var(--container-padding, 24px)); border-radius: 0; }
        @media (min-width: 768px) {
          .s10-img-desktop { display: block; }
          .s10-img-mobile { display: none; }
          .s10-banner-wrap { width: 100%; max-width: 880px; margin-left: auto; margin-right: auto; aspect-ratio: 16/9; border-radius: 16px; }
        }
      `}</style>
    </motion.div>
  );
}


export function HowToBuyS10() {
  const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: true });
  return (
    <section
      id="s10"
      aria-label="Jak na to"
      style={{ background: "#1c2143" }}
      className="py-24 md:py-32 v-edge-top"
    >
      <div ref={ref} className="mx-auto max-w-content px-6 md:px-8 lg:px-12">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto text-center"
          style={{ maxWidth: 720, marginBottom: 64 }}
        >
          <span className="text-[13px] font-semibold tracking-widest uppercase text-text-accent-red">
            Jak na to
          </span>
          <h2 className="mt-4 t-h1-m md:t-h1-d text-text-primary">
            Jak, kdy a kde koupit permanentku?
          </h2>
          <p className="mt-4 t-body-large-m md:t-body-large-d text-text-secondary">
            Digitálně, jednoduše a přes Viktoria Key
          </p>

        </motion.header>

        <ViktoriaKeyInfo inView={inView} />

        <Banner inView={inView} />

        <div
          className="mx-auto grid grid-cols-1 md:grid-cols-3 items-stretch"
          style={{ maxWidth: 1280, marginTop: 48, gap: 16 }}
        >
          {cards.map((c, i) => (
            <PurchaseCard
              key={c.title}
              Icon={c.Icon}
              title={c.title}
              body={c.body}
              inView={inView}
              delay={0.2 + i * 0.08}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.6, ease: EASE }}
          className="flex justify-center"
          style={{ marginTop: 64 }}
        >
          <a
            href="https://fcvpklubovka.cz/"
            className="s10-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#e0001a",
              color: "#ffffff",
              borderRadius: 8,
              fontFamily: "Rajdhani, sans-serif",
              fontWeight: 700,
              fontSize: 16,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              boxShadow: "0 8px 24px rgba(224,0,26,0.35)",
              textDecoration: "none",
              transition: "all 200ms cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            Přejít na nákup
          </a>
        </motion.div>
      </div>

      <style>{`
        .s10-cta {
          padding: 14px 28px;
          min-height: 48px;
          width: calc(100% - 24px);
          max-width: 320px;
        }
        @media (min-width: 768px) {
          .s10-cta {
            padding: 16px 32px;
            min-height: 56px;
            width: auto;
          }
        }
        .s10-cta:hover {
          background: #ff1a30 !important;
          box-shadow: 0 12px 32px rgba(224,0,26,0.5) !important;
          transform: translateY(-2px);
        }
        .s10-cta:active {
          background: #b80016 !important;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .s10-cta { transition: none !important; transform: none !important; }
        }
      `}</style>
    </section>
  );
}
