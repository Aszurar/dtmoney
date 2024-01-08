import * as Table from '../../Table'

type TableHeadProps = {
  isMobile: boolean
  transactionsTotal: number
}

export function TableHead({ isMobile, transactionsTotal }: TableHeadProps) {
  if (isMobile) {
    return (
      <>
        <Table.Head className="text-xl">Transações</Table.Head>
        <Table.Head>{transactionsTotal} items</Table.Head>
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
