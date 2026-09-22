# PioneerHacks Cinematic Landing Page Plan

## 1. Page narrative
PioneerHacks is framed as a mid-October hackathon open to all high schoolers: arrive with an idea, form a team, build under mentor pressure, and ship a demo with measurable outcomes. The page opens with a restrained cinematic intro where horizontal side beams move from the middle of the screen toward the center, framing the Pioneer identity before revealing the product-like landing page. The main story moves from promise, to process, to setup, to value, to proof, then closes with registration and partner CTAs.

## 2. Component map
- `app/page.tsx`: assembles the page using semantic landmarks.
- `components/Nav.tsx`: transparent sticky nav, section links, secondary and primary CTAs.
- `components/IntroReveal.tsx`: scroll-aware intro with side-to-middle line motion and reduced-motion fallback.
- `components/HeroCanvas.tsx`: original canvas particle/ASCII field, paused when out of viewport.
- `components/Hero.tsx`: full-height hero, product statement, CTAs, metadata.
- `components/HowItWorks.tsx`: four scroll-driven GSAP layers.
- `components/TerminalDemo.tsx`: realistic three-step terminal setup.
- `components/FeatureGrid.tsx`: concrete value props.
- `components/UseCaseSelector.tsx`: accessible tab selector with animated visual transitions.
- `components/CaseStudies.tsx`: measurable outcomes.
- `components/Testimonials.tsx`: organizer and participant quotes.
- `components/Benchmarks.tsx`: lightweight CSS/SVG data visualization.
- `components/FAQ.tsx`: keyboard-accessible accordion.
- `components/CTAFooter.tsx`: closing CTA and editorial footer.
- `data/content.ts`: editable product copy and section data.

## 3. Visual design tokens
- Background: `#03040a`, layered with violet `#6d5dfc` and blue `#3aa7ff` atmospheric light.
- Text: white `#f7f8ff`, muted `#9aa3b8`, hairline borders `rgba(255,255,255,.12)`.
- Accent: Cupertino gold `#f4b62a` used sparingly, plus red `#c91f2e` only for Pioneer identity detail.
- Type: oversized clean sans-serif headlines, compact monospace labels for metadata.
- Shape: thin borders, 12-20px radii, generous negative space, no glowing card overload.

## 4. Animation plan
- Intro: fixed black scene with left and right horizontal beams entering from screen sides at vertical center, then red circle focuses and reveals the site. Uses native scroll progress, not hijacking.
- Hero: canvas particles/ASCII traces drift slowly, pause when offscreen, simplified with `prefers-reduced-motion`.
- How it works: GSAP ScrollTrigger pins only that sequence on desktop and maps scroll progress to four layers.
- Microinteractions: subtle Framer Motion entrance and directional button feedback. Reduced motion disables transforms.

## 5. Asset list
- No external stock artwork.
- CSS/SVG Pioneer seal built from text and vector-like rings.
- Canvas particle field generated locally.
- Terminal copy and all section data stored in `data/content.ts`.
