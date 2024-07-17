import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUserLogin } from '../interface/ApiInterface'

interface IToken {
  token: string
}
// interface ICurrentUser {
//   id: number
//   firstName: string
//   lastName: string
// }

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/',
  }),
  endpoints: (build) => ({
    getToken: build.mutation<IToken, IUserLogin>({
      query: (body) => ({
        headers: {
          'content-type': 'application/json',
        },
        url: 'auth/login',
        method: 'POST',
        body: JSON.stringify({
          username: body.login,
          password: body.password,
        }),
      }),
    }),
    // getCurrentUser: build.query<ICurrentUser, IToken>({
    //   query: (token) => ({
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //     url: 'auth/me',
    //     method: 'GET',
    //   }),
    // }),
  }),
})

export const { useGetTokenMutation } = userApi
