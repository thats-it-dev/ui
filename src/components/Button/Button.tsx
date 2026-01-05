import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'
import styles from './Button.module.css'
import animations from '../../styles/animations.module.css'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button.
   * @default 'default'
   */
  variant?: 'default' | 'secondary' | 'outline' | 'ghost'
  /**
   * The size of the button.
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * Whether to render the button as a child element.
   * @default false
   */
  asChild?: boolean
}

/**
 * A customizable button component.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        ref={ref}
        className={twMerge(clsx(
          styles.root,
          styles[variant],
          styles[size],
          variant === 'default' && animations.underlineBase && animations.underlinePrimary,
          variant === 'secondary' && animations.underlineBase && animations.underlineSecondary,
          className
        ))}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
