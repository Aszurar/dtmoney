import { ComponentProps, ElementType } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const icon = tv({
  base: `text-gray-500 group-focus-within:text-purple-300`,
  variants: {
    variant: {
      empty: '',
      filled: `text-xl text-purple-300`,
    },
  },
  defaultVariants: {
    variant: 'empty',
  },
})

type IconProps = ComponentProps<'span'> &
  VariantProps<typeof icon> & {
    icon: ElementType
  }

export function Icon({ icon: Icon, variant, className, ...preps }: IconProps) {
  return (
    <span className={icon({ variant, className })} {...preps}>
      <Icon />
    </span>
  )
}
