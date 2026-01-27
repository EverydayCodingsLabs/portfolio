// pages/ContactPage.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Separator from "../components/separator";
import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { config } from "../config/config";

export const metadata: Metadata = {
	metadataBase: new URL("https://everydaycodings.com"),
	title: "Contact",
	description: "Get in touch with Kumar Saksham via email or schedule a meet.",
	alternates: {
		canonical: "/contact",
	},
	openGraph: {
		title: "Contact Kumar Saksham",
		description:
			"Find and connect with Kumar Saksham via email or book a meeting.",
		url: "https://everydaycodings.com/contact",
		siteName: "Kumar Saksham's Portfolio",
		images: [
			{
				url: "https://cdn.everydaycodings.com/open-graph/business-card.png",
				width: 1200,
				height: 630,
				alt: "Contact Kumar Saksham",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Contact Kumar Saksham",
		description: "Connect with Kumar Saksham via email or schedule a meet.",
		images: ["https://cdn.everydaycodings.com/open-graph/business-card.png"],
		creator: "@everydaycodings",
		creatorId: "@everydaycodings",
		site: "@everydaycodings",
		siteId: "@everydaycodings",
	},
};

export default function ContactPage() {
	return (
		<section>
			<h1 className='font-medium text-2xl mb-6 tracking-tight font-["monospace"]'>
				Contact 📧
			</h1>

			{/* Email Contact */}
			<div className="prose prose-neutral dark:prose-invert">
				<p>Feel free to reach out to me via email:</p>
				<div className="flex items-center mb-4">
					<EnvelopeSimple size={24} />
					<a
						href={`mailto:${config.socials.email}`}
						className="underline text-sm ml-1"
					>
						{config.socials.email}
					</a>
				</div>

				<Separator />
			</div>
		</section>
	);
}
