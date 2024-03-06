import { Outlet } from 'react-router-dom'

import { Header } from '../components/header'
import { Sidebar } from '../components/sidebar'

export function Layout() {
  return (
    <div className="flex w-screen h-screen bg-rotion-900 text-rotion-100">
      <Sidebar />

      <div className="flex flex-col flex-1 max-h-screen">
        <Header />

        <main className="flex flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
