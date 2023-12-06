import { ComponentProps } from "react"

type HeaderProps = ComponentProps<"thead">

export function Header(props: HeaderProps) {
  return (
    <thead {...props} />
  )
}