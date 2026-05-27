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
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap" },
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
        {children}
        <Scripts />
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
