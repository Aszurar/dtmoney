import { ITransactions } from '../../dto/transactions'

enum ActionTypes {
  ADD_TRANSACTION = 'ADD_TRANSACTION',
  REMOVE_TRANSACTION = 'REMOVE_TRANSACTION',
  INCOME_TOTAL = 'INCOME_TOTAL',
  OUTCOME_TOTAL = 'OUTCOME_TOTAL',
  BALANCE = 'BALANCE',
  LOAD_TRANSACTIONS = 'LOAD_TRANSACTIONS',
}

export type IActions =
  | {
      type: ActionTypes.LOAD_TRANSACTIONS
      payload: {
        transactions: ITransactions[]
      }
    }
  | {
      type: ActionTypes.ADD_TRANSACTION
      payload: {
        transaction: ITransactions
      }
    }
  | {
      type: ActionTypes.REMOVE_TRANSACTION
      payload: {
        id: string
      }
    }
  | {
      type:
        | ActionTypes.INCOME_TOTAL
        | ActionTypes.OUTCOME_TOTAL
        | ActionTypes.BALANCE
    }

function loadTransactions(transactions: ITransactions[]) {
  return {
    type: ActionTypes.LOAD_TRANSACTIONS,
    payload: {
      transactions,
    },
  } satisfies IActions
}

function addNewTransaction(transaction: ITransactions) {
  return {
    type: ActionTypes.ADD_TRANSACTION,
    payload: {
      transaction,
    },
  } satisfies IActions
}

function removeTransaction(id: string) {
  return {
    type: ActionTypes.REMOVE_TRANSACTION,
    payload: {
      id,
    },
  } satisfies IActions
}

function calculateIncomeTotal() {
  return {
    type: ActionTypes.INCOME_TOTAL,
  } satisfies IActions
}

function calculateOutcomeTotal() {
  return {
    type: ActionTypes.OUTCOME_TOTAL,
  } satisfies IActions
}

function calculateBalance() {
  return {
    type: ActionTypes.BALANCE,
  } satisfies IActions
}

export {
  ActionTypes,
  calculateBalance,
  loadTransactions,
  addNewTransaction,
  removeTransaction,
  calculateIncomeTotal,
  calculateOutcomeTotal,
}
