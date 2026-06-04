import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import CookieBanner from "../components/CookieBanner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-base px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-text-primary">404</h1>
        <p className="mt-4 text-text-secondary">Stránka nenalezena</p>
        <Link to="/" className="cta-primary mt-6 inline-flex">Domů</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-base px-4">
      <div className="max-w-md text-center text-text-primary">
        <h1 className="text-xl font-semibold">Něco se pokazilo</h1>
        <button onClick={() => { router.invalidate(); reset(); }} className="cta-primary mt-6">Zkusit znovu</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Permanentka FC Viktoria Plzeň 2026/2027" },
      { name: "description", content: "Permanentka FC Viktoria Plzeň pro sezonu 2026/2027. Tvoje místo na celou sezonu." },
      { property: "og:title", content: "Permanentka FC Viktoria Plzeň 2026/2027" },
      { name: "twitter:title", content: "Permanentka FC Viktoria Plzeň 2026/2027" },
      { property: "og:description", content: "Permanentka FC Viktoria Plzeň pro sezonu 2026/2027. Tvoje místo na celou sezonu." },
      { name: "twitter:description", content: "Permanentka FC Viktoria Plzeň pro sezonu 2026/2027. Tvoje místo na celou sezonu." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c3ddd667-0572-4592-954e-dbfe008e05b9/id-preview-e14a89a3--77f80acc-8c43-446a-96ea-351266b620dc.lovable.app-1779868359133.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c3ddd667-0572-4592-954e-dbfe008e05b9/id-preview-e14a89a3--77f80acc-8c43-446a-96ea-351266b620dc.lovable.app-1779868359133.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preload", as: "image", href: "/hero-desktop.jpg", media: "(min-width: 768px)" },
      { rel: "preload", as: "image", href: "/hero-mobile.jpg", media: "(max-width: 767px)" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        children: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('consent', 'default', {'ad_storage': 'denied','ad_user_data': 'denied','ad_personalization': 'denied','analytics_storage': 'denied','wait_for_update': 500});`,
      },
      {
        children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NDXBMXJN');`,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <head>
        <HeadContent />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NDXBMXJN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Scripts />
        <CookieBanner />
        <style
          dangerouslySetInnerHTML={{
            __html: `
  #fcvp-cookie-banner {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(14, 17, 41, 0.96);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-top: 1px solid rgba(255, 255, 255, 0.10);
    box-shadow: 0 -8px 40px rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 20px 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    z-index: 99999;
    font-family: 'Rajdhani', sans-serif;
    font-size: 14px;
    line-height: 1.57;
    flex-wrap: wrap;
  }
  #fcvp-cookie-banner p {
    margin: 0;
    flex: 1;
    min-width: 200px;
    color: rgba(255, 255, 255, 0.70);
  }
  .fcvp-cookie-btns {
    display: flex;
    gap: 10px;
    flex-shrink: 0;
  }
  .fcvp-btn-accept {
    background: transparent;
    color: #ffffff;
    border: 1.5px solid rgba(255, 255, 255, 0.24);
    padding: 10px 24px;
    border-radius: 8px;
    cursor: pointer;
    font-family: 'Rajdhani', sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    white-space: nowrap;
    transition: all 220ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  .fcvp-btn-accept:hover {
    border-color: #e0001a;
    color: #ffffff;
    background: rgba(224, 0, 26, 0.08);
  }
  .fcvp-btn-decline {
    background: transparent;
    color: rgba(255, 255, 255, 0.45);
    border: 1.5px solid rgba(255, 255, 255, 0.10);
    padding: 10px 24px;
    border-radius: 8px;
    cursor: pointer;
    font-family: 'Rajdhani', sans-serif;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    white-space: nowrap;
    transition: all 220ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  .fcvp-btn-decline:hover {
    color: rgba(255, 255, 255, 0.75);
    border-color: rgba(255, 255, 255, 0.24);
  }
  @media (max-width: 767px) {
    #fcvp-cookie-banner {
      padding: 16px 24px;
      flex-direction: column;
      align-items: stretch;
      gap: 12px;
    }
    .fcvp-cookie-btns {
      flex-direction: column;
      gap: 8px;
    }
    .fcvp-btn-accept,
    .fcvp-btn-decline {
      width: 100%;
      text-align: center;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    #fcvp-cookie-banner {
      transition: none !important;
      animation: none !important;
    }
    .fcvp-btn-accept,
    .fcvp-btn-decline {
      transition: none !important;
    }
  }
`,
          }}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: `<div id="fcvp-cookie-banner" style="display:none;"> <p>


    Tato stránka používá cookies pro reklamní účely.
    Váš souhlas nám pomáhá zobrazovat relevantní reklamy a měřit výsledky kampaní.
  
</p> <div class="fcvp-cookie-btns"> <button class="fcvp-btn-decline" onclick="fcvpCookieDecline()">Odmítnout</button> <button class="fcvp-btn-accept" onclick="fcvpCookieAccept()">Souhlasím</button> </div> </div>`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: ` var FCVP_META_PIXEL_ID = '169818827636632'; var FCVP_SKLIK_ID = 100259849; function fcvpLoadMetaPixel() { !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n; n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)} (window,document,'script','https://connect.facebook.net/en_US/fbevents.js'); fbq('init', FCVP_META_PIXEL_ID); fbq('track', 'PageView'); } function fcvpLoadSklik() { var s = document.createElement('script'); s.src = 'https://c.seznam.cz/js/rc.js'; s.onload = function() { if (window.sznIVA && window.sznIVA.IS) { window.sznIVA.IS.updateIdentities({ eid: null }); } if (window.rc && window.rc.retargetingHit) { window.rc.retargetingHit({ id: FCVP_SKLIK_ID, consent: 1 }); } }; document.head.appendChild(s); } function fcvpCookieAccept() { localStorage.setItem('fcvp_consent', 'granted'); document.getElementById('fcvp-cookie-banner').style.display = 'none'; fcvpActivateTags(); } function fcvpCookieDecline() { localStorage.setItem('fcvp_consent', 'denied'); document.getElementById('fcvp-cookie-banner').style.display = 'none'; } function fcvpActivateTags() { window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('consent', 'update', { 'ad_storage': 'granted', 'ad_user_data': 'granted', 'ad_personalization': 'granted', 'analytics_storage': 'granted' }); window.dataLayer.push({ event: 'consent_granted' }); fcvpLoadMetaPixel(); fcvpLoadSklik(); } (function() { var consent = localStorage.getItem('fcvp_consent'); if (consent === 'granted') { fcvpActivateTags(); } else if (consent === 'denied') { // nic nespouštíme } else { document.getElementById('fcvp-cookie-banner').style.display = 'flex'; } })(); `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `document.addEventListener('click', function(e) { var el = e.target.closest('a[href]'); if (!el) return; var href = el.getAttribute('href'); if (!href) return; if (href.indexOf('bit.ly/43LBokQ') !== -1 || href.indexOf('4j7TSS2') !== -1) { if (window.fbq) { fbq('track', 'InitiateCheckout', { content_name: 'Permanentka STANDARD' }); } if (window.dataLayer) { window.dataLayer.push({ event: 'initiate_checkout', variant: 'standard' }); } } if (href.indexOf('bit.ly/4o6hqul') !== -1 || href.indexOf('4jWo0ke') !== -1) { if (window.fbq) { fbq('track', 'InitiateCheckout', { content_name: 'Permanentka EXTRA' }); } if (window.dataLayer) { window.dataLayer.push({ event: 'initiate_checkout', variant: 'extra' }); } } });`,
          }}
        />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
