import './theme/global.css'

import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import { Footer } from './components/Footer'
import { ThemeProvider } from './context/theme'
import { TransactionsProvider } from './context/transactions'
import { ResponsivenessProvider } from './context/responsiveness'
import { axeAccessibilityReporter } from './utils/axeAccessibilityReporter'

axeAccessibilityReporter()

export function App() {
  return (
    <ThemeProvider>
      <TransactionsProvider>
        <ResponsivenessProvider>
          <div className="flex min-h-screen flex-col antialiased">
            <Header />
            <Dashboard />
            <Footer />
          </div>
        </ResponsivenessProvider>
      </TransactionsProvider>
    </ThemeProvider>
  )
}
