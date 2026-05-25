import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export function FooterS14() {
  return (
    <footer id="s14" className="bg-bg-base py-16">
      <div className="mx-auto max-w-content px-6 md:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="t-label text-text-primary">FC VIKTORIA PLZEŇ</div>
            <p className="mt-3 t-body-small text-text-tertiary">Permanentka 2026/2027</p>
          </div>
          <div>
            <h4 className="t-label text-text-accent-blue">Klub</h4>
            <ul className="mt-4 space-y-2 t-body text-text-secondary">
              {["O klubu", "Hráči", "Aktuality", "Stadion"].map((l) => (
                <li key={l}><a href="#" className="transition-colors hover:text-text-primary">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="t-label text-text-accent-blue">Servis</h4>
            <ul className="mt-4 space-y-2 t-body text-text-secondary">
              {["Kontakt", "Klubovka", "Fanshop", "Viktoria Key"].map((l) => (
                <li key={l}><a href="#" className="transition-colors hover:text-text-primary">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="t-label text-text-accent-blue">Sledujte nás</h4>
            <div className="mt-4 flex gap-3 text-text-secondary">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="transition-colors hover:text-text-accent-red"><Icon size={24} /></a>
              ))}
            </div>
            <a href="mailto:permanentky@fcviktoria.cz" className="mt-4 block t-body-small text-text-secondary hover:text-text-primary">
              permanentky@fcviktoria.cz
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-border-default pt-6 md:flex-row md:justify-between">
          <p className="t-body-small text-text-muted">© 2026 FC Viktoria Plzeň, a.s. Všechna práva vyhrazena.</p>
          <p className="t-body-small text-text-muted">Zásady ochrany osobních údajů · Cookies</p>
        </div>
      </div>
    </footer>
  );
}
