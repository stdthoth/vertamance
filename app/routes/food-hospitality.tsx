import type { Route } from "./+types/food-hospitality";
import FoodHospitalityScreen from "../components/FoodHospitalityScreen";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Food, Hospitality & Agriculture - Vertmance" },
    {
      name: "description",
      content:
        "Delivering Experience in Food, Hospitality & Agriculture. From premium dining experiences to sustainable farming and training.",
    },
  ];
}

export default function FoodHospitality() {
  return <FoodHospitalityScreen />;
}
