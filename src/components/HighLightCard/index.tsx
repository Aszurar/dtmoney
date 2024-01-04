import {
  FiArrowDownCircle,
  FiArrowUpCircle,
  FiDollarSign,
} from 'react-icons/fi'
import { VariantProps, tv } from 'tailwind-variants'
import { priceFormatter } from '../../utils/formatter'

const highLightCard = tv({
  slots: {
    container: `flex flex-col bg-white  w-highlightcard drop-shadow-md px-8 pt-6 
      pb-5 gap-3 rounded-md
      dark:bg-zinc-900`,
    icon: 'text-2.5xl',
    textColor: 'text-gray-700 dark:text-white',
  },
  variants: {
    variant: {
      income: {
        icon: 'text-green-400',
      },
      outcome: {
        icon: 'text-red-500',
      },
      total: {
        container: 'bg-green-400 dark:bg-green-500',
        icon: 'text-white',
        textColor: 'text-white',
      },
    },
  },

  defaultVariants: {
    variant: 'income',
  },
})

type HighLightCardProps = VariantProps<typeof highLightCard> & {
  value: number
}

export function HighLightCard({ variant, value }: HighLightCardProps) {
  const { container, icon, textColor } = highLightCard({ variant })
  const titleVariant = variant ?? 'income'
  const valueFormatted = priceFormatter.format(Number(value))
  const title = {
    income: {
      title: 'Entradas',
      icon: <FiArrowUpCircle className={icon()} />,
    },
    outcome: {
      title: 'Saídas',
      icon: <FiArrowDownCircle className={icon()} />,
    },
    total: {
      title: 'Total',
      icon: <FiDollarSign className={icon()} />,
    },
  }

  return (
    <div className={container()}>
      <header className="flex items-center justify-between">
        <h2 className={textColor()}>{title[titleVariant].title}</h2>
        {title[titleVariant].icon}
      </header>

      <div className="flex gap-2">
        <strong className={textColor({ className: 'text-2.5xl font-medium' })}>
          {valueFormatted}
        </strong>
      </div>
    </div>
  )
}
