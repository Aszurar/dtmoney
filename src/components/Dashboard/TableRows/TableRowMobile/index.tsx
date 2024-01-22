import { memo } from 'react'
import { FiTrash } from 'react-icons/fi'

import { TransactionProps } from '..'
import * as Table from '../../../Table'
import { Button } from '../../../Button'
import { Loading } from '../../../Loading'

type TableRowWebProps = {
  transaction: TransactionProps
  isLoading: boolean
  handleRemoveTransactionById: (id: string) => void
}

export function TableRowMobile({
  isLoading,
  transaction,
  handleRemoveTransactionById,
}: Readonly<TableRowWebProps>) {
  const buttonIcon = isLoading ? (
    <Loading
      className="border-gray-500 border-top-4-table 
      dark:border-top-4-table-dark"
    />
  ) : (
    <FiTrash className="text-lg " />
  )

  return (
    <>
      <div className=" flex items-center justify-between">
        <Table.Data variant="description">{transaction.description}</Table.Data>
        <Table.Data className="">
          <Button
            variant="ghost"
            disabled={isLoading}
            className="h-8 w-8"
            aria-label="Deletar transação"
            onClick={() => handleRemoveTransactionById(transaction.id)}
          >
            {buttonIcon}
          </Button>
        </Table.Data>
      </div>

      <Table.Data variant={transaction.type}>{transaction.price}</Table.Data>

      <div className="mt-3 flex justify-between sm:mt-0 sm:block">
        <Table.Data>{transaction.category}</Table.Data>
        <Table.Data>{transaction.date}</Table.Data>
      </div>
    </>
  )
}

export const TableRowMobileMemoized = memo(
  TableRowMobile,
  (prevProps, nextProps) => {
    return (
      prevProps.transaction.id === nextProps.transaction.id &&
      prevProps.isLoading === nextProps.isLoading
    )
  },
)
