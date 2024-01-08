import { FiTrash } from 'react-icons/fi'

import * as Table from '../../Table'
import { Button } from '../../Button'
import { useTransactions } from '../../../hook/useTransactions'
import { dateFormatter, priceFormatter } from '../../../utils/formatter'

type TableRows = {
  isMobile: boolean
}

export function TableRows({ isMobile }: TableRows) {
  const { transactions, handleRemoveTransactionById } = useTransactions()

  return transactions.map((transaction) => {
    const dataFormatted = dateFormatter.format(new Date(transaction.date))
    const priceFormatted = priceFormatter.format(transaction.price)
    const priceFormattedWithSignalOrNot =
      transaction.type === 'outcome' ? `- ${priceFormatted}` : priceFormatted

    return (
      <Table.Row key={transaction.id} variant="body">
        {isMobile ? (
          <>
            <div className=" flex items-center justify-between">
              <Table.Data variant="description">
                {transaction.description}
              </Table.Data>
              <Table.Data className="">
                <Button
                  variant="ghost"
                  className="h-8 w-8"
                  onClick={() => handleRemoveTransactionById(transaction.id)}
                >
                  <FiTrash className="text-lg " />
                </Button>
              </Table.Data>
            </div>

            <Table.Data variant={transaction.type}>
              {priceFormattedWithSignalOrNot}
            </Table.Data>

            <div className="mt-3 flex justify-between sm:mt-0 sm:block">
              <Table.Data>{transaction.category}</Table.Data>
              <Table.Data>{dataFormatted}</Table.Data>
            </div>
          </>
        ) : (
          <>
            <Table.Data variant="description">
              {transaction.description}
            </Table.Data>
            <Table.Data variant={transaction.type}>
              {priceFormattedWithSignalOrNot}
            </Table.Data>
            <Table.Data>{transaction.category}</Table.Data>
            <Table.Data>{dataFormatted}</Table.Data>
            <Table.Data>
              <Button
                variant="ghost"
                className="h-8 w-8"
                onClick={() => handleRemoveTransactionById(transaction.id)}
              >
                <FiTrash className="text-lg " />
              </Button>
            </Table.Data>
          </>
        )}
      </Table.Row>
    )
  })
}
