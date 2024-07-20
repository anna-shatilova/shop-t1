import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/not-found/NotFound'
import MainPage from './pages/main-page/MainPage'
import ProductPage from './pages/product-page/ProductPage'
import CartPage from './pages/cart-page/CartPage'
import { ProtectedRoute } from './components/protected-route/ProtectedRoute'
function AppRoutes({user}: {user: boolean}) {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<NotFound />} />

      <Route path="/login" element={<ProtectedRoute isAllowed={!user} />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
    // <Routes>
    //   <Route path="/" element={<MainPage />} />
    //   <Route path="*" element={<NotFound />} />
    //   {/* <Route element={<ProtectedRoute isAllowed={Boolean(!user)} />}> */}
    //     <Route path="/login" element={<LoginPage />} />
    //   {/* </Route> */}
    //   <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
    //     <Route path="/product/:id" element={<ProductPage />} />
    //     <Route path="/cart" element={<CartPage />} />
    //   </Route>
    // </Routes>
  )
}

export default AppRoutes
