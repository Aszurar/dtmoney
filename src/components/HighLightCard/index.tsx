import {
  FiArrowDownCircle,
  FiArrowUpCircle,
  FiDollarSign,
} from 'react-icons/fi'
import { VariantProps, tv } from 'tailwind-variants'
import { priceFormatter } from '../../utils/formatter'
import { PeriodBalanceFormattedType } from '../../dto/transactions'

const highLightCard = tv({
  slots: {
    container: `flex flex-col bg-white w-highlightcard min-w-highlightcard px-8 
      drop-shadow-md pt-6 pb-5 gap-3 rounded-md
      dark:bg-zinc-900 `,
    icon: 'text-2.5xl',
    textColor: 'text-gray-700 dark:text-white',
    date: 'text-sm text-gray-500 dark:text-gray-400',
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
        date: 'text-white dark:text-white',
      },
    },
  },

  defaultVariants: {
    variant: 'income',
  },
})

type HighLightCardProps = VariantProps<typeof highLightCard> & {
  value: number
  lastDate?: string
  period?: PeriodBalanceFormattedType
}

export function HighLightCard({
  value,
  period,
  variant,
  lastDate,
}: HighLightCardProps) {
  const { container, icon, date, textColor } = highLightCard({ variant })
  const titleVariant = variant ?? 'income'
  const valueFormatted = priceFormatter.format(Number(value))
  const title = {
    income: {
      title: 'Entradas',
      lastDateInitial: 'Última entrada dia ',
      icon: <FiArrowDownCircle className={icon()} />,
    },
    outcome: {
      title: 'Saídas',
      lastDateInitial: 'Última saída dia ',
      icon: <FiArrowUpCircle className={icon()} />,
    },
    total: {
      title: 'Total',
      lastDateInitial: '',
      icon: <FiDollarSign className={icon()} />,
    },
  }

  return (
    <div className={container()}>
      <header className="flex items-center justify-between">
        <h2 className={textColor()}>{title[titleVariant].title}</h2>
        {title[titleVariant].icon}
      </header>

      <div className="flex flex-col">
        <strong
          className={textColor({
            className: 'truncate text-2.5xl font-medium',
          })}
        >
          {valueFormatted}
        </strong>
        {lastDate && (
          <span
            className={date()}
          >{`${title[titleVariant].lastDateInitial}${lastDate}`}</span>
        )}
        {period && (
          <span
            className={date({ className: 'text-xs font-medium' })}
          >{`${period.initial} - ${period.final}`}</span>
        )}
      </div>
    </div>
  )
}
