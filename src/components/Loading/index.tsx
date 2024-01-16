import { ComponentProps } from 'react'

type LoadingProps = ComponentProps<'div'>

export function Loading({ className, ...props }: LoadingProps) {
  return (
    <div
      className={`h-5 w-5 animate-spin rounded-full border-4 
        ${className}`}
      {...props}
    />
  )
}
