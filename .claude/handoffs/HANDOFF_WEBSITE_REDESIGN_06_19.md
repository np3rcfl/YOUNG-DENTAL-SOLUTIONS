# Handoff: Young Dental Solutions Website Redesign (via Claude Design)

**Created:** 2026-06-19
**Branch:** N/A (not a git repository)
**Session Duration:** Short — planning/direction session only, no code changes

---

## Summary

The user wants to redesign and optimize the frontend of the Young Dental Solutions website because the current design feels "AI-coded," messy, boring, and cluttered. After exploring options, the decision is to use **Claude Design (claude.ai/design)** to visually redesign the site — starting from the existing **codebase** — rather than building a design system or having Claude edit code blind. No files were modified this session.

---

## Work Completed

### Changes Made

- [x] Clarified that `/design-sync` does NOT fit this project (it's for syncing an existing component library; this is a Next.js website with only ~5 components)
- [x] Decided AGAINST building a design system first (too much setup for too little payoff at this site's size)
- [x] Decided to use Claude Design starting from the **codebase** import option
- [x] Gathered the user's design direction and reference sites
- [x] Wrote an initial Claude Design prompt for the homepage (see Session Notes)
- [x] Advised using **Opus 4.8** (not Sonnet) in Claude Design for better aesthetic judgment

### Key Decisions

| Decision | Rationale | Alternatives Considered |
| --- | --- | --- |
| Use Claude Design, not direct code edits | User wants a real visual redesign, not blind code changes | Claude edits code directly |
| Skip `/design-sync` / design system | Only ~5 components; setup cost far exceeds payoff | Build design system, sync to Claude Design |
| Start from "codebase" import in Claude Design | Brings in real copy, structure, tokens, fonts — no placeholder content | Blank screen, screenshot, Figma |
| Use Opus 4.8 in Claude Design | Better at aesthetic/layout judgment than Sonnet | Sonnet 4.6 |

---

## Files Affected

### Created

- `.claude/handoffs/HANDOFF_WEBSITE_REDESIGN_06_19.md` — this handoff

### Read (Reference)

- `website/app/page.tsx` — current homepage; dark/green radial-gradient hero, bento services grid, FAQ, etc.
- `website/app/globals.css` — Tailwind v4 `@theme` tokens (colors: bg `#FAFAF8`, navy `#151210`, gold `#1F5C38`, cream `#EBE5D8`; fonts: Instrument Serif display, DM Sans body)
- `website/components/Nav.tsx` — floating pill nav, framer-motion hover, mobile overlay
- `website/components/Footer.tsx` — dark CTA band + light footer grid

### Other components present (not yet read)

- `website/components/AnimatedSection.tsx`, `HomeAnimations.tsx`, `StoryScrollCard.tsx`
- Pages: `app/about`, `app/services` (+ 4 sub-services), `app/contact`, `app/blog`, `not-found.tsx`

---

## Technical Context

### Architecture/Design Notes

- **Stack:** Next.js (App Router) + Tailwind CSS v4 (`@theme` in globals.css) + framer-motion + Phosphor icons
- **Project root for Claude Design import:** `D:\claude\young dental solutions\website`
- Current site uses serif display (Instrument Serif) + DM Sans body — these are fine to keep

### What the user dislikes about current design

- Dark/green hero section (off-brand for a warm dental consultant)
- Fonts / typography feel generic
- Layout feels cluttered (bento grid, too many sections)
- Overall "really boring" and looks AI-generated

---

## Things to Know

### User's design direction

- **Direction:** Warm & personal — Arlene front and center, approachable, relationship-first, warmer tones, more photos, less corporate
- **Reference sites:** leandentaldesign.com (clean, photo-forward, professional) and aligneddentalpartners.com (clear hierarchy, trust-focused)
- **Catch-all instruction:** "use your judgment, make it look polished, real, and not AI-generated"

### Brand facts (for real copy, not placeholders)

- Arlene Young, 30+ years dental consulting, **finance background** (key differentiator — reads a practice like a CFO reads a balance sheet)
- 1-on-1 only, "picks up the phone," "follows through," "stays"
- San Diego / Southern California
- Contact: arlene@youngdentalsolutions.com · 858-223-9714
- Images available: `arlene-headshot.jpg` (real portrait), `arlene-young.png` (LOGO — black calligraphy)

### Gotchas

- This is **not a git repo** — no version control safety net; be careful with overwrites
- Per user's global CLAUDE.md: arlene-young.png is the LOGO, arlene-headshot.jpg is the portrait — don't confuse them
- `/design-sync` was a wrong turn; don't revisit it

---

## Current State

### What's Working

- Existing site builds and runs (Next.js + Tailwind v4)
- Direction and reference material are locked in

### What's Not Working / Pending

- No redesign produced yet — user is about to start in Claude Design

---

## Next Steps

### Immediate (Start Here)

1. **User action:** In Claude Design (claude.ai/design, Opus 4.8), start a new file → **"Start with a codebase"** → select `D:\claude\young dental solutions\website`
2. **User action:** Paste the homepage prompt (see Session Notes below) to generate the first redesign
3. **User action:** Share a screenshot of the result back in a Claude Code session

### Subsequent

- Iterate on the homepage design until the user is happy
- Once homepage direction is locked, design remaining pages (About, Services, Contact)
- **Implementation:** Take the Claude Design output and wire it into the Next.js site (Claude Code does this part)

### Blocked On

- Nothing — waiting on user to run the first Claude Design generation

---

## Session Notes

### The homepage prompt given to the user for Claude Design

> **Design a homepage for Young Dental Solutions — a solo dental practice consulting firm run by Arlene Young, based in San Diego, CA.**
>
> **Client & tone:** Arlene is a former finance professional with 30+ years in dental consulting. She works 1-on-1, picks up the phone, and stays with her clients — not a corporate firm, not a playbook-sender. Warm, personal, authoritative — a trusted advisor, not a tech startup.
>
> **Visual direction:** Light, airy, warm (creams, warm whites, soft sage/muted greens, touch of gold). Arlene's portrait is the centerpiece. Serif headline font, elegant. Lots of breathing room. Avoid dark hero sections, bento grids, heavy animations, SaaS-product feel.
>
> **Reference sites:** leandentaldesign.com, aligneddentalpartners.com
>
> **Sections:** 1) Hero — Arlene's photo + headline + subtext + CTA "Schedule Free Consultation"; 2) 3 trust stats — "30+ Years" / "1-on-1 Always" / "Southern California"; 3) Services — Practice Management, Due Diligence, Coaching, Recruiting; 4) Short About Arlene — finance background, personal approach; 5) Bottom CTA band — "Ready to talk? 30 minutes, no pitch."
>
> **Headline:** "30 Years. One Coach. Your Practice, Finally Running Like a Business."
> **Subtext:** "Most consultants send a playbook. Arlene picks up the phone."

### Workflow agreed

Claude Design (visual redesign, Opus) → user reviews/iterates → Claude Code implements the result into the Next.js site.

---

_This handoff was generated to checkpoint a planning session. Start a new session and use this document as initial context._
