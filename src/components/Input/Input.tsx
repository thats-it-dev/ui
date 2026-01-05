import * as React from 'react'
import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'
import styles from './Input.module.css'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * The label for the input.
   */
  label?: string
  /**
   * Whether the input is in an error state.
   * @default false
   */
  error?: boolean
  /**
   * The error message to display.
   */
  errorMessage?: string
}

/**
 * A customizable input component.
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, errorMessage, id, ...props }, ref) => {
    const generatedId = React.useId()
    const inputId = id || generatedId

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
          className={twMerge(clsx(styles.root, error && styles.error, className))}
          aria-invalid={error}
          aria-describedby={error && errorMessage ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && errorMessage && (
          <span id={`${inputId}-error`} className={styles.errorMessage}>
            {errorMessage}
          </span>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
