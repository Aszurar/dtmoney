import { api } from '../../server/api'
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react'

import { transactionsReducer } from '../../reducers/transactions/reducer'
import {
  dateFormatter,
  dateFormatterMedium,
  periodBetweenDatesFormatted,
} from '../../utils/formatter'

import {
  ITransactions,
  PeriodBalanceFormattedType,
  TRANSACTIONS_REDUCER_INITIAL_STATE,
} from '../../dto/transactions'
import {
  calculateBalance,
  calculateIncomeTotal,
  calculateOutcomeTotal,
  getLastIncomeTransaction,
  getLastOutcomeTransaction,
  getPeriodBalance,
  loadTransactions,
} from '../../reducers/transactions/actions'
import { isEqual } from 'date-fns'

type PeriodBalanceFormattedProps = {
  period: string
  dates: PeriodBalanceFormattedType
}

type IsDeleteTransactionLoadingProps = {
  id: string
  value: boolean
}
interface TransactionsContextProps {
  transactions: ITransactions[]
  incomeTotal: number
  outcomeTotal: number
  balance: number
  isAddTransactionLoading: boolean
  isDeleteTransactionLoading: IsDeleteTransactionLoadingProps
  periodBalanceFormatted?: PeriodBalanceFormattedProps
  lastIncomeTransactionDateFormatted: string
  lastOutcomeTransactionDateFormatted: string
  handleRemoveTransactionById: (id: string) => void
  handleAddNewTransaction: (transaction: ITransactions) => void
}

interface TransactionsProviderProps {
  children: React.ReactNode
}

const INITIAL_IS_DELETE_TRANSACTION_LOADING_VALUE = {
  id: '',
  value: false,
}

const TransactionsContext = createContext({} as TransactionsContextProps)

function TransactionsProvider({
  children,
}: Readonly<TransactionsProviderProps>) {
  const [isDeleteTransactionLoading, setIsDeleteTransactionLoading] =
    useState<IsDeleteTransactionLoadingProps>(
      INITIAL_IS_DELETE_TRANSACTION_LOADING_VALUE,
    )
  const [isAddTransactionLoading, setIsAddTransactionLoading] = useState(false)

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

  const [periodBalanceFormatted, setPeriodBalanceFormatted] =
    useState<PeriodBalanceFormattedProps>({} as PeriodBalanceFormattedProps)

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

  function calculatePeriodBalanceFormatted() {
    if (periodBalance) {
      const { initial, final } = periodBalance
      const start = new Date(initial)
      const end = new Date(final)

      const isStartDateAndEndDateEquals = isEqual(start, end)
      const endVerified = isStartDateAndEndDateEquals ? new Date() : end

      const initialDateFormatted = dateFormatter.format(start)
      const finalDateFormatted = dateFormatter.format(endVerified)

      const period = periodBetweenDatesFormatted({
        startDate: start,
        endDate: endVerified,
      })

      setPeriodBalanceFormatted({
        period,
        dates: {
          initial: initialDateFormatted,
          final: finalDateFormatted,
        },
      })
    } else {
      setPeriodBalanceFormatted({} as PeriodBalanceFormattedProps)
    }
  }

  async function loadTransactionsData() {
    const response = await api.get('/transactions')
    const data: ITransactions[] = response.data ? response.data : []
    dispatch(loadTransactions(data))
  }

  const addNewTransaction = useCallback(async (transaction: ITransactions) => {
    setIsAddTransactionLoading(true)
    await api.post('/transactions', transaction)
    loadTransactionsData()
    setIsAddTransactionLoading(false)
  }, [])

  const removeTransactionById = useCallback(async (id: string) => {
    setIsDeleteTransactionLoading({ id, value: true })
    await api.delete(`/transactions/${id}`)
    loadTransactionsData()
    setIsDeleteTransactionLoading({ id, value: false })
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

  useEffect(() => {
    calculatePeriodBalanceFormatted()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [periodBalance])

  const contextValue = useMemo(
    () => ({
      balance,
      incomeTotal,
      transactions,
      outcomeTotal,
      periodBalanceFormatted,
      isAddTransactionLoading,
      isDeleteTransactionLoading,
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
      isAddTransactionLoading,
      isDeleteTransactionLoading,
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
