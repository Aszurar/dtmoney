import { ITransactions } from '../../dto/transactions'

enum ActionTypes {
  ADD_TRANSACTION = 'ADD_TRANSACTION',
  REMOVE_TRANSACTION = 'REMOVE_TRANSACTION',
  INCOME_TOTAL = 'INCOME_TOTAL',
  OUTCOME_TOTAL = 'OUTCOME_TOTAL',
  BALANCE = 'BALANCE',
  LOAD_TRANSACTIONS = 'LOAD_TRANSACTIONS',
  GET_LAST_INCOME_TRANSACTION = 'GET_LAST_INCOME_TRANSACTION',
  GET_LAST_OUTCOME_TRANSACTION = 'GET_LAST_OUTCOME_TRANSACTION',
  GET_PERIOD_BALANCE = 'GET_PERIOD_BALANCE',
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
        | ActionTypes.GET_LAST_INCOME_TRANSACTION
        | ActionTypes.GET_LAST_OUTCOME_TRANSACTION
        | ActionTypes.GET_PERIOD_BALANCE
    }

function loadTransactions(transactions: ITransactions[]) {
  return {
    type: ActionTypes.LOAD_TRANSACTIONS,
    payload: {
      transactions,
    },
  } satisfies IActions
}

function addTransaction(transaction: ITransactions) {
  return {
    type: ActionTypes.ADD_TRANSACTION,
    payload: {
      transaction,
    },
  } satisfies IActions
}

function removeTransactionById(id: string) {
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

function getLastIncomeTransaction() {
  return {
    type: ActionTypes.GET_LAST_INCOME_TRANSACTION,
  } satisfies IActions
}

function getLastOutcomeTransaction() {
  return {
    type: ActionTypes.GET_LAST_OUTCOME_TRANSACTION,
  } satisfies IActions
}

function getPeriodBalance() {
  return {
    type: ActionTypes.GET_PERIOD_BALANCE,
  } satisfies IActions
}

export {
  ActionTypes,
  calculateBalance,
  loadTransactions,
  addTransaction,
  removeTransactionById,
  calculateIncomeTotal,
  calculateOutcomeTotal,
  getLastIncomeTransaction,
  getLastOutcomeTransaction,
  getPeriodBalance,
}
