import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
  value: number
  //   access_token: string
  //   refresh_token: string
  //   isAuth: boolean
}

// const getAuthFromLocalStorage = (): AuthState | null => {
//   try {
//     return JSON.parse(localStorage.getItem(AUTH_KEY) ?? '')
//   } catch (error) {
//     return null
//   }
// }
const initialState: CartState = {
  value: 0,
  //   access_token: '',
  //   refresh_token: '',
  //   isAuth: false,
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  //   getAuthFromLocalStorage() ?? initialState,
  reducers: {
    setCart(state, action: PayloadAction<number>) {
      state.value += action.payload
      //   const payload: AuthState = action.payload ?? initialState

      //   state.access_token = payload.access_token
      //   state.refresh_token = payload.refresh_token
      //   state.isAuth = payload.isAuth

      //   localStorage.setItem(AUTH_KEY, JSON.stringify(state))
    },
  },
})
export const { setCart } = cartSlice.actions
export const cartReducer = cartSlice.reducer
