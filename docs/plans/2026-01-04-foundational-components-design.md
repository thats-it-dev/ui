# Foundational Components Design

**Date:** 2026-01-04
**Status:** Approved

## Overview

Building the foundational UI library components (Button, Input, Typography) using Radix UI primitives, Tailwind CSS, and CSS modules. The design follows the styling from `base.css` (postcards.thatsit.dev inspiration) with specific focus on the underline animation pattern for interactive elements.

## Architecture

### Dependencies
- `tailwindcss`, `postcss`, `autoprefixer` - Tailwind CSS setup
- `@radix-ui/react-slot` - Button polymorphism
- Additional Radix primitives as needed per component

### CSS Architecture (Three Layers)

**1. Tailwind Config** (`tailwind.config.js`)
Global design tokens extracted from `base.css`:
- **Colors:**
  - Primary: `#FFAA00`
  - Secondary: `#0032A0`
  - Accent: `#e4002b`
  - Success: `#00843D`
- **Fonts:**
  - Nunito (headings)
  - Inter (body)
  - Work Sans (special text)
- **Theme:** Light/dark mode via CSS variables
- **Border Radius:** Minimal (0.15rem) matching base.css

**2. Global CSS** (`src/index.css`)
Using Tailwind directives:
- Font-face declarations for three font families
- Base element styles (body, html, typography)
- Tailwind's `@layer base` for custom defaults
- Shared underline animation utilities

**3. Component CSS Modules** (`src/components/*/ComponentName.module.css`)
- Component-specific styles
- Radix-specific overrides
- Complex interactions/animations

### Component Showcase (`src/App.tsx`)
Single-page layout with sections:
- Typography (h1-h6, body text, code, blockquotes)
- Theme toggle (light/dark)
- Button variants and sizes
- Input/TextField variants and states

## Component Specifications

### Button Component

**Base:** `@radix-ui/react-slot` for polymorphic behavior

**Variants:**
- `default` - Primary color with underline animation
- `secondary` - Secondary color with underline animation
- `outline` - Transparent with border, hover effect
- `ghost` - Transparent, minimal styling

**Sizes:** `sm`, `md` (default), `lg`

**Props:** `asChild`, `variant`, `size`, `className`

### Input/TextField Component

**Base:** Native `<input>` element

**Features:**
- Matches base.css input styles (16px font, border, themed background/color)
- Error state (red border, error message)
- Disabled state
- Optional label integration

### Typography System

**Implementation:** Tailwind utilities + showcase section

**Elements:**
- Font family utilities (font-nunito, font-inter, font-worksans)
- Heading scale (h1: 3.052em → h5: 1.25em from base.css)
- Text color utilities (text-primary, text-secondary, text-muted)
- Code blocks, blockquotes, links with underline animation

### Theme Handling

- `[data-theme="dark"]` selector (matching base.css)
- Simple toggle button in App.tsx
- CSS variables drive all colors

## Underline Animation Pattern

### The Pattern (from base.css)
```css
/* Element needs position: relative */
element {
  position: relative;
}

/* Underline pseudo-element */
element::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: var(--color);
  transition: width 0.2s ease-out;
}

/* Expand on hover */
element:hover::after {
  width: 100%;
}
```

### Application Points

**1. Button Component** (`Button.module.css`)
- `.default::after` → primary color underline
- `.secondary::after` → secondary color underline
- Outline/ghost variants skip underline

**2. Links/Typography** (global CSS)
- Base `<a>` tags → accent color underline
- `.link` utility class

**3. Future Components**
- Accordions (on summary element)
- Dropdown triggers
- Navigation items
- Interactive cards

### Implementation: Shared Animation Utilities

**Approach:** CSS Module Utility (`src/styles/animations.module.css`)

```css
.underlineBase {
  position: relative;
}

.underlineBase::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0%;
  height: 2px;
  transition: width 0.2s ease-out;
}

.underlineBase:hover::after {
  width: 100%;
}

.underlinePrimary::after { background-color: var(--primary); }
.underlineSecondary::after { background-color: var(--secondary); }
.underlineAccent::after { background-color: var(--accent); }
```

Components compose with: `clsx(styles.root, animations.underlineBase, animations.underlinePrimary)`

**Benefits:**
- Explicit and easy to understand
- Works with module.css approach
- Reusable across all components
- Can refactor to Tailwind plugin later if needed

## Implementation Order

1. Setup Tailwind + Radix dependencies
2. Restructure CSS (fonts, colors, global styles)
3. Create shared animation utilities
4. Build Button component
5. Build Input component
6. Build App.tsx showcase with typography
7. Test theme switching

## Color Variables

**Light Theme:**
- `--bg`: `#f1f1f1`
- `--surface`: `#aaaaaa`
- `--text-primary`: `#000000`
- `--text-secondary`: `#555555`
- `--text-muted`: `#64748b`
- `--border-color`: `#555555`

**Dark Theme** (`[data-theme="dark"]`):
- `--bg`: `#171717`
- `--surface`: `#555555`
- `--text-primary`: `#ffffff`
- `--text-secondary`: `#a1a1aa`
- `--text-muted`: `#94a3b8`
- `--border-color`: `#555555`

## Success Criteria

- All components follow the template structure (ComponentName.tsx, ComponentName.module.css, index.ts)
- Underline animation works consistently across components
- Theme switching works without page reload
- App.tsx showcases all variants clearly
- TypeScript types exported for all components
- Components accept className prop for consumer overrides
