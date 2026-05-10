export const SITE_URL = "https://everydaycodings.com";
export const SITE_NAME = "Kumar Saksham";
export const API_ANCHOR = `${SITE_URL}/api`;

export const discoveryLinkHeader = [
	'</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',
	'</api/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json"',
	'</api/docs>; rel="service-doc"; type="text/html"',
	'</.well-known/agent-skills/index.json>; rel="describedby"; type="application/json"',
].join(", ");

export const homepageMarkdown = `---
title: Kumar Saksham
description: AI-focused backend engineer and full-stack web developer from India.
image: https://cdn.everydaycodings.com/open-graph/business-card.png
---

# Kumar Saksham

AI-focused backend engineer from Sahibganj, India, building scalable web
products at the intersection of AI, finance, and data-driven decision making.

## Professional Work

I work on AI, backend systems, and finance, with a focus on data-driven
infrastructure for financial products. I am the founder of Monk Capital, a
wealth management platform built around financial data pipelines, analytics,
and clear user-facing insights.

Alongside my startup work, I have shipped freelance backend and full-stack
projects for early-stage clients.

## What Makes Me Different

I take ownership of the projects I work on and evaluate technical choices
against the business problem they need to solve. I use AI-assisted development
with code review, architectural oversight, and production-quality expectations.

## Links

- GitHub: https://github.com/everydaycodings
- X: https://x.com/everydaycodings
- LinkedIn: https://www.linkedin.com/in/kumarsaksham1891
- Email: saksham@everydaycodings.com
- Projects: https://everydaycodings.com/projects
- Resume: https://everydaycodings.com/resume
`;

export const markdownTokenCount = "184";

export const portfolioSkillMarkdown = `---
name: everydaycodings-site-discovery
description: Discover Kumar Saksham's portfolio, projects, resume, contact links, and agent-readable site metadata.
---

# Everydaycodings Site Discovery

Use this skill when an agent needs to understand or navigate Kumar Saksham's
portfolio website.

## Useful Resources

- Homepage: https://everydaycodings.com/
- Projects: https://everydaycodings.com/projects
- Resume: https://everydaycodings.com/resume
- Contact: https://everydaycodings.com/contact
- API catalog: https://everydaycodings.com/.well-known/api-catalog
- OpenAPI description: https://everydaycodings.com/api/openapi.json

## Suggested Actions

1. Fetch the homepage with \`Accept: text/markdown\` for a concise profile.
2. Use the API catalog to discover machine-readable metadata endpoints.
3. Use WebMCP tools in supporting browsers for navigation and contact links.
`;
