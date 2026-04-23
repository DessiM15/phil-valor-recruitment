import type { Metadata } from "next";
import CultureHero from "@/components/culture/CultureHero";
import CultureValues from "@/components/culture/CultureValues";
import TrainingSupport from "@/components/culture/TrainingSupport";
import ProductShelf from "@/components/culture/ProductShelf";
import AgentSpotlights from "@/components/culture/AgentSpotlights";

export const metadata: Metadata = {
  title: "Culture | Valor Financial Specialists",
  description:
    "Discover the Valor difference — independence, support, and community. Learn about our culture, training programs, and full product shelf.",
};

export default function CulturePage() {
  return (
    <>
      <CultureHero />
      <CultureValues />
      <TrainingSupport />
      <ProductShelf />
      <AgentSpotlights />
    </>
  );
}
