import type { Route } from "./+types/xsky-cafe-lounge";
import XskyCafeLoungeScreen from "../components/XskyCafeLoungeScreen";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Xsky Cafe & Lounge - Vertmance" },
    {
      name: "description",
      content:
        "Xsky Cafe & Lounge. Elevated dining, sophisticated leisure, and premium hospitality experiences.",
    },
  ];
}

export default function XskyCafeLounge() {
  return <XskyCafeLoungeScreen />;
}
