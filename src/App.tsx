import { useState } from 'react'
import { Button } from './components/Button'
import { Input } from './components/Input'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header */}
      <header style={{ marginBottom: '3rem' }}>
        <h1>UI Component Library</h1>
        <p style={{ fontSize: '1.125rem', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
          A minimalistic UI library built with Radix UI and Tailwind CSS
        </p>
        <Button onClick={toggleTheme} variant="secondary">
          Toggle Theme ({theme})
        </Button>
      </header>

      {/* Typography Section */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Typography</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <h1>Heading 1</h1>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
              font-size: 2.5rem, font-weight: 700
            </p>
          </div>

          <div>
            <h2>Heading 2</h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
              font-size: 2rem, font-weight: 700
            </p>
          </div>

          <div>
            <h3>Heading 3</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
              font-size: 1.5rem, font-weight: 600
            </p>
          </div>

          <div>
            <h4>Heading 4</h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
              font-size: 1.25rem, font-weight: 600
            </p>
          </div>

          <div>
            <h5>Heading 5</h5>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
              font-size: 1rem, font-weight: 600
            </p>
          </div>

          <div>
            <p>
              This is a paragraph with <strong>bold text</strong>, <em>italic text</em>, and{' '}
              <a href="https://example.com">a link with underline animation</a>.
            </p>
          </div>

          <div>
            <blockquote>
              This is a blockquote. It should have a border on the left and padding.
              Blockquotes are used for quotations or highlighted text.
            </blockquote>
          </div>

          <div>
            <p>Inline code: <code>const example = 'hello world'</code></p>
          </div>

          <div>
            <pre><code>{`function greet(name: string) {
  return \`Hello, \${name}!\`
}

console.log(greet('World'))`}</code></pre>
          </div>

          <hr />
        </div>
      </section>

      {/* Buttons Section */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Buttons</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Variants */}
          <div>
            <h3 style={{ marginBottom: '1rem' }}>Variants</h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button variant="default">Default Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h3 style={{ marginBottom: '1rem' }}>Sizes</h3>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          {/* States */}
          <div>
            <h3 style={{ marginBottom: '1rem' }}>States</h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button>Normal</Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>

          {/* As Link */}
          <div>
            <h3 style={{ marginBottom: '1rem' }}>As Link</h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button asChild>
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                  Link Button
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Inputs Section */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Inputs</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '400px' }}>
          {/* Basic Input */}
          <div>
            <h3 style={{ marginBottom: '1rem' }}>Basic Input</h3>
            <Input placeholder="Enter text..." />
          </div>

          {/* With Label */}
          <div>
            <h3 style={{ marginBottom: '1rem' }}>With Label</h3>
            <Input label="Username" placeholder="Enter your username" />
          </div>

          {/* Error State */}
          <div>
            <h3 style={{ marginBottom: '1rem' }}>Error State</h3>
            <Input
              label="Email"
              placeholder="Enter your email"
              error
              errorMessage="Please enter a valid email address"
            />
          </div>

          {/* Disabled State */}
          <div>
            <h3 style={{ marginBottom: '1rem' }}>Disabled State</h3>
            <Input label="Disabled" placeholder="This input is disabled" disabled />
          </div>

          {/* Different Types */}
          <div>
            <h3 style={{ marginBottom: '1rem' }}>Different Types</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Input label="Text" type="text" placeholder="Text input" />
              <Input label="Password" type="password" placeholder="Enter password" />
              <Input label="Number" type="number" placeholder="Enter number" />
              <Input label="Date" type="date" />
            </div>
          </div>
        </div>
      </section>

      {/* Theming Section - Placeholder */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Theming</h2>
        <p>Theme toggle is in the header. More theming examples to come.</p>
      </section>

      {/* Components Section - Placeholder */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Components</h2>
        <p>Component showcases to be added in subsequent tasks.</p>
      </section>
    </div>
  )
}

export default App
