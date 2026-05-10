import type { Metadata } from "next";
import Image from "next/image";
import GitHubCalendar from "react-github-calendar";
import ArrowIcon from "./components/ArrowIcon";
import Badge from "./components/Badge";
import ExperienceCounter from "./components/experience-counter";
import Separator from "./components/separator";
import { config } from "./config/config";

export const metadata: Metadata = {
  metadataBase: new URL("https://everydaycodings.com"),
  title: config.profile.name,
  description:
    "I'm a Full Stack Web Developer from India, trying to make the internet a bit cooler one website at a time.",
  keywords: [
    config.profile.name,
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Software Engineer",
    "India Developer",
    "Mohali Developer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: config.profile.name,
    description:
      "I'm a Full Stack Web Developer from India, trying to make the internet a bit cooler one website at a time.",
    url: "https://everydaycodings.com",
    siteName: `${config.profile.name}'s Portfolio`,
    images: [
      {
        url: "https://cdn.everydaycodings.com/open-graph/business-card.png",
        height: 630,
        alt: config.profile.name,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.profile.name,
    description:
      "I'm a Full Stack Web Developer from India, trying to make the internet a bit cooler one website at a time.",
    images: ["https://cdn.everydaycodings.com/open-graph/business-card.png"],
    creator: "@everydaycoding",
    creatorId: "@everydaycoding",
    site: "@everydaycoding",
    siteId: "@everydaycoding",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: config.profile.name,
    url: "https://everydaycodings.com",
    image: "https://cdn.everydaycodings.com/open-graph/business-card.png",
    jobTitle: "Full Stack Web Developer",
    worksFor: [
      {
        "@type": "Organization",
        name: "Monk Capital",
        url: config.companies.monkCapital,
      },
      {
        "@type": "Organization",
        name: "LokKatha",
        url: config.companies.lokKatha,
      },
    ],
    sameAs: [
      config.socials.github,
      config.socials.twitter,
      config.socials.linkedin,
    ],
    knowsAbout: [
      "Full Stack Development",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Web Development",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mohali",
      addressCountry: "India",
    },
  };

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="mb-6">
        <div className="flex items-center gap-3 mb-2 flex-wrap">
          <h1 className='font-medium text-2xl tracking-tight font-["monospace"]'>
            Hello, I'm {config.profile.name} 👋
          </h1>
          {config.profile.availableForFreelance && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-800 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for opportunities
            </span>
          )}
        </div>
        <p className="text-lg prose prose-neutral dark:prose-invert">
          I’m an AI-focused Backend Engineer from Sahibganj, India, with{" "}
          <ExperienceCounter />. I build AI-backed products for finance,
          cultural knowledge, and data-heavy workflows.
        </p>
      </header>

      <Separator />

      <div className="mb-8 prose prose-neutral dark:prose-invert">
        <h2>Professional Work</h2>

        <p>
          I work across{" "}
          <strong>AI, backend systems, finance, and cultural knowledge</strong>.
          I’m currently a <strong>BCA student</strong> and the{" "}
          <strong>founder</strong> of{" "}
          <span className="not-prose">
            <Badge href={config.companies.monkCapital}>
              <Image
                src="/logos/monkcapital.png"
                alt=""
                height={18}
                width={18}
                className={"pr-1"}
                aria-hidden="true"
              />
              Monk Capital
            </Badge>
          </span>{" "}
          and{" "}
          <span className="not-prose">
            <Badge href={config.companies.lokKatha}>
              <Image
                src="/logos/lokkatha.png"
                alt=""
                height={18}
                width={18}
                className={"pr-1"}
                aria-hidden="true"
              />
              LokKatha
            </Badge>
          </span>
          .
        </p>

        <p>
          At{" "}
          <span className="not-prose">
            <Badge href={config.companies.monkCapital}>
              <Image
                src="/logos/monkcapital.png"
                alt=""
                height={18}
                width={18}
                className={"pr-1"}
                aria-hidden="true"
              />
              Monk Capital
            </Badge>
          </span>
          , I’m designing and developing{" "}
          <strong>
            AI-powered backend systems, financial data pipelines, and analytics
            engines
          </strong>{" "}
          that turn complex portfolio data into clear, actionable insights.
        </p>
        <p>
          With{" "}
          <span className="not-prose">
            <Badge href={config.companies.lokKatha}>
              <Image
                src="/logos/lokkatha.png"
                alt=""
                height={18}
                width={18}
                className={"pr-1"}
                aria-hidden="true"
              />
              LokKatha
            </Badge>
          </span>
          , I’m building a searchable archive for regional folklore, mythical
          entities, rituals, and cultural references.
        </p>
        <p>
          Alongside building my startup, I’ve done{" "}
          <strong>freelance backend and full-stack work</strong> on Fiverr,
          shipping production-ready features, dashboards, and automation tools
          for early-stage clients.
        </p>
      </div>

      <Separator />

      <div className="mb-8 prose prose-neutral dark:prose-invert">
        <h2>What Makes Me Different</h2>
        <p>
          I'm not just another developer. I take full ownership of every project
          I work on, which can be seen in my startup. I approach problems with
          both a technical and business mindset—I understand that great code
          means nothing if it doesn't solve real problems.
        </p>
        <p>
          While I embrace AI-assisted development, I do it differently. I
          leverage AI to build powerful systems faster, but always with proper
          supervision, code review, and architectural oversight. This allows me
          to maintain quality while maximizing productivity—the best of both
          worlds.
        </p>
      </div>

      <Separator />

      {/* <div className="mb-8 prose prose-neutral dark:prose-invert">
				<h2>Leadership & Community</h2>
				<p>
					As the Team Lead at the Innovation Club of{" "}
					<a href="https://ccetdiploma.edu.in/" target="_blank">
						CCET College
					</a>
					, I've learned how to lead a team and stay organized. I also assist in{" "}
					<a href="https://chdtechnicaleducation.gov.in/" target="_blank">
						ICT
					</a>{" "}
					training sessions, teaching government employees essential computer
					skills. Additionally, I help organize the <i>Talent Hunt</i> cultural
					program and serve as the student coordinator for <i>Jhalak</i>, our
					college's digital newsletter.
				</p>
			</div>

			<Separator /> */}

      {/* <div className="mb-8 prose prose-neutral dark:prose-invert">
				<h2>Personal Interests</h2>
				<p>
					Outside of work, I enjoy exploring Vedic astrology, playing the
					guitar, and spending time with friends. I'm also pursuing a diploma in
					Computer Science Engineering (CSE).
				</p>
			</div>

			<Separator /> */}

      <div className="mb-8 prose prose-neutral dark:prose-invert">
        <h2>GitHub Contributions</h2>
        <GitHubCalendar username="everydaycodings" />
      </div>

      <Separator />
      {/*
			<div className="mb-8 prose prose-neutral dark:prose-invert">
				<h2>Writing</h2>
				<p>
					I've started writing <Link href="/blog">blogs</Link> to help others
					improve their engineering skills. Stay tuned for more content!
				</p>
			</div>
			*/}

      <div className="prose prose-neutral dark:prose-invert">
        <article className="text-xs sm:hidden lg:block">
          Press ⌘+K to navigate with your keyboard.
        </article>
      </div>

      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href={config.socials.twitter}
          >
            <ArrowIcon />
            <p className="h-7 ml-2">Follow me</p>
          </a>
        </li>
      </ul>

      <div>
        <a
          className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all text-neutral-600 dark:text-neutral-300 mt-3"
          rel="noopener noreferrer"
          target="_blank"
          href={`mailto:${config.socials.email}?subject=Hello Saksham!`}
        >
          <p className="h-7">
            <span className="mr-2 text-neutral-600">📧</span>
            {config.socials.email}
          </p>
        </a>
      </div>
    </section>
  );
}
