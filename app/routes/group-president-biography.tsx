import type { Route } from "./+types/group-president-biography";
import PresidentBiographyScreen from "../components/PresidentBiographyScreen";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Michael Olubusayo Oluwagbemi, FMVR - Vertmance" },
    {
      name: "description",
      content:
        "Biography page for Vertmance Group President & Chief Executive Officer Michael Olubusayo Oluwagbemi, FMVR.",
    },
  ];
}

export default function GroupPresidentBiography() {
  return <PresidentBiographyScreen />;
}
