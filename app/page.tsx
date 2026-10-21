import {
  ArrowUpRight,
  CaretDown,
  EnvelopeSimple,
  FileText,
  GithubLogo,
  HardDrive,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Chip from "./components/chip";
import GitHubActivity from "./components/github-activity";
import Profile, { Roles } from "./components/profile";
import Section from "./components/section";
import { config } from "./config/config";
import { resumeData } from "./config/resume";

const description =
  "India-based Backend Engineer specializing in AI systems, building AI-backed products for finance, cultural knowledge, and data-heavy workflows.";

export const metadata: Metadata = {
  metadataBase: new URL("https://everydaycodings.com"),
  title: config.profile.name,
  description,
  keywords: [
    config.profile.name,
    "Backend Engineer",
    "AI Engineer",
    "Full Stack Developer",
    "Next.js Developer",
    "Python Developer",
    "India Developer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: config.profile.name,
    description,
    url: "https://everydaycodings.com",
    siteName: `${config.profile.name}'s Portfolio`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.profile.name,
    description,
    creator: "@everydaycodings",
    creatorId: "@everydaycodings",
    site: "@everydaycodings",
    siteId: "@everydaycodings",
  },
};

const yearsSince = (date: string) =>
  Math.floor((Date.now() - new Date(date).getTime()) / (365.25 * 864e5));

const connect = [
  { name: "GitHub", url: config.socials.github, icon: GithubLogo },
  { name: "X", url: config.socials.twitter, icon: XLogo },
  { name: "LinkedIn", url: config.socials.linkedin, icon: LinkedinLogo },
  { name: "Kaggle", url: config.socials.kaggle, icon: HardDrive },
  { name: "Mail", url: `mailto:${config.socials.email}`, icon: EnvelopeSimple },
];

function Company({
  href,
  logo,
  name,
}: { href: string; logo: string; name: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex translate-y-[3px] items-center gap-1 rounded-md border border-[var(--line)] bg-neutral-50 px-1.5 py-0.5 align-baseline text-sm leading-4 text-neutral-900 transition-colors hover:border-neutral-300 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-neutral-700"
    >
      <Image src={logo} alt="" width={14} height={14} aria-hidden="true" />
      {name}
    </a>
  );
}

const monk = (
  <Company
    href={config.companies.monkCapital}
    logo="/logos/monkcapital.png"
    name="MonkCapital"
  />
);
const lok = (
  <Company
    href={config.companies.lokKatha}
    logo="/logos/lokkatha.png"
    name="LokKatha"
  />
);

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: config.profile.name,
    alternateName: "everydaycodings",
    url: "https://everydaycodings.com",
    image: "https://everydaycodings.com/avatar.webp",
    jobTitle: "Backend Engineer, AI Systems",
    worksFor: [
      {
        "@type": "Organization",
        name: "MonkCapital",
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
      config.socials.kaggle,
    ],
    knowsAbout: [
      "Backend Engineering",
      "AI",
      "Python",
      "Next.js",
      "TypeScript",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sahibganj",
      addressCountry: "India",
    },
  };

  return (
    <div className="-mt-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div
        aria-hidden="true"
        className="rule-b -mx-5 px-5 py-5 sm:-mx-6 sm:px-6"
      >
        <div className="dots h-8 sm:h-24" />
      </div>

      <Profile name={config.profile.name}>
        <h1 className="text-balance text-[1.7rem] leading-tight font-light tracking-tight sm:text-4xl">
          {config.profile.name}
        </h1>
        <p className="mt-1 text-sm text-neutral-600 sm:text-base dark:text-neutral-400">
          <Roles items={config.profile.roles} />
        </p>
        {config.profile.availableForFreelance && (
          <p className="mt-1.5 flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-400">
            <span className="size-1.5 rounded-full bg-green-500" />
            Available for opportunities
          </p>
        )}
      </Profile>

      <Section title="About">
        <ul className="max-w-[68ch] list-disc space-y-3 pl-5 leading-relaxed text-neutral-700 marker:text-neutral-300 dark:text-neutral-300 dark:marker:text-neutral-600">
          <li>
            I'm a backend engineer based in Sahibganj, India, focused on
            building AI-driven products from the ground up: data pipelines,
            APIs and the interfaces that bring them to life. I've been writing
            code for {yearsSince(config.profile.codingStartDate)}+ years and
            shipping production systems for{" "}
            {yearsSince(config.profile.professionalStartDate)}+.
          </li>
          <li>
            As the founder of {monk}, I lead the engineering behind its wealth
            dashboard and IPO tracker, building the portfolio analytics,
            financial data pipelines and return metrics that turn complex
            financial data into decisions people can act on.
          </li>
          <li>
            I also build {lok}, a searchable archive of Indian folklore. I
            designed its content model to keep three thousand years of regional
            mythology structured, well-sourced and genuinely enjoyable to
            explore.
          </li>
          <li>
            Before starting my own ventures, I spent 2+ years freelancing,
            delivering backend services, automation and data workflows for
            early-stage startups.
          </li>
          <li>
            I use AI to move quickly, but I hold the work to a high bar: every
            system is designed with intent and every line is reviewed. I'm most
            interested in problems where good engineering makes a measurable
            difference. If that sounds like yours, let's talk.
          </li>
        </ul>
      </Section>

      <Section title="Products">
        <div className="space-y-12">
          {config.products.map((company) => (
            <div key={company.name}>
              <a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5"
              >
                <Image
                  src={company.logo}
                  alt=""
                  width={28}
                  height={28}
                  className="rounded-md border border-[var(--line)]"
                />
                <span className="text-xl font-medium tracking-tight group-hover:underline group-hover:underline-offset-4">
                  {company.name}
                </span>
                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                  className="text-neutral-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
              {company.banner && (
                <Image
                  src={company.banner}
                  alt=""
                  width={1500}
                  height={500}
                  sizes="(min-width: 640px) 740px, 100vw"
                  className="mt-4 aspect-[3/1] w-full rounded-lg border border-[var(--line)] object-cover"
                />
              )}
              <div
                className="mt-4 grid gap-5 sm:grid-cols-2"
              >
                {company.apps.map((app) => (
                  <a
                    key={app.url}
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <span className="block overflow-hidden rounded-lg border border-[var(--line)] bg-neutral-100 shadow-[0_8px_24px_-12px_rgb(0_0_0/0.25)] dark:bg-neutral-900">
                      <Image
                        src={app.image}
                        alt={`${app.name} screenshot`}
                        width={960}
                        height={600}
                        sizes="(min-width: 640px) 360px, 100vw"
                        className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                      />
                    </span>
                    <span className="mt-3 flex items-baseline justify-between gap-3">
                      <span className="font-medium">{app.name}</span>
                      <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
                        {new URL(app.url).host}
                      </span>
                    </span>
                    <span className="mt-0.5 block text-sm text-neutral-500 dark:text-neutral-400">
                      {app.blurb}
                    </span>
                  </a>
                ))}
              </div>
              <p className="mt-5 max-w-[68ch] leading-relaxed text-neutral-600 dark:text-neutral-400">
                {company.blurb}
              </p>
            </div>
          ))}
        </div>
        <Link
          href="/projects"
          className="mt-8 inline-block text-sm text-neutral-500 underline-offset-4 hover:text-neutral-900 hover:underline dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          All projects →
        </Link>
      </Section>

      <Section title="Experience">
        <div className="-my-3 divide-y divide-[var(--line)]">
          {resumeData.workExperience.flatMap((job) =>
            job.positions.map((position) => (
              <details key={job.company + position.role} className="group py-4">
                <summary className="flex cursor-pointer list-none items-start gap-3 [&::-webkit-details-marker]:hidden">
                  <span className="flex-1">
                    <span className="block font-medium">{job.company}</span>
                    <span className="block text-sm text-neutral-600 dark:text-neutral-400">
                      {position.role} · {position.workType}
                    </span>
                  </span>
                  <span className="pt-0.5 font-mono text-xs tabular-nums text-neutral-500 dark:text-neutral-400">
                    {position.period}
                  </span>
                  <CaretDown
                    size={16}
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-neutral-400 transition-transform group-open:rotate-180"
                  />
                </summary>
                <ul className="mt-3 max-w-[68ch] list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-neutral-700 marker:text-neutral-300 dark:text-neutral-300 dark:marker:text-neutral-600">
                  {position.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {position.technologies.map((tech) => (
                    <Chip key={tech} tech={tech} className="!text-xs" />
                  ))}
                </div>
              </details>
            )),
          )}
        </div>
      </Section>

      <Section title="Education">
        <ul className="-my-3 divide-y divide-[var(--line)]">
          {resumeData.education.map((edu) => (
            <li key={edu.institution} className="flex items-start gap-3 py-4">
              <span className="flex-1">
                <span className="block font-medium">{edu.institution}</span>
                <span className="block text-sm text-neutral-600 dark:text-neutral-400">
                  {edu.degree}
                </span>
              </span>
              <span className="pt-0.5 font-mono text-xs tabular-nums text-neutral-500 dark:text-neutral-400">
                {edu.period}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="GitHub Activity">
        <GitHubActivity username="everydaycodings" />
      </Section>

      <Section title="Connect">
        <ul className="flex flex-wrap gap-2">
          {[...connect, { name: "Resume", url: "/resume", icon: FileText }].map(
            ({ name, url, icon: Icon }) => (
              <li key={name}>
                <a
                  href={url}
                  {...(url.startsWith("http") && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="inline-flex h-9 items-center gap-2 rounded-lg border border-[var(--line)] px-3 text-sm shadow-[0_1px_2px_rgb(0_0_0/0.04)] transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900"
                >
                  <Icon size={16} />
                  {name}
                </a>
              </li>
            ),
          )}
        </ul>
      </Section>
    </div>
  );
}
