import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IAllProducts } from '../interface/ApiInterface'

export const productApi = createApi({
  reducerPath: 'productApi',
  tagTypes: ['product'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (build) => ({
    getProducts: build.query<IAllProducts[],number>({
      query: () => ({
        url: 'products',
      }),
      providesTags: [{ type: 'product' }],
    }),
    //   getIdProduct: build.query({
    //     query: ({ id }) => ({
    //       url: `ads/${id}`,
    //       method: 'GET',
    //     }),
    //     providesTags: [{ type: 'product' }],
    //   }),
  }),
})

export const { useGetProductsQuery } = productApi
