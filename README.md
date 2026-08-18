# Dariel Gonell — Personal Portfolio

A premium, data-driven portfolio for software developer Dariel Gonell. It presents software, infrastructure, and business operations as one coherent professional practice.

## Stack

- Vue 3 with Composition API and `<script setup lang="ts">`
- Vite and strict TypeScript
- Tailwind CSS plus a custom token-based design system
- Vue Router with lazy-loaded pages
- VueUse and Lucide icons
- Native IntersectionObserver animations

## Development

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Content and customization

- Personal and social links: `src/data/profile.ts`
- Projects and case-study content: `src/data/projects.ts`
- Technologies: `src/data/skills.ts`
- Experience and education: `src/data/experience.ts`
- Global visual tokens and responsive rules: `src/styles/main.css`

Empty social links are intentionally shown as pending placeholders and do not create broken anchors. Add real screenshots through each project's `gallery` property; the built-in UI compositions remain polished fallbacks.

## Routes

- `/` — editorial homepage
- `/work` — filterable project archive
- `/projects/:slug` — data-driven case study
- `/notes` — future writing section
- custom 404 fallback

## Deployment

`vercel.json` supports Vercel SPA routing and `public/_redirects` supports Netlify. Build with `npm run build` and deploy `dist/`. Update the canonical domain and sitemap if the final domain differs.
