import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
  // useState,
} from 'react'
// import { api } from '../../server/api'
import { transactionsReducer } from '../../reducers/transactions/reducer'
import {
  dateFormatter,
  dateFormatterMedium,
  periodBetweenDatesFormatted,
} from '../../utils/formatter'
import { getAllTransactions } from '../../storage/transactions/getAllTransactions'
import { registerAllTransactions } from '../../storage/transactions/registerAllTransactions'

import {
  ITransactions,
  PeriodBalanceFormattedType,
  TRANSACTIONS_REDUCER_INITIAL_STATE,
} from '../../dto/transactions'
import {
  addTransaction,
  calculateBalance,
  calculateIncomeTotal,
  calculateOutcomeTotal,
  getLastIncomeTransaction,
  getLastOutcomeTransaction,
  getPeriodBalance,
  // loadTransactions,
  removeTransactionById,
} from '../../reducers/transactions/actions'

export type PeriodBalanceFormattedProps = {
  period: string
  dates: PeriodBalanceFormattedType
}
// type IsDeleteTransactionLoadingProps = {
//   id: string
//   value: boolean
// }
interface TransactionsContextProps {
  transactions: ITransactions[]
  incomeTotal: number
  outcomeTotal: number
  balance: number
  // isAddTransactionLoading: boolean
  // isDeleteTransactionLoading: IsDeleteTransactionLoadingProps
  periodBalanceFormatted?: PeriodBalanceFormattedProps
  lastIncomeTransactionDateFormatted: string
  lastOutcomeTransactionDateFormatted: string
  handleRemoveTransactionById: (id: string) => void
  handleAddNewTransaction: (transaction: ITransactions) => void
}

interface TransactionsProviderProps {
  children: React.ReactNode
}

// const INITIAL_IS_DELETE_TRANSACTION_LOADING_VALUE = {
//   id: '',
//   value: false,
// }

const TransactionsContext = createContext({} as TransactionsContextProps)

function TransactionsProvider({
  children,
}: Readonly<TransactionsProviderProps>) {
  // This branch will not use json-server, but localStorage
  // const [isDeleteTransactionLoading, setIsDeleteTransactionLoading] =
  //   useState<IsDeleteTransactionLoadingProps>(
  //     INITIAL_IS_DELETE_TRANSACTION_LOADING_VALUE,
  //   )
  // const [isAddTransactionLoading, setIsAddTransactionLoading] = useState(false)
  // const [lastIncomeAndOutcomeTransaction, setLastIncomeAndOutcomeTransaction] =
  //   useState<LastIncomeAndOutcomeTransactionProps>(
  //     {} as LastIncomeAndOutcomeTransactionProps,
  //   )
  const [periodBalanceFormatted, setPeriodBalanceFormatted] =
    useState<PeriodBalanceFormattedProps>({} as PeriodBalanceFormattedProps)

  const [transactionsState, dispatch] = useReducer(
    transactionsReducer,
    TRANSACTIONS_REDUCER_INITIAL_STATE,
    () => {
      const transactions = getAllTransactions()
      return {
        ...TRANSACTIONS_REDUCER_INITIAL_STATE,
        transactions,
      }
    },
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

  function calculatePeriodBalanceFormatted() {
    if (periodBalance) {
      const { initial, final } = periodBalance
      const start = new Date(initial)
      const end = new Date(final)

      const period = periodBetweenDatesFormatted({
        startDate: start,
        endDate: end,
      })

      const initialDateFormatted = dateFormatter.format(start)
      const finalDateFormatted = dateFormatter.format(end)

      setPeriodBalanceFormatted({
        period,
        dates: {
          initial: initialDateFormatted,
          final: finalDateFormatted,
        },
      })
    }
  }

  const handleAddNewTransaction = useCallback((transaction: ITransactions) => {
    dispatch(addTransaction(transaction))
  }, [])

  const handleRemoveTransactionById = useCallback((id: string) => {
    dispatch(removeTransactionById(id))
  }, [])

  // This branch will not use json-server, but localStorage
  // async function loadTransactionsData() {
  //   const response = await api.get('/transactions')
  //   const data: ITransactions[] = response.data ? response.data : []
  //   dispatch(loadTransactions(data))
  // }

  // const addNewTransaction = useCallback(async (transaction: ITransactions) => {
  //   setIsAddTransactionLoading(true)
  //   await api.post('/transactions', transaction)
  //   loadTransactionsData()
  //   setIsAddTransactionLoading(false)
  // }, [])

  // const removeTransactionById = useCallback(async (id: string) => {
  //   setIsDeleteTransactionLoading({ id, value: true })
  //   await api.delete(`/transactions/${id}`)
  //   loadTransactionsData()
  //   setIsDeleteTransactionLoading({ id, value: false })
  // }, [])

  // useEffect(() => {
  //   loadTransactionsData()
  // }, [])

  useEffect(() => {
    dispatch(calculateIncomeTotal())
    dispatch(calculateOutcomeTotal())
    dispatch(calculateBalance())
    dispatch(getLastIncomeTransaction())
    dispatch(getLastOutcomeTransaction())
    dispatch(getPeriodBalance())

    registerAllTransactions(transactions)
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
      // isAddTransactionLoading,
      // isDeleteTransactionLoading,
      lastIncomeTransactionDateFormatted,
      lastOutcomeTransactionDateFormatted,
      handleAddNewTransaction,
      handleRemoveTransactionById,
    }),
    [
      balance,
      incomeTotal,
      transactions,
      outcomeTotal,
      handleAddNewTransaction,
      handleRemoveTransactionById,
      periodBalanceFormatted,
      // isAddTransactionLoading,
      // isDeleteTransactionLoading,
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
