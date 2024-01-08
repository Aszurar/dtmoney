import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
  base: `rounded-md px-5 py-3 font-semibold text-white  transition-all 
  duration-400 bg-transparent cursor-pointer
   `,
  variants: {
    variant: {
      primary: `bg-white text-purple-400 shadow-md drop-shadow-md border-2 
        border-transparent text-sm phone-xl:text-base phone-xl:px-8 border-white
        hover:bg-purple-400 hover:text-white hover:border-2 hover:shadow-lg 
        hover:drop-shadow-xl 
        dark:bg-zinc-950 dark:text-purple-300 dark:hover:bg-purple-300 
        dark:border-purple-300 dark:hover:border-purple-200 
        dark:hover:text-white`,
      secondary: `py-5 bg-green-500 shadow-md drop-shadow-md 
        hover:bg-green-400 hover:shadow-lg hover:drop-shadow-xl`,
      ghost: `flex text-2xl px-0 py-0 text-gray-500 h-10 w-10 items-center 
        justify-center
        hover:bg-zinc-200 hover:text-gray-700
        dark:text-gray-400 dark:hover:bg-zinc-800 dark:hover:text-white`,
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ variant, className, ...props }: ButtonProps) {
  return <button className={button({ variant, className })} {...props} />
}
