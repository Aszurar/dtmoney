import { ComponentProps } from 'react'

type InputProps = ComponentProps<'input'>

export function Control(props: InputProps) {
  return (
    <input
      type="text"
      className={`w-full bg-transparent text-gray-700 outline-none
       placeholder:text-gray-500 
         focus-visible:ring-0`}
      {...props}
    />
  )
}
