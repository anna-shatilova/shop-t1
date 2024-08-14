import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ICartProducts } from '../interface/ApiInterface'

export interface ICartState {
  id: number
  products: ICartProducts[]
  userId: number
  total: number
  discountedTotal: number
  totalProducts: number
  totalQuantity: number
}
type RequestState = 'pending' | 'fulfilled' | 'rejected'

export const fetchCartUserById = createAsyncThunk<
  ICartState,
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
  return data.carts[0]
})
interface IUpdateCartUserProps {
  idCart: number
  idProduct: number
  quantityProduct: number
  cartUser: ICartState
}

export const updateCartUser = createAsyncThunk<
  ICartState,
  IUpdateCartUserProps
>(
  'cart/updateCartUser',
  async (
    { idCart, idProduct, quantityProduct, cartUser },
    { rejectWithValue },
  ) => {
    const productsMap = cartUser.products.map((product) => {
      if (product.id === idProduct) {
        return {
          id: product.id,
          quantity: quantityProduct,
        }
      }

      return {
        id: product.id,
        quantity: product.quantity,
      }
    })
    const isProductInCart = cartUser.products.some(
      (product) => product.id === idProduct,
    )
    if (!isProductInCart) {
      productsMap.push({ id: idProduct, quantity: quantityProduct })
    }

    const response = await fetch(`https://dummyjson.com/carts/${idCart}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        merge: false,
        products: productsMap,
      }),
    })
    const data = await response.json()

    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(data)
    }
    return data
  },
)

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    dataById: {} as ICartState,
    statusById: {} as RequestState,
  },
  reducers: {
    increment: (state) => {
      state.dataById.totalQuantity += 1
    },
    decrement: (state) => {
      state.dataById.totalQuantity -= 1
    },
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
    builder.addCase(updateCartUser.pending, (state) => {
      state.statusById = 'pending'
    })
    builder.addCase(updateCartUser.fulfilled, (state, action) => {
      state.statusById = 'fulfilled'
      state.dataById = action.payload
    })
    builder.addCase(updateCartUser.rejected, (state) => {
      state.statusById = 'rejected'
    })
  },
})

export const { increment, decrement } = cartSlice.actions
export const cartsReducer = cartSlice.reducer

