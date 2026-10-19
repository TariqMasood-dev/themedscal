# MedScale

A responsive, cinematic landing page for med spas and aesthetic clinics, built with the Next.js App Router, strict TypeScript, Tailwind CSS, and Lucide icons.

## Development

```bash
npm install
npm run dev
```

Run the quality checks before shipping:

```bash
npm run lint
npm run build
```

## Project structure

```text
src/
  app/                 App Router routes and global styles
  components/
    layout/            Shared navigation and footer
    sections/          MedScale landing page sections
    ui/                Reusable base components
  lib/                 Shared utilities
```

The homepage uses a full-height, scroll-snapping content area and CSS-based motion that respects reduced-motion preferences. The hero preview and FAQ are interactive without adding an animation dependency. Update the consultation links in `src/components/layout/Navbar.tsx` and `src/components/layout/Footer.tsx` with the practice's real booking URL or contact address before launch.
