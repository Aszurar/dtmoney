import { ComponentProps, forwardRef, useImperativeHandle, useRef } from 'react'

type BodyProps = ComponentProps<'tbody'>

export const Body = forwardRef<HTMLTableSectionElement, BodyProps>(
  ({ ...props }, outerRef) => {
    const innerRef = useRef<HTMLTableSectionElement>(null)
    useImperativeHandle(outerRef, () => innerRef.current!, [])

    return (
      <tbody
        className={`block max-h-64
          overflow-y-auto phone-md:max-h-80
          phone-lg:max-h-120 phone-xl:max-h-134 iPhone-se:max-h-64 
          notebook-sm:max-h-25 notebook-sm-2:max-h-50 notebook-md:max-h-75 
          notebook-lg:max-h-100 notebook-xl:max-h-125`}
        {...props}
        ref={innerRef}
      />
    )
  },
)

Body.displayName = 'Body'
