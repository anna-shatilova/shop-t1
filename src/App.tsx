import { useSelector } from 'react-redux'
import AppRoutes from './AppRoutes'
import { RootState, useAppDispatch } from './store/store'
import { useEffect } from 'react'
import { fetchCartUserById } from './services/cartSlice'
// import { useGetCurrentUserQuery } from './services/productApi'
// import { setAuth } from './services/authSlice'

function App() {
  const dispatch = useAppDispatch()
  // const { data: currentUser } = useGetCurrentUserQuery('')

  // useEffect(() => {
  //   if (currentUser) {
  //     dispatch(
  //       setAuth({
  //         id: currentUser?.id,
  //         firstName: currentUser?.firstName,
  //         lastName: currentUser?.lastName,
  //         isAuth: true,
  //       }),
  //     )
  //   }
  // }, [currentUser, dispatch])

  const user = useSelector((state: RootState) => state.auth.isAuth)
  const userId = useSelector((state: RootState) => state.auth.id)

  useEffect(() => {
    if (userId) {
      dispatch(fetchCartUserById(userId))
    }
  }, [dispatch, userId])

  return <AppRoutes user={user} />
}

export default App
