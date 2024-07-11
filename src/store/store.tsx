import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './cartSlice'
import { productApi } from '../api/productApi'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(productApi.middleware)
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
