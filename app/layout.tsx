import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { GoogleAnalytics } from "@next/third-parties/google";

import { PreloadResources } from "./preload";
import Cmdk from "./components/CmdK";
import Footer from "./components/footer";

export const metadata: Metadata = {
	metadataBase: new URL("https://everydaycodings.com"),
	title: {
		default: "Kumar Saksham",
		template: "%s | Kumar Saksham",
	},
	description:
		"Passionate Backend Developer from India. On the way to master programming",
	openGraph: {
		title: "Kumar Saksham",
		description:
			"Passionate Backend Developer from India. On the way to master programming.",
		url: "https://everydaycodings.com",
		siteName: "Kumar Saksham's Portfolio",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "/ogs/ogs-bg.png",
				width: 1200,
				height: 630,
				alt: "Kumar Saksham Backend Developer",
			},
		],
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
			"Passionate Backend Developer from India. On the way to master programming.",
		images: ["/ogs/ogs-bg.png"],
	},
	icons: {
		icon: [
			{
				media: "(prefers-color-scheme: light)",
				url: "/favicon/favicon.png",
				href: "/favicon/favicon.png",
				sizes: "96x96",
				type: "image/png",
				rel: "icon",
			},
			{
				media: "(prefers-color-scheme: light)",
				url: "/favicon/favicon.png",
				type: "image/png",
				rel: "icon",
			},
			{
				media: "(prefers-color-scheme: dark)",
				url: "/favicon/favicon-dark.png",
				href: "/favicon/favicon-dark.png",
				sizes: "96x96",
				type: "image/png",
				rel: "icon",
			},
			{
				media: "(prefers-color-scheme: dark)",
				url: "/favicon/favicon.png",
				type: "image/png",
				rel: "icon",
			},
		],
		shortcut: [
			{
				media: "(prefers-color-scheme: light)",
				url: "/favicon/favicon.png",
				href: "/favicon/favicon.png",
			},
			{
				media: "(prefers-color-scheme: dark)",
				url: "/favicon/favicon.png",
				href: "/favicon/favicon.png",
			},
		],
		apple: [
			{
				media: "(prefers-color-scheme: light)",
				url: "/favicon/favicon.png",
				href: "/favicon/favicon.png",
				sizes: "180x180",
				type: "image/png",
			},
			{
				media: "(prefers-color-scheme: dark)",
				url: "/favicon/favicon.png",
				href: "/favicon/favicon.png",
				sizes: "180x180",
				type: "image/png",
			},
		],
	},
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={cx(
				"text-black bg-white dark:text-white dark:bg-[#111010]",
				GeistSans.variable,
				GeistMono.variable
			)}
		>
			<head>
				<script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
				></script>
			</head>
			<body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-auto px-4 mt-8">
				<main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
					<Cmdk />
					<Navbar />
					{children}
					<Footer />

					<PreloadResources />
				</main>
			</body>
			{process.env.GOOGLE_ANALYTICS_ID &&
				process.env.NODE_ENV === "production" && (
					<GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID} />
				)}
		</html>
	);
}
