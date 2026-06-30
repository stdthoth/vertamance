import type { Route } from "./+types/business.$slug";
import BusinessComingSoonScreen from "../components/BusinessComingSoonScreen";

export function meta({ params }: Route.MetaArgs) {
  return [
    {
      title: `${
        params.slug ? params.slug.replace(/-/g, " ") : "Business"
      } - Vertmance`,
    },
    {
      name: "description",
      content: "Forward-compatible business page route for Vertmance.",
    },
  ];
}

export default function BusinessRoute() {
  return <BusinessComingSoonScreen />;
}
