const dateFormatter = new Intl.DateTimeFormat('pt-BR')

const priceFormatter = new Intl.NumberFormat('pt-BR', {
  currency: 'BRL',
  style: 'currency',
})

export { dateFormatter, priceFormatter }
