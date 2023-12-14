import './theme/global.css'

import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className=" flex min-h-screen flex-col antialiased">
      <Header />
      <Dashboard />
      <Footer />
    </div>
  )
}
