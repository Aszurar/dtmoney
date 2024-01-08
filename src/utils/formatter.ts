const dateFormatter = new Intl.DateTimeFormat('pt-BR')

const dateFormatterMedium = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
})

const priceFormatter = new Intl.NumberFormat('pt-BR', {
  currency: 'BRL',
  style: 'currency',
})

export { dateFormatter, dateFormatterMedium, priceFormatter }
