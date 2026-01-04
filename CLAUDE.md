# Overview

This is a UI library that will be used across a number of projects. it is meant to be minimalistic and "just work" out of the gate.

## Package Manager

- **IMPORTANT**: Always use `pnpm` for package management (NOT npm or yarn)

## dependencies

- We're using radix as the base component library and extending them to fit our particular style
- We're using tailwinds for CSS styling as a peerDependency
- we're using clsx for module specific stuff

## General Guidelines

- use src/App.tsx as a 1 page component show case, showcasing typography, themingn, and each component and it's variance, if any.
- base.css is a rough starting point we're using for inspiration. It's used in postcards.thatsit.dev, which does not use tailwinds or radix, but should be considered the style inspiration for all of our components
- any component specific css should be moved to a component specific file in src/style/<ComponentName>module.css
- move global styles (font sizes, colors, theming, etc) into root.css or wherever tailwinds expects it.

## project Structure

- src/components: where the components and their relevant files are stored
- src/assets: fonts and other common assets will be stored

## component template

### File Structure
```
src/components/ComponentName/
├── ComponentName.tsx
├── ComponentName.module.css
├── index.ts
```

### Component Template
```tsx
// src/components/ComponentName/ComponentName.tsx
import * as React from 'react'
import * as RadixComponentName from '@radix-ui/react-component-name'
import { clsx } from 'clsx'
import styles from './ComponentName.module.css'

export interface ComponentNameProps
  extends React.ComponentPropsWithoutRef<typeof RadixComponentName.Root> {
  variant?: 'default' | 'secondary'
}

export const ComponentName = React.forwardRef
  React.ElementRef<typeof RadixComponentName.Root>,
  ComponentNameProps
>(({ className, variant = 'default', ...props }, ref) => {
  return (
    <RadixComponentName.Root
      ref={ref}
      className={clsx(styles.root, styles[variant], className)}
      {...props}
    />
  )
})

ComponentName.displayName = RadixComponentName.Root.displayName
```
```css
/* src/components/ComponentName/ComponentName.module.css */
.root {
  /* Base styles */
}

.default {
  /* Default variant */
}

.secondary {
  /* Secondary variant */
}
```
```tsx
// src/components/ComponentName/index.ts
export { ComponentName, type ComponentNameProps } from './ComponentName'
```

### Guidelines

1. Always use React.forwardRef
2. Set displayName
3. Always create a .module.css file
4. Accept className prop for consumer overrides
5. Export types alongside components
