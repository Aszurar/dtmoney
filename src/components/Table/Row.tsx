import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const row = tv({
  base: 'sm:w-full sm:px-8 sm:grid sm:grid-cols-table sm:gap-4 ',
  variants: {
    variant: {
      head: 'bg-transparent pb-5 flex justify-between items-center',
      body: `flex flex-col px-6 py-4 bg-white dark:bg-zinc-900 my-2 sm:py-5 
        drop-shadow-lg rounded-md border-collapse overflow-hidden trucante `,
    },
  },
})

type RowProps = ComponentProps<'tr'> & VariantProps<typeof row>

export function Row({ variant, ...props }: RowProps) {
  return <tr className={row({ variant })} {...props} />
}
