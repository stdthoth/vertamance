import type { Route } from "./+types/business";
import BusinessesScreen from "../components/BusinessesScreen";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Businesses - Vertmance" },
    {
      name: "description",
      content: "Explore the operating businesses within the Vertmance Group.",
    },
  ];
}

export default function Business() {
  return <BusinessesScreen />;
}
