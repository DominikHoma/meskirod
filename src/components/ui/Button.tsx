import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

const variants = {
  primary:
    "bg-accent text-background hover:bg-accent-hover font-semibold",
  secondary:
    "bg-surface-light text-foreground hover:bg-secondary/30 border border-secondary/30",
  outline:
    "border border-accent/50 text-accent hover:bg-accent/10",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm transition-colors sm:text-base ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
