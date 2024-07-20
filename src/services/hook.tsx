// import { useEffect } from 'react'
// import { useSelector } from 'react-redux'
// import {
//   fetchCartUserById,
//   selectDataById,
//   selectStatusById,
// } from './cartSlice'
// import { RootState, useAppDispatch } from '../store/store'

// export function useGetCartUserByIdQuery(id: number | undefined) {
//   const dispatch = useAppDispatch()
//   const status = useSelector((state: RootState) => selectStatusById(state))
//   const data = useSelector((state: RootState) => selectDataById(state))

//   useEffect(() => {
//     if (!id) {
//       return
//     }
//     if (status === undefined) {
//       dispatch(fetchCartUserById(id))
//     }
//   }, [status, id, dispatch])

//   const isUninitialized = status === undefined
//   const isLoading = status === 'pending' || status === undefined
//   const isError = status === 'rejected'
//   const isSuccess = status === 'fulfilled'

//   return { data, isUninitialized, isLoading, isError, isSuccess }
// }
