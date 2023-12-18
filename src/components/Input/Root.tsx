import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const root = tv({
  base: `group flex w-full items-center gap-2 rounded-md border 
  border-background-tertiary bg-background-secondary px-6 py-5 
  focus-within:border-purple-300 focus-within:ring-2 focus-within:ring-purple-300`,
  variants: {
    variant: {
      empty: '',
      filled: `bg-white`,
    },
  },
  defaultVariants: {
    variant: 'empty',
  },
})

type RootProps = ComponentProps<'div'> & VariantProps<typeof root>

export function Root({ variant, className, ...props }: RootProps) {
  return <div {...props} className={root({ variant, className })} />
}
