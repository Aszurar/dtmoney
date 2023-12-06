import "./theme/global.css"

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

export function App() {
  return (
    <div className=" flex flex-col min-h-screen">
      <Header />
      <Dashboard />
    </div>
  )
}