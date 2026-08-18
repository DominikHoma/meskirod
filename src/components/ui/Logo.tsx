import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <Image
      src="/logo-mark.png"
      alt={`${site.name} — logo`}
      width={200}
      height={200}
      className={className}
      priority
    />
  );
}

export function LogoWithText({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Logo className={compact ? "h-8 w-8" : "h-10 w-10"} />
      <div className="flex flex-col">
        <span className="font-heading text-lg font-semibold leading-tight text-foreground sm:text-xl">
          {site.name}
        </span>
        {!compact && (
          <span className="text-xs text-muted sm:text-sm">{site.tagline}</span>
        )}
      </div>
    </Link>
  );
}
