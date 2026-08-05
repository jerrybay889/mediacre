import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return { name: "MEDIACRE", short_name: "MEDIACRE", description: "OOH & Brand Experience Agency", start_url: "/", display: "standalone", background_color: "#f7f7f4", theme_color: "#165dff", icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }] };
}

