import * as SelectPrimitive from '@radix-ui/react-select'
import { ReactNode } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { VariantProps, tv } from 'tailwind-variants'

const select = tv({
  slots: {
    trigger: `group flex w-full cursor-pointer items-center justify-between 
    rounded-lg border border-zinc-300 bg-background-secondary px-6 py-5 
    shadow-sm outline-none transition-all duration-400
    focus:border-purple-300 focus:ring-2 focus:ring-purple-300 hover:bg-white
    data-[state=open]:bg-white data-[placeholder]:text-gray-500 
    `,
    icon: `text-xl text-gray-500 group-hover:text-purple-300`,
  },
  variants: {
    variant: {
      empty: {
        trigger: '',
        icon: '',
      },
      filled: {
        trigger: 'bg-white',
        icon: 'text-purple-300',
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
        <SelectPrimitive.Value
          placeholder={placeholder}
          className="text-gray-700"
        />

        <SelectPrimitive.Icon className="text-gray-500 group-data-[state=open]:text-purple-400">
          <FiChevronDown className={icon()} />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          position="popper"
          sideOffset={2}
          className={`z-10 w-[--radix-select-trigger-width] overflow-hidden 
          rounded-md border border-purple-300 bg-white shadow-md 
          ring-2 ring-purple-300 drop-shadow-md`}
        >
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
