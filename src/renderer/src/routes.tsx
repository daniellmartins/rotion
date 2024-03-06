import { Router, Route } from 'electron-router-dom'

import { BlackPage } from './pages/black'
import { DocumentPage } from './pages/document'
import { Layout } from './pages/_layout'

export function Routes() {
  return (
    <Router
      main={
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<BlackPage />} />
          <Route path="/document" element={<DocumentPage />} />

          <Route path="*" element={<BlackPage />} />
        </Route>
      }
    />
  )
}
