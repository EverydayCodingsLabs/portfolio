import {
  ArrowUpRight,
  CaretDown,
  Cube,
  GithubLogo,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Chip from "./chip";

interface ProjectCardProps {
  title: string;
  logo?: string;
  description: string;
  points?: string[];
  technologies: string[];
  website: string;
  sourceCode?: string;
  workType?: string;
}

export default function ProjectCard({
  title,
  logo,
  description,
  points,
  technologies,
  website,
  sourceCode,
  workType,
}: ProjectCardProps) {
  return (
    <article className="py-6">
      <div className="flex items-center gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-md border border-[var(--line)] bg-neutral-50 dark:bg-neutral-900">
          {logo ? (
            <Image
              src={logo}
              alt=""
              width={40}
              height={40}
            />
          ) : (
            <Cube size={16} aria-hidden="true" className="text-neutral-400" />
          )}
        </span>
        <div className="min-w-0 flex-1">
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex max-w-full items-center gap-1.5"
          >
            <h3 className="truncate text-xl font-medium tracking-tight group-hover:underline group-hover:underline-offset-4">
              {title}
            </h3>
            <ArrowUpRight
              size={16}
              aria-hidden="true"
              className="shrink-0 text-neutral-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
          <div className="flex flex-wrap items-center gap-x-2 text-sm text-neutral-500 dark:text-neutral-400">
            {workType && <span>{workType}</span>}
            {workType && sourceCode && <span aria-hidden="true">·</span>}
            {sourceCode && (
              <a
                href={sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 underline-offset-4 hover:text-neutral-900 hover:underline dark:hover:text-neutral-100"
              >
                <GithubLogo size={14} aria-hidden="true" />
                Source code
              </a>
            )}
          </div>
        </div>
        <span className="hidden self-start pt-1.5 font-mono text-xs text-neutral-500 sm:inline dark:text-neutral-400">
          {new URL(website).host.replace(/^www\./, "")}
        </span>
      </div>

      <p className="mt-3 max-w-[68ch] leading-relaxed text-neutral-600 dark:text-neutral-400">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {technologies.map((tech) => (
          <Chip key={tech} tech={tech} className="!text-xs" />
        ))}
      </div>

      {points && points.length > 0 && (
        <details className="group mt-4">
          <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 [&::-webkit-details-marker]:hidden">
            What I built
            <CaretDown
              size={14}
              aria-hidden="true"
              className="transition-transform group-open:rotate-180"
            />
          </summary>
          <ul className="mt-3 max-w-[68ch] list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-neutral-700 marker:text-neutral-300 dark:text-neutral-300 dark:marker:text-neutral-600">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </details>
      )}
    </article>
  );
}
