import type { Route } from "./+types/pro-explorer-peak";
import ProExplorerPeakScreen from "../components/ProExplorerPeakScreen";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pro Explorer Peak - Vertmance" },
    {
      name: "description",
      content:
        "Pro Explorer Peak. Redefining the horizon with blueprint-to-reality development and modern real estate execution.",
    },
  ];
}

export default function ProExplorerPeakRoute() {
  return <ProExplorerPeakScreen />;
}
