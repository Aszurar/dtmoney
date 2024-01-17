import { ITransactions } from '../../dto/transactions'
import { TRANSACTIONS_COLLECTION } from '../storageConfig'

export function registerAllTransactions(transactions: ITransactions[]) {
  localStorage.setItem(TRANSACTIONS_COLLECTION, JSON.stringify(transactions))
}
