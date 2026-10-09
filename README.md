# Jainanurag & Associates — Website

Marketing site for a Mumbai Chartered Accountancy practice, serving Indian businesses and
international companies entering India.

React + Vite + TypeScript, Redux Toolkit, React Router.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build
npm run preview
npm run lint
npm run visual     # breakpoint screenshots + overflow report (needs the dev server running)
```

## Design direction

The brief named two reference sites. Both lean heavily on social proof — client counts,
logos, named testimonials — and the brief forbids inventing any of that. So credibility
here is built from substance instead: specific service scope, a visible engagement process,
and plain language about what the firm does. Slots for real figures are easy to add once
the client supplies them.

| Token | Value | Why |
|---|---|---|
| Primary | `#0b1f3a` deep navy | Professional and calm; carries the dark bands |
| Accent | `#0e8f7e` emerald | Growth without the generic fintech blue |
| Surface | `#faf8f4` warm off-white | Warmer than grey, keeps the page from feeling clinical |
| Headings | Plus Jakarta Sans | Geometric with enough character to avoid looking templated |
| Body | Inter | Highly legible at small sizes |

All tokens live in `src/styles/variables.css`. Type scales fluidly with `clamp()`, so there
is no jump between breakpoints.

## Architecture

```text
src/
├── app/            store, rootReducer, routes
├── components/
│   ├── common/     Button, Container, Section, SectionTitle, Icon, Loading
│   ├── layout/     Header, MobileMenu, Footer
│   └── ui/         Card, ServiceCard, FeatureCard, IndustryCard
├── features/home/  one folder per homepage section
├── pages/          route-level composition only
├── hooks/          useScrolled, useLockBodyScroll, useScrollToTop, useDocumentMeta
├── services/api/   RTK Query base API
├── constants/      site details and homepage content
├── types/          shared content types
└── styles/         variables, globals, responsive
```

`HomePage.tsx` composes nine section components and contains no markup of its own. Each
section owns its content, styles and responsive behaviour, so sections can be reordered or
reused on inner pages without untangling anything.

### State management

The homepage uses **no global state**, which is the correct outcome: menus, drawers and
hover states are component state. The store exists with the RTK Query API slice configured
(`services/api/baseApi.ts`, with the `submitLead` mutation) so the contact form and any
later authenticated screens plug in without restructuring.

No Redux Saga — there is no complex async workflow to justify it.

## Content rules

`src/constants/site.ts` holds firm details. Anything the client has not confirmed is a
marked placeholder (`TODO(client)`), never an invented value. There are deliberately **no**
statistics, years of experience, client counts, awards or testimonials anywhere on the
page, and the structured data in `index.html` claims only what is confirmed.

Replace before launch: phone, email, canonical URL, and the Open Graph image.

## Accessibility

- Semantic landmarks, one `<h1>`, ordered headings
- Skip link to `#main`
- Mobile drawer: `aria-modal`, focus moved to the close button, Escape to close, body scroll
  locked, `inert` while closed so it leaves the tab order
- Visible focus rings via `:focus-visible`
- Decorative visuals (banner photography, about plate) carry empty `alt`; nothing
  meaningful is conveyed by them alone
- The hero slider pauses on hover and focus, stops completely under
  `prefers-reduced-motion`, and its dots expose `aria-current`
- Icons inherit `currentColor` and are hidden from assistive tech unless labelled
- `prefers-reduced-motion` disables every animation and smooth scroll

## Performance

- Homepage ships in the main bundle; other routes are lazy loaded (see the per-route chunks
  in `npm run build` output)
- No icon library, no UI framework, no animation library, no carousel library — icons are
  inline SVG paths and the hero slider is ~90 lines of local code
- The service menu index and the service page bodies are separate modules: the header
  imports the index, so the long-form content stays out of the main bundle and loads with
  the service route
- Two hero banner photographs are the only large assets, and they are desktop only — the
  slider is skipped in the render below 861px, so a phone requests neither. On desktop the
  first is the LCP element (`fetchPriority="high"`) and the second loads at `low`.
  Everything else is composed from design tokens
- Fonts: preconnect plus a single stylesheet limited to the weights in use, `display=swap`

## Responsive

Breakpoints: 1440 / 1280 / 1024 / 768 / 480 / 375.

- Nav collapses to the drawer below 1240, which is where seven items plus the brand and CTA
  stop fitting inside the 1200px container; the CTA goes at 560. The phone number is not in
  the desktop header at all — there is no width at which it fits beside the nav
- The journey rail becomes a vertical timeline below 600, which reads better than cramped columns
- Buttons go full width below 480 so taps land reliably
- `overflow-x: hidden` on body, and no fixed-width elements, so nothing scrolls sideways

Below 861 the hero banner is not rendered at all: there is no room for a photograph beside
the copy, and a band stacked underneath it only landed below the fold. Phones get the
headline on the navy gradient and download neither image.

Verified with `npm run visual`: no horizontal scroll at any target width, the mobile drawer
opens correctly with focus moved into it, and the hero slider advances, loops and pauses as
intended.

## Pages

Seven top-level destinations, 30 routes:

- **Services** — a hub plus 15 service pages at `/services/:slug`, grouped into Build in
  India, Run your business, and Tax and specialist support
- **Start in India** — a hub plus 4 entry routes for overseas parents and foreign founders
- **Pricing** — the three engagement models and what moves the number
- **Resources** — Insights, Corridors and Calculators
- **About**, **Contact**, and a 404 that unknown slugs redirect to

The repeated pages are data-driven: one component serves all fifteen services, another all
four entry routes, both reading from `src/constants`. Adding a service is a data change.

## Next

About and Contact are still placeholders. The contact form is the natural next piece: the
RTK Query mutation is already defined and needs an endpoint plus a form with validation.

Content marked `TODO(client)` is waiting on the firm: published fees, Insight articles,
country corridor guides, and the inputs each calculator should use. Nothing on the site
invents a figure in the meantime.
