import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  fetchCartUserById,
  selectDataById,
  selectStatusById,
} from './cartSlice'
import { RootState, useAppDispatch } from '../store/store'

export function useGetCartUserByIdQuery(id: number) {
  const dispatch = useAppDispatch()
  const status = useSelector((state: RootState) => selectStatusById(state, id))
  const data = useSelector((state: RootState) => selectDataById(state, id))
  useEffect(() => {
    if (status === undefined) {
      dispatch(fetchCartUserById(id))
    }
  }, [status, id, dispatch])

  const isUninitialized = status === undefined
  const isLoading = status === 'pending' || status === undefined
  const isError = status === 'rejected'
  const isSuccess = status === 'fulfilled'

  return { data, isUninitialized, isLoading, isError, isSuccess }
}
