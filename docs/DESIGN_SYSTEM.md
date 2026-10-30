# EVEREST ACADEMY — DESIGN SYSTEM SPECIFICATIONS

## 1. Color Palette Tokens
| Token Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| `--color-bg-navy` | `#080F1A` | Main page background |
| `--color-surface-deep` | `#0D1730` | Section alternate backgrounds |
| `--color-surface-elevated`| `#111F3D` | Interactive cards, modal dialogs |
| `--color-indigo` | `#655BFF` | Primary brand accent & main buttons |
| `--color-cyan` | `#00C9E8` | Secondary electric accent & badges |
| `--color-text-primary` | `#F4F7FF` | High-contrast headings and body |
| `--color-text-secondary` | `#A8B5D0` | Descriptions and metadata |
| `--color-border-subtle` | `#253454` | Card borders, dividing lines |

## 2. Typography Hierarchy
- **Font Family:** `'Plus Jakarta Sans', system-ui, -apple-system, sans-serif`
- **Display Headings (`H1`):** `clamp(2.5rem, 5vw, 4.2rem)`, weight 800, line-height 1.15
- **Section Titles (`H2`):** `clamp(2rem, 3.8vw, 3rem)`, weight 700, line-height 1.2
- **Subheadings (`H3`):** `1.35rem`, weight 600, line-height 1.3
- **Body Regular:** `1rem` (16px), line-height 1.7, color `var(--color-text-secondary)`
- **Caption / Meta:** `0.85rem` (13.6px), uppercase tracking `0.08em`

## 3. Elevation & Glassmorphism
- **Subtle Glass Panel:** `background: rgba(17, 31, 61, 0.65); backdrop-filter: blur(16px); border: 1px solid var(--color-border-subtle);`
- **Glow Shadow:** `0 12px 36px -8px rgba(101, 91, 255, 0.35)`
- **Hover Lift:** `transform: translateY(-4px); border-color: rgba(0, 201, 232, 0.4);`

## 4. Spacing Scale
- `xs`: 4px | `sm`: 8px | `md`: 16px | `lg`: 24px | `xl`: 36px | `2xl`: 48px | `3xl`: 80px | `4xl`: 120px
