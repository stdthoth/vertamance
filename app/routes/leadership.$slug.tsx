import type { Route } from "./+types/leadership.$slug";
import LeadershipProfileScreen from "../components/LeadershipProfileScreen";

export function meta({ params }: Route.MetaArgs) {
  return [
    {
      title: `${params.slug?.replace(/-/g, " ") ?? "Leadership Profile"} - Vertmance`,
    },
    {
      name: "description",
      content: "Leadership profile page for Vertmance executive team member.",
    },
  ];
}

export default function LeadershipProfileRoute() {
  return <LeadershipProfileScreen />;
}
