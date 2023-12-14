import { ComponentProps, ElementType } from 'react'

type IconProps = ComponentProps<'span'> & {
  icon: ElementType
}

export function Icon({ icon: Icon, ...rest }: IconProps) {
  return (
    <span {...rest}>
      <Icon />
    </span>
  )
}
