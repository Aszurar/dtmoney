import { ptBR } from 'date-fns/locale'
import { formatDistance } from 'date-fns'

const dateFormatter = new Intl.DateTimeFormat('pt-BR')

const dateFormatterMedium = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
})

const priceFormatter = new Intl.NumberFormat('pt-BR', {
  currency: 'BRL',
  style: 'currency',
})

type PeriodBetweenDatesProps = {
  startDate: Date
  endDate: Date
}

const periodBetweenDatesFormatted = ({
  startDate,
  endDate,
}: PeriodBetweenDatesProps): string => {
  const period = formatDistance(startDate, endDate, {
    addSuffix: true,
    locale: ptBR,
  })

  return period
}

export {
  dateFormatter,
  dateFormatterMedium,
  priceFormatter,
  periodBetweenDatesFormatted,
}
