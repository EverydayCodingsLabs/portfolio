import type { Metadata } from "next";
import WorkExperienceItem from "../components/work-experience-item";
import EducationItem from "../components/education-item";
import VolunteeringItem from "../components/volunteer-item";
import { config } from "../config/config";

export const metadata: Metadata = {
	metadataBase: new URL("https://everydaycodings.com"),
	title: "Resume",
	description:
		"A summary of Kumar Saksham's corporate contributions, skills, and experience as a Full-Stack Developer, including work with Tap Invest, Shri Property, and A2INFINITE.",
	keywords: [
		"Kumar Saksham Resume",
		"Full Stack Developer Resume",
		"Web Developer CV",
		"React Developer Resume",
		"Software Engineer Resume",
		"Work Experience",
	],
	alternates: {
		canonical: "/resume",
	},
	openGraph: {
		type: "article",
		url: `https://everydaycodings.com/resume`,
		title: "Kumar Saksham’s Resume",
		siteName: "Kumar Saksham's Portfolio",
		description:
			"Detailed resume of Kumar Saksham, Full-Stack Developer, with work experience, projects, and educational background.",
		images: [
			{
				url: `https://cdn.everydaycodings.com/open-graph/business-card.png`,
				width: 1200,
				height: 630,
				alt: "Kumar Saksham's Resume",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Kumar Saksham's Resume",
		description:
			"Check out Kumar Saksham’s Full-Stack Developer resume, showcasing professional contributions and achievements.",
		images: ["https://cdn.everydaycodings.com/open-graph/business-card.png"],
		creator: "@everydaycodings",
		creatorId: "@everydaycodings",
		site: "@everydaycodings",
		siteId: "@everydaycodings",
	},
};

const resumeData = {
	workExperience: [
		{
			company: "Monk Capital",
			logo: "/logos/monkcapital.png",
			location: "India",
			website: config.companies.monkCapital,
			positions: [
				{
					role: "Founder & Builder",
					period: "Sep 2025 - Present",
					workType: "Self-employed",
					technologies: [
						"Python",
						"Django",
						"FastAPI",
						"Next.js",
						"TypeScript",
						"PostgreSQL",
						"Docker",
						"Cloud Deployment",
					],
					responsibilities: [
						"Building an AI-powered wealth management platform focused on portfolio analytics and long-term investing",
						"Designed backend architecture for handling financial data, user portfolios, and analytics",
						"Implemented portfolio performance metrics, asset allocation tracking, and cash-flow analysis",
						"Developing scalable APIs and data pipelines for financial and market data ingestion",
						"Laying the groundwork for AI-driven insights such as risk profiling and intelligent portfolio analysis",
					],
				},
			],
		},

		{
			company: "Independent Freelancer",
			logo: "",
			location: "Remote",
			website: "https://www.fiverr.com",
			positions: [
				{
					role: "Freelance Backend & Data Engineer",
					period: "2023 - Mar 2025",
					workType: "Contract",
					technologies: [
						"Python",
						"Django",
						"FastAPI",
						"REST APIs",
						"PostgreSQL",
						"Data Analysis",
						"Automation",
					],
					responsibilities: [
						"Built backend services and APIs using Python for data-driven applications",
						"Developed automation scripts and pipelines to process, clean, and analyze data",
						"Implemented data analysis workflows to generate insights and reports for clients",
						"Designed and optimized database schemas and queries for performance and reliability",
						"Worked independently with clients to deliver production-ready backend solutions",
					],
				},
			],
		}

	],

	education: [
		{
			institution: "Sahibganj College",
			logo: "",
			degree: "Bachelor of Computer Application (BCA)",
			period: "2022 - Present",
			location: "Sahibganj, Jharkhand, India",
		},
		{
			institution: "Goethals Public School",
			logo: "",
			degree: "Secondary School (CBSE Board)",
			period: "2019 - 2021",
			location: "Sahibganj, Jharkhand, India",
		},
		{
			institution: "St. Xavier’s School",
			logo: "",
			degree: "Primary & Middle School Education",
			period: "2009 - 2018",
			location: "Sahibganj, Jharkhand, India",
		},
	],


	volunteering: [
		{
			organization: "Open Source Community",
			logo: "",
			role: "Open Source Contributor",
			period: "2023 - Present",
			location: "Remote",
			responsibilities: [
				"Contributed to open-source projects related to Python, backend systems, and AI",
				"Developed and maintained features through code contributions and pull requests",
				"Improved code quality, performance, and documentation in collaborative environments",
				"Engaged with maintainers and contributors to review issues and propose improvements",
			],
		},
	],

};


export default function WorkPage() {
	return (
		<section>
			<div className="flex">
				<h1 className='font-medium text-2xl mb-2 tracking-tight font-["monospace"]'>
					My Resume 📝
				</h1>
			</div>

			{/* Work Section */}
			<div className="prose prose-neutral dark:prose-invert">
				<h2 className="font-medium text-2xl mb-4">Work Experience</h2>
				{resumeData.workExperience.map((job, index) => (
					<WorkExperienceItem key={index} job={job} />
				))}
			</div>

			<hr className="my-6 border-neutral-100 dark:border-neutral-800" />

			{/* Education Section */}
			<div className="prose prose-neutral dark:prose-invert">
				<h2 className="font-medium text-2xl mb-4">Education</h2>
				{resumeData.education.map((edu, index) => (
					<EducationItem key={index} edu={edu} />
				))}
			</div>

			<hr className="my-6 border-neutral-100 dark:border-neutral-800" />

			{/* Volunteering Section */}
			<div className="prose prose-neutral dark:prose-invert">
				<h2 className="font-medium text-2xl mb-4">Volunteering</h2>
				{resumeData.volunteering.map((volunteer, index) => (
					<VolunteeringItem key={index} volunteer={volunteer} />
				))}
			</div>
		</section>
	);
}
