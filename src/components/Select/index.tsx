import { ReactNode } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { VariantProps, tv } from 'tailwind-variants'
import * as SelectPrimitive from '@radix-ui/react-select'

const select = tv({
  slots: {
    trigger: `group flex w-full px-6 py-5 cursor-pointer items-center 
      justify-between rounded-md border border-background-tertiary 
      bg-background-secondary text-gray-700 shadow-sm outline-none transition-all 
      duration-400 focus:border-purple-300 focus:ring-2 focus:ring-purple-300 
      hover:bg-white data-[state=open]:bg-white data-[placeholder]:text-gray-500 
      dark:text-white dark:bg-zinc-800 dark:border-zinc-500 
      dark:hover:bg-zinc-950 dark:data-[state=open]:bg-zinc-950 
      dark:focus:border-purple-200  dark:focus:ring-purple-200
    `,
    icon: `text-xl text-gray-500 group-hover:text-purple-300
      dark:text-gray-400 dark:group-hover:text-purple-200`,
  },
  variants: {
    variant: {
      empty: {
        trigger: '',
        icon: '',
      },
      filled: {
        trigger: 'bg-white dark:bg-zinc-950',
        icon: 'text-purple-300 dark:text-purple-200',
      },
    },
  },
  defaultVariants: {
    variant: 'empty',
  },
})

type SelectProps = SelectPrimitive.SelectProps &
  VariantProps<typeof select> & {
    children: ReactNode
    placeholder: string
  }

export function Select({
  children,
  variant,
  placeholder,
  ...rest
}: SelectProps) {
  const { icon, trigger } = select({ variant })

  return (
    <SelectPrimitive.Root {...rest}>
      <SelectPrimitive.Trigger id="select" className={trigger()}>
        <SelectPrimitive.Value placeholder={placeholder} />

        <SelectPrimitive.Icon
          className={`text-gray-500 group-data-[state=open]:text-purple-400
            dark:text-gray-400 dark:group-data-[state=open]:text-purple-300`}
        >
          <FiChevronDown className={icon()} />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          position="popper"
          sideOffset={2}
          className={`z-10 w-[--radix-select-trigger-width] overflow-hidden 
            rounded-md border border-purple-300 bg-white shadow-md ring-2 
          ring-purple-300 drop-shadow-md 
          dark:bg-zinc-950`}
        >
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
