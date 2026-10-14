# Astonish Designs – Enhancement Plan

Tick each box as it lands. Every task ends with `npm run lint && npm run build` passing and a check at 360 / 768 / 1024 / 1440px (no horizontal overflow, no broken images).

**Recommended order:** 9 → 1 → 5 → 3 → 2 → 4 → 7 → 8 → 6 (quick wins and foundations first, new features last).

---

## 1. Display typography (serif headings)

Goal: pair DM Sans body text with an elegant serif for headings to give an editorial, luxury feel.

- [x] Choose the serif (Cormorant Garamond recommended; alternatives: Playfair Display, Fraunces)
- [x] Load it in `index.html` with `preconnect` + `display=swap`, only the weights used (e.g. 500, 600, 600 italic)
- [x] Add `$font-display` token to `src/styles/_abstracts.scss`
- [x] Apply to `h1`/`h2` globally in `App.scss` and to the `section-title` mixin
- [x] Tune sizes / `letter-spacing` / `line-height` (serifs need slightly larger sizes)
- [x] Decide whether La Belle Aurore script stays (accent only, e.g. hero tagline) or is removed — kept as accent (footer, About lead); hero tagline now Cormorant italic
- [x] Remove unused local fonts (Coolvetica, Helvetica Neue) from `src/assets/Fonts` if no longer referenced
- [ ] Verify no layout shift on load (check CLS in Lighthouse)

## 2. Editorial lookbook layouts

Goal: replace uniform grids with asymmetric, magazine-style compositions.

- [ ] Home hero: full-bleed image with offset headline block — hero is already full-bleed (task 3); kept the centred headline you approved. Offset block is an optional follow-up
- [x] Home Catalogue preview: asymmetric grid (one tall feature image + smaller supporting images) using `grid-template-areas` — 5 captioned tiles linking to collection pages
- [x] CatalogueMain: full-bleed hero image per collection before its gallery — dark `.band` per collection, media side alternates
- [x] About page: alternating image/text rows (image left, then right) — `StoryRow` in `AboutMajor.jsx`
- [x] Add generous white space and a consistent vertical rhythm (section spacing tokens) — `$space-section` / `$space-block` / `$space-stack`
- [x] Collapse all layouts gracefully to a single column below `md` — home preview keeps a 2-up grid under the feature tile on purpose
- [x] Re-run overflow checks on all three routes — plus detail pages and 404, at 360/768/1024/1440

## 3. Sticky translucent header

Goal: the header sits transparent over the hero, then becomes solid with a blur once the user scrolls.

- [x] Add a `useScrolled(threshold)` hook (passive scroll listener or `IntersectionObserver` on a hero sentinel) — `src/hooks/useScrolled.js`, rAF-throttled
- [x] Header: `position: sticky`/`fixed`, transparent initially, then `header--scrolled` with `backdrop-filter: blur()`, semi-opaque background and subtle shadow — shared `fixed-bar` mixin; blur lives on `::before` so the mobile menu overlay isn't trapped
- [x] Same behaviour for the mobile `Navbar` bar
- [x] Shrink logo/padding slightly in the scrolled state (transition on `transform`, not `height`)
- [x] Keep the existing `header--solid` behaviour for pages without a dark hero (About)
- [x] Offset anchor targets with `scroll-margin-top` so sections aren't hidden under the header — global `scroll-padding-top: var(--header-h)`; heroes/About get `padding-top: var(--header-h)`
- [x] Fallback background when `backdrop-filter` is unsupported (`@supports`)

## 4. Scroll-reveal motion (framer-motion)

Goal: subtle, fast entrance animations that feel premium without slowing the site.

- [x] Create a reusable `<Reveal>` component (`motion.div`, `whileInView`, `viewport={{ once: true, amount: 0.2 }}`) — `src/components/Reveal/Reveal.jsx`, with `as`, `delay` and `y` props so lists keep their `li`/`article` semantics
- [x] Respect `prefers-reduced-motion` via `useReducedMotion()` (render static content)
- [x] Apply to section titles, service cards (staggered), catalogue previews, testimonials, about blocks — plus About page story rows and catalogue bands. Card hover lifts moved to the CSS `translate` property so they don't fight the motion transform
- [x] Keep durations around 0.4–0.6s, small offsets (12–24px), opacity + transform only — 0.5s, 20px, 80ms stagger
- [x] Use `LazyMotion` + `domAnimation` to keep the bundle small — features load async (`src/motionFeatures.js`, 18 KB gzip chunk)
- [x] Check there's no layout shift and no animation on content already in view at load — anything on screen at mount renders as a plain element (decided in a layout effect, before paint)

## 5. Image optimisation

Goal: the biggest performance win, since many images are multi-MB `.JPG` files.

- [x] Audit `public/images` sizes (list anything > 300 KB)
- [x] Pick an approach:
  - [x] Option A (A2): pre-generated variants via `sharp` script (`npm run images`) — originals in `images-src/` (not deployed), outputs in `public/images/*-{320,640,1280,1920}.{avif,webp}` + `src/data/images.json` manifest, rendered by `<Img>`
  - [ ] ~~Option B: Cloudinary (or similar CDN) with `f_auto,q_auto,w_*` URLs~~ (not chosen)
- [x] Normalise file names (lowercase extensions, no spaces/UUID names) to avoid case-sensitivity bugs — generated file names are lowercase; components keep original paths as manifest keys
- [x] Add `srcset` + `sizes` to gallery, catalogue and hero images (hero/subheader backgrounds use `image-set()` + a smaller variant below `md`)
- [x] Set explicit `width`/`height` (or `aspect-ratio`) on every `<img>` to prevent CLS
- [x] `loading="lazy"` + `decoding="async"` below the fold; `fetchpriority="high"` on the hero image
- [x] Blur-up / dominant-colour placeholder while images load (16px blurred WebP in the manifest)
- [x] Preload the hero image in `index.html`
- [ ] Lighthouse before/after comparison (LCP, total transfer size) — source images 60 MB → 22 MB of variants; each page only fetches the width it needs

## 6. Collection detail routes + WhatsApp enquiry

Goal: give each collection or look its own shareable page and an easy route to purchase.

- [x] Move collection data into `src/data/collections.js` (slug, title, description, palette, images) — descriptions are placeholder copy, please review
- [x] Add route `/catalogue/:slug` (and optionally `/catalogue/:slug/:look`) — `/:look` skipped; looks open in the lightbox instead
- [x] Collection page: hero, description, full gallery, palette, "other collections" strip
- [x] Link CatalogueMain feature panels to their detail pages
- [x] "Enquire on WhatsApp" button with a pre-filled message, e.g. `https://wa.me/2348134473169?text=Hi, I'm interested in <look> from <collection>` — collection, per-look and lightbox; helper in `src/data/whatsapp.js`
- [x] 404 handling for unknown slugs (catch-all route + friendly NotFound page) — plus `public/_redirects` so Netlify serves deep links
- [x] Per-page meta tags (depends on task 7) — via `<Seo>`, with a per-collection OG image
- [x] Update `sitemap.xml` with the new URLs — moved to `public/` in task 7 so it deploys

## 7. SEO and social sharing meta

Goal: correct titles and descriptions per page, plus rich previews when links are shared.

- [x] Create a `<Seo title description image path />` component using `react-helmet-async` — `src/components/Seo/Seo.jsx`, site URL in `src/data/site.js` (`https://astonish-designs.netlify.app`)
- [x] Add unique titles/descriptions for `/`, `/about`, `/catalogue` (and detail pages) — 404 gets `noindex`
- [x] Open Graph tags: `og:title`, `og:description`, `og:image` (1200×630), `og:url`, `og:type` — images in `public/og/` (default + one per collection)
- [x] Twitter card tags (`summary_large_image`)
- [x] Canonical URL per page
- [x] JSON-LD `Organization` / `ClothingStore` schema on the home page
- [x] Verify `sitemap.xml` URLs + add `robots.txt` to `public/` — index.html keeps crawler defaults (marked `data-seo-default`, removed by `main.jsx` so there are no duplicates)
- [ ] Test with an OG preview tool (e.g. opengraph.xyz) after deploy — note: Facebook/WhatsApp/X don't run JS, so they will see the index.html defaults on every URL; per-page previews need prerendering

## 8. Route-based code splitting

Goal: a smaller first download, so the home page loads faster.

- [x] Lazy-load `AboutMajor` and `CatalogueMain` with `React.lazy` + `<Suspense>` — also `CollectionPage` and `NotFound`; loaders in `src/routes.js`
- [x] Add a lightweight page fallback (brand-coloured skeleton/spinner) — cream page with a gold loading line (`.routeFallback`)
- [x] Add scroll-to-top on route change (`ScrollRestoration` or a small `useEffect` on `location`) — `src/components/ScrollToTop.jsx`
- [x] Optionally prefetch the catalogue chunk on hover/focus of "View Catalogue" — and the collection chunk on the home preview tiles
- [x] Compare `dist/assets` JS sizes before/after (currently ~403 KB / 123 KB gzip in a single chunk) — before this task 417 KB / 132 KB gzip; now main chunk 437 KB / 141 KB gzip (includes the framer-motion core from task 4) + route chunks of 1–6 KB + 18 KB gzip motion features loaded async. Home hero preload is now only added on `/`, fixing the unused-preload warning on deep links

## 9. Content fixes + dependency cleanup (quick wins)

Goal: fix wrong links and remove unused packages.

- [ ] Get the correct X (Twitter) and LinkedIn URLs (currently both point to Facebook) — add them in `src/data/socials.js`
- [x] Move social links into one shared `src/data/socials.js` (duplicated today in `Contact.jsx`, `Footer.jsx`, `Navbar.jsx`)
- [x] Hide any network that has no real profile instead of linking to the wrong one
- [x] Uninstall unused packages: `react-slick`, `slick-carousel`, `react-responsive`, `react-responsive-carousel`, `swiper`, `react-icons`, `latest`
- [x] Check whether `@fortawesome/fontawesome-free` is referenced; remove it if not
- [x] Replace `react-scroll` in `Home.jsx` with native `window.scrollTo({ behavior: "smooth" })` and uninstall it
- [x] Remove the leftover `.new` / temp files if any remain
- [x] `npm run lint && npm run build` is clean
