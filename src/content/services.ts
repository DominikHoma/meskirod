export type Service = {
  id: string;
  title: string;
  description: string;
  icon: "brain" | "heart" | "users" | "scale" | "shield" | "circle";
};

export const services: Service[] = [
  {
    id: "psychologia",
    title: "Wsparcie psychologiczne i psychoterapia",
    description:
      "Indywidualna praca z psychologiem lub psychoterapeutą. Bezpieczna przestrzeń na emocje, lęk, depresję i trudne doświadczenia.",
    icon: "brain",
  },
  {
    id: "kryzys",
    title: "Kryzys emocjonalny, stres, wypalenie",
    description:
      "Pomoc w momentach, gdy życie staje się nie do zniesienia. Wsparcie w wypaleniu zawodowym, chronicznym stresie i poczuciu pustki.",
    icon: "heart",
  },
  {
    id: "relacje",
    title: "Relacje — partnerstwo, ojcostwo, rodzina",
    description:
      "Budowanie i naprawa więzi z partnerką, dziećmi, ojcem. Praca nad komunikacją, granicami i odpowiedzialnością rodzinną.",
    icon: "users",
  },
  {
    id: "prawo",
    title: "Pomoc prawna i doradztwo",
    description:
      "Wsparcie w sprawach rozwodowych, alimentacyjnych, pracy czy długów. Orientacja w trudnych decyzjach prawnych.",
    icon: "scale",
  },
  {
    id: "uzaleznienia",
    title: "Terapia uzależnień",
    description:
      "Wsparcie w wyjściu z nałogu — alkohol, narkotyki, hazard, uzależnienia behawioralne. Bez osądzania, z konkretnym planem.",
    icon: "shield",
  },
  {
    id: "grupy",
    title: "Grupy wsparcia męskiej solidarności",
    description:
      "Spotkania mężczyzn w podobnej sytuacji. Braterskie wsparcie, wymiana doświadczeń i poczucie, że nie jesteś z tym sam.",
    icon: "circle",
  },
];
