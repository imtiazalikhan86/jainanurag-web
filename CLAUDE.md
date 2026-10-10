# Jainanurag & Associates — Website

## Project Purpose

Marketing website for **Jainanurag & Associates**, a Chartered Accountancy practice in
Mumbai. It serves two audiences: Indian businesses needing taxation, GST, accounting and
compliance support, and international companies entering the Indian market.

The positioning is **"helping businesses confidently start, operate and grow in India"** —
not a generic accounting firm site. The homepage is a lead-generation page; the primary
conversion actions are *Talk to an Expert*, *Book a Consultation* and *Contact Us*.

The full client brief is at `../ProjectOverView.txt`. Read it before adding sections or
pages; it specifies the section order, the folder structure and the technical constraints
this project follows.

## Stack

React 19, Vite, TypeScript, Redux Toolkit (with RTK Query), React Router 7, CSS Modules.
ESLint (oxlint) and Prettier. No UI framework, no icon library, no animation library.

## Commands

```bash
npm run dev        # http://localhost:5173
npm run build      # tsc -b && vite build
npm run preview
npm run lint
npm run visual     # screenshots every breakpoint + reports horizontal overflow
```

`npm run visual` drives the installed Chrome through puppeteer-core (no Chromium download)
with the dev server running. It captures 1440/1280/1024/768/480/375, opens the mobile
drawer, and fails loudly on any element wider than the viewport. Use it before claiming a
layout works.

## Architecture

```text
src/
├── app/            store.ts, rootReducer.ts, routes.tsx
├── components/
│   ├── common/     Button, Container, Section, SectionTitle, Icon, Loading
│   ├── layout/     Header, MobileMenu, Footer
│   └── ui/         Card, ServiceCard, FeatureCard, IndustryCard
├── features/home/components/   one folder per homepage section
├── pages/          route-level composition only
├── hooks/          useScrolled, useLockBodyScroll, useScrollToTop, useDocumentMeta
├── services/api/   baseApi.ts (RTK Query)
├── constants/      site.ts (firm details), home-content.ts (section copy)
├── types/          content.ts
└── styles/         variables.css, globals.css, responsive.css
```

`pages/Home/HomePage.tsx` composes nine section components and contains no markup of its
own. Sections own their content, styles and responsive behaviour so they can be reordered
or reused on inner pages.

Homepage section order (from the brief, do not reorder without reason): Hero → Trust →
Services → Global Business → Why Choose Us → Journey → Industries → About → CTA.

## Conventions

- **Tokens, not literals.** Every colour, space, radius, shadow and font size resolves to a
  custom property in `styles/variables.css`. No hard-coded hex values or pixel spacing in
  component CSS.
- **CSS Modules per component**, colocated. Shared helpers live in `responsive.css`.
- **Content lives in `constants/`**, not inside JSX, so copy changes never touch markup.
- **Components take props rather than duplicating markup.** A new card type is a prop or a
  variant, not a copy-paste.
- **No inline styles** except genuinely dynamic values.
- Pages are composition only; anything with logic or markup belongs in a component.

## State Management

The homepage uses **no global state**, and that is correct rather than an omission. Per the
brief:

- **Local component state** for menus, drawers, modals, accordions, form fields.
- **Redux Toolkit / RTK Query** only for genuine application or server state.

The store exists with `services/api/baseApi.ts` configured (including the `submitLead`
mutation) so the contact form and any later authenticated screens plug in without
restructuring. **Do not add a slice for UI state.** Redux Saga is explicitly out of scope.

## Content Rules (important)

The client has not supplied credentials or metrics, and the brief forbids inventing them.

- **Never add** years of experience, client counts, success rates, awards, certifications,
  testimonials, or client logos unless the client provides them in writing.
- Unknown firm details are marked `TODO(client)` in `constants/site.ts` — currently phone,
  email and the canonical URL are placeholders.
- Structured data in `index.html` claims only what is confirmed: no `aggregateRating`, no
  `foundingDate`.

Both reference sites (krystal7.com, beaconfiling.com) lean heavily on social proof. Since
we cannot, credibility here comes from substance: specific service scope, a visible
engagement process, and plain language about what the firm does.

## Design System

The palette is **sampled from the logo**, not approximated: its field is `#01183d` and its
monogram sits around `#d9ad5d`. Navy and gold are the identity; nothing else competes.

| Token | Value | Role |
|---|---|---|
| `--ink-900` | `#01122f` | Deepest navy, hero and dark bands |
| `--ink-800` | `#01183d` | **The logo navy.** Header, footer, primary brand |
| `--accent-700` | `#96691a` | Gold for text and links **on light** (4.85:1) |
| `--accent-600` | `#c89b3c` | Gold fills, rules, icon plates |
| `--accent-500` | `#d9ad5d` | The logo gold, **on navy** (8.41:1) |
| `--accent-100` | `#f7eedd` | Tinted plates behind icons |
| `--paper-warm` | `#faf8f4` | Warm off-white section tone |
| `--font-heading` | Plus Jakarta Sans | Headings |
| `--font-body` | Inter | Body |

**Gold needs two working tones and they are not interchangeable.** The logo gold is
luminous on navy and all but illegible on white — 2.08:1, a clear failure. Anything that
has to be *read* on a light background uses `--accent-700`. Anything sitting on navy uses
`--accent-500`. Gold fills take **navy** text, never white: white on `--accent-600` is
2.5:1.

### Inner-page banner

Every page except the homepage opens on `components/ui/PageHero`, which carries a full
bleed photograph of the South Mumbai skyline at dusk
(`src/assets/images/mumbai-skyline-dusk.jpg`). It is decorative — empty `alt`, the city is
already named in the copy — and it is the LCP element on those pages, so it loads eagerly
at high priority rather than lazily.

Two overlays sit on it: a horizontal fade so the copy keeps solid navy, and a vertical one
so the photograph meets the top and bottom edges instead of being cut off. Below 900px the
copy runs the full width and sits right across the image, so the overlay strengthens rather
than the image disappearing. Verified: every text run measures 7.85:1 or better against the
photograph, at widths from 375 to 2560.

### Logo

`src/assets/images/logo-jainanurag.png` is the supplied lockup, cropped to its content plus
an even 10px and converted from JPEG so the small type stays crisp. It carries its own navy
field, which is why **the header and footer are `--ink-800` exactly** — a near-match makes
the lockup read as a lighter rectangle floating on the band. If a surface behind the logo
changes colour, it needs a plate or a transparent asset from the client.

The hero headline caps at 3.25rem (52px) and inner-page headlines at 2.75rem. They were
larger; at 62px the hero shouted, and a firm selling judgement reads better set a little
quieter than a consumer brand would.

Buttons come in two sizes on a standard scale: `md` is about 42px tall and `lg` about 48px.
`lg` is for a single primary action in a hero, not for every call to action — the page used
oversized pills everywhere and they have been pulled back to `md`.

Type scales fluidly with `clamp()`, so there is no jump between breakpoints. Section tones
alternate (`default` / `warm` / `tint` / `dark`) to give the page rhythm without dividers.

## Responsive

Target widths: 1440 / 1280 / 1024 / 768 / 480 / 375. No horizontal scrolling at any width.

**Header shedding order** (learned from a real break — see Pitfalls):

| Below | What goes |
|---|---|
| 1240px | Full nav, replaced by the drawer |
| 560px | CTA button and the "Chartered Accountants" descriptor |
| 380px | Wordmark and logo mark shrink |

The phone number is **not** in the desktop header. The container caps at 1200px and the
brand, the seven-item nav and the CTA measure about 1150px together, so a phone number
could only ever overlap the nav. It lives in the drawer, the footer and the closing call to
action.

The journey rail becomes a vertical timeline below 600px. Buttons go full width below 480px.

## Accessibility

- Semantic landmarks, exactly one `<h1>`, ordered headings, skip link to `#main`
- Mobile drawer: `aria-modal`, focus moved to the close button, Escape closes, body scroll
  locked, `inert` while closed so it leaves the tab order
- Decorative visuals (banner photography, about plate) carry empty `alt`; nothing
  meaningful is conveyed by them alone
- The hero slider stops entirely under `prefers-reduced-motion` (first slide pinned, dots
  not rendered), pauses while the pointer or keyboard focus is anywhere in the hero, and
  pauses on a hidden tab. Dots expose `aria-current`; the slider is a labelled
  `role="group"` with `aria-roledescription="carousel"`
- Icons inherit `currentColor`, hidden from assistive tech unless given a `label`
- `prefers-reduced-motion` disables every animation and smooth scroll — keep it that way

## Performance

- Homepage ships in the main bundle; other routes are lazy loaded
- **Anything the header imports ships to every visitor.** The service *index* (slug, title,
  group, icon, summary) lives in `constants/services.ts` because the menu needs it; the
  long-form page body lives in `constants/service-details.ts` and is imported only by the
  service route. Splitting them cut the main bundle by 33 KB. Keep new long-form content on
  the route side of that line
- Two hero banner photographs (`src/assets/images/`, 139 KB and 330 KB JPEG) are the only
  large assets. The first carries `fetchPriority="high"` as the LCP element; the second is
  `low`, so the cross-fade never reveals a half-loaded image. Everything else is composed
  from tokens
- Icons are inline SVG paths in `components/common/Icon/Icon.tsx`. Add a path there rather
  than installing an icon package
- Fonts: preconnect plus one stylesheet limited to the weights in use, `display=swap`

## Information Architecture

Seven top-level destinations, three of which open a menu. `constants/navigation.ts` is the
single nav model: it drives the desktop menus, the mobile drawer accordion and the footer,
so a new destination is added in one place.

| Top level | Menu | Children |
|---|---|---|
| Home | — | — |
| About | — | — |
| Services | Three-column mega panel | 15 service pages, grouped Build / Run / Tax |
| Start in India | Narrow panel | 4 entry routes |
| Pricing | — | — |
| Resources | Narrow panel | Insights, Corridors, Calculators |
| Contact | — | — |

Routing (`app/routes.tsx`) stays short because the repeated pages are data-driven: one
`ServiceDetailPage` serves all fifteen services via `/services/:slug`, one `EntryRoutePage`
serves all four entry routes. Adding a service is a data change in `constants/services.ts`
plus a body in `constants/service-details.ts` — no new route, no new component.

An unknown `:slug` redirects to `/404`, so a bad link lands on a real not-found page rather
than an empty template.

### Menu motion

Panels transition in *and* out. A closed panel is `opacity: 0; visibility: hidden` with
`inert` set in the component, never `hidden`/`display: none` — display cannot be
transitioned, so the panel used to animate open and then vanish. `visibility` is delayed by
the length of the fade so the panel stays visible all the way out, and `inert` keeps the
closed links out of the tab order and the accessibility tree throughout.

Opening is driven by `mouseover` on the nav item, **not** `mouseenter`. `mouseenter` fires
only when the pointer crosses in from outside the item, so moving down into the panel and
back up to the trigger — both inside the same item — fired nothing, the pending close ran,
and the menu shut under the pointer and would not reopen until the pointer left the item
entirely. That was the intermittent "hover sometimes does nothing". `mouseover` bubbles
from every descendant, so any movement inside the item re-asserts the open state.

A 180ms grace period on close, plus a 12px `::after` strip on the item bridging the gap
down to the panel, means moving diagonally into the panel does not dismiss it. The strip
belongs to the **item**, not the panel: on the panel it was as wide as the panel itself and
covered the bottom edge of the neighbouring triggers. The mobile accordion animates
on `grid-template-rows: 0fr → 1fr`, the only way to transition to a content-derived height.
All of it collapses to instant under `prefers-reduced-motion`, while still opening and
closing correctly.

**Every menu trigger is a real link to a real page.** The panel is a shortcut into the
section, never the only way in — which is what keeps the nav usable on touch screens, where
there is no hover, and for anyone who clicks before a panel opens.

### Content status of the new pages

- Service pages, entry routes and Pricing carry real content.
- Pricing publishes **no figures** — it explains the three engagement models and what moves
  the number, and every amount reads "On request". `TODO(client)` marks where fees go.
- Resources is built and routed, but Insights, Corridors and Calculators carry honest
  "in preparation" states rather than invented guides, country notes or tax calculators.
  `TODO(client)` in `constants/resources.ts` lists what is needed.

## Hero Banner Slider

`components/ui/ImageSlider` is hand-rolled — two images and a fade do not justify a
carousel dependency. It cross-fades on a 6s interval (1100ms opacity fade plus a 7s
`scale(1.06) → scale(1)` drift) and owns **only its internals**: a `position: relative`
box and `position: absolute` slides. Placement is the consumer's job, which is why
`Hero.module.css` sets `.banner` to `absolute; inset: 0`.

**Timing lives in two places and they have to agree.** `intervalMs` (10s) is how long a
slide holds; the `drift` keyframe duration in the stylesheet (11s) is the Ken Burns zoom.
The zoom must be *longer* than the hold, or the image visibly stops moving and sits still
before it hands over.

**The drift is a CSS animation, not a transition.** A transition needs a previous value to
move from, and the first slide is already active on its first render — so it had nothing to
animate from and simply sat still, which read as "the zoom is broken". An animation runs
whenever the class is applied, mount included.

**The auto-advance pauses only over the dots**, plus on a hidden tab and on keyboard focus.
It once paused on hover anywhere in the banner's container, which is the whole hero — most
of the viewport — so a pointer merely resting on the page stopped the slider indefinitely
and it looked frozen. A background banner does not need to hold still for a reader.

**Slide 3 is composed, not photographed.** The source was a studio headshot on a light
grey backdrop; at banner size that meant a 2.5x upscale, a crop through the face and a grey
field fighting the navy. The backdrop is keyed out and the figure set on the site's own
navy, right of centre where the copy never reaches, with 150px of headroom above so a hero
band that crops vertically never cuts through his head.

**The key is asymmetric, and that is the whole trick.** The two things that have to be
separated sit on opposite sides of the backdrop value: the studio drop shadow around the
subject is *darker* than the backdrop (207 against 220) and must go, or it rides onto the
navy as a grey halo round the head; the shirt's blown highlights are *brighter* (248) and
must stay. No single symmetric tolerance does both — a loose one ate the shirt, a tight one
left the shadow. Darker pixels get a tolerance of 26, brighter ones 8.

Keying a near-neutral subject off a near-neutral backdrop needs care. The backdrop here is
exactly `rgb(220,221,226)` with zero variance and the shirt's blown highlights sit 28 away,
so the flood fill uses a tight tolerance of 10, not 26 — at 26 it ate the shirt, which was
invisible until the cut-out was viewed against something other than white. Even at 10 the
backdrop tone recurs along the bright fabric folds, so thin tendrils ran inward and left
navy streaks on the shoulder; a morphological opening (erode 4, re-grow from the border,
dilate 4) snaps anything narrower than the structuring element and leaves the real backdrop
untouched.

**It takes any number of slides.** Nothing assumes two: the advance wraps on
`slides.length`, the dots are generated per slide and announce "n of m", and the index is
part of each React key so the same artwork can appear twice with a different crop. Adding a
banner is one entry in `SLIDES` in `Hero.tsx` — verified by running it with four.

**Slides load progressively.** The first slide and the one behind it are fetched up front;
each advance primes the next. With two banners that is the same two requests as before, but
it means six banners no longer put five unseen images on the critical path. The set only
grows, so nothing is re-fetched on the way round.

**The banner is desktop only.** Below 861px (`BANNER_MIN_WIDTH` in `Hero.tsx`, matching
the layout breakpoint in the stylesheet) the hero is copy on the navy gradient and no
slider is rendered. There is no room for a photograph beside the copy at those widths, and
stacking one underneath only pushed it below the fold where it did no work. It is skipped
in the render via `useMediaQuery`, not hidden with `display: none`, so a phone never
downloads either JPEG — verified: at 375 only the 467-byte Vite dev module is requested,
and a production build inlines the URL as a string.

## Important Pitfalls

- **Anything on one header row needs `white-space: nowrap`.** The header broke in review
  because "About Us", "Global Business", the brand name and the phone number each wrapped
  mid-phrase, doubling the header height. Flex items shrink and wrap before they overflow,
  so nowrap plus a breakpoint that hides the item is the fix — never rely on space being
  available.
- **`backdrop-filter` on an ancestor breaks `position: fixed` descendants.** The header
  uses `backdrop-filter: blur(10px)`, which makes it a containing block, so the mobile
  drawer rendered inside it was trapped in a 76px-tall box instead of covering the
  viewport. The drawer is therefore rendered with `createPortal` into `document.body`.
  The same applies to `filter` and `transform`: never nest a fixed overlay inside one.
- **`NavLink` derives `aria-current` from the pathname alone.** On the homepage that marked
  `/`, `/#industries` and `/#global-business` all current at once. Hash entries need the
  hash compared too, which is what `utils/navigation.ts` does; the header and drawer use
  plain `Link` with an explicit `aria-current`.
- **Headless Chrome clamps `--window-size` to roughly 500px on macOS.** A
  `--screenshot --window-size=375` therefore renders at 500 and crops to 375, which looks
  exactly like broken overflow and is not. Set the viewport through CDP (what
  `npm run visual` does) before trusting a narrow screenshot.
- **Breakpoints must match what actually fits**, not round numbers. Six nav items plus the
  brand block plus the CTA need roughly 1180px; the original 1024px collapse point left a
  band where everything wrapped.
- **`$?` after a pipe reads the last command's status**, not the compiler's. Capture build
  and typecheck exit codes directly (`npm run build > log 2>&1; echo $?`).
- `Date` called during render trips the lint purity rule; resolve it at module scope.
- **A `position: static` wrapper does not contain `position: absolute` children.** The
  slider originally went static in the stacked layout; its slides then resolved against
  `.hero` and covered the entire section behind the headline. A component that positions
  its own children must stay a positioning context at every width.
- **`display: none` does not stop an image downloading.** Hiding a banner in CSS still
  costs a phone the bytes. When a breakpoint should remove something rather than restyle
  it, skip it in the render (`useMediaQuery`) — and keep the JS constant and the CSS
  breakpoint commented as a pair so they cannot drift.
- **A `.jpg` in a dev-server request log is not necessarily image bytes.** Vite serves an
  asset import as a 467-byte JS module at `…/x.jpg?import`; matching on the extension
  alone made a correctly skipped image look like it was still loading. Check the resource
  type and the content length.
- **Reading computed opacity immediately after a click samples the old value**, because
  the transition has only just started. Wait past the fade duration before asserting which
  slide is active, or a passing slider will look broken.
- **`npx tsc --noEmit` checks nothing in this repo.** The Vite template's root
  `tsconfig.json` only holds `references`, so it reports success on a file that does not
  compile. Use `npm run build` (which runs `tsc -b`) as the typecheck gate.
- **A failing command before `&&` silently skips a heredoc.** `ls missing && cat > F <<EOF`
  leaves `F` unwritten while a later `echo` still prints success. Write files in their own
  command, and verify by reading the file back rather than trusting the exit line.
- **`sips --resampleWidth` upscales.** Asking for 1600 on a 1376px image made it larger and
  heavier. Check the source dimensions first; `sips -s format webp` also fails silently on
  this machine, producing no file and no error.
- **A script that rewrites a source file must prove it parsed something first.** A splitter
  that found zero records still happily wrote two empty files over the original, and this
  project is not under version control, so there was nothing to restore from. The content
  was recovered only because the previous `dist/` build still contained it. Assert a
  non-zero count *before* writing, and prefer writing new files over overwriting the input.
- **A multi-edit script that writes once at the end loses every edit if a later assert
  fails.** Write after each successful edit, or verify afterwards — do not assume a clean
  exit code means the file changed.
- **`min-height: 0` on a flex item lets it shrink below its content.** That is what makes a
  flex child scrollable, but on its own it just makes the content overflow silently — in
  the drawer it spilled underneath the contact block. `min-height: 0` and `overflow-y: auto`
  belong together.
- **Setting state in an effect to react to a prop or route change** trips the lint rule and
  paints a stale frame first. The fix is to adjust state during render against a tracked
  previous value (`useMediaQuery`, `PrimaryNav`, `MobileMenu` all do this), which also
  catches changes no click handler would see, such as the browser back button.
- **A halo round a cut-out subject is usually the original's drop shadow, not bad
  anti-aliasing.** Studio portraits carry a soft shadow on the backdrop; key only the exact
  backdrop value and that shadow survives as a grey ring on whatever you composite onto.
  Check whether the fringe is darker or lighter than the backdrop before reaching for a
  despill — here despill alone changed nothing, because the problem was 15px wide.
- **Check a cut-out against something other than white.** A matte that had eaten the
  subject's white shirt looked perfect over a white page, because transparent and white are
  indistinguishable there. Composite over a checkerboard or the destination colour.
- **Heading level should not decide type size.** The hero headline moved h1 → h2 → h1, and
  because its size came from the global `h1`/`h2` rules it resized each time. `.title` now
  pins its own `font-size`, so the semantic choice and the design are independent.
- **Measuring text contrast against a block element's box measures empty space too.** A
  breadcrumb or eyebrow spans the full container while its glyphs sit at the left, so a
  naive probe reports the brightest pixel under an area with no text on it and invents a
  failure. Measure the glyph runs with `Range.getClientRects()`, and skip text that sits on
  a button painting its own background — otherwise hiding the button exposes whatever is
  behind it and reports 1:1.
- **A hover pause is only as good as its target.** Scoped to a hero-sized element, "pause
  while the pointer is here" becomes "never advance", because a pointer resting anywhere on
  the page satisfies it. Scope a pause to the controls, not the content.
- **`mouseenter` does not fire when moving between two descendants of the same element.**
  A hover menu whose open handler is `mouseenter` on the wrapper will close under the
  pointer and refuse to reopen once the pointer is already inside. Use `mouseover`, which
  bubbles, with `mouseleave` for the exit.
- **`display: none` cannot be transitioned**, so `hidden` makes an element pop in and out
  however much CSS you write. Use `opacity` + `visibility` + `inert` when something has to
  animate both ways and still leave the accessibility tree when closed.
- **A flex row defaults to `align-items: stretch`**, so one tall button silently resizes
  every button beside it. Button rows set `align-items: center`.
- **An icon and a label inside a button will wrap onto two lines** unless the element
  holding them is a flex row. `Button` renders its children in a `<span>`; that span is
  `inline-flex`, which is what keeps every button one line and a uniform height.
- React 19 supports `inert` as a real boolean prop — no string cast needed.

## Status

**Done:** homepage (all nine sections) with the auto-advancing hero banner slider; the full
seven-item navigation with a services mega panel, two narrow panels and a mobile drawer
accordion; 30 routes covering Services (hub + 15), Start in India (hub + 4), Pricing,
Resources (hub + 3), Contact and 404; design tokens, lazy loading, SEO head and structured
data. About and Contact are still placeholders.

**Next:** Contact page with the lead form (the RTK Query mutation is already defined and
needs an endpoint), then the About page. After that, the client content marked
`TODO(client)`: published fees, Insight articles, country corridor guides and calculator
inputs.

**Verified:** no horizontal scroll at 1440/1280/1024/768/480/375; the mobile drawer opens
full height as a child of `body`, moves focus to its close button, and marks only the
current link; the hero slider advances, loops, pauses on hover and focus, responds to its
dots, and holds still under `prefers-reduced-motion`. Checked with `npm run visual` and a
CDP probe, not by eye alone.
