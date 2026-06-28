import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about-us", "routes/about-us.tsx"),
  route("portfolio", "routes/portfolio.tsx"),
  route("portfolio/:slug", "routes/portfolio-project.tsx"),
  route("food-hospitality", "routes/food-hospitality.tsx"),
  route("engineering-construction", "routes/engineering-construction.tsx"),
] satisfies RouteConfig;
