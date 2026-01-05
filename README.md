# @thatsit/ui

A minimalistic UI library built with Radix UI and Tailwind CSS.

## Installation

```bash
pnpm install @thatsit/ui
```

## Usage

To use the components, import them from `@thatsit/ui` and include the CSS file in your main application file.

```tsx
import { Button, Input } from '@thatsit/ui'
import '@thatsit/ui/dist/index.css'

function App() {
  return (
    <div>
      <Button>Click me</Button>
      <Input placeholder="Enter text..." />
    </div>
  )
}
```

## Styling

This library uses Tailwind CSS for styling. The CSS file includes all the necessary styles for the components, including the fonts. The fonts are bundled with the library, so you don't need to install them separately.

The library also supports dark mode. To enable dark mode, add the `data-theme="dark"` attribute to the `html` element.

```html
<html data-theme="dark">
  ...
</html>
```

## API Reference

### Button

A customizable button component.

| Prop      | Type                                     | Default   | Description                                     |
| --------- | ---------------------------------------- | --------- | ----------------------------------------------- |
| `variant` | `'default'` `'secondary'` `'outline'` `'ghost'` | `'default'` | The variant of the button.                      |
| `size`    | `'sm'` `'md'` `'lg'`                      | `'md'`    | The size of the button.                         |
| `asChild` | `boolean`                                | `false`   | Whether to render the button as a child element. |

### Input

A customizable input component.

| Prop           | Type        | Default | Description                      |
| -------------- | ----------- | ------- | -------------------------------- |
| `label`        | `string`    |         | The label for the input.         |
| `error`        | `boolean`   | `false` | Whether the input is in an error state. |
| `errorMessage` | `string`    |         | The error message to display.    |