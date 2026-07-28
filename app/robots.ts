import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://jyothi-swaroop.example.com/sitemap.xml",
    host: "https://jyothi-swaroop.example.com",
  };
}

export const metadata = {
  title: siteConfig.name,
};
