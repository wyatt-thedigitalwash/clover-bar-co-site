# SITE.md

Project memory for Clover Mobile Bar Co. This file documents the brand system, voice, page structure, and content decisions. Claude Code should reference this file before making design or copy changes.

## Business

Clover Mobile Bar Co. is a mobile bartending service based in New Hampshire, serving weddings, private parties, and corporate events across New England. Owner-operated by Sydni. Clients provide the alcohol (BYOB model), Clover provides everything else: portable bar, certified bartenders, premium mixers and garnishes, bar tools, ice, custom menus, setup and cleanup.

Service area: Based in New Hampshire. Serves New England.

Contact: cloverbarco@gmail.com
Instagram: @cloverbarco

## Positioning

Warm, personal, craft-forward mobile bartending with a little Irish charm.

Clover is not the sleek, restrained, minimalist wedding vendor. Clover is not the rustic barn-wood mobile bar. Clover is warm, handmade, and personal, anchored by Sydni herself and the hospitality she brings. The shamrock and the "lucky" motif are real brand assets, not St. Patrick's Day decoration.

Avoid: the word "elevated," generic wedding-vendor language, St. Patrick's Day tropes, leprechaun imagery, rustic-farmhouse cliches.

Lead with: weddings and private parties. Corporate is included but not featured.

## Visual System

### Color palette

- `#FFFFFF` white — dominant background
- `#0F3D2E` deep forest green — primary text accent, logo mark, headings when colored
- `#2E7D4F` mid green — hover states, the shamrock, small accents only
- `#1A1A1A` near-black — body text
- `#F5F1EA` soft cream — used sparingly for specific moments (one section break, testimonial card), never as a field background

White is dominant. Green is the accent. Cream is a spice, not a base. No tan, no khaki, no gingham, no dark green field backgrounds.

### Typography

- Display and headings: **Fraunces** (Google Fonts, variable). Use weights 400 to 700. Slightly condensed, editorial, warm.
- Body and UI: **Inter** (Google Fonts, variable). Use weights 400 to 600.

Do not use script fonts anywhere. Do not use two serifs together. Headings are Fraunces, body is Inter, nothing else.

### Visual reference points

- Magnolia Bakery website (clean white dominant, warm serif, product photography flown on white)
- Jenni Kayne and Rip & Tan (premium but warm, not cold-luxury, natural woods and florals)
- Cookbook editorial design, Alison Roman's *Nothing Fancy* and Ottolenghi books (warm first-person voice, generous serif headlines, home-cook-inviting-you-over energy)
- Mid-century Irish signwriting and Aer Lingus poster typography (nods the shamrock without going kitsch, influences the Fraunces display treatment only)

### Design anti-patterns to avoid on this project

- Pill buttons with gradients
- Lucide icons in colored circles
- Three-column card grids for services
- Centered hero with CTA and feature grid below
- Cream background as a field color
- Script fonts anywhere
- Gingham, washi tape, hand-drawn doodle icons
- "Our Services," "Why Choose Us," "Get Started Today," "Book Now"
- Stock photography of smiling people
- Dark green field backgrounds that kill the photography

## Voice

- First person singular (I) when Sydni is speaking. First person plural (we) is fine for service copy.
- Warm, specific, unpretentious. Sounds like a person, not a brochure.
- Drop the word "elevated." Drop "seamless" and "stress-free" unless used sparingly.
- Use: curated, thoughtful, warm, lucky, personal, brought to you, poured for you, with care.
- Fragments are fine. Short sentences are fine. Rhythm over formality.
- No em dashes anywhere. Use commas, periods, or rephrase.

### Tagline

Curated cocktails. Lucky pours. Moments worth toasting.

### Primary CTA

Inquire.

Secondary phrasing in body copy: "Start your event," "Tell me about your event," "Let's plan your bar."

## Page Structure

Five pages for V1.

1. **Home** (`/`) — Full pitch on one page.
2. **About** (`/about`) — Sydni's story.
3. **Services** (`/services`) — Full service breakdown with event types.
4. **Gallery** (`/gallery`) — Photo grid. Built to receive real event photography later.
5. **Contact** (`/contact`) — Inquiry form, booking process, contact info.

### Header nav

Logo left, nav right: Home, About, Services, Gallery, Contact.

### Footer

Logo, one-line tagline, contact info (email and Instagram), service area line ("Based in New Hampshire. Serving New England."), copyright.

## Services

1. **Mobile Bartending** — Certified, insured bartenders delivering professional service with warm hospitality.
2. **Full Bar Setup & Cleanup** — We arrive early, set everything up, and break it all down after. You don't lift a finger.
3. **Custom Drink Menus** — Signature cocktails designed around your event's style, theme, and guest list.
4. **Mocktails & Non-Alcoholic Options** — Thoughtful non-alcoholic drinks so every guest has something to raise.
5. **Planning Call & Shopping List** — A pre-event call to plan your bar, plus a curated shopping list so you buy the right alcohol in the right amounts.
6. **Premium Mixers, Garnishes & Bar Tools** — Fresh juices, premium mixers, hand-cut garnishes, all the tools, all the ice.

Event types: Weddings, Private Parties (birthdays, holidays, showers), Corporate Events.

Note to display on Services page: Clover provides everything except the alcohol. Clients purchase their own alcohol using the curated shopping list provided during the planning call.

## Booking Process

Four steps, sourced from the existing Instagram carousel.

1. **Inquire** — Fill out the inquiry form. Expect a personalized quote within 24 to 48 hours.
2. **Contract** — Review and sign the service agreement. An invoice for the deposit follows.
3. **Deposit** — A $100 non-refundable deposit reserves your date. Events totaling $1,200 or more require 50% to reserve.
4. **Event day** — Sydni arrives early, sets up, serves, and handles the full breakdown.

## Inquiry Form Fields

All required unless noted. Submission is emailed to `cloverbarco@gmail.com` via Resend.

- Full name
- Email address
- Phone number
- Event date
- Event location
- Event start time
- Estimated event end time
- Type of event (radio: Wedding, Birthday, Corporate, Holiday Gathering, Other)
- Estimated number of guests
- Budget for services (optional)
- Anything specific about your event (textarea, optional)

## Content Status

### Ready content
- Services list and descriptions (mine from Instagram carousels, rewrite in our voice)
- Sydni's bio (rewrite from "Meet Sydni" carousel)
- Booking process (4 steps, sourced from carousel)
- Logo (SVG pending from Wyatt)
- Studio product photography (her bar, the cocktails, Sydni on white)

### Placeholder content
- Testimonials — placeholder until Sydni provides real quotes
- Event photography — gallery and inline photos launch with available studio/product shots. Real event photography is the top content priority post-launch.
- Full Sydni portrait for About page — we have the studio shots, but a single large hero portrait should be identified or requested.

### Not launching in V1
- Blog or drink recipes page
- FAQ page
- Location-specific SEO pages (Bartending in [town])
- Public pricing

## Technical

- Next.js 16, TypeScript, Tailwind, App Router, src/ directory
- Inquiry form via Resend, emails to cloverbarco@gmail.com
- No phone number displayed publicly on the site
- Domain: TBD (use placeholder during development)
- Google Business Profile and directory listings updated at launch

## Component Patterns

### Section wrapper
- Container: `mx-auto max-w-7xl px-5 md:px-10`
- Background: `bg-white` (dominant), `bg-cream` (sparingly, e.g. testimonial)
- Use `data-bg="light"` on white sections, `data-bg="dark"` on cream sections for the adjacent-section spacing rule in globals.css
- Full-bleed sections (photo strips, hero images) omit the max-width container on the image layer

### Eyebrow label
- Font: `font-body` (Inter), `text-xs`, `font-semibold`, `uppercase`, `tracking-[0.2em]`
- Color: `text-forest` (`#0F3D2E`)
- Margin below: `mt-4` to `mt-5` before headline
- Use for: section openers to categorize the content below

### Section headline
- Font: `font-display` (Fraunces), `font-normal` (weight 400)
- Size: `text-[30px] md:text-[40px]` (standard), `text-[30px] md:text-[44px]` (featured), `text-[40px] md:text-[56px]` (hero-adjacent), `text-[40px] md:text-[68px]` (hero h1)
- Line-height: `leading-[1.05]` (hero), `leading-[1.1]` (standard sections)
- Color: `text-ink` (`#1A1A1A`)
- Alignment: left-aligned (never centered on this site)
- Max-width: unconstrained unless noted (e.g. `max-w-[600px]` on photo section headline)

### Body copy / sub-paragraph
- Font: `font-body` (Inter)
- Size: `text-lg` (18px, hero subcopy), `text-[17px]` (section body), `text-base` (16px, supporting), `text-[15px]` (descriptions in lists)
- Color: `text-ink/80` (hero subcopy), `text-ink/85` (section body), `text-ink/75` (list descriptions)
- Line-height: `leading-[1.6]` (body paragraphs), default (hero subcopy)
- Max-width: `max-w-[480px]` (body paragraphs), `max-w-[520px]` (list descriptions), `max-w-[320px]` (short supporting)

### Numbered list item (01, 02 style)
- Number: `font-display`, `font-medium`, `text-sm` (14px), `text-clover` (`#2E7D4F`)
- Space below number: `mt-1` to `mt-3` before title
- Title: `font-display`, `font-medium`, `text-2xl` (24px), `text-ink`, `leading-[1.2]`
- Description: `font-body`, `text-[15px]`, `text-ink/75`, `leading-[1.6]`
- Space between items: `gap-8` (services list), `gap-10 md:gap-12` (step row)
- Use for: services, process steps, any ordered list

### Roman numeral caption (I., II. style)
- Numeral: `font-display`, `italic`, `font-normal`, `text-xl`, `text-clover`
- Label: `font-body`, `text-[11px]`, `font-medium`, `uppercase`, `tracking-[0.2em]`, `text-ink/70`
- Space between numeral and label: `mt-1`
- Use for: editorial photo sequences

### Two-column section
- Column splits used: `60/40` (hero), `50/50` (services preview), `45/50` (meet your bartender), `55/45` (implied by content weight)
- Gap: `gap-12 md:gap-16` (standard), `gap-12 md:gap-20` (wide, services preview)
- Alignment: `items-center` (hero, meet bartender), `items-stretch` (when image fills column height)
- Breakpoint: `md` (768px) for most splits, `lg` (1024px) for meet-your-bartender mobile interleave
- Flex direction: `flex-col md:flex-row` (stack on mobile, row on desktop)

### Image container
- Standard pattern: `relative` parent with aspect ratio class, `overflow-hidden rounded-sm`
- Aspect ratios: `aspect-[3/4]` (portraits), `aspect-[4/5]` (editorial photos, mobile portraits), `aspect-[4/3]` (landscape on mobile)
- Inner image: `next/image` with `fill`, `className="object-cover"`, descriptive `sizes` prop
- Flex-fill variant: `md:aspect-auto md:flex-1` (image grows to match adjacent column height)
- Object position: `object-bottom` (mobile hero to anchor image low)

### Mobile full-bleed hero
- Section: `relative`, `overflow-hidden`, `height: var(--hero-h)` (CSS custom property: `calc(100dvh - 68px)` with `100vh` fallback)
- Background image: wrapped in `absolute inset-0` div, `next/image` with `fill`, `object-cover object-bottom`
- Gradient overlay: `absolute inset-0`, `background: linear-gradient(to bottom, white 0%, white 30%, transparent 75%)`
- Copy container: `relative z-10 flex flex-col h-full`, `paddingTop: 12vh`, `paddingBottom: calc(80px + env(safe-area-inset-bottom, 0px))`
- Desktop hero uses standard split layout (not full-bleed), swapped via `md:hidden` / `hidden md:block`

### Button (src/components/Button.tsx)
- Base: `inline-flex items-center gap-2`, `font-body`, `text-[15px]`, `font-medium`, `tracking-wide`, `rounded-sm`, `transition-colors duration-150`
- **Primary**: `bg-forest text-white px-7 py-3.5`, hover `bg-clover`. Includes right arrow glyph (`→`)
- **Ghost**: `text-forest border-b border-forest px-0 py-0`, hover `text-clover border-clover`. No arrow
- Renders as `<Link>` when `href` is provided, `<button>` when `onClick` is provided
- Props: `children`, `variant` (default `"primary"`), `href`, `onClick`, `type`, `className`

### Header (src/components/Header.tsx)
- `sticky top-0 z-50 bg-white`
- Border on scroll: `border-b border-[#E8E5DF]` when `scrollY > 10`, `border-transparent` otherwise
- Inner container: `mx-auto max-w-7xl`, `px-5 md:px-10`, `py-5 md:py-6`
- Logo: `font-display text-forest text-2xl font-semibold tracking-tight`, text "clover", links to `/`
- Nav links (desktop): `font-body text-[15px] font-medium tracking-wide text-ink hover:text-clover`, `gap-8`, hidden below `md`
- Hamburger (mobile): three `2px` lines, opens full-screen white overlay
- Mobile overlay: `fixed inset-0 z-50 bg-white`, nav links `font-display text-3xl font-medium text-ink hover:text-clover`, centered vertically, `gap-10`
- Locks `body` overflow when open
- Estimated height: `68px` (stored as `--header-h` in globals.css)

### Footer (src/components/Footer.tsx)
- `border-t border-[#E8E5DF] bg-white`
- Inner container: `mx-auto max-w-7xl px-5 md:px-10 py-16 md:py-20`
- Three-column grid: `grid-cols-1 md:grid-cols-3`, `gap-12 md:gap-8`
- Column 1: Logo (`font-display text-forest text-xl font-semibold`) + tagline (`font-display italic text-sm text-ink/60`)
- Column 2 & 3 labels: `font-body text-xs font-semibold uppercase tracking-widest text-ink/40`
- Column 2 & 3 values: `font-body text-sm text-ink`, hover `text-clover`
- Copyright row: `border-t border-[#E8E5DF] py-6`, `font-body text-xs text-ink/40`, centered

### CTA moment (oversized headline)
- Headline: `font-display font-normal`, `text-[64px] lg:text-[clamp(88px,9vw,120px)]`, `leading-[0.95]`, `text-ink`
- Container: `lg:max-w-[880px]` inside standard page container (left-aligned, not centered)
- Button: primary variant, `mt-10 lg:mt-14` below headline
- Use for: page-closing call to action

## Spacing System

### Section vertical padding
- Standard: `py-24 md:py-30` (96px / 120px)
- Photo section: `py-16 md:py-24` (64px / 96px)
- Final CTA: `py-28 md:py-44` (112px / 176px)
- Footer: `py-16 md:py-20` (64px / 80px)
- Adjacent same-background sections: top padding removed automatically via `section[data-bg] + section[data-bg]` rule in globals.css

### Hero vertical padding
- Desktop: `pt-20 pb-30` (80px / 120px)
- Mobile full-bleed: `paddingTop: 12vh`, `paddingBottom: calc(80px + env(safe-area-inset-bottom))`

### Eyebrow to headline
- `mt-4` (16px) standard
- `mt-5` (20px) hero sections

### Headline to body copy
- `mt-6` (24px) standard paragraphs
- `mt-4` (16px) short supporting copy

### Headline to first content block
- `mt-12 md:mb-16` (48px / 64px) photo section
- `mt-16 md:mt-20` (64px / 80px) step row, services list

### Space between list items
- `gap-8` (32px) services list (vertical)
- `gap-10 md:gap-12` (40px / 48px) step row (horizontal on desktop, vertical on mobile)
- `gap-12` (48px) mobile staggered photos

### Space between stacked content blocks
- `space-y-5` (20px) between paragraphs
- `mt-8` (32px) headline to interleaved image, copy to button
- `mt-12` (48px) CTA to image in services column

### Horizontal page padding
- Mobile: `px-5` (20px)
- Desktop: `md:px-10` (40px)
- Hero desktop: `px-10` (40px, no mobile variant since separate layout)

### Column gaps
- Standard: `gap-12 md:gap-16` (48px / 64px)
- Wide: `gap-12 md:gap-20` (48px / 80px)
- Step row: `gap-10 md:gap-12` (40px / 48px)

### Max-width container
- Page content: `max-w-7xl` (1280px)
- CTA headline: `lg:max-w-[880px]`
- Body copy: `max-w-[480px]`
- List descriptions: `max-w-[520px]`
- Section headline (optional): `max-w-[600px]`

### Breakpoints
- `md` (768px): primary layout breakpoint for most sections (column stacking, font size changes, padding changes)
- `lg` (1024px): used for meet-your-bartender mobile interleave, CTA headline clamp, hero mobile/desktop swap
- Mobile-first: all base styles are mobile, responsive classes scale up

### CSS custom properties (globals.css)
- `--full-vh`: `100dvh` with `100vh` fallback
- `--header-h`: `68px`
- `--hero-h`: `calc(100dvh - var(--header-h))` with `100vh` fallback
- `--font-display`: Fraunces via `--font-fraunces-var`
- `--font-body`: Inter via `--font-inter-var`

### Border color
- `#E8E5DF` used for all subtle borders (header scroll border, footer top border, footer copyright border)
