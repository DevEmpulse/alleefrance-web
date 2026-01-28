export const dynamic = "force-static";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/pagos/", "/api/"],
      },
    ],
    sitemap: "https://alleefrance.com/sitemap.xml",
  };
}
