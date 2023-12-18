import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const root = tv({
  base: `group w-full py-5 px-4 border-0.375 border-background-tertiary flex gap-4 
  items-center justify-center font-normal text-gray-700 rounded-md transition-all duration-400`,
  variants: {
    variant: {
      income: `hover:bg-green-75 hover:border-green-400`,
      outcome: `hover:bg-red-75 hover:border-red-500`,
      incomeActive: `bg-green-75 border-green-400 hover:brightness-110`,
      outcomeActive: `bg-red-75 border-red-500 hover:brightness-110`,
    },
  },
})

type RootProps = VariantProps<typeof root> & ComponentProps<'button'>

export function Root({ variant, ...props }: RootProps) {
  return <button className={root({ variant })} {...props} />
}
