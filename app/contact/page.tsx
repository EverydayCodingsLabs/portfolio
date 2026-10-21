import {
  ArrowUpRight,
  EnvelopeSimple,
  GithubLogo,
  HardDrive,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Section from "../components/section";
import { config } from "../config/config";
import { resumeData } from "../config/resume";

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

const { socials } = config;
const handle = (url: string) =>
  new URL(url).pathname.split("/").filter(Boolean).pop();

const elsewhere = [
  { name: "LinkedIn", url: socials.linkedin, icon: LinkedinLogo },
  { name: "GitHub", url: socials.github, icon: GithubLogo },
  { name: "X", url: socials.twitter, icon: XLogo },
  { name: "Kaggle", url: socials.kaggle, icon: HardDrive },
];

export default function ContactPage() {
  return (
    <div className="-mt-8">
      <header className="rule-b py-10">
        <h1 className="text-balance text-[1.7rem] leading-tight font-light tracking-tight sm:text-4xl">
          Contact
        </h1>
        <p className="mt-2 max-w-[60ch] leading-relaxed text-neutral-600 dark:text-neutral-400">
          Feel free to reach out to me via email.
        </p>
      </header>

      <Section title="Email">
        <a
          href={`mailto:${socials.email}`}
          className="group inline-flex max-w-full items-center gap-3 text-xl tracking-tight underline decoration-neutral-300 underline-offset-[6px] transition-colors hover:decoration-neutral-900 sm:text-2xl dark:decoration-neutral-700 dark:hover:decoration-neutral-100"
        >
          <EnvelopeSimple
            size={24}
            aria-hidden="true"
            className="shrink-0 text-neutral-400"
          />
          <span className="break-all">{socials.email}</span>
        </a>
        <dl className="mt-6 grid gap-x-8 gap-y-1 text-sm sm:grid-cols-[auto_1fr]">
          <dt className="text-neutral-500 dark:text-neutral-400">Based in</dt>
          <dd>{resumeData.location}</dd>
          {config.profile.availableForFreelance && (
            <>
              <dt className="mt-2 text-neutral-500 sm:mt-0 dark:text-neutral-400">
                Status
              </dt>
              <dd className="flex items-center gap-1.5">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-green-500"
                />
                Available for opportunities
              </dd>
            </>
          )}
        </dl>
      </Section>

      <Section title="Elsewhere">
        <ul className="-my-6 divide-y divide-[var(--line)]">
          {elsewhere.map(({ name, url, icon: Icon }) => (
            <li key={name}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 py-4"
              >
                <Icon
                  size={18}
                  aria-hidden="true"
                  className="text-neutral-500"
                />
                <span className="flex-1 font-medium group-hover:underline group-hover:underline-offset-4">
                  {name}
                </span>
                <span className="truncate font-mono text-xs text-neutral-500">
                  @{handle(url)}
                </span>
                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                  className="shrink-0 text-neutral-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
