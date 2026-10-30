# EVEREST ACADEMY — IMPLEMENTATION PLAN

## Phase 1: Foundation & Architecture Setup
- [x] Audit workspace and initialize Multi-Page Architecture with `vue-router`.
- [x] Complete brand identity and design system documentation.
- [x] Implement central design tokens in `src/style.css`.
- [x] Centralize structured course and faculty data models in `src/data/courses.js` and `src/data/teachers.js`.

## Phase 2: Brand Identity & Shared UI Components
- [x] Design SVG Everest ascending mountain peak logo with wordmark.
- [x] Build global `Navbar.vue` with active route tracking and mobile drawer.
- [x] Build global `Footer.vue` with verified navigation links and contact placeholders.
- [x] Implement `Mountain3D.vue` interactive geometric Canvas.
- [x] Build universal `EnrollModal.vue` with stateful validation and confirmation state.

## Phase 3: Multi-Page Views Implementation
- [ ] **HomeView.vue (`/`):** 3D Hero, 4 Core Categories, Why Everest, Enrollment Steps, Testimonials, FAQ.
- [ ] **AboutView.vue (`/about`):** Mission, Philosophy, Modern Labs, Core Values.
- [ ] **CoursesView.vue (`/courses`):** Search, Category Filter tabs, Detailed Cards with slugs.
- [ ] **CourseDetailView.vue (`/courses/:slug`):** Syllabus breakdown, outcomes, prerequisites, instant enroll CTA.
- [ ] **TeachersView.vue (`/teachers`):** Professional instructor portfolios, experience badges, mentoring fields.
- [ ] **PricingView.vue (`/pricing`):** Transparent tier packages, included perks, clearly marked demo placeholders.
- [ ] **ContactView.vue (`/contact`):** Working contact form, working hours, interactive inquiry.

## Phase 4: Quality Assurance & Build Verification
- [ ] Validate TypeScript/Linting/Vite production build.
- [ ] Test client-side navigation transitions and mobile responsiveness across all viewports.
