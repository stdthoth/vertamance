import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("food-hospitality", "routes/food-hospitality.tsx"),
  route("engineering-construction", "routes/engineering-construction.tsx"),
] satisfies RouteConfig;
