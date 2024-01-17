import { ITransactions } from '../../dto/transactions'
import { TRANSACTIONS_COLLECTION } from '../storageConfig'

export function getAllTransactions(): ITransactions[] {
  const storage = localStorage.getItem(TRANSACTIONS_COLLECTION)

  return storage ? JSON.parse(storage) : ([] as ITransactions[])
}
