import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IAllProducts } from '../interface/ApiInterface'

interface IPaginAndSearch {
  search: string
  limit: number
}
interface IDataProducts {
  products: IAllProducts[]
  total: number
  limit: number
}


export const productApi = createApi({
  reducerPath: 'productApi',
  tagTypes: ['product'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (build) => ({
    getProducts: build.query<IDataProducts, IPaginAndSearch>({
      query: ({limit, search}) => ({
        url: `products/search?q=${search}&limit=${limit}`,
      }),
      providesTags: [{ type: 'product' }],
    }),

     getProductById: build.query<IAllProducts, number>({
        query: (id) => ({
          url: `products/${id}`,
        }),
        providesTags: [{ type: 'product' }],
      }),
  }),
})

export const { useGetProductsQuery, useGetProductByIdQuery} = productApi
