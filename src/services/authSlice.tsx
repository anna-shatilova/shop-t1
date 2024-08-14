import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IUserSlice {
  id: number |undefined
  firstName: string | undefined
  lastName: string | undefined
  isAuth: boolean 
}

const initialState: IUserSlice = {
  id: 0,
  firstName: '',
  lastName: '',
  isAuth: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,

  reducers: {
    setAuth(state, action: PayloadAction<IUserSlice>) {
      const payload = action.payload ?? initialState
      state.id = payload.id
      state.firstName = payload.firstName
      state.lastName = payload.lastName
      state.isAuth = payload.isAuth
    },
  },
})

export const { setAuth } = authSlice.actions
export const authReducer = authSlice.reducer
