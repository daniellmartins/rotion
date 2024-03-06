import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import * as Collapsible from '@radix-ui/react-collapsible'

import { Header } from '../components/header'
import { Sidebar } from '../components/sidebar'

export function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <Collapsible.Root
      defaultOpen
      onOpenChange={setIsSidebarOpen}
      className="flex w-screen h-screen bg-rotion-900 text-rotion-100"
    >
      <Sidebar />

      <div className="flex flex-col flex-1 max-h-screen">
        <Header isSidebarOpen={isSidebarOpen} />

        <main className="flex flex-1">
          <Outlet />
        </main>
      </div>
    </Collapsible.Root>
  )
}
