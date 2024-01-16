import * as Table from '../../Table'
import { useResponsiveness } from '../../../hook/useResponsiveness'

type TableHeadProps = {
  transactionsTotal: number
}

export function TableHead({ transactionsTotal }: TableHeadProps) {
  const { isMobile } = useResponsiveness()

  if (isMobile) {
    return (
      <>
        <Table.Head className="text-xl">Transações</Table.Head>
        <Table.Head className="font-medium">
          {transactionsTotal} items
        </Table.Head>
      </>
    )
  }

  return (
    <>
      <Table.Head>Título</Table.Head>
      <Table.Head>Preço</Table.Head>
      <Table.Head>Categoria</Table.Head>
      <Table.Head>Data</Table.Head>
    </>
  )
}
