# Moaaz Khamis — Portfolio

Personal portfolio at [moaazexe.dev](https://moaazexe.dev). Static Astro site with a dark, techy aesthetic, deployed on Vercel.

## Stack

- [Astro 6](https://astro.build) (static output, `@astrojs/vercel` adapter)
- Tailwind CSS v4
- TypeScript (strict)

## Project structure

```
src/
├── assets/            # Images processed by astro:assets
├── components/
│   ├── layout/        # Nav, Footer
│   ├── sections/      # One component per page section (Hero, About, …)
│   └── ui/            # Reusable building blocks (Section, TiltCard, Tag, …)
├── data/              # All content lives here — edit these to update the site
│   ├── site.ts        # Name, contact links, nav, SEO defaults
│   ├── experience.ts  # Timeline (work + education), newest first
│   ├── projects.ts    # Project cards and their links
│   └── skills.ts      # Skill groups
├── layouts/           # BaseLayout (head, meta, global scripts)
├── pages/             # index + 404
├── scripts/           # Client scripts: scroll reveal, 3D tilt
└── styles/global.css  # Theme tokens and shared effects
public/                # Favicons and the CV PDF
```

Updating content never requires touching components — edit the files in `src/data/`.

## Commands

```sh
npm install       # install dependencies
npm run dev       # dev server at http://localhost:4321
npm run check     # type-check .astro and .ts files
npm run build     # production build
npm run preview   # preview the production build
```

## Deploy

Pushed to GitHub and deployed automatically by Vercel.
