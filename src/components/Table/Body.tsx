import { ComponentProps } from "react"

type BodyProps = ComponentProps<"tbody">

export function Body(props: BodyProps) {
  return (
    <tbody className="divide-y-8 max-h-80 overflow-y-auto block " {...props} />
  )
}