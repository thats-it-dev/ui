import * as React from 'react'
import { clsx } from 'clsx'
import styles from './Input.module.css'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: boolean
  errorMessage?: string
}

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
          className={clsx(styles.root, error && styles.error, className)}
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
