import { ComponentProps, ElementType } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const icon = tv({
  base: `text-xl text-gray-500 group-focus-within:text-purple-300 
    dark:text-gray-400 dark:group-focus-within:text-purple-200`,
  variants: {
    variant: {
      empty: '',
      filled: ` text-purple-300 dark:text-purple-200`,
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
