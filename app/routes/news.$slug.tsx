import type { Route } from "./+types/news.$slug";
import CompanyNewsScreen from "../components/CompanyNewsScreen";

export function meta({ params }: Route.MetaArgs) {
  const title = params.slug
    ? params.slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
    : "Company News";

  return [
    { title: `${title} - Vertmance News` },
    {
      name: "description",
      content: `Read the latest company news update regarding ${title} from Vertmance Resource Limited.`,
    },
  ];
}

export default function CompanyNewsRoute() {
  return <CompanyNewsScreen />;
}
