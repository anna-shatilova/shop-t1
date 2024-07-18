import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store/store'
import { ICartProducts } from '../interface/ApiInterface'

type CartUserById = {
  carts: {
    id: number
    products: ICartProducts[]
    userId: number
    total: number
    discountedTotal: number
    totalProducts: number
    totalQuantity: number
  }[]
}

type RequestState = 'pending' | 'fulfilled' | 'rejected'

export const fetchCartUserById = createAsyncThunk<
  CartUserById,
  number | undefined
>('cart/fetchCartUserById', async (id, { rejectWithValue }) => {
  if (!id) {
    return
  }
  const response = await fetch(`https://dummyjson.com/carts/user/${id}`)
  const data = await response.json()
  if (response.status < 200 || response.status >= 300) {
    return rejectWithValue(data)
  }
  return data
})

export const CartUserById = createAsyncThunk<
  CartUserById,
  number | undefined
>('cart/fetchCartUserById', async (id, { rejectWithValue }) => {
  if (!id) {
    return
  }
  const response = await fetch(`https://dummyjson.com/carts/user/${id}`)
  const data = await response.json()
  if (response.status < 200 || response.status >= 300) {
    return rejectWithValue(data)
  }
  return data
})


export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    // allCarts: {},
    dataById: {} as CartUserById,
    statusById: {} as RequestState,
  },
  reducers: {
    // getCarts(state, action: PayloadAction<CartUserById>) {
    //   state.allCarts = action.payload
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartUserById.pending, (state) => {
      state.statusById = 'pending'
    })
    builder.addCase(fetchCartUserById.fulfilled, (state, action) => {
      state.statusById = 'fulfilled'
      state.dataById = action.payload
    })
    builder.addCase(fetchCartUserById.rejected, (state) => {
      state.statusById = 'rejected'
    })
  },
})

export const selectStatusById = (state: RootState) => state.cart.statusById
export const selectDataById = (state: RootState) => state.cart.dataById
// export const { getCarts } = cartSlice.actions
export const cartsReducer = cartSlice.reducer

// extraReducers(builder) {
//   builder.addCase(fetchGetTodos.fulfilled, (state, action) => {
//       state.todos = action.payload;
//   })
// }
// extraReducers: {
//   [fetchGetTodos.fulfilled]: (state, action) => {
//       state.todos = action.payload;
//   }
// }
