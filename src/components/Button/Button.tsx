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

    return (
      <Comp
        ref={ref}
        className={clsx(
          styles.root,
          styles[variant],
          styles[size],
          (variant === 'default' || variant === 'secondary') && animations.underline,
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
