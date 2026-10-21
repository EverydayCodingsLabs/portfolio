import "./global.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { GoogleAnalytics } from "@next/third-parties/google";

import Cmdk from "./components/CmdK";
import Footer from "./components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://everydaycodings.com"),
  applicationName: "Kumar Saksham Portfolio",
  title: {
    default: "Kumar Saksham",
    template: "%s | Kumar Saksham",
  },
  description:
    "AI-focused Backend Engineer from India, building AI-backed products for finance, cultural knowledge, and data-heavy workflows.",
  keywords: [
    "Kumar Saksham",
    "Backend Developer",
    "Full Stack Developer",
    "AI Engineer",
    "Next.js Developer",
    "TypeScript Developer",
    "India Developer",
  ],
  authors: [{ name: "Kumar Saksham", url: "https://everydaycodings.com" }],
  creator: "Kumar Saksham",
  publisher: "Kumar Saksham",
  openGraph: {
    title: "Kumar Saksham",
    description:
      "AI-focused Backend Engineer from India, building AI-backed products for finance, cultural knowledge, and data-heavy workflows.",
    url: "https://everydaycodings.com",
    siteName: "Kumar Saksham's Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Kumar Saksham",
    card: "summary_large_image",
    creator: "@everydaycodings",
    creatorId: "@everydaycodings",
    site: "@everydaycodings",
    siteId: "@everydaycodings",
    description:
      "AI-focused Backend Engineer from India, building AI-backed products for finance, cultural knowledge, and data-heavy workflows.",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.png", sizes: "96x96", type: "image/png" },
    ],
    apple: { url: "/favicon/apple-touch-icon.png", sizes: "180x180" },
  },
};

// Runs in <head> before paint so there is no flash of the wrong theme.
const themeScript = `(() => {
  const m = matchMedia("(prefers-color-scheme: dark)");
  const apply = () => {
    let t; try { t = localStorage.theme; } catch {}
    document.documentElement.classList.toggle("dark", t === "dark" || (t !== "light" && m.matches));
  };
  apply();
  m.addEventListener("change", apply);
  window.__applyTheme = apply;
})()`;

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(GeistSans.variable, GeistMono.variable)}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased text-black bg-white dark:text-white dark:bg-[#111010]">
        <div className="mx-auto flex min-h-dvh max-w-3xl flex-col border-x border-[var(--line)]">
          <Cmdk />
          <Navbar />
          <main className="flex min-w-0 flex-auto flex-col px-5 py-8 sm:px-6">
            {children}
          </main>
          <Footer />
        </div>
        {process.env.GOOGLE_ANALYTICS_ID &&
          process.env.NODE_ENV === "production" && (
            <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID} />
          )}
      </body>
    </html>
  );
}
