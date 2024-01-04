enum TRANSACTION_TYPE {
  income = 'income',
  outcome = 'outcome',
}

export type TransactionType = keyof typeof TRANSACTION_TYPE

export interface ITransactions {
  id: string
  price: number
  type: TransactionType
  category: string
  description: string
  createdAt: string
}

export type TransactionsState = {
  transactions: ITransactions[]
  incomeTotal: number
  outcomeTotal: number
  balance: number
}

const TRANSACTIONS_REDUCER_INITIAL_STATE = {
  transactions: [] as ITransactions[],
  incomeTotal: 0,
  outcomeTotal: 0,
  balance: 0,
}

export { TRANSACTION_TYPE, TRANSACTIONS_REDUCER_INITIAL_STATE }
