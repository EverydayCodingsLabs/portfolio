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
      "MonkCapital is a read-only wealth analytics platform: it tracks investments, SIPs and loans, measures portfolio performance, and follows every Indian IPO. It never places an order or moves money.",
    points: [
      "Building an AI-powered wealth management system focused on long-term investing and financial intelligence",
      "Designed scalable backend architecture to handle financial data, portfolios, SIPs, and loan tracking",
      "Implemented portfolio performance metrics such as CAGR, XIRR, asset allocation, and detailed cash flow analysis",
      "Developed ledger systems for tracking SIP contributions and loan obligations",
      "Built secure APIs for managing users, holdings, transactions, and financial records",
      "Created data pipelines to ingest and normalize market and economic data",
      "Laying the foundation for AI-driven insights including risk profiling, portfolio diagnostics, and macro/microeconomic analysis",
    ],
    technologies: ["Python", "Django", "TypeScript", "Next.js", "PostgreSQL"],
    website: "https://monkcapital.xyz",
    category: "Full Stack",
    workType: "Personal",
  },
  {
    project: "LokKatha",
    logo: "/logos/lokkatha.png",
    description:
      "LokKatha is a digital archive of Indian folklore, documenting spirits, guardians, deities, and regional mythological entities from primary sources across the Indian subcontinent.",
    points: [
      "Built a searchable folklore archive with classification by entity type, threat level, region, and language",
      "Designed structured entity pages for mythology, sightings, rituals, regional context, and historical references",
      "Added archive discovery tools including guided browsing, random entries, long-form guides, and newsletter updates",
      "Created a content model for scaling folklore records while preserving cultural and regional metadata",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "shadcn/ui",
      "Docker",
      "Cloud Deployment",
    ],
    website: "https://lokkatha.xyz",
    category: "Full Stack",
    workType: "Personal",
  },
  {
    project: "Nimbus",
    logo: "/logos/nimbus.png",
    description:
      "Nimbus is an open-source, self-hosted file manager focused on privacy, speed, and zero-knowledge encrypted storage.",
    points: [
      "Built a minimalist file management experience with folders, recent files, starred items, sharing, activity, and trash workflows",
      "Implemented client-side encryption concepts for password-protected vaults and private file access",
      "Used Supabase for application data and AWS S3 for file storage",
      "Designed offline-first storage flows using browser-side vaults for sensitive local files",
      "Added organization and sharing features including tags, favorites, version history, protected links, and expiring access",
    ],
    technologies: ["Next.js", "TypeScript", "Supabase", "AWS S3", "Encryption"],
    website: "https://nimbus.everydaycodings.com",
    sourceCode: "https://github.com/everydaycodings/Nimbus",
    category: "Full Stack",
    workType: "Open Source",
  },
  {
    project: "Glyph",
    logo: "/logos/glyph.png",
    description:
      "Glyph is a privacy-first, end-to-end encrypted messenger. No phone number or email: your identity is a seed phrase that derives the keys encrypting everything you send, so the server only ever stores ciphertext.",
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
      "AWS S3",
      "Encryption",
      "Docker",
    ],
    website: "https://github.com/EverydayCodingsLabs/glyph",
    category: "Full Stack",
    workType: "Open Source",
  },
  {
    project: "MimicMania",
    description:
      "MimicMania is a web application that allows you to generate speech and clone voices using text-to-speech technology. With MimicMania, you can create custom voices in a variety of languages and use them for a range of applications, from voiceovers to chatbots.",
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
