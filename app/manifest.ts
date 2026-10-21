import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kumar Saksham",
    short_name: "Kumar Saksham",
    description:
      "India-based Backend Engineer specializing in AI systems, building AI-backed products for finance, cultural knowledge, and data-heavy workflows.",
    start_url: "/",
    id: "com.everydaycodings.portfolio",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicon/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
