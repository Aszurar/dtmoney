import { ComponentProps } from "react"

type RootProps = ComponentProps<"table">

export function Root(props: RootProps) {
  return (
    <table className="w-full min-w-[37.5rem] border-collapse" {...props} />
  )
}