import { HighLightCard } from '../HighLightCard'

import * as Table from '../Table'

export function Dashboard() {
  return (
    <main className="h-dashboard bg-background-primary px-6">
      <div className="mx-auto max-w-app">
        <section className="-mt-16 flex gap-8">
          <HighLightCard value="20.000,00" />
          <HighLightCard variant="outcome" value="12.000,00" />
          <HighLightCard variant="total" value="32.000,00" />
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
            <Table.Body>
              <Table.Row variant="body">
                <Table.Data variant="description">
                  Desenvolvimento de website
                </Table.Data>
                <Table.Data variant="income">R$ 12.000,00</Table.Data>
                <Table.Data>Desenvolvimento</Table.Data>
                <Table.Data>20/02/2021</Table.Data>
              </Table.Row>

              <Table.Row variant="body">
                <Table.Data variant="description">
                  Desenvolvimento de website
                </Table.Data>
                <Table.Data variant="outcome">R$ 12.000,00</Table.Data>
                <Table.Data>Desenvolvimento</Table.Data>
                <Table.Data>20/02/2021</Table.Data>
              </Table.Row>

              <Table.Row variant="body">
                <Table.Data variant="description">
                  Desenvolvimento de website
                </Table.Data>
                <Table.Data variant="income">R$ 12.000,00</Table.Data>
                <Table.Data>Desenvolvimento</Table.Data>
                <Table.Data>20/02/2021</Table.Data>
              </Table.Row>
              <Table.Row variant="body">
                <Table.Data variant="description">
                  Desenvolvimento de website
                </Table.Data>
                <Table.Data variant="income">R$ 12.000,00</Table.Data>
                <Table.Data>Desenvolvimento</Table.Data>
                <Table.Data>20/02/2021</Table.Data>
              </Table.Row>
              <Table.Row variant="body">
                <Table.Data variant="description">
                  Desenvolvimento de website
                </Table.Data>
                <Table.Data variant="outcome">R$ 12.000,00</Table.Data>
                <Table.Data>Desenvolvimento</Table.Data>
                <Table.Data>20/02/2021</Table.Data>
              </Table.Row>
              <Table.Row variant="body">
                <Table.Data variant="description">
                  Desenvolvimento de website
                </Table.Data>
                <Table.Data variant="income">R$ 12.000,00</Table.Data>
                <Table.Data>Desenvolvimento</Table.Data>
                <Table.Data>20/02/2021</Table.Data>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </section>
      </div>
    </main>
  )
}
