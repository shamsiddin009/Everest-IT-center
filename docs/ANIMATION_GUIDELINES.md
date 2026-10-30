# EVEREST ACADEMY — ANIMATION GUIDELINES

## 1. Core Principles
- **Subtle & Purposeful:** Motion is used to communicate hierarchy and depth, never to distract.
- **Natural Physics:** Smooth cubic-bezier easing `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Performance First:** Exclusively animate `transform` and `opacity` properties. No layout-thrashing animations.

## 2. 3D Geometric Mountain Canvas
- A lightweight, hardware-accelerated interactive HTML5 Canvas renders a dynamic 3D low-poly mountain peak with glowing electric constellation nodes.
- Gently reacts to mouse cursor movement with smooth damping.
- Pauses when the tab is inactive to save battery and CPU cycles.

## 3. Accessibility & Reduced Motion
- `@media (prefers-reduced-motion: reduce)` automatically disables all continuous particle loops and floating effects, while retaining instant clean state changes.
