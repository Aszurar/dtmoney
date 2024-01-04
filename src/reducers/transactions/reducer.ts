import { produce } from 'immer'
import { TRANSACTION_TYPE, TransactionsState } from '../../dto/transactions'
import { ActionTypes, IActions } from './actions'

function transactionsReducer(state: TransactionsState, action: IActions) {
  switch (action.type) {
    case ActionTypes.LOAD_TRANSACTIONS:
      return produce(state, (draft) => {
        console.log(action.payload)
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
    default:
      return state
  }
}

export { transactionsReducer }
