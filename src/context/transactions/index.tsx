import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from 'react'
import {
  ITransactions,
  PeriodBalanceProps,
  TRANSACTIONS_REDUCER_INITIAL_STATE,
} from '../../dto/transactions'
import { transactionsReducer } from '../../reducers/transactions/reducer'
import { api } from '../../server/api'
import {
  calculateBalance,
  calculateIncomeTotal,
  calculateOutcomeTotal,
  getLastIncomeTransaction,
  getLastOutcomeTransaction,
  getPeriodBalance,
  loadTransactions,
} from '../../reducers/transactions/actions'
import { dateFormatterMedium } from '../../utils/formatter'
import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from 'date-fns'

type PeriodBalanceFormattedProps = {
  period: string
  dates: PeriodBalanceProps
}

interface TransactionsContextProps {
  transactions: ITransactions[]
  incomeTotal: number
  outcomeTotal: number
  balance: number
  periodBalanceFormatted?: PeriodBalanceFormattedProps
  lastIncomeTransactionDateFormatted: string
  lastOutcomeTransactionDateFormatted: string
  handleRemoveTransactionById: (id: string) => void
  handleAddNewTransaction: (transaction: ITransactions) => void
}

interface TransactionsProviderProps {
  children: React.ReactNode
}

const TransactionsContext = createContext({} as TransactionsContextProps)

function TransactionsProvider({
  children,
}: Readonly<TransactionsProviderProps>) {
  const [transactionsState, dispatch] = useReducer(
    transactionsReducer,
    TRANSACTIONS_REDUCER_INITIAL_STATE,
  )
  const {
    balance,
    incomeTotal,
    outcomeTotal,
    transactions,
    lastIncomeTransaction,
    lastOutcomeTransaction,
    periodBalance,
  } = transactionsState

  const lastIncomeTransactionDateFormatted = useMemo(() => {
    return lastIncomeTransaction
      ? dateFormatterMedium.format(new Date(lastIncomeTransaction.date))
      : ''
  }, [lastIncomeTransaction])

  const lastOutcomeTransactionDateFormatted = useMemo(() => {
    return lastOutcomeTransaction
      ? dateFormatterMedium.format(new Date(lastOutcomeTransaction.date))
      : ''
  }, [lastOutcomeTransaction])

  const periodBalanceFormatted = useMemo(() => {
    if (periodBalance) {
      const { initial, final } = periodBalance
      const start = new Date(initial)
      const end = new Date(final)

      const diffInDays = differenceInDays(end, start)
      const diffInMonths = differenceInMonths(end, start)
      const diffInYears = differenceInYears(end, start)

      let result = ''

      if (diffInYears > 0) {
        result += `${diffInYears} ano${diffInYears > 1 ? 's' : ''}`
      }

      if (diffInMonths > 0) {
        if (result.length > 0) {
          result += `, `
        }
        result += `${diffInMonths} m${diffInMonths > 1 ? 'eses' : 'ês'}`
      }

      if (diffInDays > 0) {
        if (result.length > 0) {
          result += ` e `
        }
        result += `${diffInDays} dia${diffInDays > 1 ? 's' : ''}`
      }

      result = result.length > 0 ? result : '0 dias'

      return {
        period: result,
        dates: {
          initial: start,
          final: end,
        },
      } as unknown as PeriodBalanceFormattedProps
      // 1 ano e 2 meses
    }

    return undefined
  }, [periodBalance])

  async function loadTransactionsData() {
    const response = await api.get('/transactions')
    const data: ITransactions[] = response.data ? response.data : []
    dispatch(loadTransactions(data))
  }

  const addNewTransaction = useCallback(async (transaction: ITransactions) => {
    await api.post('/transactions', transaction)
    loadTransactionsData()
  }, [])

  const removeTransactionById = useCallback(async (id: string) => {
    await api.delete(`/transactions/${id}`)
    loadTransactionsData()
  }, [])

  useEffect(() => {
    loadTransactionsData()
  }, [])

  useEffect(() => {
    dispatch(calculateIncomeTotal())
    dispatch(calculateOutcomeTotal())
    dispatch(calculateBalance())
    dispatch(getLastIncomeTransaction())
    dispatch(getLastOutcomeTransaction())
    dispatch(getPeriodBalance())
  }, [transactions])

  const contextValue = useMemo(
    () => ({
      balance,
      incomeTotal,
      transactions,
      outcomeTotal,
      periodBalanceFormatted,
      lastIncomeTransactionDateFormatted,
      lastOutcomeTransactionDateFormatted,
      handleAddNewTransaction: addNewTransaction,
      handleRemoveTransactionById: removeTransactionById,
    }),
    [
      balance,
      incomeTotal,
      transactions,
      outcomeTotal,
      addNewTransaction,
      removeTransactionById,
      periodBalanceFormatted,
      lastIncomeTransactionDateFormatted,
      lastOutcomeTransactionDateFormatted,
    ],
  )

  return (
    <TransactionsContext.Provider value={contextValue}>
      {children}
    </TransactionsContext.Provider>
  )
}

export { TransactionsProvider, TransactionsContext }
