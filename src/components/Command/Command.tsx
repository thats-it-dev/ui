import * as React from 'react'
import { Command as Cmdk } from 'cmdk'
import { clsx } from 'clsx'
import styles from './Command.module.css'

// Re-export the Command component with styles applied
const CommandRoot = React.forwardRef<
  React.ElementRef<typeof Cmdk>,
  React.ComponentPropsWithoutRef<typeof Cmdk>
>(({ className, ...props }, ref) => (
  <Cmdk ref={ref} className={clsx(styles.root, className)} {...props} />
))
CommandRoot.displayName = 'Command'

const CommandInput = React.forwardRef<
  React.ElementRef<typeof Cmdk.Input>,
  React.ComponentPropsWithoutRef<typeof Cmdk.Input>
>(({ className, ...props }, ref) => (
  <Cmdk.Input ref={ref} className={clsx(styles.input, className)} {...props} />
))
CommandInput.displayName = 'CommandInput'

const CommandList = React.forwardRef<
  React.ElementRef<typeof Cmdk.List>,
  React.ComponentPropsWithoutRef<typeof Cmdk.List>
>(({ className, ...props }, ref) => (
  <Cmdk.List ref={ref} className={clsx(styles.list, className)} {...props} />
))
CommandList.displayName = 'CommandList'

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof Cmdk.Empty>,
  React.ComponentPropsWithoutRef<typeof Cmdk.Empty>
>(({ className, ...props }, ref) => (
  <Cmdk.Empty ref={ref} className={clsx(styles.empty, className)} {...props} />
))
CommandEmpty.displayName = 'CommandEmpty'

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof Cmdk.Group>,
  React.ComponentPropsWithoutRef<typeof Cmdk.Group>
>(({ className, ...props }, ref) => (
  <Cmdk.Group ref={ref} className={clsx(styles.group, className)} {...props} />
))
CommandGroup.displayName = 'CommandGroup'

const CommandItem = React.forwardRef<
  React.ElementRef<typeof Cmdk.Item>,
  React.ComponentPropsWithoutRef<typeof Cmdk.Item>
>(({ className, ...props }, ref) => (
  <Cmdk.Item ref={ref} className={clsx(styles.item, className)} {...props} />
))
CommandItem.displayName = 'CommandItem'

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof Cmdk.Separator>,
  React.ComponentPropsWithoutRef<typeof Cmdk.Separator>
>(({ className, ...props }, ref) => (
  <Cmdk.Separator ref={ref} className={clsx(styles.separator, className)} {...props} />
))
CommandSeparator.displayName = 'CommandSeparator'

// Compose into a single Command object
export const Command = Object.assign(CommandRoot, {
  Input: CommandInput,
  List: CommandList,
  Empty: CommandEmpty,
  Group: CommandGroup,
  Item: CommandItem,
  Separator: CommandSeparator,
})

// Export individual components for tree-shaking
export {
  CommandRoot,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
}
