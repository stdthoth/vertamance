import type { Route } from "./+types/portfolio";
import PortfolioScreen from "../components/PortfolioScreen";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio - Vertmance" },
    {
      name: "description",
      content:
        "Explore Vertmance project portfolio across agriculture, engineering, investment, transport, entertainment, and education.",
    },
  ];
}

export default function Portfolio() {
  return <PortfolioScreen />;
}
