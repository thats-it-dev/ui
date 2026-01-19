import { useState, useEffect } from 'react'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Dialog } from './components/Dialog'
import { Command } from './components/Command'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [basicDialogOpen, setBasicDialogOpen] = useState(false)
  const [formDialogOpen, setFormDialogOpen] = useState(false)
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false)
  const [smallDialogOpen, setSmallDialogOpen] = useState(false)
  const [mediumDialogOpen, setMediumDialogOpen] = useState(false)
  const [largeDialogOpen, setLargeDialogOpen] = useState(false)
  const [commandOpen, setCommandOpen] = useState(false)

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  // Cmd+K to open command palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setCommandOpen(open => !open)
      }
      if (e.key === 'Escape') {
        setCommandOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

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

          <div>
            <h3 style={{ marginBottom: '1rem' }}>checkbox</h3>
            <Input type="checkbox"/>
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

      {/* Dialog Section */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Dialog</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Basic Dialog */}
          <div>
            <h3 style={{ marginBottom: '1rem' }}>Basic Dialog</h3>
            <Button onClick={() => setBasicDialogOpen(true)}>Open Basic Dialog</Button>
            <Dialog
              open={basicDialogOpen}
              onOpenChange={setBasicDialogOpen}
              title="Welcome"
              description="This is a basic dialog with a title and description."
            >
              <p>This is the main content of the dialog. You can put any content here.</p>
            </Dialog>
          </div>

          {/* Dialog with Form */}
          <div>
            <h3 style={{ marginBottom: '1rem' }}>Dialog with Form Content</h3>
            <Button onClick={() => setFormDialogOpen(true)}>Open Form Dialog</Button>
            <Dialog
              open={formDialogOpen}
              onOpenChange={setFormDialogOpen}
              title="Edit Profile"
              description="Make changes to your profile here."
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Input label="Name" placeholder="Enter your name" />
                <Input label="Email" type="email" placeholder="Enter your email" />
                <Input label="Bio" placeholder="Tell us about yourself" />
              </div>
            </Dialog>
          </div>

          {/* Dialog with Custom Footer */}
          <div>
            <h3 style={{ marginBottom: '1rem' }}>Dialog with Custom Footer</h3>
            <Button onClick={() => setConfirmDialogOpen(true)}>Open Confirmation Dialog</Button>
            <Dialog
              open={confirmDialogOpen}
              onOpenChange={setConfirmDialogOpen}
              title="Confirm Action"
              description="Are you sure you want to proceed with this action?"
              footer={
                <>
                  <Button variant="outline" onClick={() => setConfirmDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setConfirmDialogOpen(false)}>Confirm</Button>
                </>
              }
            >
              <p>This action cannot be undone. Please confirm that you want to continue.</p>
            </Dialog>
          </div>

          {/* Size Variants */}
          <div>
            <h3 style={{ marginBottom: '1rem' }}>Size Variants</h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button onClick={() => setSmallDialogOpen(true)}>Small Dialog</Button>
              <Button onClick={() => setMediumDialogOpen(true)}>Medium Dialog</Button>
              <Button onClick={() => setLargeDialogOpen(true)}>Large Dialog</Button>
            </div>

            <Dialog
              open={smallDialogOpen}
              onOpenChange={setSmallDialogOpen}
              size="sm"
              title="Small Dialog"
              description="This is a small dialog (max-width: 400px)"
            >
              <p>Perfect for alerts and simple confirmations.</p>
            </Dialog>

            <Dialog
              open={mediumDialogOpen}
              onOpenChange={setMediumDialogOpen}
              size="md"
              title="Medium Dialog"
              description="This is a medium dialog (max-width: 600px)"
            >
              <p>The default size, suitable for most use cases including forms and content.</p>
            </Dialog>

            <Dialog
              open={largeDialogOpen}
              onOpenChange={setLargeDialogOpen}
              size="lg"
              title="Large Dialog"
              description="This is a large dialog (max-width: 800px)"
            >
              <p>Best for complex forms and detailed content that needs more space.</p>
              <div style={{ marginTop: '1rem' }}>
                <h4>Additional Content</h4>
                <p>
                  Large dialogs provide ample space for complex layouts, multiple form fields, or
                  detailed information that requires more room to breathe.
                </p>
              </div>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Command Palette Section */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Command Palette</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Inline Command */}
          <div>
            <h3 style={{ marginBottom: '1rem' }}>Inline Command</h3>
            <Command label="Command Menu">
              <Command.Input placeholder="Search commands..." />
              <Command.List>
                <Command.Empty>No results found.</Command.Empty>
                <Command.Group heading="Actions">
                  <Command.Item onSelect={() => alert('New File')}>New File</Command.Item>
                  <Command.Item onSelect={() => alert('New Folder')}>New Folder</Command.Item>
                  <Command.Item onSelect={() => alert('Save')}>Save</Command.Item>
                </Command.Group>
                <Command.Separator />
                <Command.Group heading="Settings">
                  <Command.Item onSelect={() => alert('Preferences')}>Preferences</Command.Item>
                  <Command.Item onSelect={toggleTheme}>Toggle Theme</Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </div>

          {/* Command in Dialog */}
          <div>
            <h3 style={{ marginBottom: '1rem' }}>Command in Dialog (Press Cmd+K)</h3>
            <Button onClick={() => setCommandOpen(true)}>Open Command Palette</Button>
            {commandOpen && (
              <div
                style={{
                  position: 'fixed',
                  inset: 0,
                  background: 'rgba(0,0,0,0.5)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  paddingTop: '20vh',
                  zIndex: 100
                }}
                onClick={() => setCommandOpen(false)}
              >
                <div onClick={(e) => e.stopPropagation()}>
                  <Command label="Command Menu">
                    <Command.Input placeholder="Type a command or search..." autoFocus />
                    <Command.List>
                      <Command.Empty>No results found.</Command.Empty>
                      <Command.Group heading="Suggestions">
                        <Command.Item onSelect={() => { alert('Create Note'); setCommandOpen(false); }}>
                          Create Note
                        </Command.Item>
                        <Command.Item onSelect={() => { alert('Open Settings'); setCommandOpen(false); }}>
                          Open Settings
                        </Command.Item>
                        <Command.Item onSelect={() => { toggleTheme(); setCommandOpen(false); }}>
                          Toggle Theme
                        </Command.Item>
                      </Command.Group>
                      <Command.Separator />
                      <Command.Group heading="Recent">
                        <Command.Item>Meeting Notes</Command.Item>
                        <Command.Item>Project Ideas</Command.Item>
                        <Command.Item>Shopping List</Command.Item>
                      </Command.Group>
                    </Command.List>
                  </Command>
                </div>
              </div>
            )}
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
