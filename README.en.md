# Víctor Ramos — Portfolio

[Español](README.md) · **English**

Bilingual (Spanish and English) professional portfolio of Víctor Ramos, a full stack developer based in Madrid. Original editorial design, no templates, built with Next.js and almost no dependencies.

**Live site:** [victorramos.vercel.app](https://victorramos.vercel.app)

|                             |                                                |
| --------------------------- | ---------------------------------------------- |
| ![Home page](docs/home.png) | ![Café Sinnoh case study](docs/case-study.png) |

## Features

- **Bilingual with translated URLs:** `/es/proyectos` and `/en/projects`. The language is detected on the first visit and remembered, and the switcher keeps you on the same page in the other language.
- **Projects with case studies:** a gallery and a detail page per project (goal, challenge, features, technical decisions, stack and gallery), with a shareable URL and an animated cover transition between pages.
- **A working contact form:** messages arrive by email, with server-side validation, translated messages and captcha-free spam protection.
- **Responsive** on mobile, tablet and desktop, with a full-screen mobile menu.
- **Accessible:** full keyboard navigation, visible focus, AA contrast and support for “reduce motion”.
- **Technical SEO:** canonical URLs, `hreflang`, sitemap, structured data and generated social sharing images for every page.

## Tech stack

|                      |                                                                     |
| -------------------- | ------------------------------------------------------------------- |
| Framework            | Next.js 16 (App Router, Cache Components, Server Actions), React 19 |
| Language and styling | TypeScript, Tailwind CSS v4                                         |
| Email                | Resend API (via `fetch`, no SDK)                                    |
| Quality              | ESLint, Prettier, strict TypeScript, Lighthouse                     |
| Hosting              | Vercel                                                              |

Production dependencies: just `next`, `react` and `react-dom`.

## Notable technical decisions

**Internationalisation without libraries**

- Every page lives under `app/[lang]`. Folders use internal English names, and `proxy.ts` translates public URLs (`/es/proyectos` → `/es/projects`) and redirects the internal one to the public one, so each page has a single address.
- Copy lives in typed dictionaries: `en.ts` must match the exact shape of `es.ts`, so a missing translation is a compile error.
- Links are always generated with an `href()` helper, never by hand.

**Content separated from code**

- Profile, projects, services and background live in `src/content` as typed data, with every text in both languages. Adding a project means creating a folder and registering it.
- If the slug list used by the proxy and the project registry don’t match, the build fails.

**Performance**

- The whole site is statically generated at build time; the only server logic is the contact form.
- Self-hosted fonts with `next/font`, optimised images with `next/image`, and entrance and scroll animations in pure CSS.
- The gallery-to-case-study transition uses React’s `<ViewTransition>`, with no animation library.

**Errors and edge cases**

- A non-existent project returns a real 404: the proxy catches it before rendering (with Cache Components, the page would otherwise start streaming with a 200 status).
- Custom, translated error and not-found pages.

**Contact form**

- A Server Action validates on the server and sends the message through the Resend API; the key never reaches the browser.
- The action returns codes, not text: the form translates them, so the logic is language-independent.
- Spam protection through an invisible honeypot field and a minimum submission time.

## Lighthouse results

Measured on the production build:

|                            | Performance | Accessibility | Best practices |
| -------------------------- | ----------- | ------------- | -------------- |
| Desktop                    | 100         | 100           | 100            |
| Mobile (simulated slow 4G) | 94–96       | 100           | 100            |

## Structure

```
src/
  proxy.ts              Language, translated URLs and project 404s
  app/[lang]/           Pages (Home, Projects, About, Contact, Privacy)
  components/           layout/, home/, projects/, contact/, ui/
  content/              Profile, projects, services and background (typed data)
  i18n/                 Locales, route map and dictionaries
  lib/                  Metadata, social images, utilities
assets/fonts/           TTF fonts for image generation (OFL licence)
```

## Getting started

Requirements: Node.js 20.9 or later.

```bash
npm install
cp .env.example .env.local   # and add your Resend key (optional: only needed for the form)
npm run dev                  # http://localhost:3000
```

| Command             | What it does                   |
| ------------------- | ------------------------------ |
| `npm run dev`       | Development server             |
| `npm run build`     | Production build               |
| `npm run lint`      | ESLint                         |
| `npm run typecheck` | Type checking                  |
| `npm run format`    | Formats the code with Prettier |

## Adding a project

1. Create `src/content/projects/<slug>/` with its images and an `index.ts` (use Café Sinnoh’s as a template: TypeScript flags any missing field).
2. Add it to `src/content/projects/index.ts` and its slug to `src/content/projects/slugs.ts`.

The gallery, case study, URL, social image and sitemap entry are generated automatically.

## Author

Built by [Víctor Ramos](https://victorramos.vercel.app), with [Claude Code](https://claude.com/claude-code) as a coding assistant. I led the project: the idea, the design and the technical decisions, and reviewing every part before calling it done.

Contact: [victorramos.devs@gmail.com](mailto:victorramos.devs@gmail.com) · [LinkedIn](https://www.linkedin.com/in/victor-ramos-berzosa-90651b238/) · [GitHub](https://github.com/Vicram4)

## Licence

No open source licence: all rights reserved. The code is published so it can be read and evaluated, but no permission is granted to copy, modify or redistribute it. The fonts in `assets/fonts` have their own licence (SIL Open Font License).
