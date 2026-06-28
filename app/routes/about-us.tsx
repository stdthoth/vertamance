import type { Route } from "./+types/about-us";
import AboutUsScreen from "../components/AboutUsScreen";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us - Vertmance" },
    {
      name: "description",
      content:
        "Meet Vertmance's leadership, mission, and long-term strategy across the group.",
    },
  ];
}

export default function AboutUs() {
  return <AboutUsScreen />;
}
