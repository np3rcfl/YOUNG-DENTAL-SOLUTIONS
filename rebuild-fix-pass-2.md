# YDS website/ fix pass 2 — contrast, dashes, duplicate CTAs, About restructure

Target: `website/` on branch `fix/bugs-and-creative-direction`. Before touching code, run `npm run dev` and actually load every page in a browser (or take screenshots) at 1440px and 375px. Don't trust code-reading alone, the last pass did that and missed real contrast bugs that were sitting in the codebase. After every fix below, re-screenshot and confirm visually, don't mark done from the diff alone.

## 1. Em dash / en dash sweep (hard rule, see CLAUDE.md, zero exceptions)

`grep -rn "—\|&mdash;\|–\|&ndash;" app components` and fix every hit. Currently at least 14, including `app/page.tsx` (FAQ answers, steps copy, differentiators, pull quote), `app/about/page.tsx` (meta description, body copy, quote), `components/StoryScrollCard.tsx`. Rewrite each sentence with a period, comma, or restructure, don't just swap the character for a hyphen if it reads awkwardly.

## 2. Gold/green contrast bug (systemic, not cosmetic)

`--color-gold: #1F5C38` is a dark forest green. It's currently used as `text-gold`, `bg-gold/15`, `border-gold/25` on dark navy section backgrounds (services bento icon badges, "Approach/Format/Experience/Accountability" labels are fine since those sit on light bg, but the services card eyebrow labels and icon badges on the dark services section are not). Audit every `gold` usage against its background:
- On dark navy backgrounds: switch to `--color-gold-light` (#2E7A4E) at 80-100% opacity, not 15-25%, or use a light cream/gold-tinted color instead. The point is it needs to actually be visible at a glance, not technically present in the DOM.
- On light cream/bg backgrounds: current dark green at full opacity is fine, leave it.

## 3. Duplicate CTA on every page

`components/Footer.tsx` (L14-50) has a hardcoded "Ready to Stop Guessing and Start Growing?" CTA band baked into the footer, rendering on every page after that page's own closing CTA (e.g. homepage's "Serving Southern California" section already ends on a CTA, then Footer immediately repeats one). Delete the Footer CTA band entirely (L14-50), keep Footer to the info grid + bottom bar only. Each page keeps its own single contextual closing CTA.

## 4. About hero — actually restructure, not recolor

`app/about/page.tsx` L85-180ish still uses the exact same skeleton as the homepage hero: 56/44 split grid, rotated double-bezel photo card, logo overlaid on photo top-left corner, name caption bottom-left, floating quote card. Last pass only changed the background color and headline, the layout is still a clone. Build a genuinely different structure for this hero, options: full-width centered headline with photo below in a wide horizontal band, or headline+copy stacked vertically with photo as a smaller asymmetric inset off to one side (not mirrored 56/44), or drop the logo-corner-overlay and name-caption motif entirely since that's a homepage signature, use a plain caption beneath the photo instead.

## 5. Weak hero stat row copy

`app/page.tsx` L216-230, the "Production efficiency / measured, Overhead ratio / benchmarked, Staff retention / tracked" row. The right-side values are vague placeholders, not real claims. Either replace with a specific, defensible number/range (check About/Services pages for any real stat already in copy, e.g. "60-90 days to results" from FAQ), or cut the row and use that space for something with actual content.

## 6. Secondary CTAs need real button weight

"Meet Arlene" (`app/page.tsx` ~L337-347) and "Her Story" (`app/about/page.tsx` ~L190) are plain low-weight text links, easy to miss. Give them visible button treatment, filled or outlined pill, consistent with the primary CTA style already used elsewhere (see `Link href="/contact"` pill buttons for the pattern), not a bare text-plus-arrow link.

## 7. Services section heading + copy legibility

`app/page.tsx` L380-384, "Four Ways We Grow Your Practice" — review actual rendered size/weight/line-break at 1440 and 375, it's reading oddly per visual check, adjust line-break placement or font-weight as needed. Also check service card body copy opacity (`text-bg/50`, `/55`, `/58` on dark cards, L419, L454, L484, L525) against background, bump any that fail a basic squint test.

## Verify (do not skip)

Screenshot home, about, services, contact at 1440px and 375px after all fixes. Confirm: zero em/en dashes (grep returns nothing), gold/green accents visible on dark backgrounds at a glance, one CTA per page not two, About hero reads as structurally different from Home hero, hero stat row has real content, secondary CTAs look clickable, services heading and card copy legible. List what you actually saw in the screenshots, not what the code should produce.
