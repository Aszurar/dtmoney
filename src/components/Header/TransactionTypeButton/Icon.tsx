import { ComponentProps, ElementType } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const icon = tv({
  base: `text-2xl transition-all duration-400 group-hover:text-white`,
  variants: {
    variant: {
      income: `text-green-400 `,
      outcome: `text-red-400`,
      incomeActive: `text-white`,
      outcomeActive: `text-white`,
    },
  },
})

type IconProps = VariantProps<typeof icon> &
  ComponentProps<'button'> & {
    icon: ElementType
  }

export function Icon({ icon: Icon, variant, ...props }: IconProps) {
  return (
    <span className={icon({ variant })} {...props}>
      <Icon className="text-2xl " />
    </span>
  )
}
