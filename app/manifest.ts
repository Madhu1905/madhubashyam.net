import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { asset } from "@/lib/base-path";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.role}`,
    short_name: site.shortName,
    description: site.description,
    start_url: asset("/"),
    display: "standalone",
    background_color: "#0a0a0f",
    theme_color: "#0a0a0f",
    icons: [{ src: asset("/favicon.ico"), sizes: "any", type: "image/x-icon" }],
  };
}
