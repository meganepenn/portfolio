# Megan Penn Portfolio

A standard Next.js App Router project using React, TypeScript, Tailwind CSS, and Lucide icons.

## Getting started

Install Node.js 22.13 or newer. Extract this ZIP, open the folder in VS Code, and run:

```sh
npm install
npm run dev
```

Visit http://localhost:3000.

## Production

```sh
npm run build
npm start
```

Run `npm run typecheck` to check TypeScript.

## Where to edit

- `app/page.tsx`: homepage and education
- `app/projects/page.tsx`: Projects page
- `app/contact/page.tsx`: Contact page and résumé preview
- `app/layout.tsx`: shared layout and footer
- `app/globals.css`: styling and responsive layouts
- `components/portfolio/navigation.tsx`: navigation
- `components/portfolio/project-card.tsx`: homepage cards and cover designs
- `components/portfolio/project-grid.tsx`: stacked cards and full-screen project windows
- `lib/projects.ts`: project descriptions, dates, order, confidentiality, links, and images
- `public/headshot.jpeg`: headshot
- `public/resume/`: updated résumé and its preview images

Files in `public/` are served from `/`. Add screenshots to `public/projects/` and populate a project's `images` array with `{ src: "/projects/example.png", alt: "Description", caption: "Optional caption" }`. Set its `url` to the actual project link. Confidential projects omit screenshots and links.

This download is independent of ChatGPT Sites: it contains no Vinext, Cloudflare, connector, database, or Sites setup. Editing or deploying this copy does not update the original hosted portfolio. No environment variables are required.
