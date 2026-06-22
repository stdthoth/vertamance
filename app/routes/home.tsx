import type { Route } from "./+types/home";
import HomeScreen from "../components/HomeScreen";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Vertamance - From Concept to Delivery. We Build With Purpose." },
    { name: "description", content: "We operate across multiple industries, creating sustainable value through disciplined management and long-term partnerships." },
  ];
}

export default function Home() {
  return <HomeScreen />;
}
