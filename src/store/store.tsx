import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from '../services/cartSlice'
import { useDispatch } from 'react-redux'
import { productApi } from '../services/productApi'
import { userApi } from '../services/userApi'
import { authReducer } from '../services/authSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartSlice.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productApi.middleware, userApi.middleware)
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export default store
