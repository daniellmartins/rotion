import { Header } from './components/header'
import { Sidebar } from './components/sidebar'

export function App() {
  return (
    <div className="flex w-screen h-screen bg-rotion-900 text-rotion-100">
      <Sidebar />

      <div className="flex flex-col flex-1 max-h-screen">
        <Header />

        <main className="flex flex-1 justify-center items-center text-rotion-400">
          Selecione ou crie um documento
        </main>
      </div>
    </div>
  )
}
