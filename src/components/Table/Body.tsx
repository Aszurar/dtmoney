import { ComponentProps, forwardRef, useImperativeHandle, useRef } from 'react'

type BodyProps = ComponentProps<'tbody'>

export const Body = forwardRef<HTMLTableSectionElement, BodyProps>(
  ({ ...props }, outerRef) => {
    const innerRef = useRef<HTMLTableSectionElement>(null)
    useImperativeHandle(outerRef, () => innerRef.current!, [])

    return (
      <tbody
        className={`phone-lg:max-h-120 phone-md:max-h-80 phone-xl:max-h-134 
          block max-h-64 overflow-y-auto`}
        {...props}
        ref={innerRef}
      />
    )
  },
)

Body.displayName = 'Body'
