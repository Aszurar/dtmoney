import { ComponentProps } from 'react'

type InputProps = ComponentProps<'input'>

export function Control(props: InputProps) {
  return (
    <input
      type="text"
      className={`w-full bg-transparent font-medium text-gray-700
       outline-none  placeholder:font-normal placeholder:text-gray-500
         focus-visible:ring-0`}
      {...props}
    />
  )
}
