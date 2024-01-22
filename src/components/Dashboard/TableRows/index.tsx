import * as Table from '../../Table'
import { useTransactions } from '../../../hook/useTransactions'
import { useResponsiveness } from '../../../hook/useResponsiveness'
import { dateFormatter, priceFormatter } from '../../../utils/formatter'
import { TableRowMobileMemoized } from './TableRowMobile'
import { TableRowWebMemoized } from './TableRowWeb'
import { ITransactions } from '../../../dto/transactions'

export type TransactionProps = Omit<ITransactions, 'date' | 'price'> & {
  date: string
  price: string
}

export function TableRows() {
  const { isMobile } = useResponsiveness()

  const {
    transactions,
    handleRemoveTransactionById,
    isDeleteTransactionLoading,
  } = useTransactions()

  return transactions.map((transaction) => {
    const dataFormatted = dateFormatter.format(new Date(transaction.date))
    const priceFormatted = priceFormatter.format(transaction.price)
    const priceFormattedWithSignalOrNot =
      transaction.type === 'outcome' ? `- ${priceFormatted}` : priceFormatted

    const isLoading =
      isDeleteTransactionLoading.id === transaction.id &&
      isDeleteTransactionLoading.value

    const transactionData: TransactionProps = {
      ...transaction,
      date: dataFormatted,
      price: priceFormattedWithSignalOrNot,
    }

    return (
      <Table.Row key={transaction.id} variant="body">
        {isMobile ? (
          <TableRowMobileMemoized
            isLoading={isLoading}
            transaction={transactionData}
            handleRemoveTransactionById={handleRemoveTransactionById}
          />
        ) : (
          <TableRowWebMemoized
            isLoading={isLoading}
            transaction={transactionData}
            handleRemoveTransactionById={handleRemoveTransactionById}
          />
        )}
      </Table.Row>
    )
  })
}
