import * as Table from '../../Table'
// import { Loading } from '../../Loading'
import { TableRowWebMemoized } from './TableRowWeb'
import { TableRowMobileMemoized } from './TableRowMobile'
import { ITransactions } from '../../../dto/transactions'
import { useTransactions } from '../../../hook/useTransactions'
import { useResponsiveness } from '../../../hook/useResponsiveness'
import { dateFormatter, priceFormatter } from '../../../utils/formatter'

export type TransactionProps = Omit<ITransactions, 'date' | 'price'> & {
  date: string
  price: string
}

export function TableRows() {
  const { isMobile } = useResponsiveness()

  const { transactions, handleRemoveTransactionById } = useTransactions()

  return transactions.map((transaction) => {
    const dataFormatted = dateFormatter.format(new Date(transaction.date))
    const priceFormatted = priceFormatter.format(transaction.price)
    const priceFormattedWithSignalOrNot =
      transaction.type === 'outcome' ? `- ${priceFormatted}` : priceFormatted

    const transactionData: TransactionProps = {
      ...transaction,
      date: dataFormatted,
      price: priceFormattedWithSignalOrNot,
    }

    // This branch will not use json-server, but localStorage so don't need this
    // const isLoadingIcon =
    //   isDeleteTransactionLoading.id === transaction.id &&
    //   isDeleteTransactionLoading.value
    // const buttonIcon = isLoadingIcon ? (
    //   <Loading
    //     className="border-gray-500 border-top-4-table
    //     dark:border-top-4-table-dark"
    //   />
    // ) : (
    //   <FiTrash className="text-lg " />
    // )

    return (
      <Table.Row key={transaction.id} variant="body">
        {isMobile ? (
          <TableRowMobileMemoized
            transaction={transactionData}
            handleRemoveTransactionById={handleRemoveTransactionById}
          />
        ) : (
          <TableRowWebMemoized
            transaction={transactionData}
            handleRemoveTransactionById={handleRemoveTransactionById}
          />
        )}
      </Table.Row>
    )
  })
}
