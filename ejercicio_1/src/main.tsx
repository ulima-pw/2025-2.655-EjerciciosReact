import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css"

import ProductsPage from './pages/ProductsPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ProductsPage />
  </StrictMode>,
)
