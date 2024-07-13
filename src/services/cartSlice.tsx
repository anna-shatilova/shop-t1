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

export const fetchCartUserById = createAsyncThunk<CartUserById, number>(
  'cart/fetchByUserId',
  async (id, { rejectWithValue }) => {
    const response = await fetch(`https://dummyjson.com/carts/user/${id}`)
    const data = await response.json()
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(data)
    }
    return data
  },
)

type RequestState = 'pending' | 'fulfilled' | 'rejected'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    dataById: {} as Record<number, CartUserById | undefined>,
    statusById: {} as Record<number, RequestState | undefined>,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCartUserById.pending, (state, action) => {
      state.statusById[action.meta.arg] = 'pending'
    })
    builder.addCase(fetchCartUserById.fulfilled, (state, action) => {
      state.statusById[action.meta.arg] = 'fulfilled'
      state.dataById[action.meta.arg] = action.payload
    })
    builder.addCase(fetchCartUserById.rejected, (state, action) => {
      state.statusById[action.meta.arg] = 'rejected'
    })
  },
})

export const selectStatusById = (state: RootState, id: number) =>
  state.cart.statusById[id]
export const selectDataById = (state: RootState, id: number) =>
  state.cart.dataById[id]
