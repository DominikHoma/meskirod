import { manifest } from "@/content/manifest";
import { Button } from "@/components/ui/Button";

export function CtaBanner() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-narrow">
        <div className="rounded-2xl border border-accent/20 bg-gradient-to-br from-surface-light to-surface px-6 py-12 text-center sm:px-12 sm:py-16">
          <p className="font-heading text-2xl font-semibold leading-relaxed text-foreground sm:text-3xl">
            {manifest.closing}
          </p>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Pierwszy krok to odwaga. Resztę zrobimy razem — w bezpiecznej
            przestrzeni Męskiego Rodu.
          </p>
          <div className="mt-8">
            <Button href="#kontakt" variant="primary">
              Zacznij rozmowę
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
