import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from '../services/cartSlice'
import { useDispatch } from 'react-redux'
import { productApi } from '../services/productApi'

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productApi.middleware)
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export default store
