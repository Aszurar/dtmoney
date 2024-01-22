import { CategoriesType } from './categories'

enum TRANSACTION_TYPE {
  income = 'income',
  outcome = 'outcome',
}

export type TransactionType = keyof typeof TRANSACTION_TYPE

export interface ITransactions {
  id: string
  price: number
  type: TransactionType
  category: CategoriesType
  description: string
  date: Date
}

export type PeriodBalanceProps = {
  initial: Date
  final: Date
}

export type PeriodBalanceFormattedType = {
  initial: string
  final: string
}

export type TransactionsState = {
  transactions: ITransactions[]
  incomeTotal: number
  outcomeTotal: number
  balance: number
  lastIncomeTransaction?: ITransactions
  lastOutcomeTransaction?: ITransactions
  periodBalance?: PeriodBalanceProps
}

const TRANSACTIONS_REDUCER_INITIAL_STATE = {
  transactions: [] as ITransactions[],
  incomeTotal: 0,
  outcomeTotal: 0,
  balance: 0,
}

const SELECT_DATE_DEFAULT = new Date()

const TRANSACTION_DEFAULT_FIELDS_VALUES = {
  description: '',
  price: 0,
  type: undefined,
  category: undefined,
  date: SELECT_DATE_DEFAULT,
} as const

export {
  TRANSACTION_TYPE,
  SELECT_DATE_DEFAULT,
  TRANSACTION_DEFAULT_FIELDS_VALUES,
  TRANSACTIONS_REDUCER_INITIAL_STATE,
}
