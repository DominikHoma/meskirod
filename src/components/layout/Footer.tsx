import { navigation, site } from "@/content/site";
import { LogoWithText } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-secondary/20 bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <LogoWithText compact />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Centrum kompleksowego wsparcia mężczyzn. Przywracamy słowu „ród”
              jego pierwotne znaczenie: wzrost, odrodzenie i wzajemną
              odpowiedzialność.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-sm uppercase tracking-wider text-accent">
              Nawigacja
            </h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-sm uppercase tracking-wider text-accent">
              Kontakt
            </h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {site.email}
                </a>
              </li>
              {site.phone && <li>{site.phone}</li>}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-secondary/20 pt-8">
          <p className="text-center text-xs text-muted">
            © {new Date().getFullYear()} {site.name}. Wszelkie prawa
            zastrzeżone.
          </p>
          <p className="mt-2 text-center text-xs text-muted/80">
            {site.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
