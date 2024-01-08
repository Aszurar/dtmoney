import { ComponentProps } from 'react'

type ErrorMessageProps = ComponentProps<'div'> & {
  message?: string
}

export function ErrorMessage({ message, ...props }: ErrorMessageProps) {
  if (!message) return null

  return (
    <div className="mt-1" {...props}>
      <span className="text-sm text-red-500 dark:text-red-400">{message}</span>
    </div>
  )
}
