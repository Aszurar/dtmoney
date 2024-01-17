import { memo } from 'react'
import { FiTrash } from 'react-icons/fi'

import { TransactionProps } from '..'
import * as Table from '../../../Table'
import { Button } from '../../../Button'

type TableRowWebProps = {
  transaction: TransactionProps
  handleRemoveTransactionById: (id: string) => void
}

export function TableRowWeb({
  transaction,
  handleRemoveTransactionById,
}: TableRowWebProps) {
  return (
    <>
      <Table.Data variant="description">{transaction.description}</Table.Data>
      <Table.Data variant={transaction.type}>{transaction.price}</Table.Data>
      <Table.Data>{transaction.category}</Table.Data>
      <Table.Data>{transaction.date}</Table.Data>
      <Table.Data>
        <Button
          variant="ghost"
          // disabled={isLoadingIcon}
          className="h-8 w-8"
          onClick={() => handleRemoveTransactionById(transaction.id)}
        >
          <FiTrash className="text-lg " />
        </Button>
      </Table.Data>
    </>
  )
}

export const TableRowWebMemoized = memo(TableRowWeb, (prevProps, nextProps) => {
  return prevProps.transaction.id === nextProps.transaction.id
})
