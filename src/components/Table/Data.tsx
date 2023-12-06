import { ComponentProps } from "react"
import { VariantProps, tv } from "tailwind-variants"


const data = tv({
  base: "text-gray-500 font-normal",
  variants: {
    variant: {
      description: "text-gray-700",
      income: "text-green-400",
      outcome: "text-red-500",
      light: ""
    }
  },
  defaultVariants: {
    variant: "light"
  }
})

type DataProps = ComponentProps<"td"> & VariantProps<typeof data>

export function Data({ variant, ...props }: DataProps) {
  return (
    <td className={data({ variant })} {...props} />
  )
}