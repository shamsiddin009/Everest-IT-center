# EVEREST ACADEMY — PERFORMANCE & ACCESSIBILITY SPECIFICATIONS

## 1. Accessibility (WCAG 2.2 AA)
- Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- Contrast ratios exceed 4.5:1 for body copy and 3:1 for large display headings.
- Keyboard-operable modal dialogs with focus trapping and `Esc` key dismissal.
- Meaningful `aria-label` tags for all icon buttons.
- Visible focus rings (`outline: 2px solid var(--color-cyan)`).

## 2. Performance & Core Web Vitals
- Zero bulky external CSS frameworks or unused heavy libraries.
- Explicit image width/height dimensions and `loading="lazy"` / `loading="eager"` attributes to eliminate Cumulative Layout Shift (CLS).
- CSS and JS bundles split cleanly via Vite production compiler.
- Clean client-side routing via `vue-router` with smooth scroll behavior.

## 3. Reduced Motion Support (`prefers-reduced-motion`)
- Global CSS rule in `src/style.css` instantly cancels transition durations and animations for users requesting reduced motion.
- `Mountain3D.vue` checks `window.matchMedia('(prefers-reduced-motion: reduce)')`: when active, it paints a crisp static low-poly crystalline peak and suspends the `requestAnimationFrame` particle loop, saving battery and preventing motion triggers.

## 4. Production-Readiness Audit Verification
- **Build Status:** `vite build` completed cleanly with zero warnings or errors.
- **Console Health:** Inspected via automated browser subagent across Desktop (1280x800), Tablet (768x1024), and Mobile (375x667) — verified **0 console errors** across all navigation routes.
- **Route Integrity:** Tested `/`, `/courses`, `/courses/frontend-dasturlash`, `/about`, `/teachers`, `/pricing`, `/contact`, and verified custom 404 fallback for invalid slugs (`/courses/kurs-mavjud-emas`).
- **Data Integrity:** All business contact numbers, email addresses, and pricing models are explicitly indicated as demo representations with clear disclaimer labels.
