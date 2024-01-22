import { produce } from 'immer'
import { isAfter, isBefore } from 'date-fns'
import { ActionTypes, IActions } from './actions'
import { TRANSACTION_TYPE, TransactionsState } from '../../dto/transactions'

function transactionsReducer(state: TransactionsState, action: IActions) {
  switch (action.type) {
    case ActionTypes.LOAD_TRANSACTIONS:
      return produce(state, (draft) => {
        draft.transactions = action.payload.transactions
      })
    case ActionTypes.ADD_TRANSACTION:
      return produce(state, (draft) => {
        draft.transactions.push(action.payload.transaction)
      })
    case ActionTypes.REMOVE_TRANSACTION:
      return produce(state, (draft) => {
        const transactionIndex = draft.transactions.findIndex(
          (transaction) => transaction.id === action.payload.id,
        )
        draft.transactions.splice(transactionIndex, 1)
      })
    case ActionTypes.INCOME_TOTAL:
      return produce(state, (draft) => {
        draft.incomeTotal = draft.transactions.reduce(
          (accumulator, transaction) =>
            transaction.type === TRANSACTION_TYPE.income
              ? accumulator + transaction.price
              : accumulator,
          0,
        )
      })
    case ActionTypes.OUTCOME_TOTAL:
      return produce(state, (draft) => {
        draft.outcomeTotal = draft.transactions.reduce(
          (accumulator, transaction) =>
            transaction.type === TRANSACTION_TYPE.outcome
              ? accumulator + transaction.price
              : accumulator,
          0,
        )
      })
    case ActionTypes.BALANCE:
      return produce(state, (draft) => {
        draft.balance = draft.incomeTotal - draft.outcomeTotal
      })
    case ActionTypes.GET_LAST_INCOME_TRANSACTION:
      return produce(state, (draft) => {
        draft.lastIncomeTransaction = draft.transactions.reduce(
          (accumulator, transaction) => {
            const isIncomeTransaction =
              transaction.type === TRANSACTION_TYPE.income

            const isCurrentTransactionAfterAccumulatorTransaction = isAfter(
              transaction.date,
              accumulator.date,
            )
            return isIncomeTransaction &&
              isCurrentTransactionAfterAccumulatorTransaction
              ? transaction
              : accumulator
          },
          draft.transactions[0],
        )
      })
    case ActionTypes.GET_LAST_OUTCOME_TRANSACTION:
      return produce(state, (draft) => {
        draft.lastOutcomeTransaction = draft.transactions.reduce(
          (accumulator, transaction) => {
            const isOutcomeTransaction =
              transaction.type === TRANSACTION_TYPE.outcome

            const isCurrentTransactionAfterAccumulatorTransaction = isAfter(
              transaction.date,
              accumulator.date,
            )
            return isOutcomeTransaction &&
              isCurrentTransactionAfterAccumulatorTransaction
              ? transaction
              : accumulator
          },
          draft.transactions[0],
        )
      })
    case ActionTypes.GET_PERIOD_BALANCE:
      return produce(state, (draft) => {
        draft.periodBalance =
          draft.transactions.length > 0
            ? {
                initial: draft.transactions.reduce(
                  (accumulator, transaction) => {
                    const isCurrentTransactionBeforeAccumulatorTransaction =
                      isBefore(transaction.date, accumulator)
                    return isCurrentTransactionBeforeAccumulatorTransaction
                      ? transaction.date
                      : accumulator
                  },
                  draft.transactions[0].date,
                ),
                final: draft.transactions.reduce((accumulator, transaction) => {
                  const isCurrentTransactionAfterAccumulatorTransaction =
                    isAfter(transaction.date, accumulator)

                  return isCurrentTransactionAfterAccumulatorTransaction
                    ? transaction.date
                    : accumulator
                }, draft.transactions[0].date),
              }
            : undefined
      })

    default:
      return state
  }
}

export { transactionsReducer }
