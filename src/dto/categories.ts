const CATEGORIES = [
  'Alimentação',
  'Contas',
  'Educação',
  'Lazer',
  'Saúde',
  'Trabalho',
  'Transporte',
  'Outros',
] as const

export type CategoriesType = (typeof CATEGORIES)[number]

export { CATEGORIES }
