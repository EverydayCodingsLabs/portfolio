import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Section from "./components/section";
import { config } from "./config/config";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

const row = "group flex items-center gap-3 py-4";
const label =
  "flex-1 font-medium group-hover:underline group-hover:underline-offset-4";

export default function NotFound() {
  return (
    <div className="-mt-8">
      <header className="rule-b py-10">
        <p
          aria-hidden="true"
          className="dots bleed -mt-10 mb-8 border-b border-[var(--line)] py-6 text-center font-mono text-7xl font-light tracking-tight text-neutral-300 tabular-nums sm:text-8xl dark:text-neutral-700"
        >
          404
        </p>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="flex-1">
            <h1 className="text-balance text-[1.7rem] leading-tight font-light tracking-tight sm:text-4xl">
              Page not found
            </h1>
            <p className="mt-2 max-w-[60ch] leading-relaxed text-neutral-600 dark:text-neutral-400">
              This route doesn't exist. Maybe I never built it, or the link is
              broken. Here's where you can go instead.
            </p>
          </div>
          <Image
            src="/not-found.webp"
            alt="Illustration of me holding a map, lost at the edge of a path"
            width={800}
            height={603}
            sizes="256px"
            priority
            className="w-56 shrink-0 rounded-xl border border-[var(--line)] sm:w-64"
          />
        </div>
      </header>

      <Section title="Try the products">
        <ul className="-my-6 divide-y divide-[var(--line)]">
          {config.products.flatMap(({ name, apps }) =>
            apps.map((app) => (
              <li key={app.url}>
                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={row}
                >
                  <span className="flex-1">
                    <span className={label}>{app.name}</span>
                    <span className="block text-sm text-neutral-500 dark:text-neutral-400">
                      {app.blurb}
                    </span>
                  </span>
                  <span className="hidden font-mono text-xs text-neutral-500 sm:block">
                    {name}
                  </span>
                  <ArrowUpRight
                    size={16}
                    aria-hidden="true"
                    className="shrink-0 text-neutral-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </li>
            )),
          )}
        </ul>
      </Section>

      <Section title="Or head back">
        <ul className="-my-6 divide-y divide-[var(--line)]">
          {config.navigation.map(({ path, name }) => (
            <li key={path}>
              <Link href={path} className={row}>
                <span className={label}>{name}</span>
                <span className="font-mono text-xs text-neutral-500">
                  {path}
                </span>
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="shrink-0 text-neutral-400 transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-12 text-sm text-neutral-500 dark:text-neutral-400">
          Think this is a bug?{" "}
          <a
            href="https://github.com/everydaycodings/everydaycodings.com/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900 dark:decoration-neutral-700 dark:hover:decoration-neutral-100"
          >
            Let me know on GitHub
          </a>
          .
        </p>
      </Section>
    </div>
  );
}
