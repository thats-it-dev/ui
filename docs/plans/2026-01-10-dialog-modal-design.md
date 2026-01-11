# Dialog Modal Component Design

**Date:** 2026-01-10
**Status:** Approved

## Overview

A general-purpose dialog modal component built on Radix UI's dialog primitives with Tailwind CSS styling. The component wraps Radix's compound components internally but exposes a simple prop-based API for ease of use.

## Requirements

- General-purpose content support (forms, alerts, confirmations, custom content)
- Multiple size variants (sm, md, lg)
- Simple prop-based API (not compound components)
- Fade-only animations for entry/exit
- Full theming support via CSS variables
- Accessibility built-in via Radix

## Component Architecture

### Interface

```tsx
interface DialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  trigger?: React.ReactNode  // Optional button to open dialog
  title?: string
  description?: string
  children: React.ReactNode  // Main content
  footer?: React.ReactNode   // Action buttons area
  size?: 'sm' | 'md' | 'lg'
  showCloseButton?: boolean  // X button in corner
}
```

### Internal Structure

The component uses Radix Dialog primitives internally:
- `Dialog.Root` - Root container with open state
- `Dialog.Trigger` - Optional trigger button (if trigger prop provided)
- `Dialog.Portal` - Portal for rendering outside DOM hierarchy
- `Dialog.Overlay` - Backdrop/overlay
- `Dialog.Content` - Main dialog content container

These are composed into a single easy-to-use component.

### File Organization

```
src/components/Dialog/
├── Dialog.tsx
├── Dialog.module.css
├── index.ts
```

### Size Variants

- **sm**: max-width 400px - Alerts, simple forms
- **md**: max-width 600px - Default, general use
- **lg**: max-width 800px - Complex forms, detailed content

## Styling & Theming

### Overlay (Backdrop)

- Semi-transparent backdrop: `rgba(0, 0, 0, 0.5)`
- Fixed positioning, covers entire viewport
- Fade-in/fade-out animation (opacity transition, 200ms ease)

### Dialog Content

- Background color via CSS variables: `var(--bg)` for light/dark themes
- Centered on screen using fixed positioning
- Border radius for smooth corners
- Box shadow using `--shadow-color`
- Padding: 1.5rem
- Inherits theme colors from root.css

### Animations

- **Overlay**: Fade in/out using opacity transition (200ms ease)
- **Content**: Fade in/out using opacity transition (200ms ease)
- Uses Radix's `data-state="open"` attribute to trigger CSS transitions

### Typography

- **Title**: Uses existing h2 styles from global styles
- **Description**: Uses `--text-secondary` color
- **Close button**: Icon button styled like ghost button variant

### Responsive Behavior

- **Mobile (<640px)**: Dialog takes 95% width with margin
- **Desktop**: Fixed max-width based on size variant
- **Max height**: 90vh with overflow-y auto for scrollable content

## Implementation Details

### Props & Defaults

- `size` defaults to `'md'`
- `showCloseButton` defaults to `true`
- `trigger` is optional - if not provided, dialog controlled externally via `open` prop
- `footer` is optional - if not provided, no footer area rendered

### Accessibility Features

Radix provides built-in accessibility:
- Focus trapping when dialog is open
- ESC key to close
- Click outside to close
- Proper ARIA labeling via Dialog.Title and Dialog.Description
- Close button includes `aria-label="Close"`

### CSS Module Classes

```css
.overlay - backdrop styles
.content - dialog container
.header - title and close button area
.title - title text
.description - description text
.body - main content area
.footer - footer/actions area
.closeButton - X button in corner
.sm, .md, .lg - size variants
```

### Integration Pattern

Uses `twMerge(clsx(...))` pattern like Button component to combine CSS module classes and allow consumer className overrides.

## Showcase in App.tsx

The Dialog section will demonstrate:
1. Basic dialog with title and description
2. Dialog with form content
3. Dialog with custom footer (action buttons)
4. All three size variants (sm, md, lg)

## Dependencies

- `@radix-ui/react-dialog` - Base dialog primitives
- `tailwind-merge` - Class merging utility
- `clsx` - Conditional class names
- Existing CSS variables from root.css for theming
