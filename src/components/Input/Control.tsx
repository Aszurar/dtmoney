import { ComponentProps, forwardRef, useImperativeHandle, useRef } from 'react'

type ControlProps = ComponentProps<'input'>

export const Control = forwardRef<HTMLInputElement, ControlProps>(
  ({ ...props }, outerRef) => {
    const innerRef = useRef<HTMLInputElement>(null)
    useImperativeHandle(outerRef, () => innerRef.current!, [])

    return (
      <input
        type="text"
        ref={innerRef}
        className={`w-full bg-transparent font-medium text-gray-700
          outline-none  placeholder:font-normal placeholder:text-gray-500
          focus-visible:ring-0 
        dark:text-white dark:placeholder:text-gray-400`}
        {...props}
      />
    )
  },
)
Control.displayName = 'Control'
