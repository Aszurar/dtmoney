import * as SelectPrimitive from '@radix-ui/react-select'
import { ReactNode } from 'react'
import { FiChevronDown } from 'react-icons/fi'

type SelectProps = SelectPrimitive.SelectProps & {
  children: ReactNode
  placeholder: string
}

export function Select({ children, placeholder, ...rest }: SelectProps) {
  return (
    <SelectPrimitive.Root {...rest}>
      <SelectPrimitive.Trigger
        className={`bg-background-secondary group flex w-full cursor-pointer 
        items-center justify-between rounded-lg border border-zinc-300 px-6 
        py-5 shadow-sm outline-none focus:border-purple-300 
        focus:ring-2 focus:ring-purple-300 data-[state=open]:bg-white 
        data-[placeholder]:text-gray-500 
        `}
      >
        <SelectPrimitive.Value
          placeholder={placeholder}
          className="text-gray-700"
        />

        <SelectPrimitive.Icon className="text-gray-500 group-data-[state=open]:text-purple-400">
          <FiChevronDown className="text-xl group-hover:text-purple-400" />
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
