import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
  base: `rounded-md  px-8 py-3 font-semibold text-white shadow-md 
  drop-shadow-md  transition-all duration-400
  hover:cursor-pointer hover:shadow-lg hover:drop-shadow-xl`,
  variants: {
    variant: {
      primary: 'bg-white text-purple-400 hover:bg-purple-400 hover:text-white',
      secondary: 'py-5 bg-green-500 hover:bg-green-400',
      ghost: `flex text-2xl px-0 py-0 text-gray-500 h-10 w-10 items-center 
      justify-center bg-transparent shadow-none
      hover:bg-zinc-100 hover:shadow-none hover:drop-shadow-none`,
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
