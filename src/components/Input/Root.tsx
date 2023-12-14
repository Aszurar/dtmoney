import { ComponentProps } from 'react'

type RootProps = ComponentProps<'div'>

export function Root(props: RootProps) {
  return (
    <div
      className={`bg-background-secondary border-background-tertiary w-full 
      rounded-md border px-6 py-5 focus-within:border-purple-300 focus-within:ring-2
       focus-within:ring-purple-300`}
      {...props}
    />
  )
}
