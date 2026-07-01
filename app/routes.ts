import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about-us", "routes/about-us.tsx"),
  route("contact-us", "routes/contact-us.tsx"),
  route("portfolio", "routes/portfolio.tsx"),
  route("portfolio/:slug", "routes/portfolio-project.tsx"),
  route("oke-keke", "routes/oke-keke.tsx"),
  route("nassaco-commodity", "routes/nassaco-commodity.tsx"),
  route("owonikoko-ranch-farms", "routes/owonikoko-ranch-farms.tsx"),
  route(
    "owonikoko-ranch-farms/enroll",
    "routes/owonikoko-ranch-farms.enroll.tsx",
  ),
  route(
    "owonikoko-ranch-farms/visit",
    "routes/owonikoko-ranch-farms.visit.tsx",
  ),
  route("food-hospitality", "routes/food-hospitality.tsx"),
  route("xsky-cafe-lounge", "routes/xsky-cafe-lounge.tsx"),
  route("group-president-biography", "routes/group-president-biography.tsx"),
  route("leadership/:slug", "routes/leadership.$slug.tsx"),
  route("business/:slug", "routes/business.$slug.tsx"),
  route("pro-explorer-peak", "routes/pro-explorer-peak.tsx"),
  route("engineering-construction", "routes/engineering-construction.tsx"),
] satisfies RouteConfig;
