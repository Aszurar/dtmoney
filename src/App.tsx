import './theme/global.css'

import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import { Footer } from './components/Footer'
import { ThemeProvider } from './context/theme'
import { TransactionsProvider } from './context/transactions'

export function App() {
  return (
    <ThemeProvider>
      <TransactionsProvider>
        <div className="flex min-h-screen flex-col antialiased">
          <Header />
          <Dashboard />
          <Footer />
        </div>
      </TransactionsProvider>
    </ThemeProvider>
  )
}
