# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Recruiters and hiring managers** evaluating Kumar Saksham for backend or AI engineering roles. They skim fast and want proof of shipped work.
- **Peers and the developer community** following his work, usually arriving from GitHub, X or LinkedIn.

## Product Purpose

The personal portfolio of Kumar Saksham (everydaycodings), an AI-focused backend engineer from India. It exists to show real, shipped work. Success is a visitor clicking through to try one of his products, MonkCapital or LokKatha. Reading the resume or making contact comes second.

## Positioning

Unusual domain range: the same engineering rigor applied to very different worlds. MonkCapital covers wealth analytics and Indian IPO tracking, with real return metrics like XIRR, CAGR and Sharpe. LokKatha is a sourced archive and atlas of the spirits and folklore of the Indian subcontinent. Side projects reach into applied cryptography (Glyph, an end-to-end encrypted messenger).

## Operating Context

- Pages: Home (profile, products, experience), Projects, Resume (with `public/resume.pdf`), Contact (email, meeting scheduling, socials).
- Visitors often land from a shared link, so the Open Graph card (`app/opengraph-image.tsx`) is often the first thing they see.
- Next.js App Router, statically generated, deployed at https://everydaycodings.com.

## Capabilities and Constraints

- All profile, product, social and resume content lives in `app/config/config.ts` and `app/config/resume.ts`. Pages and the OG card read from there.
- Shows "Available for opportunities" when `config.profile.availableForFreelance` is set.
- MonkCapital apps never place orders or move money. Copy must not imply otherwise, but don't call them "read-only" in site copy (owner's request).
- Resume `languages` is marked as assumed in the source and is unconfirmed.

## Brand Commitments

- Name: Kumar Saksham. Handle: everydaycodings (GitHub, X, Kaggle, the domain).
- Avatar: an illustrated portrait, `public/avatar.webp`, with an alternate `public/avatar-dots.webp`. It is also the favicon and app icon.
- Product logos are in `public/logos/`.

## Evidence on Hand

- Live products: MonkCapital (wealth.monkcapital.xyz, ipo.monkcapital.xyz) and LokKatha (lokkatha.xyz), with screenshots in `public/products/`.
- Open-source projects linked from the resume (Glyph, Nimbus and others).
- No testimonials, user counts, revenue or press exist. Do not invent them.

## Product Principles

1. Show the work. Every claim points to something live or linked.
2. Products come first: the path to trying MonkCapital or LokKatha should be the most obvious one on the page.
3. Range is the story. Present finance and folklore side by side as proof of versatility, not as clutter.
4. Make it scannable for a recruiter in under a minute, with enough depth for a peer who wants to dig in.
