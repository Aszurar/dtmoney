import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const data = tv({
  base: 'flex text-gray-500 dark:text-gray-400 font-normal items-center',
  variants: {
    variant: {
      description: `block text-gray-700 dark:text-white max-w-40 phone-md:max-w-68
        phone-lg:max-w-76 phone-xl:max-w-80 sm:max-w-full truncate`,
      income: 'text-green-400 dark:text-green-400 text-xl sm:text-base',
      outcome:
        'text-red-500 dark:text-red-500 dark:text-red-400 text-xl sm:text-base',
      light: '',
    },
  },
  defaultVariants: {
    variant: 'light',
  },
})

type DataProps = ComponentProps<'td'> & VariantProps<typeof data>

export function Data({ variant, className, ...props }: DataProps) {
  return <td className={data({ variant, className })} {...props} />
}
