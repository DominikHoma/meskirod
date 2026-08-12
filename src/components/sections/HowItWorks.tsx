import { steps } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowItWorks() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeading
          id="jak-dzialamy"
          eyebrow="Jak działamy"
          title="Jak działamy"
          subtitle="Trzy proste kroki do wsparcia, którego potrzebujesz"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((item) => (
            <div key={item.step} className="relative text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent bg-accent/10 font-heading text-xl font-bold text-accent">
                {item.step}
              </div>
              <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
