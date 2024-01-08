import { useEffect, useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

import * as Table from '../Table'
import { TableHead } from './TableHead'
import { TableRows } from './TableRows'
import { HighLightCard } from '../HighLightCard'
import { useTransactions } from '../../hook/useTransactions'

export function Dashboard() {
  const [parent] = useAutoAnimate()

  const [currentBrowserWidth, setCurrentBrowserWidth] = useState(0)
  const isMobile = currentBrowserWidth < 640

  const {
    transactions,
    balance,
    incomeTotal,
    outcomeTotal,
    periodBalanceFormatted,
    lastIncomeTransactionDateFormatted,
    lastOutcomeTransactionDateFormatted,
  } = useTransactions()

  const transactionsTotal = transactions.length

  function onUpdateCurrentBrowserWidth() {
    setCurrentBrowserWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', onUpdateCurrentBrowserWidth)
    return () => {
      window.removeEventListener('resize', onUpdateCurrentBrowserWidth)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className="h-dashboard bg-background-primary px-6 dark:bg-zinc-950">
      <div className="mx-auto max-w-app">
        <section
          className={`phone-lg:-mt-16 -mt-12 flex gap-5 overflow-x-scroll px-1 
            pb-1 sm:gap-8 sm:px-0 sm:pb-0`}
        >
          <HighLightCard
            value={incomeTotal}
            lastDate={lastIncomeTransactionDateFormatted}
          />
          <HighLightCard
            variant="outcome"
            value={outcomeTotal}
            lastDate={lastOutcomeTransactionDateFormatted}
          />
          <HighLightCard
            variant="total"
            value={balance}
            lastDate={periodBalanceFormatted?.period}
            period={periodBalanceFormatted?.dates}
          />
        </section>

        <section className="mt-8 sm:mt-16">
          <Table.Root>
            <Table.Header>
              <Table.Row variant="head">
                <TableHead
                  isMobile={isMobile}
                  transactionsTotal={transactionsTotal}
                />
              </Table.Row>
            </Table.Header>
            <Table.Body ref={parent}>
              <TableRows isMobile={isMobile} />
            </Table.Body>
          </Table.Root>
        </section>
      </div>
    </main>
  )
}
