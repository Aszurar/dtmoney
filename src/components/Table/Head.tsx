import { ComponentProps } from 'react'

type HeadProps = ComponentProps<'th'>

export function Head(props: HeadProps) {
  return (
    <th
      className="text-start font-normal text-gray-500 dark:text-gray-400"
      {...props}
    />
  )
}
