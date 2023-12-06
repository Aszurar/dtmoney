import { ComponentProps } from "react"

type HeadProps = ComponentProps<"th">

export function Head(props: HeadProps) {
  return (
    <th className="font-normal text-gray-500 text-start" {...props} />
  )
}