import React, { createContext, useEffect, useMemo, useReducer } from 'react'
import {
  ITransactions,
  TRANSACTIONS_REDUCER_INITIAL_STATE,
  TransactionsState,
} from '../../dto/transactions'
import { transactionsReducer } from '../../reducers/transactions/reducer'
import { api } from '../../server/api'
import {
  calculateBalance,
  calculateIncomeTotal,
  calculateOutcomeTotal,
  loadTransactions,
} from '../../reducers/transactions/actions'

interface TransactionsContextProps {
  transactions: ITransactions[]
  incomeTotal: number
  outcomeTotal: number
  balance: number
}

interface TransactionsProviderProps {
  children: React.ReactNode
}

const TransactionsContext = createContext({} as TransactionsContextProps)

function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactionsState, dispatch] = useReducer(
    transactionsReducer,
    TRANSACTIONS_REDUCER_INITIAL_STATE,
  )

  async function loadTransactionsData() {
    const response = await api.get('/transactions')
    const data: ITransactions[] = response.data ? response.data : []
    dispatch(loadTransactions(data))
  }

  const { balance, incomeTotal, outcomeTotal, transactions } =
    transactionsState as TransactionsState

  useEffect(() => {
    loadTransactionsData()
  }, [])

  useEffect(() => {
    dispatch(calculateIncomeTotal())
    dispatch(calculateOutcomeTotal())
    dispatch(calculateBalance())
  }, [transactions])

  const contextValue = useMemo(
    () => ({
      balance,
      incomeTotal,
      transactions,
      outcomeTotal,
    }),
    [transactions, balance, incomeTotal, outcomeTotal],
  )

  return (
    <TransactionsContext.Provider value={contextValue}>
      {children}
    </TransactionsContext.Provider>
  )
}

export { TransactionsProvider, TransactionsContext }
