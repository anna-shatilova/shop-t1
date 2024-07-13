export interface IAllProducts {
  title: string
  description: string
  price: number
  id: number
  thumbnail: string
  discountPercentage: number
  warrantyInformation: string
  shippingInformation: string
  stock: number
  tags: string[]
  rating: number
  images: string[]
}
 
export interface ICartProducts {
  id: number
  title: string
  price: number
  discountPercentage: number
  thumbnail: string
  quantity: number
}

// export interface CartUserById {
//   carts: ICart[]
// }

// interface ICart {
//   id: number
//   products: ICartProducts[]
//   userId: number
//   total: number
//   discountedTotal: number
//   totalProducts: number
//   totalQuantity: number
// }

