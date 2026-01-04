import { useState } from 'react'
import { Button } from './components/Button'

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
