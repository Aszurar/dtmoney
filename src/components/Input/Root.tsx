import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const root = tv({
  base: `group flex w-full items-center gap-2 rounded-md border px-6 py-5
  border-background-tertiary bg-background-secondary  
  focus-within:border-purple-300 focus-within:ring-2 focus-within:ring-purple-300
  dark:bg-zinc-800 dark:border-zinc-500 dark:focus-within:border-purple-200
  dark:focus-within:ring-purple-200
  `,
  variants: {
    variant: {
      empty: '',
      filled: `bg-white dark:bg-zinc-950`,
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
