"use client";

import { useState } from "react";
import { navigation } from "@/content/site";
import { LogoWithText } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-secondary/20 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <LogoWithText />

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <Button href="#kontakt" variant="primary" className="!px-4 !py-2 !text-sm">
            Szukam wsparcia
          </Button>
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-foreground transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-secondary/20 bg-surface px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-2 text-muted transition-colors hover:text-accent"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Button
                href="#kontakt"
                variant="primary"
                className="w-full text-center"
              >
                Szukam wsparcia
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
