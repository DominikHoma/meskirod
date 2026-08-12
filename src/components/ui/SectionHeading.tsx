type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {id && <span id={id} className="sr-only">{title}</span>}
      {eyebrow && (
        <span className="mb-3 block font-heading text-sm uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">{subtitle}</p>
      )}
    </div>
  );
}
