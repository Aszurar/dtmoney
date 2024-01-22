import { memo } from 'react'
import { FiTrash } from 'react-icons/fi'

import { TransactionProps } from '..'
import * as Table from '../../../Table'
import { Button } from '../../../Button'

type TableRowWebProps = {
  transaction: TransactionProps
  handleRemoveTransactionById: (id: string) => void
}

export function TableRowMobile({
  transaction,
  handleRemoveTransactionById,
}: Readonly<TableRowWebProps>) {
  return (
    <>
      <div className=" flex items-center justify-between">
        <Table.Data variant="description">{transaction.description}</Table.Data>
        <Table.Data className="">
          <Button
            variant="ghost"
            // disabled={isLoadingIcon}
            aria-label="Deletar transação"
            className="h-8 w-8"
            onClick={() => handleRemoveTransactionById(transaction.id)}
          >
            <FiTrash className="text-lg " />
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
    return prevProps.transaction.id === nextProps.transaction.id
  },
)
