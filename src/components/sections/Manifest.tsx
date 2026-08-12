import { manifest } from "@/content/manifest";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Manifest() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-narrow">
        <SectionHeading
          id="manifest"
          eyebrow="Manifest"
          title={manifest.title}
          subtitle="Nasze przekonania i droga, którą idziemy razem"
        />

        <blockquote className="mb-10 border-l-4 border-accent pl-6">
          <p className="font-heading text-xl italic leading-relaxed text-foreground sm:text-2xl">
            &bdquo;{manifest.openingQuote}&rdquo;
          </p>
        </blockquote>

        <div className="space-y-6 text-base leading-relaxed text-muted sm:text-lg">
          {manifest.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={
                paragraph === "Męski Ród to Twój bezpieczny dom."
                  ? "font-heading text-xl font-semibold text-accent sm:text-2xl"
                  : ""
              }
            >
              {paragraph}
            </p>
          ))}
        </div>

        <p className="mt-10 text-center font-heading text-xl font-semibold text-accent sm:text-2xl">
          {manifest.closing}
        </p>
      </div>
    </section>
  );
}
