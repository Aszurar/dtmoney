import { memo } from 'react'
import { FiTrash } from 'react-icons/fi'

import { TransactionProps } from '..'
import * as Table from '../../../Table'
import { Button } from '../../../Button'
import { Loading } from '../../../Loading'

type TableRowWebProps = {
  isLoading: boolean
  transaction: TransactionProps
  handleRemoveTransactionById: (id: string) => void
}

export function TableRowWeb({
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
      <Table.Data variant="description">{transaction.description}</Table.Data>
      <Table.Data variant={transaction.type}>{transaction.price}</Table.Data>
      <Table.Data>{transaction.category}</Table.Data>
      <Table.Data>{transaction.date}</Table.Data>
      <Table.Data>
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
    </>
  )
}

export const TableRowWebMemoized = memo(TableRowWeb, (prevProps, nextProps) => {
  return (
    prevProps.transaction.id === nextProps.transaction.id &&
    prevProps.isLoading === nextProps.isLoading
  )
})
