import * as Tooltip from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const tooltip = tv({
  slots: {
    container:
      'rounded-md bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition-all duration-[200ms] animate-opacity box-shadow-tooltip ',
    arrow: 'fill-white',
  },
  variants: {
    variant: {
      outline: {
        container: ' border border-purple-400',
        arrow: 'fill-purple-400',
      },
      solid: {
        container: '',
        arrow: '',
      },
    },
  },

  defaultVariants: {
    variant: 'solid',
  },
})

type LinkButtonProps = VariantProps<typeof tooltip> & {
  children: ReactNode
  label: string
}

export function Root({ label, children, variant }: LinkButtonProps) {
  const { arrow, container } = tooltip({ variant })
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            sideOffset={5}
            className={container()}
            aria-label="."
          >
            {label}
            <Tooltip.Arrow className={arrow()} />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
