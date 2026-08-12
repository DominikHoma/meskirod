import { Hero } from "@/components/sections/Hero";
import { Manifest } from "@/components/sections/Manifest";
import { Mission } from "@/components/sections/Mission";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Manifest />
      <Mission />
      <Services />
      <HowItWorks />
      <CtaBanner />
      <Contact />
    </>
  );
}
