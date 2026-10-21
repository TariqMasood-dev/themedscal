# MedScale

A responsive, cinematic landing page for med spas and aesthetic clinics, built with the Next.js App Router, JavaScript, Tailwind CSS, and Lucide icons.

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
  app/                 App Router routes (.jsx) and global styles
  components/
    layout/            Shared navigation and footer (.jsx)
    sections/          MedScale landing page sections (.jsx)
    ui/                Reusable base components (.jsx)
  lib/                 Shared utilities (.js)
```

The homepage uses CSS-based motion that respects reduced-motion preferences. The hero preview and FAQ are interactive without adding an animation dependency. Update the consultation links in `src/components/layout/Navbar.jsx` and `src/components/layout/Footer.jsx` with the practice's real booking URL or contact address before launch.
