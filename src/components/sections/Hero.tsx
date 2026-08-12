import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export function Hero() {
  return (
    <section className="hero-pattern relative overflow-hidden section-padding">
      <div className="container-wide relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 flex justify-center">
            <Logo className="h-20 w-20 sm:h-24 sm:w-24" />
          </div>

          <p className="mb-4 font-heading text-sm uppercase tracking-[0.25em] text-accent">
            {site.tagline}
          </p>

          <h1 className="font-heading text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            {site.name}
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-muted sm:text-xl">
            {site.slogan}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="#manifest" variant="primary">
              Poznaj manifest
            </Button>
            <Button href="#kontakt" variant="outline">
              Skontaktuj się
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative circle */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/10"
        style={{ width: "600px", height: "600px" }}
        aria-hidden="true"
      />
    </section>
  );
}
