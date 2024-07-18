import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'
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
interface ICurrentUser {
  id: number
  firstName: string
  lastName: string
}

const baseQueryWithAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('access_token')
      console.log('Использую токен из стора', { token })
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  })

  const result = await baseQuery(args, api, extraOptions)
  // console.log('Результат первого запроса', { result })

  const forceLogout = () => {
    // console.log('Принудительная авторизация!')
    localStorage.removeItem('access_token')
    window.location.replace('/login')
  }

  if (result?.error?.status !== 403 && result?.error?.status !== 401) {
    return result as any
  }
  if (result?.error?.status === 403 || result?.error?.status === 401) {
    return forceLogout() as void
  }
}

export const productApi = createApi({
  reducerPath: 'productApi',
  tagTypes: ['product'],
  baseQuery: baseQueryWithAuth,
  // fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (build) => ({
    getProducts: build.query<IDataProducts, IPaginAndSearch>({
      query: ({ limit, search }) => ({
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
    getCurrentUser: build.query<ICurrentUser, string>({
      query: () => ({
        url: 'auth/me',
      }),
    }),
  }),
})

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetCurrentUserQuery,
} = productApi
