import { DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { config } from "../config/config";
import { resumeData } from "../config/resume";

export const metadata: Metadata = {
  metadataBase: new URL("https://everydaycodings.com"),
  title: "Resume",
  description:
    "A summary of Kumar Saksham's work across AI-focused backend systems, financial data products, folklore archives, and freelance engineering.",
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
      "Detailed resume of Kumar Saksham, AI-focused Backend Engineer, with work experience, projects, and educational background.",
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
      "Check out Kumar Saksham’s resume, showcasing AI-focused backend, finance, folklore archive, and freelance engineering work.",
    images: ["https://cdn.everydaycodings.com/open-graph/business-card.png"],
    creator: "@everydaycodings",
    creatorId: "@everydaycodings",
    site: "@everydaycodings",
    siteId: "@everydaycodings",
  },
};

const { socials } = config;
const host = (url: string) =>
  new URL(url).host.replace(/^www\./, "") + new URL(url).pathname.replace(/\/$/, "");

const contact = [
  { label: socials.email, href: `mailto:${socials.email}` },
  { label: "everydaycodings.com", href: "https://everydaycodings.com" },
  { label: host(socials.linkedin), href: socials.linkedin },
  { label: host(socials.github), href: socials.github },
  { label: resumeData.location },
];

function Heading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-3 border-b border-[var(--line)] pb-1.5 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-neutral-900 dark:text-neutral-100">
      {children}
    </h2>
  );
}

export default function ResumePage() {
  return (
    <div className="resume">
      <div className="no-print mb-4 flex items-center justify-between gap-3">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          One page, A4. Same content as the PDF.
        </p>
        <a
          href="/resume.pdf"
          download="Kumar-Saksham-Resume.pdf"
          className="inline-flex h-9 shrink-0 items-center gap-2 whitespace-nowrap rounded-lg border border-[var(--line)] px-3 text-sm shadow-[0_1px_2px_rgb(0_0_0/0.04)] transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900"
        >
          <DownloadSimple size={16} aria-hidden="true" />
          Download PDF
        </a>
      </div>

      <article className="resume-sheet overflow-hidden rounded-lg border border-[var(--line)] text-[0.8125rem] leading-relaxed text-neutral-700 shadow-[0_12px_32px_-20px_rgb(0_0_0/0.3)] dark:text-neutral-300">
        <header className="border-b border-[var(--line)] px-6 py-8 text-center sm:py-10">
          <h1 className="text-balance text-2xl font-light uppercase tracking-[0.18em] sm:tracking-[0.3em] text-neutral-900 sm:text-[2rem] dark:text-neutral-50">
            {config.profile.name}
          </h1>
          <p className="mt-2 text-[0.7rem] uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
            {resumeData.title}
          </p>
        </header>

        <div className="grid sm:grid-cols-[15.5rem_1fr]">
          <aside className="order-last space-y-7 border-t border-[var(--line)] sm:order-none sm:border-t-0 bg-neutral-50 px-6 py-7 sm:border-r dark:bg-neutral-900/50">
            <section>
              <Heading>Contact</Heading>
              <ul className="space-y-1.5 break-words">
                {contact.map(({ label, href }) => (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        className="underline-offset-4 hover:text-neutral-900 hover:underline dark:hover:text-neutral-100"
                      >
                        {label}
                      </a>
                    ) : (
                      label
                    )}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <Heading>Skills</Heading>
              <dl className="space-y-2.5">
                {resumeData.skills.map(({ group, items }) => (
                  <div key={group}>
                    <dt className="font-medium text-neutral-900 dark:text-neutral-100">
                      {group}
                    </dt>
                    <dd>{items}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section>
              <Heading>Education</Heading>
              <ul className="space-y-3">
                {resumeData.education.slice(0, 2).map((edu) => (
                  <li key={edu.institution}>
                    <p className="font-medium text-neutral-900 dark:text-neutral-100">
                      {edu.degree}
                    </p>
                    <p>{edu.institution}</p>
                    <p className="tabular-nums text-neutral-500">{edu.period}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <Heading>Languages</Heading>
              <p>{resumeData.languages.join(", ")}</p>
            </section>
          </aside>

          <div className="space-y-7 px-6 py-7">
            <section>
              <Heading>Profile</Heading>
              <p className="max-w-[68ch]">{resumeData.summary}</p>
            </section>

            <section>
              <Heading>Experience</Heading>
              <ol className="relative">
                {resumeData.workExperience.flatMap((job) =>
                  job.positions.map((position) => (
                    <li
                      key={job.company + position.role}
                      className="relative pb-5 pl-6 last:pb-0 before:absolute before:bottom-0 before:left-[3px] before:top-3 before:w-px before:bg-[var(--line)] last:before:hidden"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-[0.4rem] size-[7px] rounded-full bg-neutral-900 ring-4 ring-white dark:bg-neutral-100 dark:ring-[#111010]"
                      />
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                        <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
                          {position.role}
                        </h3>
                        <p className="tabular-nums text-neutral-500">
                          {position.period}
                        </p>
                      </div>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {job.website ? (
                          <a
                            href={job.website}
                            className="font-medium underline-offset-4 hover:underline"
                          >
                            {job.company}
                          </a>
                        ) : (
                          job.company
                        )}{" "}
                        · {position.workType} · {job.location}
                      </p>
                      <ul className="mt-1.5 list-disc space-y-0.5 pl-4 marker:text-neutral-400">
                        {position.responsibilities.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </li>
                  )),
                )}
              </ol>
            </section>

            <section>
              <Heading>Selected Projects</Heading>
              <ul className="space-y-2.5">
                {resumeData.projects.map((project) => (
                  <li key={project.name}>
                    <p className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <a
                        href={project.url}
                        className="text-sm font-semibold text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50"
                      >
                        {project.name}
                      </a>
                      <span className="text-neutral-500">{project.stack}</span>
                    </p>
                    <p>{project.summary}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </article>
    </div>
  );
}
