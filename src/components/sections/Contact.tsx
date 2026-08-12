"use client";

import { useState, FormEvent } from "react";
import { site } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const subject = encodeURIComponent(`Wiadomość od ${name} — Męski Ród`);
    const body = encodeURIComponent(
      `Imię: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeading
          id="kontakt"
          eyebrow="Kontakt"
          title="Kontakt"
          subtitle="Napisz do nas — odpowiemy dyskretnie i profesjonalnie"
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-foreground">
              Dane kontaktowe
            </h3>
            <ul className="space-y-3 text-muted">
              <li>
                <span className="text-sm text-secondary">Email</span>
                <br />
                <a
                  href={`mailto:${site.email}`}
                  className="text-foreground transition-colors hover:text-accent"
                >
                  {site.email}
                </a>
              </li>
              {site.phone && (
                <li>
                  <span className="text-sm text-secondary">Telefon</span>
                  <br />
                  <a
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    className="text-foreground transition-colors hover:text-accent"
                  >
                    {site.phone}
                  </a>
                </li>
              )}
            </ul>
            <p className="mt-6 text-sm text-muted">{site.responseTime}</p>
            <p className="mt-4 rounded-lg border border-secondary/20 bg-surface p-4 text-sm text-muted">
              Wszystkie rozmowy są poufne. Twoje dane nie będą udostępniane
              osobom trzecim bez Twojej zgody.
            </p>
          </div>

          <div>
            {submitted ? (
              <div className="card-surface text-center">
                <p className="font-heading text-lg text-accent">
                  Dziękujemy za wiadomość
                </p>
                <p className="mt-2 text-sm text-muted">
                  Jeśli otworzyła się aplikacja pocztowa, wyślij wiadomość.
                  Wkrótce się z Tobą skontaktujemy.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm text-muted"
                  >
                    Imię
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-secondary/30 bg-surface px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="Twoje imię"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm text-muted"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-secondary/30 bg-surface px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="twoj@email.pl"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block text-sm text-muted"
                  >
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-y rounded-lg border border-secondary/30 bg-surface px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="Opisz krótko, w czym możemy pomóc..."
                  />
                </div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="rodo"
                    name="rodo"
                    required
                    className="mt-1 h-4 w-4 rounded border-secondary/30 bg-surface accent-accent"
                  />
                  <label htmlFor="rodo" className="text-xs text-muted">
                    Wyrażam zgodę na przetwarzanie moich danych osobowych w
                    celu udzielenia odpowiedzi na zapytanie, zgodnie z
                    obowiązującymi przepisami o ochronie danych osobowych.
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-accent px-6 py-3 font-semibold text-background transition-colors hover:bg-accent-hover sm:w-auto"
                >
                  Wyślij wiadomość
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
