import { values } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Mission() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading
          title="Nasze wartości"
          subtitle="Trzy filary, na których budujemy bezpieczną przestrzeń wsparcia"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="card-surface text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
                <span className="font-heading text-xl font-semibold text-accent">
                  {value.title.charAt(0)}
                </span>
              </div>
              <h3 className="mb-3 font-heading text-xl font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
