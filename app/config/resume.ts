import { config } from "./config";

export const resumeData = {
  title: "Backend Engineer · AI & Data Products",
  location: "Sahibganj, Jharkhand, India",
  summary:
    "Backend engineer who builds AI-powered products end to end, from financial data pipelines and APIs to the interfaces people use. Founder of MonkCapital, a wealth analytics and IPO tracking platform, and LokKatha, a structured archive of Indian folklore. Shipping production Python and TypeScript systems since 2023.",
  skills: [
    { group: "Languages", items: "Python, TypeScript, SQL" },
    { group: "Backend", items: "Django, FastAPI, REST APIs, data pipelines" },
    { group: "Frontend", items: "Next.js, React, Tailwind CSS" },
    { group: "Data & Infra", items: "PostgreSQL, Supabase, Docker, AWS S3" },
    {
      group: "Domains",
      items: "Portfolio analytics, applied cryptography, generative AI",
    },
  ],
  // ponytail: assumed, edit to match
  languages: ["English", "Hindi"],
  projects: [
    {
      name: "Glyph",
      url: "https://github.com/EverydayCodingsLabs/glyph",
      stack: "Next.js, Supabase, S3, Docker",
      summary:
        "End-to-end encrypted messenger with seed-phrase identity: BIP-39 derived Ed25519 and X25519 keys, XChaCha20-Poly1305 sealed messages, and a server that only ever stores ciphertext.",
    },
    {
      name: "Nimbus",
      url: "https://github.com/everydaycodings/Nimbus",
      stack: "Next.js, Supabase, AWS S3",
      summary:
        "Self-hosted file manager with client-side encrypted vaults, version history, and protected share links that expire.",
    },
    {
      name: "StableFusion",
      url: "https://github.com/NeuralRealm/StableFusion",
      stack: "Python, Stable Diffusion",
      summary:
        "Image generation workstation with text-to-image, inpainting, ControlNet pose guidance, and checkpoint-to-diffusers model conversion.",
    },
  ],
  workExperience: [
    {
      company: "MonkCapital",
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
      company: "LokKatha",
      logo: "/logos/lokkatha.png",
      location: "India",
      website: config.companies.lokKatha,
      positions: [
        {
          role: "Founder & Builder",
          period: "2025 - Present",
          workType: "Personal",
          technologies: [
            "Next.js",
            "TypeScript",
            "Shadcn/ui",
            "Supabase",
            "Docker",
            "Cloud Deployment",
          ],
          responsibilities: [
            "Built a searchable folklore archive with classification by entity type, threat level, region, and language",
            "Designed structured entity pages for mythology, sightings, rituals, regional context, and historical references",
            "Added archive discovery tools including guided browsing, random entries, long-form guides, and newsletter updates",
            "Created a scalable content model for folklore records while preserving cultural and regional metadata",
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
    },
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
