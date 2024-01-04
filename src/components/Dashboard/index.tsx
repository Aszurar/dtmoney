import { HighLightCard } from '../HighLightCard'

import * as Table from '../Table'
import { priceFormatter, dateFormatter } from '../../utils/formatter'
import { useTransactions } from '../../hook/useTransactions'

export function Dashboard() {
  const { transactions, balance, incomeTotal, outcomeTotal } = useTransactions()

  function tableContentRows() {
    return transactions.map((transaction) => {
      const dataFormatted = dateFormatter.format(
        new Date(transaction.createdAt),
      )
      const priceFormatted = priceFormatter.format(transaction.price)
      const priceFormattedWithSignalOrNot =
        transaction.type === 'outcome' ? `- ${priceFormatted}` : priceFormatted
      return (
        <Table.Row key={transaction.id} variant="body">
          <Table.Data variant="description">
            {transaction.description}
          </Table.Data>
          <Table.Data variant={transaction.type}>
            {priceFormattedWithSignalOrNot}
          </Table.Data>
          <Table.Data>{transaction.category}</Table.Data>
          <Table.Data>{dataFormatted}</Table.Data>
        </Table.Row>
      )
    })
  }

  return (
    <main className="h-dashboard bg-background-primary px-6 dark:bg-zinc-950">
      <div className="mx-auto max-w-app">
        <section className="-mt-16 flex gap-8">
          <HighLightCard value={incomeTotal} />
          <HighLightCard variant="outcome" value={outcomeTotal} />
          <HighLightCard variant="total" value={balance} />
        </section>

        <section className="mt-16">
          <Table.Root>
            <Table.Header>
              <Table.Row variant="head">
                <Table.Head>Título</Table.Head>
                <Table.Head>Preço</Table.Head>
                <Table.Head>Categoria</Table.Head>
                <Table.Head>Data</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>{tableContentRows()}</Table.Body>
          </Table.Root>
        </section>
      </div>
    </main>
  )
}
