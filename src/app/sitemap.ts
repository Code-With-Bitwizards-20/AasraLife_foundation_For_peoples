import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aasralife.org";

  const routes = [
    "",
    "/about",
    "/mission-vision",
    "/impact",
    "/programs",
    "/programs/medical-aid",
    "/programs/education",
    "/programs/food-support",
    "/programs/womens-empowerment",
    "/programs/emergency-relief",
    "/programs/livelihood",
    "/apply-for-assistance",
    "/volunteer",
    "/donate",
    "/transparency",
    "/annual-reports",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/terms-and-conditions",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === "" || route === "/transparency" || route === "/impact"
        ? "daily"
        : "weekly",
    priority:
      route === ""
        ? 1.0
        : route.startsWith("/programs") || route === "/impact" || route === "/donate"
        ? 0.9
        : 0.7,
  }));
}
