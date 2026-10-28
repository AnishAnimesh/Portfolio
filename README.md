# Anish Animesh Sahu — Portfolio

A complete redesign of the existing React + Vite portfolio with a charcoal and mint visual system, responsive layouts, lightweight SVG illustrations, and no personal photograph.

## Development

```sh
npm ci
npm run dev
```

## Checks and production

```sh
npm run lint
npm run build
npm run preview
```

Vercel configuration: **Vite**, build command `npm run build`, output directory `dist`.

The hero uses the direct greeting “Hi, I’m Anish Animesh Sahu” and the About section uses “About Me”, with smaller, simple headings. The name and accented words in every section heading share the same mint highlight.

The navbar uses a text-only name (20px desktop, 17px mobile), with 15px desktop navigation and 16px mobile menu links.

## Design and source organization

- `src/index.css`: shared color, spacing, layout, type, and component styles; responsive breakpoints at 359, 639, 959, and 1100px.
- `src/components/SectionHeading.jsx`: consistent section headings and accessible IDs.
- `src/components/Reveal.jsx`: shared one-time reveal transitions with reduced-motion support.
- `src/components/ProjectArtwork.jsx`: decorative SVG illustrations; no external image or chart service.
- `src/components/Navbar.jsx`: active-section navigation, keyboard-accessible mobile menu, Escape dismissal, outside-click dismissal, and destination focus.
- Individual section components: Hero, About, Projects, Experience, Skills, Education, and Contact. The footer is exported from Contact.
- `public/anishresume.pdf`: original resume, preserved byte for byte.
- `public/favicon.svg`: matching monogram icon.

All source has been formatted. No new project dependencies were added, and the existing React, Vite, Tailwind, Framer Motion, and React Icons stack is retained. System fonts avoid external font requests. Brand icons are bundled; descriptive icons represent technologies without a bundled logo.

## Preserved content and functionality

All three resume projects plus HeatCast (honours research) and Hospital Management System, 30 technical skills, the full BARC internship details and dates, and all three education entries remain. Project repository URLs, GitHub, LinkedIn, Instagram, email, phone, and resume download links are preserved. The OCR project now links to `https://github.com/AnishAnimesh/OCR_Project`. The two added descriptions and technology lists were verified against their repository documentation and source. The previous site had contact links rather than a form; those remain functional.

The landing-page introduction contains no technology list or Full-Stack / Computer Vision / Machine Learning tagline, in accordance with the earlier request.

## Internship certificate

The Experience section has a “View internship certificate” button that opens the supplied original image in a new tab. The asset is bundled at `public/certificates/barc-internship-certificate.png`, so no external hosting is required. The certificate image is loaded only when opened. The existing OCR project link remains available.

## Project carousel

Five project cards use native horizontal scrolling and CSS scroll snap, without a carousel dependency. Left/right buttons move one card at a time and disable at their boundaries. A polite live counter announces the visible range. The gallery supports touch/trackpad scrolling, arrow keys, Home/End, and normal tab navigation to repository links. It shows three cards on desktop, two on tablets, and one on mobile. Mobile arrows sit below the card to preserve reading width.

Validation covered next/previous controls, disabled end states, Home/End keyboard navigation, one-card mobile and two-card tablet layouts, and absence of document overflow. All five cards have GitHub links, including the OCR repository.

## Photo removal

The photograph and every reference to it have been removed from the source and production build. If applying files manually to another checkout, also delete `public/ANISH.jpg`, `public/vite.svg`, and the unused `src/App.css`. The source archive excludes Git history, generated builds, and node_modules.

## Validation

- `npm run lint`: passed.
- `npm run build`: passed.
- `git diff --check`: passed.
- Browser checks at 320, 390, 768, 1024, 1280, and 1440px: no horizontal document overflow or overflowing main-content elements.
- Desktop and tablet/mobile grid layouts reviewed in the browser.
- Mobile menu open/close, Escape with focus restoration, and destination focus/navigation verified.
- All internal anchor targets exist; no duplicate IDs; one primary heading and consistent section headings.
- All 5 projects, 30 skills, and 3 education entries verified in the rendered DOM.
- No personal-photo elements in the DOM and no photo asset in the build.
- Home, resume, and favicon return HTTP 200; the served resume matches the original.
- No browser console errors during validation.

Reduced-motion behavior is implemented through both Framer Motion's preference hook and CSS. Operating-system assistive technology testing and Lighthouse audits were not performed.

## Publishing

The source repository is `AnishAnimesh/Portfolio`. Push changes to the production branch linked to the Vercel project to publish. Vercel should use the Vite framework preset, `npm run build`, and the `dist` output directory. The production domain is managed in the Vercel project’s Domains settings.
