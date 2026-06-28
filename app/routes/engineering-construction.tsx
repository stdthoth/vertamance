import type { Route } from "./+types/engineering-construction";
import EngineeringConstructionScreen from "../components/EngineeringConstructionScreen";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Engineering & Construction - Vertmance" },
    {
      name: "description",
      content:
        "Building Excellence in Engineering & Construction. From structural design to project delivery with precision and integrity.",
    },
  ];
}

export default function EngineeringConstruction() {
  return <EngineeringConstructionScreen />;
}
