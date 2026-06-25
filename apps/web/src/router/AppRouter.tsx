import { HashRouter, Route, Routes } from 'react-router-dom'
import { AppShell } from '../components/layout/AppShell'
import { HomePage } from '../pages/HomePage'
import { ProductDetailPage } from '../pages/ProductDetailPage'

export function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<HomePage />} />
          <Route path="products/:slug" element={<ProductDetailPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
