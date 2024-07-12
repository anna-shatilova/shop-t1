import { ICartProducts } from "../interface/ApiInterface"

export type CartUserById = {
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
