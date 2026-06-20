# YDS website/ polish + component integration prompt

Target: `website/` (Next.js 16, Tailwind v4, TS, no shadcn yet). Paste this whole file into the coding session.

Note on the 3 pasted components (silk canvas bg, pill-cursor nav, scroll-reveal card): don't copy-paste verbatim. They're black/purple/monochrome SaaS-demo aesthetics, wrong for a 60-something dental consultant's brand (navy/forest-green/cream, serif display font). Reskin and scope them down per the ADD section below. If literal copy-paste is wanted instead, say so explicitly and skip the ADD section.

Brand tokens, already defined in `app/globals.css`, reuse these, don't hardcode new colors:
`--color-bg #FAFAF8` `--color-navy #151210` `--color-gold #1F5C38` `--color-gold-light #2E7A4E` `--color-cream #EBE5D8` `--color-blush #C9C0B0` `--color-muted #7A7060`. Fonts: `font-display` (Instrument serif), `font-body` (DM Sans). `framer-motion` already installed, no new deps for any of this.

## FIX

1. **Home/About hero duplication** — `app/about/page.tsx` (~L85-165) reuses the same pattern as `app/page.tsx` (~L159-267): same navy/green radial bg, same 56/44 grid split, same headshot-with-logo-overlay-and-name-caption frame, same "30 Years. [X]." headline. Change About: swap the dark radial bg for the light cream/bg gradient already used elsewhere on the site (see About's own quote-card section further down for the palette), and change the headline format off the "30 Years. [X]." template.

2. **Nav has no hover indicator** — `components/Nav.tsx` desktop link list (~L96-111) is plain text links, no active-state tracking. Add a sliding pill behind the hovered link (framer-motion `layoutId` cursor pattern), background `bg-cream/15` or `bg-gold/15`, rounded-full, positioned via `getBoundingClientRect` like the reference nav-header snippet, but keep the existing dark pill container and Arlene logo, this is an addition to the current nav, not a replacement.

3. **Spacing/density audit** — homepage stacks `py-32` on 6 consecutive sections (L295, 316, 372, 547, 598, 633). Vary at least 2 of these (e.g. py-24 or py-20) so the page doesn't read as evenly-padded empty space.

4. **Contrast audit** — flag any body copy under `/40` opacity on dark navy backgrounds (e.g. hero stat labels `text-bg/35` at L218-227, pull-quote attribution `text-bg/35` at L305). Bump anything under 40% to at least 45-50% if it's load-bearing text, not just decorative labels.

5. **Collision/crop check at 375 / 768 / 1024 / 1440px** — home hero photo card, about hero photo+quote-card overlap, services bento, contact grid. (Flagging: the cropped-forehead and Founder-text-collision bugs you described don't exist in this codebase, that's from the old live Squarespace site. Re-verify after any layout edits above, not against the old site.)

## ADD (reskinned, not verbatim)

**A. Subtle hero texture** — derived from the silk canvas component. Strip its noise/pattern math, remap RGB output to navy base (#151210) with gold (#1F5C38) highlights, cap intensity so it reads as a faint moving texture, not an animated background. Sits behind the home hero radial gradient, opacity low enough that headline contrast isn't affected. Skip if this feels like scope creep, it's the lowest-priority of the three.

**B. Nav hover pill** — same item as FIX #2. Don't build this as a separate standalone nav component; merge directly into `components/Nav.tsx`.

**C. Scroll-reveal card** — derived from container-scroll-animation. Use on the About page's "A Finance Background Changes Everything" content (or a services deep-dive page), not the homepage which is already animation-dense. Reskin border/shadow to navy/cream tones, drop the placeholder Unsplash image, use an existing asset from `public/images/` (arlene-headshot.jpg or one of the service-*.jpg files).

## Constraints

- TS strict, no `any`.
- Reuse `components/AnimatedSection.tsx` and `components/HomeAnimations.tsx` enter-animation patterns instead of introducing a parallel animation system.
- `npm run build` clean (no type errors) after changes.

## Verify

Screenshot home, about, services, contact at 1440px and 375px. Confirm: About hero no longer mirrors Home hero, nav hover pill tracks correctly, no text/element collisions, no body text under 40% opacity on dark backgrounds, build passes.
