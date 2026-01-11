import * as React from 'react'
import * as RadixDialog from '@radix-ui/react-dialog'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import styles from './Dialog.module.css'

export interface DialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  trigger?: React.ReactNode
  title?: string
  description?: string
  children: React.ReactNode
  footer?: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  showCloseButton?: boolean
  className?: string
}

export const Dialog = React.forwardRef<
  React.ElementRef<typeof RadixDialog.Content>,
  DialogProps
>(
  (
    {
      open,
      onOpenChange,
      trigger,
      title,
      description,
      children,
      footer,
      size = 'md',
      showCloseButton = true,
      className,
    },
    ref
  ) => {
    return (
      <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
        {trigger && <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>}
        <RadixDialog.Portal>
          <RadixDialog.Overlay className={styles.overlay} />
          <RadixDialog.Content
            ref={ref}
            className={twMerge(clsx(styles.content, styles[size], className))}
          >
            {(title || description || showCloseButton) && (
              <div className={styles.header}>
                <div>
                  {title && (
                    <RadixDialog.Title className={styles.title}>
                      {title}
                    </RadixDialog.Title>
                  )}
                  {description && (
                    <RadixDialog.Description className={styles.description}>
                      {description}
                    </RadixDialog.Description>
                  )}
                </div>
                {showCloseButton && (
                  <RadixDialog.Close className={styles.closeButton} aria-label="Close">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  </RadixDialog.Close>
                )}
              </div>
            )}
            <div className={styles.body}>{children}</div>
            {footer && <div className={styles.footer}>{footer}</div>}
          </RadixDialog.Content>
        </RadixDialog.Portal>
      </RadixDialog.Root>
    )
  }
)

Dialog.displayName = 'Dialog'
