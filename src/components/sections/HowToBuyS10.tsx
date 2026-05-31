import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Key, ArrowRight, Smartphone, CreditCard, MapPin } from "lucide-react";
import { PrimaryButton } from "../ui/PrimaryButton";

const EASE = [0.16, 1, 0.3, 1] as const;

const cards = [
  {
    Icon: Smartphone,
    title: "Chci digitální permanentku",
    body: "Celý nákup vyřídíte pohodlně online z domova. Permanentka se automaticky propojí s vaším účtem Viktoria Key, přes který ji budete spravovat i využívat během celé sezony. Před startem nového ročníku klub zároveň představí možnosti, kam si bude možné digitální permanentku uložit.",
    badge: false,
  },
  {
    Icon: CreditCard,
    title: "Chci digitální permanentku i fyzickou kartu",
    body: "Pokud chcete mít kromě digitální verze také klasickou fyzickou kartu, můžete si ji při nákupu jednoduše objednat za poplatek 150 Kč + poštovné. Kartu bude možné zaslat poštou nebo vyzvednout osobně na Ticketpointu Doosan Areny.",
    badge: true,
  },
  {
    Icon: MapPin,
    title: "Nákup online i na Ticketpointu",
    body: "Permanentku si můžete pořídit online nebo osobně na Ticketpointu Doosan Areny. Pokud už máte založený Viktoria Key, stačí při návštěvě Ticketpointu ukázat QR kód svého účtu nebo nadiktovat e-mailovou adresu. V případě osobního nákupu na Ticketpointu je fyzická karta povinná a je spojena s poplatkem 150 Kč.",
    badge: true,
  },
];

function Card({
  Icon,
  title,
  body,
  badge,
  inView,
  delay,
}: {
  Icon: typeof Smartphone;
  title: string;
  body: string;
  badge: boolean;
  inView: boolean;
  delay: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: EASE }}
      className="group flex flex-col rounded-[16px] p-8 md:p-12 md:min-h-[320px] transition-all duration-[280ms] md:hover:-translate-y-1"
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
      <Icon
        size={40}
        strokeWidth={1.5}
        className="transition-colors duration-[280ms] group-hover:!text-[#5fb0e6]"
        style={{ color: "#3a8fd6" }}
      />
      <h3 className="mt-4 t-h3-m md:t-h3-d text-text-primary">{title}</h3>
      <p
        className="mt-4 text-[16px] leading-[1.625] font-normal"
        style={{ color: "rgba(255,255,255,0.75)" }}
      >
        {body}
      </p>
      {badge && (
        <span
          className="mt-4 inline-flex items-center rounded-full px-3 py-1 text-[12px] font-semibold uppercase w-fit"
          style={{
            background: "rgba(224,0,26,0.12)",
            border: "1px solid rgba(224,0,26,0.2)",
            color: "#ff2a3d",
            letterSpacing: "0.12em",
          }}
        >
          + 150 Kč fyzická karta
        </span>
      )}
    </motion.article>
  );
}

function ViktoriaKeyInfo({ inView }: { inView: boolean }) {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
      className="mx-auto mt-12 max-w-[880px] p-6 md:p-8"
      style={{
        background: "#252a52",
        borderLeft: "4px solid #005ea7",
        borderTop: "1px solid rgba(255,255,255,0.14)",
        borderRight: "1px solid rgba(255,255,255,0.14)",
        borderBottom: "1px solid rgba(255,255,255,0.14)",
        borderRadius: "16px",
      }}
    >
      <span
        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-semibold uppercase"
        style={{
          background: "rgba(0,94,167,0.15)",
          border: "1px solid rgba(58,143,214,0.3)",
          color: "#3a8fd6",
          letterSpacing: "0.12em",
        }}
      >
        <Key size={14} style={{ color: "#3a8fd6" }} />
        Viktoria Key
      </span>
      <h3 className="mt-3 t-h3-m md:t-h3-d text-text-primary">Nákup přes Viktoria Key</h3>
      <p
        className="mt-4 text-[16px] leading-[1.625] font-normal"
        style={{ color: "rgba(255,255,255,0.75)" }}
      >
        Nově už nebude potřeba vyplňovat obsáhlé papírové formuláře jako v minulých sezonách.
        K nákupu permanentky vám postačí registrace do systému Viktoria Key, kterou zvládnete
        během minuty pouze za pomoci své e-mailové adresy.
      </p>
      <p
        className="mt-4 text-[16px] leading-[1.625] font-normal"
        style={{ color: "rgba(255,255,255,0.75)" }}
      >
        Viktoria Key se stane vaším osobním účtem a dlouhodobým klíčem do viktoriánského světa.
        Kromě nákupu permanentní vstupenky vám v budoucnu otevře přístup také k dalším novým
        digitálním platformám a službám, které klub postupně představí.
      </p>
      <hr className="my-6 border-0" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />
      <a
        href="https://bit.ly/4vWPVqV"
        target="_blank"
        rel="noopener"
        className="inline-flex items-center text-[16px] font-semibold underline underline-offset-[3px] transition-colors"
        style={{ color: "#3a8fd6" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#5fb0e6")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#3a8fd6")}
      >
        Více informací k Viktoria Key najdete ZDE
        <ArrowRight size={16} style={{ marginLeft: 6 }} />
      </a>
    </motion.aside>
  );
}

export function HowToBuyS10() {
  const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: true });
  return (
    <section
      id="s10"
      aria-label="Jak na to"
      className="py-24 md:py-32"
      style={{ background: "#1c2143" }}
    >
      <div ref={ref} className="mx-auto max-w-content px-6 md:px-8 lg:px-12">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto max-w-[720px] text-center mb-16"
        >
          <span
            className="text-[12px] font-semibold uppercase"
            style={{ color: "#ff2a3d", letterSpacing: "0.12em" }}
          >
            Jak na to
          </span>
          <h2 className="mt-4 t-h2-m md:t-h2-d text-text-primary">
            Jak, kdy a kde koupit permanentku?
          </h2>
          <p
            className="mt-4 text-[20px] leading-[1.6] font-normal"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Digitálně, jednoduše a přes Viktoria Key
          </p>
          <p
            className="mt-4 text-[16px] leading-[1.625] font-normal"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Permanentky na sezonu 2026/2027 budou nově navázané na váš účet Viktoria Key.
            Díky tomu zvládnete celý nákup jednoduše online během několika minut a svou
            permanentku budete mít vždy přehledně na jednom místě.
          </p>
        </motion.header>

        <div className="mx-auto max-w-[1280px] grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-stretch">
          {cards.map((c, i) => (
            <Card
              key={c.title}
              Icon={c.Icon}
              title={c.title}
              body={c.body}
              badge={c.badge}
              inView={inView}
              delay={i * 0.1}
            />
          ))}
        </div>

        <ViktoriaKeyInfo inView={inView} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.6, ease: EASE }}
          className="mx-auto mt-16 max-w-[320px] text-center"
        >
          <PrimaryButton href="#pricing" className="w-full">
            Přejít na nákup
          </PrimaryButton>
        </motion.div>
      </div>
    </section>
  );
}
