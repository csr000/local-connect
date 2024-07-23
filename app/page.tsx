import Camp from "@/components/Camp";
import Clients from "@/components/Clients";
import Features from "@/components/Features";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      {/* <Guide /> */}
      <Features />
      <Clients />
    </>
  );
}
