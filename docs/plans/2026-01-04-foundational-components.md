# Foundational Components Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build foundational UI library components (Button, Input, Typography) using Radix UI, Tailwind CSS, and CSS modules with reusable underline animation pattern.

**Architecture:** Three-layer CSS system (Tailwind config for tokens, global CSS for base styles, component modules for specific styles). Components follow template pattern with TypeScript, forwarded refs, and exported types.

**Tech Stack:** React 19, TypeScript, Tailwind CSS, Radix UI, CSS Modules, Vite

---

## Task 1: Install Dependencies

**Files:**
- Modify: `package.json`

**Step 1: Install Tailwind CSS**

Run:
```bash
npm install -D tailwindcss postcss autoprefixer
```

Expected: Dependencies added to devDependencies

**Step 2: Install Radix UI packages**

Run:
```bash
npm install @radix-ui/react-slot
```

Expected: Dependencies added to dependencies

**Step 3: Initialize Tailwind**

Run:
```bash
npx tailwindcss init -p
```

Expected: Creates `tailwind.config.js` and `postcss.config.js`

**Step 4: Verify installation**

Run:
```bash
npm list tailwindcss @radix-ui/react-slot
```

Expected: Both packages listed with versions

**Step 5: Commit**

```bash
git add package.json package-lock.json tailwind.config.js postcss.config.js
git commit -m "feat: add Tailwind CSS and Radix UI dependencies"
```

---

## Task 2: Configure Tailwind

**Files:**
- Modify: `tailwind.config.js`

**Step 1: Update Tailwind config**

Replace entire content of `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFAA00',
        secondary: '#0032A0',
        accent: '#e4002b',
        success: '#00843D',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        worksans: ['Work Sans', 'sans-serif'],
      },
      borderRadius: {
        sm: '0.15rem',
        DEFAULT: '0.15rem',
        md: '0.15rem',
        lg: '0.15rem',
      },
    },
  },
  plugins: [],
}
```

**Step 2: Verify config syntax**

Run:
```bash
npm run build
```

Expected: Build succeeds without errors

**Step 3: Commit**

```bash
git add tailwind.config.js
git commit -m "feat: configure Tailwind with design tokens"
```

---

## Task 3: Set Up Font Assets

**Files:**
- Create: `src/assets/fonts/` (directory)

**Step 1: Create fonts directory**

Run:
```bash
mkdir -p src/assets/fonts
```

Expected: Directory created

**Step 2: Copy font files from base.css reference**

Note: The base.css references these fonts:
- `Nunito-VariableFont_wght.ttf`
- `Nunito-Italic-VariableFont_wght.ttf`
- `WorkSans-VariableFont_wght.ttf`
- `WorkSans-Italic-VariableFont_wght.ttf`
- `Inter-VariableFont_opsz,wght.ttf`
- `Inter-Italic-VariableFont_opsz,wght.ttf`

Manual step: User needs to provide these font files or download from Google Fonts.
Place them in `src/assets/fonts/`

**Step 3: Verify fonts exist**

Run:
```bash
ls src/assets/fonts/
```

Expected: All 6 font files listed

**Step 4: Commit**

```bash
git add src/assets/fonts/
git commit -m "feat: add font assets (Nunito, Inter, Work Sans)"
```

---

## Task 4: Create Global CSS Structure

**Files:**
- Create: `src/styles/root.css`
- Modify: `src/index.css`

**Step 1: Create styles directory and root.css**

Run:
```bash
mkdir -p src/styles
```

Create `src/styles/root.css`:

```css
/* Font definitions */
@font-face {
  font-family: 'Nunito';
  src: url('../assets/fonts/Nunito-VariableFont_wght.ttf') format('truetype-variations');
  font-weight: 200 1000;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Nunito';
  src: url('../assets/fonts/Nunito-Italic-VariableFont_wght.ttf') format('truetype-variations');
  font-weight: 200 1000;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: 'Work Sans';
  src: url('../assets/fonts/WorkSans-VariableFont_wght.ttf') format('truetype-variations');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Work Sans';
  src: url('../assets/fonts/WorkSans-Italic-VariableFont_wght.ttf') format('truetype-variations');
  font-weight: 100 900;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('../assets/fonts/Inter-VariableFont_opsz,wght.ttf') format('truetype-variations');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('../assets/fonts/Inter-Italic-VariableFont_opsz,wght.ttf') format('truetype-variations');
  font-weight: 100 900;
  font-style: italic;
  font-display: swap;
}

/* CSS Variables - Light Theme (default) */
:root {
  /* Theme colors */
  --primary: #FFAA00;
  --secondary: #0032A0;
  --accent: #e4002b;
  --success: #00843D;

  /* Light theme */
  --bg: #f1f1f1;
  --surface: #aaaaaa;
  --text-primary: #000000;
  --text-secondary: #555555;
  --text-muted: #64748b;
  --border-color: #555555;
  --shadow-color: rgba(0, 0, 0, 0.1);
  --code-bg: #f1f5f9;
}

/* Dark theme */
[data-theme="dark"] {
  --bg: #171717;
  --surface: #555555;
  --text-primary: #ffffff;
  --text-secondary: #a1a1aa;
  --text-muted: #94a3b8;
  --border-color: #555555;
  --shadow-color: rgba(0, 0, 0, 0.3);
  --code-bg: #1e293b;
}
```

**Step 2: Update index.css with Tailwind and base styles**

Replace entire content of `src/index.css`:

```css
@import './styles/root.css';

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background: var(--bg);
  }

  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    text-align: left;
    background: var(--bg);
    color: var(--text-primary);
    font-size: 20px;
    line-height: 1.7;
    transition: background-color 0.3s ease, color 0.3s ease;
    min-height: 100vh;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Nunito', sans-serif;
    margin: 0 0 0.5rem 0;
    color: var(--text-primary);
    line-height: 1.2;
    font-weight: 400;
  }

  h1 { font-size: 3.052em; }
  h2 { font-size: 2.441em; }
  h3 { font-size: 1.953em; }
  h4 { font-size: 1.563em; }
  h5 { font-size: 1.25em; }

  strong, b {
    font-weight: 600;
  }

  p {
    margin-bottom: 0.5em;
    color: var(--text-primary);
  }

  /* Links */
  a {
    text-decoration: none;
    color: var(--text-primary);
    transition: color 0.2s ease;
    position: relative;
  }

  a::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: var(--accent);
    transition: width 0.2s ease-out;
  }

  a:hover::after {
    width: 100%;
  }

  /* Code */
  code {
    padding: 2px 5px;
    background-color: var(--code-bg);
    border-radius: 2px;
    font-family: 'Inter', monospace;
    color: var(--text-primary);
  }

  pre {
    padding: 1.5em;
    border-radius: 8px;
    font-family: 'Inter', monospace;
    background: var(--code-bg);
    color: var(--text-primary);
  }

  pre > code {
    all: unset;
  }

  /* Blockquotes */
  blockquote {
    border-left: 4px solid var(--accent);
    padding: 0 0 0 20px;
    margin: 0px;
    font-size: 1.333em;
    font-family: 'Work Sans', sans-serif;
    font-weight: 400;
    font-style: italic;
    color: var(--text-primary);
  }

  /* Horizontal rule */
  hr {
    border: none;
    border-top: 1px solid var(--border-color);
  }

  /* Form elements */
  input, textarea {
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    background: var(--bg);
    color: var(--text-primary);
    border: 1px solid var(--border-color);
  }
}
```

**Step 3: Remove old CSS files**

Run:
```bash
rm src/App.css
```

Expected: File deleted

**Step 4: Test dev server**

Run:
```bash
npm run dev
```

Expected: Dev server starts, page loads with new styles (may look broken, that's ok)

**Step 5: Commit**

```bash
git add src/styles/root.css src/index.css
git add -u src/App.css
git commit -m "feat: set up global CSS with Tailwind and design tokens"
```

---

## Task 5: Create Shared Animation Utilities

**Files:**
- Create: `src/styles/animations.module.css`

**Step 1: Create animations module**

Create `src/styles/animations.module.css`:

```css
/* Reusable underline animation base */
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

/* Color variants */
.underlinePrimary::after {
  background-color: var(--primary);
}

.underlineSecondary::after {
  background-color: var(--secondary);
}

.underlineAccent::after {
  background-color: var(--accent);
}
```

**Step 2: Verify file created**

Run:
```bash
cat src/styles/animations.module.css
```

Expected: File content displays correctly

**Step 3: Commit**

```bash
git add src/styles/animations.module.css
git commit -m "feat: add reusable underline animation utilities"
```

---

## Task 6: Create Button Component Structure

**Files:**
- Create: `src/components/Button/Button.tsx`
- Create: `src/components/Button/Button.module.css`
- Create: `src/components/Button/index.ts`

**Step 1: Create component directory**

Run:
```bash
mkdir -p src/components/Button
```

Expected: Directory created

**Step 2: Create Button.tsx**

Create `src/components/Button/Button.tsx`:

```tsx
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import styles from './Button.module.css'
import animations from '../../styles/animations.module.css'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    const shouldHaveUnderline = variant === 'default' || variant === 'secondary'
    const underlineClass = variant === 'default'
      ? animations.underlinePrimary
      : variant === 'secondary'
      ? animations.underlineSecondary
      : null

    return (
      <Comp
        ref={ref}
        className={clsx(
          styles.root,
          styles[variant],
          styles[size],
          shouldHaveUnderline && animations.underlineBase,
          shouldHaveUnderline && underlineClass,
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
```

**Step 3: Create Button.module.css**

Create `src/components/Button/Button.module.css`:

```css
.root {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  font-weight: 700;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  transition: transform 0.15s ease, box-shadow 0.2s ease, background-color 0.2s ease;
  border-radius: 0.15rem;
}

.root:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Variants */
.default {
  background-color: var(--bg);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.default:hover:not(:disabled) {
  background-color: var(--surface);
}

.secondary {
  background-color: var(--bg);
  color: var(--text-secondary);
  border: 1px solid var(--border-color);
}

.secondary:hover:not(:disabled) {
  background-color: var(--surface);
}

.outline {
  background-color: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.outline:hover:not(:disabled) {
  background-color: var(--bg);
}

.ghost {
  background-color: transparent;
  color: var(--text-primary);
  border: 1px solid transparent;
}

.ghost:hover:not(:disabled) {
  background-color: var(--surface);
}

/* Sizes */
.sm {
  padding: 8px 12px;
  font-size: 0.875rem;
}

.md {
  padding: 12px 16px;
  font-size: 1rem;
}

.lg {
  padding: 16px 24px;
  font-size: 1.125rem;
}
```

**Step 4: Create index.ts**

Create `src/components/Button/index.ts`:

```ts
export { Button, type ButtonProps } from './Button'
```

**Step 5: Verify TypeScript compiles**

Run:
```bash
npm run build
```

Expected: Build succeeds without TypeScript errors

**Step 6: Commit**

```bash
git add src/components/Button/
git commit -m "feat: add Button component with variants and sizes"
```

---

## Task 7: Create Input Component

**Files:**
- Create: `src/components/Input/Input.tsx`
- Create: `src/components/Input/Input.module.css`
- Create: `src/components/Input/index.ts`

**Step 1: Create component directory**

Run:
```bash
mkdir -p src/components/Input
```

Expected: Directory created

**Step 2: Create Input.tsx**

Create `src/components/Input/Input.tsx`:

```tsx
import * as React from 'react'
import { clsx } from 'clsx'
import styles from './Input.module.css'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  errorMessage?: string
  label?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, errorMessage, label, id, ...props }, ref) => {
    const inputId = id || React.useId()

    return (
      <div className={styles.wrapper}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={clsx(
            styles.root,
            error && styles.error,
            className
          )}
          {...props}
        />
        {error && errorMessage && (
          <span className={styles.errorMessage}>{errorMessage}</span>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
```

**Step 3: Create Input.module.css**

Create `src/components/Input/Input.module.css`:

```css
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-secondary);
}

.root {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  background: var(--bg);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: 0.15rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.root:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(255, 170, 0, 0.1);
}

.root:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: var(--surface);
}

.root::placeholder {
  color: var(--text-muted);
}

.error {
  border-color: var(--accent);
}

.error:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(228, 0, 43, 0.1);
}

.errorMessage {
  font-size: 0.875rem;
  color: var(--accent);
}
```

**Step 4: Create index.ts**

Create `src/components/Input/index.ts`:

```ts
export { Input, type InputProps } from './Input'
```

**Step 5: Verify TypeScript compiles**

Run:
```bash
npm run build
```

Expected: Build succeeds without TypeScript errors

**Step 6: Commit**

```bash
git add src/components/Input/
git commit -m "feat: add Input component with label and error states"
```

---

## Task 8: Create Components Index

**Files:**
- Create: `src/components/index.ts`

**Step 1: Create barrel export**

Create `src/components/index.ts`:

```ts
export { Button, type ButtonProps } from './Button'
export { Input, type InputProps } from './Input'
```

**Step 2: Verify exports**

Run:
```bash
npm run build
```

Expected: Build succeeds

**Step 3: Commit**

```bash
git add src/components/index.ts
git commit -m "feat: add components barrel export"
```

---

## Task 9: Build App.tsx Showcase - Part 1 (Setup and Typography)

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/main.tsx`

**Step 1: Update main.tsx to support theme switching**

Replace `src/main.tsx`:

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

**Step 2: Create App.tsx showcase structure**

Replace `src/App.tsx`:

```tsx
import { useState } from 'react'
import { Button } from './components/Button'
import { Input } from './components/Input'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    if (newTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <header style={{ marginBottom: '3rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '2rem' }}>
        <h1>UI Library Showcase</h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          Foundational components built with Radix UI and Tailwind CSS
        </p>
        <Button
          onClick={toggleTheme}
          variant="outline"
          style={{ marginTop: '1rem' }}
        >
          Toggle Theme (Current: {theme})
        </Button>
      </header>

      {/* Typography Section */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          borderBottom: '2px solid var(--border-color)',
          paddingBottom: '0.5rem',
          marginBottom: '2rem'
        }}>
          Typography
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <h1>Heading 1 - Nunito 3.052em</h1>
            <h2>Heading 2 - Nunito 2.441em</h2>
            <h3>Heading 3 - Nunito 1.953em</h3>
            <h4>Heading 4 - Nunito 1.563em</h4>
            <h5>Heading 5 - Nunito 1.25em</h5>
          </div>

          <div>
            <p>
              Body text using Inter font. This is regular text with{' '}
              <strong>bold text</strong> and <em>italic text</em>.
            </p>
            <p>
              <a href="#typography">This is a link with underline animation</a>
            </p>
          </div>

          <div>
            <blockquote>
              This is a blockquote using Work Sans italic font with accent border.
            </blockquote>
          </div>

          <div>
            <p>Inline code: <code>const example = true</code></p>
            <pre><code>{`// Code block
function hello() {
  return "world"
}`}</code></pre>
          </div>

          <hr />
        </div>
      </section>
    </div>
  )
}

export default App
```

**Step 3: Test in browser**

Run:
```bash
npm run dev
```

Manual: Open browser, verify:
- Typography displays correctly
- Theme toggle works
- Link underline animation works
- All font families load correctly

**Step 4: Commit**

```bash
git add src/App.tsx src/main.tsx
git commit -m "feat: add App showcase with typography section"
```

---

## Task 10: Build App.tsx Showcase - Part 2 (Button Variants)

**Files:**
- Modify: `src/App.tsx`

**Step 1: Add Button section to App.tsx**

Add after the Typography section (before the closing `</div>`):

```tsx
      {/* Button Section */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          borderBottom: '2px solid var(--border-color)',
          paddingBottom: '0.5rem',
          marginBottom: '2rem'
        }}>
          Buttons
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {/* Variants */}
          <div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Variants</h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button variant="default">Default Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Sizes</h3>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button size="sm">Small Button</Button>
              <Button size="md">Medium Button</Button>
              <Button size="lg">Large Button</Button>
            </div>
          </div>

          {/* States */}
          <div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>States</h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button>Normal</Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>

          {/* As Child (polymorphic) */}
          <div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>As Link (asChild)</h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button asChild variant="default">
                <a href="#buttons">Link styled as Button</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
```

**Step 2: Test in browser**

Run:
```bash
npm run dev
```

Manual: Open browser, verify:
- All button variants display correctly
- Underline animation works on default and secondary
- Outline and ghost don't have underline
- All sizes work
- Disabled state works
- asChild link works

**Step 3: Commit**

```bash
git add src/App.tsx
git commit -m "feat: add Button variants showcase to App"
```

---

## Task 11: Build App.tsx Showcase - Part 3 (Input Variants)

**Files:**
- Modify: `src/App.tsx`

**Step 1: Add Input section to App.tsx**

Add after the Button section (before the closing `</div>`):

```tsx
      {/* Input Section */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          borderBottom: '2px solid var(--border-color)',
          paddingBottom: '0.5rem',
          marginBottom: '2rem'
        }}>
          Inputs
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '500px' }}>
          {/* Basic Input */}
          <div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Basic Input</h3>
            <Input placeholder="Enter text..." />
          </div>

          {/* With Label */}
          <div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>With Label</h3>
            <Input label="Email Address" type="email" placeholder="you@example.com" />
          </div>

          {/* Error State */}
          <div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Error State</h3>
            <Input
              label="Username"
              error={true}
              errorMessage="Username is already taken"
              defaultValue="invalid_user"
            />
          </div>

          {/* Disabled */}
          <div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Disabled</h3>
            <Input label="Disabled Field" disabled defaultValue="Cannot edit" />
          </div>

          {/* Different Types */}
          <div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Input Types</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Input label="Text" type="text" placeholder="Text input" />
              <Input label="Password" type="password" placeholder="Password" />
              <Input label="Number" type="number" placeholder="123" />
              <Input label="Date" type="date" />
            </div>
          </div>
        </div>
      </section>
```

**Step 2: Test in browser**

Run:
```bash
npm run dev
```

Manual: Open browser, verify:
- All input variants display correctly
- Label association works
- Error state shows red border and message
- Focus states work (border color change)
- Disabled state works
- Different input types work

**Step 3: Commit**

```bash
git add src/App.tsx
git commit -m "feat: add Input variants showcase to App"
```

---

## Task 12: Final Testing and Polish

**Files:**
- None (testing only)

**Step 1: Test theme switching thoroughly**

Run:
```bash
npm run dev
```

Manual tests:
1. Click theme toggle multiple times
2. Verify colors change correctly
3. Verify all components adapt to theme
4. Check that underline animations use correct colors in both themes
5. Test all interactive states in both themes

Expected: All components work in both light and dark themes

**Step 2: Test responsive behavior**

Manual: Resize browser window to mobile size, verify layout adapts

**Step 3: Test build production**

Run:
```bash
npm run build
npm run preview
```

Expected: Production build works, preview server shows same functionality

**Step 4: Final verification checklist**

Verify:
- [ ] All components follow template structure (tsx, module.css, index.ts)
- [ ] TypeScript types exported
- [ ] className prop works for overrides
- [ ] forwardRef implemented
- [ ] displayName set
- [ ] Underline animation works consistently
- [ ] Theme switching works
- [ ] All variants and sizes work

**Step 5: Commit if any fixes were made**

```bash
git add .
git commit -m "fix: final polish and testing"
```

---

## Task 13: Update Documentation

**Files:**
- Create: `README.md`

**Step 1: Create comprehensive README**

Create `README.md`:

```markdown
# UI Library

Minimalistic UI component library built with Radix UI, Tailwind CSS, and React.

## Features

- 🎨 Built on Radix UI primitives
- 🎯 Tailwind CSS for styling
- 🌓 Light/dark theme support
- ⚡ TypeScript support
- 📦 Tree-shakeable exports
- 🎭 CSS Modules for component styles

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Visit `http://localhost:5173` to see the component showcase.

## Components

### Button

Polymorphic button component with variants and sizes.

```tsx
import { Button } from './components/Button'

<Button variant="default">Click me</Button>
<Button variant="secondary" size="lg">Large Secondary</Button>
<Button asChild><a href="/page">Link as Button</a></Button>
```

**Variants:** `default` | `secondary` | `outline` | `ghost`
**Sizes:** `sm` | `md` | `lg`

### Input

Text input component with label and error state support.

```tsx
import { Input } from './components/Input'

<Input placeholder="Enter text..." />
<Input label="Email" type="email" />
<Input error errorMessage="Required field" />
```

## Theming

The library uses CSS variables for theming. Toggle between light and dark themes:

```tsx
// Light theme (default)
document.documentElement.removeAttribute('data-theme')

// Dark theme
document.documentElement.setAttribute('data-theme', 'dark')
```

## Design Tokens

Colors:
- Primary: `#FFAA00`
- Secondary: `#0032A0`
- Accent: `#e4002b`
- Success: `#00843D`

Fonts:
- Headings: Nunito
- Body: Inter
- Special: Work Sans

## Component Template

When creating new components, follow this structure:

```
src/components/ComponentName/
├── ComponentName.tsx
├── ComponentName.module.css
├── index.ts
```

See existing components for implementation examples.

## Build

```bash
npm run build
```

## License

MIT
```

**Step 2: Verify README renders correctly**

Run:
```bash
cat README.md
```

Expected: Content displays correctly

**Step 3: Commit**

```bash
git add README.md
git commit -m "docs: add comprehensive README"
```

---

## Task 14: Clean Up

**Files:**
- Delete: `base.css` (reference file, no longer needed in src)

**Step 1: Remove base.css from root**

Note: Keep `base.css` in project root as reference, but ensure it's not imported anywhere

Run:
```bash
grep -r "base.css" src/
```

Expected: No results (not imported anywhere)

**Step 2: Verify clean build**

Run:
```bash
npm run build
```

Expected: Build succeeds with no warnings

**Step 3: Final commit**

```bash
git add -A
git commit -m "chore: final cleanup"
```

---

## Success Criteria

✅ All components follow template structure
✅ Underline animation works on buttons and links
✅ Theme switching works without reload
✅ TypeScript compilation succeeds
✅ All variants and sizes display correctly
✅ App.tsx showcases all components
✅ Production build succeeds
✅ README documentation complete

## Next Steps

After completing this plan:
- Add more components (Card, Dialog, Dropdown, etc.)
- Set up component testing
- Configure library build for npm distribution
- Add Storybook for better component documentation
