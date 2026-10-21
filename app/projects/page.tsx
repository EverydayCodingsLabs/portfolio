import type { Metadata } from "next";
import ProjectCard from "../components/project-card";
import Section from "../components/section";

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
    images: ["/opengraph-image"],
    title: "Kumar Saksham's Projects",
    description:
      "Discover the latest projects built by Kumar Saksham, including AI and open-source contributions.",
    url: "https://everydaycodings.com/projects",
    siteName: "Kumar Saksham's Portfolio",
    type: "website",
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Kumar Saksham's Projects",
    description:
      "Explore a variety of projects and open-source contributions by Kumar Saksham.",
    creator: "@everydaycodings",
    creatorId: "@everydaycodings",
    site: "@everydaycodings",
    siteId: "@everydaycodings",
  },
};

type Project = {
  project: string;
  logo?: string;
  description: string;
  points: string[];
  technologies: string[];
  website: string;
  sourceCode?: string;
  category: string;
  workType: string;
};

const projectsData: Project[] = [
  {
    project: "MonkCapital",
    logo: "/logos/monkcapital.png",
    description:
      "Your whole financial life on one screen. MonkCapital pulls together your net worth, investments, SIPs, loans and goals, scores them with XIRR, CAGR and Sharpe against inflation, and follows every Indian IPO from bid day to listing gains.",
    points: [
      "Built two apps on one stack: a wealth dashboard for net worth, investments, SIPs, loans, goals and spending, and a tracker for every Indian mainboard and SME IPO",
      "Made the transaction ledger the source of truth: holdings, balances and performance are derived from it, and money is never stored as a floating-point number",
      "Implemented return metrics including XIRR, CAGR and Sharpe, measured against inflation",
      "Ingests market and economic data from 20+ sources (AMFI, NSE, Upstox, Yahoo Finance, World Bank and more) behind provider adapters, each with its own health check",
      "Mirrors IPO prospectuses to S3 and runs LLM-assisted analysis on them through OpenRouter",
      "Runs data syncs, alerts, emails and backups as background jobs on BullMQ and Redis workers, deployed with Docker",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "AWS S3",
      "Docker",
      "OpenRouter",
    ],
    website: "https://monkcapital.xyz",
    category: "Full Stack",
    workType: "Personal",
  },
  {
    project: "LokKatha",
    logo: "/logos/lokkatha.png",
    description:
      "Step into the supernatural map of India. LokKatha documents the spirits, guardians and deities of the subcontinent from primary sources, with narrated entries and an atlas that plots the folklore region by region.",
    points: [
      "Built a searchable folklore archive with classification by entity type, threat level, region, and language",
      "Designed structured entity pages for mythology, sightings, rituals, regional context, and historical references",
      "Built an interactive atlas on Leaflet that maps the supernatural geography of the subcontinent with clustering and heatmaps",
      "Generates audio narration for entries with Sarvam text-to-speech, and moderates comments with an LLM through OpenRouter",
      "Runs narration, moderation, email and recommendation jobs on BullMQ and Redis workers",
      "Built Sutradhaar, an admin console for editing entries, cases, media and requests, plus an MCP endpoint that lets AI assistants search the archive",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Redis",
      "BullMQ",
      "Leaflet",
      "AWS S3",
      "Docker",
    ],
    website: "https://lokkatha.xyz",
    category: "Full Stack",
    workType: "Personal",
  },
  {
    project: "Nimbus",
    logo: "/logos/nimbus.png",
    description:
      "Cloud storage that can't read your files. Nimbus encrypts everything in your browser before it uploads, and its offline Local Safe keeps your most private files from ever touching a server.",
    points: [
      "Built a file manager with folders, recent files, starred items, sharing, activity, and trash workflows",
      "Implemented a zero-knowledge vault with client-side AES-256 encryption, unlocked by a passphrase only the user knows",
      "Built an offline Local Safe that stores encrypted files in the browser's private file system (OPFS), with metadata in IndexedDB, so nothing reaches the server",
      "Used Supabase for auth and Postgres, and AWS S3 for object storage",
      "Added cascading tags, favorites, version history, parallel folder zipping, and password-protected share links that expire",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "AWS S3",
      "Zustand",
      "Web Crypto",
    ],
    website: "https://nimbus.everydaycodings.com",
    sourceCode: "https://github.com/everydaycodings/Nimbus",
    category: "Full Stack",
    workType: "Open Source",
  },
  {
    project: "Glyph",
    logo: "/logos/glyph.png",
    description:
      "A messenger that doesn't know who you are. No phone number, no email: a seed phrase is your identity, every message is sealed end to end, and the server only ever sees ciphertext.",
    points: [
      "Built seed-phrase identity: a BIP-39 mnemonic derives Ed25519 signing and X25519 key-exchange keys",
      "Implemented sealed-envelope messages with per-message ephemeral X25519, HKDF, and XChaCha20-Poly1305, signed with Ed25519",
      "Stored the identity encrypted at rest in IndexedDB behind a device PIN (scrypt), with an optional passphrase-protected backup",
      "Designed a pluggable StorageProvider for encrypted media on Supabase Storage or any S3-compatible store",
      "Shipped as an installable PWA with Docker setups for managed or fully self-hosted Supabase and MinIO",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "S3 / MinIO",
      "Docker",
      "PWA",
    ],
    website: "https://github.com/EverydayCodingsLabs/glyph",
    category: "Full Stack",
    workType: "Open Source",
  },
  {
    project: "MimicMania",
    logo: "/logos/mimicmania.png",
    description:
      "Type a sentence, hear it in any voice. MimicMania turns text into natural speech in multiple languages and can clone your own voice, built on Coqui TTS.",
    points: [
      "Built a Streamlit interface for generating speech and cloning voices on top of the Coqui TTS toolkit",
      "Supported multiple languages and voices, with controls for pitch, speed, and volume",
      "Used Tacotron 2 and WaveGlow models for speech synthesis, and FastSpeech and MelGAN for voice cloning",
      "Packaged model downloads (about 6 GB) into a single setup script",
    ],
    technologies: ["Python", "PyTorch", "Coqui TTS", "Streamlit"],
    website: "https://github.com/everydaycodings/MimicMania",
    category: "Artificial Intelligence",
    workType: "Personal",
  },
  {
    project: "StableFusion",
    logo: "/logos/stablefusion.png",
    description:
      "A full Stable Diffusion studio in one app. Generate, remix and inpaint images, steer poses with ControlNet, then upscale the result, all on Hugging Face Diffusers models.",
    points: [
      "Built an AI-powered image generation platform based on Stable Diffusion",
      "Implemented text-to-image, image-to-image, and inpainting workflows",
      "Added support for instruct-pix2pix and textual inversion for advanced image control",
      "Integrated ControlNet with OpenPose Editor for pose-guided image generation",
      "Enabled image upscaling, CLIP interrogator, and image metadata inspection",
      "Implemented model conversion tools for ckpt and safetensors to diffusers format",
      "Allowed users to add and manage custom diffusers models",
    ],

    technologies: [
      "Python",
      "PyTorch",
      "Diffusers",
      "Stable Diffusion",
      "ControlNet",
      "Streamlit",
    ],
    website: "https://github.com/NeuralRealm/StableFusion",
    category: "Artificial Intelligence",
    workType: "Personal",
  },
];

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

  const categories = Array.from(new Set(projectsData.map((p) => p.category)));

  return (
    <div className="-mt-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="rule-b py-10">
        <h1 className="text-balance text-[1.7rem] leading-tight font-light tracking-tight sm:text-4xl">
          Projects
        </h1>
        <p className="mt-2 max-w-[60ch] leading-relaxed text-neutral-600 dark:text-neutral-400">
          Products I run, open-source tools I maintain, and the AI experiments
          that got me here.
        </p>
      </header>

      {categories.map((category) => (
        <Section key={category} title={category}>
          <div className="-my-6 divide-y divide-[var(--line)]">
            {projectsData
              .filter((p) => p.category === category)
              .map((project) => (
                <ProjectCard
                  key={project.project}
                  title={project.project}
                  logo={project.logo}
                  description={project.description}
                  points={project.points}
                  technologies={project.technologies}
                  website={project.website}
                  sourceCode={project.sourceCode}
                  workType={project.workType}
                />
              ))}
          </div>
        </Section>
      ))}
    </div>
  );
}
