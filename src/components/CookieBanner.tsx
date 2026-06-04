import { useEffect, useState } from "react";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const META_PIXEL_ID = "169818827636632";
const SKLIK_ID = 100259849;

function loadMetaPixel() {
  if ((window as any).fbq) return;
  const n: any = function (...args: any[]) {
    n.callMethod ? n.callMethod(...args) : n.queue.push(args);
  };
  n.push = n; n.loaded = true; n.version = "2.0"; n.queue = [];
  (window as any).fbq = n; (window as any)._fbq = n;
  const t = document.createElement("script");
  t.async = true;
  t.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(t);
  (window as any).fbq("init", META_PIXEL_ID);
  (window as any).fbq("track", "PageView");
}

function loadSklik() {
  const s = document.createElement("script");
  s.src = "https://c.seznam.cz/js/rc.js";
  s.onload = () => {
    if ((window as any).sznIVA?.IS) {
      (window as any).sznIVA.IS.updateIdentities({ eid: null });
    }
    if ((window as any).rc?.retargetingHit) {
      (window as any).rc.retargetingHit({ id: SKLIK_ID, consent: 1 });
    }
  };
  document.head.appendChild(s);
}

function activateTags() {
  window.dataLayer = window.dataLayer || [];
  (window as any).gtag("consent", "update", {
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
    analytics_storage: "granted",
  });
  window.dataLayer.push({ event: "consent_granted" });
  loadMetaPixel();
  loadSklik();
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("fcvp_consent");
    if (consent === "granted") {
      activateTags();
    } else if (!consent) {
      setVisible(true);
    }

    const handler = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest("a[href]") as HTMLAnchorElement | null;
      if (!el) return;
      const href = el.getAttribute("href") || "";
      if (href.includes("43LBokQ") || href.includes("4j7TSS2")) {
        if ((window as any).fbq) (window as any).fbq("track", "InitiateCheckout", { content_name: "Permanentka STANDARD" });
        window.dataLayer?.push({ event: "initiate_checkout", variant: "standard" });
      }
      if (href.includes("4o6hqul") || href.includes("4jWo0ke")) {
        if ((window as any).fbq) (window as any).fbq("track", "InitiateCheckout", { content_name: "Permanentka EXTRA" });
        window.dataLayer?.push({ event: "initiate_checkout", variant: "extra" });
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const accept = () => {
    localStorage.setItem("fcvp_consent", "granted");
    setVisible(false);
    activateTags();
  };

  const decline = () => {
    localStorage.setItem("fcvp_consent", "denied");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: "50%",
        right: "50%",
        transform: "translateX(-50%)",
        width: "calc(100% - 48px)",
        maxWidth: "1280px",
        margin: "0 auto 16px",
        borderRadius: 12,
        background: "rgba(14, 17, 41, 0.96)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.10)",
        boxShadow: "0 -8px 40px rgba(0, 0, 0, 0.5)",
        padding: "20px 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "24px",
        zIndex: 99999,
        fontFamily: "'Rajdhani', sans-serif",
        flexWrap: "wrap" as const,
      }}
    >
      <p style={{ margin: 0, flex: 1, minWidth: 200, fontSize: 14, lineHeight: 1.57, color: "rgba(255,255,255,0.70)" }}>
        Tato stránka používá cookies pro reklamní účely.
        Váš souhlas nám pomáhá zobrazovat relevantní reklamy a měřit výsledky kampaní.
      </p>
      <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
        <button onClick={decline} style={{
          background: "transparent", color: "rgba(255,255,255,0.45)",
          border: "1.5px solid rgba(255,255,255,0.10)", padding: "10px 24px",
          borderRadius: 8, cursor: "pointer", fontFamily: "'Rajdhani', sans-serif",
          fontSize: 13, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" as const,
        }}>
          Pouze nezbytné
        </button>
        <button onClick={accept} style={{
          background: "transparent", color: "#ffffff",
          border: "1.5px solid rgba(255,255,255,0.24)", padding: "10px 24px",
          borderRadius: 8, cursor: "pointer", fontFamily: "'Rajdhani', sans-serif",
          fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" as const,
        }}>
          Souhlasím
        </button>
      </div>
    </div>
  );
}
