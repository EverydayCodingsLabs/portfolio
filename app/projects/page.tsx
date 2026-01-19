import type { Metadata } from "next";
import ProjectCard from "../components/project-card";

export const metadata: Metadata = {
	metadataBase: new URL("https://everydaycodings.com"),
	title: "Projects",
	description:
		"Explore Kumar Saksham's projects, including MonkCapital and various open-source contributions.",
	keywords: [
		"Kumar Saksham Projects",
		"Web Development Projects",
		"React Projects",
		"Next.js Projects",
		"Open Source",
		"Portfolio",
		"Software Projects",
	],
	alternates: {
		canonical: "/projects",
	},
	openGraph: {
		title: "Kumar Saksham's Projects",
		description:
			"Discover the latest projects built by Kumar Saksham, including AI and open-source contributions.",
		url: "https://everydaycodings.com/projects",
		siteName: "Kumar Saksham's Portfolio",
		images: [
			{
				url: "https://cdn.everydaycodings.com/open-graph/business-card.png",
				width: 1200,
				height: 630,
				alt: "Kumar Saksham's Projects",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Kumar Saksham's Projects",
		description:
			"Explore a variety of projects and open-source contributions by Kumar Saksham.",
		images: ["https://cdn.everydaycodings.com/open-graph/business-card.png"],
		creator: "@everydaycodings",
		creatorId: "@everydaycodings",
		site: "@everydaycodings",
		siteId: "@everydaycodings",
	},
};

const projectsData = [
	{
		project: "MonkCapital",
		logo: "/logos/monkcapital.png",
		description:
			"MonkCapital is a B2B platform for travel agencies to manage bookings and payments. I have built the end to end frontend for the platform.",
		points: [
			"Building an AI-powered wealth management platform focused on long-term investing and portfolio analysis",
			"Designed scalable backend architecture for handling financial data, user portfolios, and analytics",
			"Implemented portfolio performance metrics, asset allocation tracking, and cash flow analysis",
			"Built secure APIs for managing user accounts, holdings, and transactions",
			"Developing data pipelines to ingest and normalize market and financial data",
			"Laying the foundation for AI-driven insights such as risk profiling and portfolio intelligence",
		],

		technologies: ["Python", "Django", "TypeScript", "NextJS", "Postgres"],
		website: "https://www.monkcapital.xyz",
		category: "Full Stack",
		workType: "Personal",
	},
	{
		project: "MimicMania",
		description:
			"MimicMania is a web application that allows you to generate speech and clone voices using text-to-speech technology. With MimicMania, you can create custom voices in a variety of languages and use them for a range of applications, from voiceovers to chatbots. ",
		points: [
			"Built a text-to-speech and voice cloning web application using deep learning models",
			"Implemented multi-language TTS support with customizable pitch, speed, and volume controls",
			"Integrated Tacotron 2 and WaveGlow for high-quality speech synthesis",
			"Developed voice cloning functionality using FastSpeech and MelGAN models",
			"Designed a user-friendly interface for quick voice generation and customization",
		],
		technologies: ["Python", "Django", "TTS", "Streamlit"],
		website: "https://github.com/everydaycodings/MimicMania",
		category: "Artificial Intelligence",
		workType: "Personal",
	},
	{
		project: "StableFusion",
		description:
			"StableFusion is a web application that allows you to generate images using AI. With StableFusion, you can create custom images in a variety of styles and use them for a range of applications, from art to design.",
		points: [
			"Built an AI-powered image generation platform based on Stable Diffusion",
			"Implemented text-to-image, image-to-image, and inpainting workflows",
			"Added support for instruct-pix2pix and textual inversion for advanced image control",
			"Integrated ControlNet with OpenPose Editor for pose-guided image generation",
			"Enabled image upscaling, CLIP interrogator, and image metadata inspection",
			"Implemented model conversion tools for ckpt and safetensors to diffusers format",
			"Allowed users to add and manage custom diffusers models",
		],

		technologies: ["Python", "Django", "Stable Diffusion", "Streamlit"],
		website: "https://github.com/NeuralRealm/StableFusion",
		category: "Artificial Intelligence",
		workType: "Personal",
	},
];

// const openSourceData = [
// {
// 	project: "Maya",
// 	logo: "https://cdn.everydaycodings.com/logos/maya.png",
// 	description:
// 		"Maya is a project that helps users manage their pocket money, track expenses, and set savings goals.",
// 	technologies: ["React", "Node.js", "Express", "TypeScript"],
// 	website: "https://github.com/maya-manager",
// },
// {
// 	project: "Multi Email",
// 	logo: "https://cdn.everydaycodings.com/logos/multiEmail.png",
// 	description:
// 		"Multi Email is a platform that allows users to connect and manage multiple email services in one place.",
// 	technologies: ["React", "Node.js", "Express", "OAuth", "TypeScript"],
// 	website: "https://github.com/MultiEmail/",
// },
// ];

export default function ProjectsPage() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: "Kumar Saksham's Projects",
		description:
			"Portfolio of projects built by Kumar Saksham, including web applications and open-source contributions.",
		url: "https://everydaycodings.com/projects",
		author: {
			"@type": "Person",
			name: "Kumar Saksham",
			url: "https://everydaycodings.com",
		},
		mainEntity: {
			"@type": "ItemList",
			itemListElement: projectsData.map((project, index) => ({
				"@type": "ListItem",
				position: index + 1,
				item: {
					"@type": "SoftwareApplication",
					name: project.project,
					description: project.description,
					applicationCategory: "WebApplication",
					url: project.website,
				},
			})),
		},
	};

	return (
		<section>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<h1 className="font-medium text-2xl mb-4 tracking-tight">Projects 🚀</h1>

			{/* Projects Section */}
			<div className="prose prose-neutral dark:prose-invert">
				{projectsData.map((project, index) => (
					<ProjectCard
						key={index}
						title={project.project}
						logo={project.logo}
						description={project.description}
						points={project.points}
						technologies={project.technologies}
						website={project.website}
						category={project.category}
						workType={project.workType}
					/>
				))}
			</div>

			{/* Open Source Contributions Section */}
			{/* <h2 className="font-medium text-2xl mb-4">Open Source Contributions</h2>
      <p className="prose prose-neutral dark:prose-invert">
        These are various open-source projects maintained by me, as well as
        those to which I have contributed throughout my programming journey.
      </p>
      <div className="prose prose-neutral dark:prose-invert mt-4">
        {openSourceData.map((contribution, index) => (
          <ProjectCard
            key={index}
            title={contribution.project}
            logo={contribution.logo}
            description={contribution.description}
            technologies={contribution.technologies}
            website={contribution.website}
          />
        ))}
      </div> */}
		</section>
	);
}
