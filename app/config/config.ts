export const config = {
  profile: {
    name: "Kumar Saksham",
    codingStartDate: "2022-01-01", // When you started coding
    professionalStartDate: "2024-01-01", // When you started working on production apps
    availableForFreelance: true,
    roles: [
      "Backend Engineer, AI Systems",
      "Founder of MonkCapital",
      "Building LokKatha",
    ],
  },
  navigation: [
    { path: "/", name: "Home" },
    { path: "/projects", name: "Projects" },
    { path: "/resume", name: "Resume" },
    { path: "/contact", name: "Contact" },
  ],
  companies: {
    monkCapital: "https://monkcapital.xyz/",
    lokKatha: "https://lokkatha.xyz",
  },
  products: [
    {
      name: "MonkCapital",
      url: "https://monkcapital.xyz",
      logo: "/logos/monkcapital.png",
      blurb:
        "See all your money. Track every IPO. MonkCapital brings your net worth, investments, loans, goals and spending into one dashboard, measured with real return metrics like XIRR, CAGR and Sharpe against inflation. Its IPO tracker follows every Indian mainboard and SME issue from bid dates and subscription to grey-market premium and listing gains. Both apps are read-only: they never place an order or move your money.",
      apps: [
        {
          name: "Wealth Management",
          url: "https://wealth.monkcapital.xyz",
          image: "/products/wealth.webp",
          blurb: "Net worth, investments, goals and spending in one place.",
        },
        {
          name: "IPO Analysis",
          url: "https://ipo.monkcapital.xyz",
          image: "/products/ipo.webp",
          blurb: "Every Indian IPO: GMP, subscription and listing gains.",
        },
      ],
    },
    {
      name: "LokKatha",
      url: "https://lokkatha.xyz",
      logo: "/logos/lokkatha.png",
      blurb:
        "A field guide to the spirits, guardians and divine forces of the Indian subcontinent, documented from primary sources across three millennia. Every entity is classified by type, region, language and threat level, with its sightings, rituals and history, and the atlas maps the supernatural geography region by region.",
      apps: [
        {
          name: "Folklore Archive",
          url: "https://lokkatha.xyz/mahoraga",
          image: "/products/lokkatha-entity.webp",
          blurb: "Deep entries on every entity, from myth to sightings.",
        },
        {
          name: "Region Atlas",
          url: "https://lokkatha.xyz/atlas",
          image: "/products/lokkatha-atlas.webp",
          blurb: "22 regions, 90 entities, mapped across India.",
        },
      ],
    },
  ],
  socials: {
    email: "saksham@everydaycodings.com",
    github: "https://github.com/everydaycodings",
    twitter: "https://x.com/everydaycodings",
    kaggle: "https://www.kaggle.com/everydaycodings",
    linkedin: "https://www.linkedin.com/in/kumarsaksham1891",
  },
};
