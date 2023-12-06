import { ComponentProps } from "react"
import { VariantProps, tv } from "tailwind-variants"


const row = tv({
  base: "w-full grid grid-cols-table gap-4 ",
  variants: {
    variant: {
      head: "bg-transparent px-8 pb-5",
      body: "bg-white px-8 py-5 drop-shadow-lg rounded-md border-collapse overflow-hidden",
    }
  }
})

type RowProps = ComponentProps<"tr"> & VariantProps<typeof row>


export function Row({ variant, ...props }: RowProps) {
  return (
    <tr className={row({ variant })} {...props} />
  )
}