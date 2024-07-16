import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/not-found/NotFound'
import MainPage from './pages/main-page/MainPage'
import ProductPage from './pages/product-page/ProductPage'
import CartPage from './pages/cart-page/CartPage'
import LoginPage from './pages/login-page/LoginPage'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route path="/" element={<MainPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
