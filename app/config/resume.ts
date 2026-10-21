import { config } from "./config";

export const resumeData = {
  title: "Backend Engineer · AI & Data Products",
  location: "Sahibganj, Jharkhand, India",
  summary:
    "Backend engineer building AI-powered products end to end, from data pipelines and APIs to the interfaces on top. Founder of MonkCapital, a wealth analytics and IPO tracking platform with real return metrics like XIRR and CAGR, and builder of LokKatha, a sourced archive of Indian folklore. Self-taught and quick to pick up new technologies.",
  skills: [
    { group: "Languages", items: "Python, TypeScript, SQL" },
    {
      group: "Backend",
      items: "Node.js, Django, FastAPI, REST APIs, BullMQ, data pipelines",
    },
    { group: "Frontend", items: "Next.js, React, Tailwind CSS" },
    {
      group: "Data & Infra",
      items: "PostgreSQL, Supabase, Redis, Docker, AWS S3",
    },
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
      stack: "Next.js, Supabase, AWS S3, Web Crypto",
      summary:
        "Cloud storage dashboard with zero-knowledge AES-256 vaults, an offline browser-only safe (OPFS), version history, and protected share links that expire.",
    },
    {
      name: "StableFusion",
      url: "https://github.com/NeuralRealm/StableFusion",
      stack: "Python, PyTorch, Diffusers, Streamlit",
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
            "Next.js",
            "TypeScript",
            "Supabase",
            "PostgreSQL",
            "Redis",
            "BullMQ",
            "AWS S3",
            "Docker",
          ],
          responsibilities: [
            "Building a wealth analytics platform and an IPO tracker for every Indian mainboard and SME issue",
            "Designed a ledger-first data model: holdings, balances and performance are derived from transactions, and money is never stored as a float",
            "Implemented return metrics including XIRR, CAGR and Sharpe, plus asset allocation and cash-flow analysis",
            "Built ingestion from 20+ market and economic data sources behind provider adapters, with health checks and BullMQ background workers",
            "Added LLM-assisted IPO prospectus analysis through OpenRouter",
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
            "Supabase",
            "Redis",
            "BullMQ",
            "Leaflet",
            "Docker",
          ],
          responsibilities: [
            "Built a searchable folklore archive with classification by entity type, threat level, region, and language",
            "Designed structured entity pages for mythology, sightings, rituals, regional context, and historical references",
            "Built an interactive Leaflet atlas mapping folklore region by region",
            "Added AI audio narration (Sarvam TTS) and LLM comment moderation, run as BullMQ background jobs",
          ],
        },
      ],
    },

    {
      company: "Independent Freelancer",
      logo: "",
      location: "Remote",
      positions: [
        {
          role: "Freelance Backend & Data Engineer",
          period: "2023 - Mar 2026",
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
      institution: "Indira Gandhi National Open University (IGNOU)",
      logo: "",
      degree: "Master of Computer Applications (MCA)",
      period: "2026 - Present",
      location: "New Delhi, India",
    },
    {
      institution: "Sahibganj College",
      logo: "",
      degree: "Bachelor of Computer Application (BCA), CGPA 7.5",
      // ponytail: assumed 3-year BCA ended 2025, edit if not
      period: "2022 - 2025",
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
};
