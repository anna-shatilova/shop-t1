// import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// function getAuthFromLocalStorage(): { token: string } | null {
//     const token = localStorage.getItem('access_token');
//     return token ? JSON.parse(token) : null;
//   }
// interface IUserSlice {
//     id: number,
//     firstName: string,
//     lastName: string,
//   }
  
//   const initialState: IUserSlice = {
//       id: 0,
//       firstName: '',
//       lastName: '',
//       token: getAuthFromLocalStorage | null
//   }
  
//   const currentUserSlice = createSlice({
//     name: 'currentUser',
//     initialState: initialState,
  
//     reducers: {
//       setCurrentUser(state, action: PayloadAction<IUserSlice>) {
//         const payload = action.payload ?? initialState
//         state. = payload
//       },
//     },
//   })
  
//   export const { choiseUser } = profileSlice.actions

// const initialState: Current= {
//   access_token: '',
//   id: 
// }

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: getAuthFromLocalStorage() ?? initialState,
//   reducers: {
//     setAuth(state, action) {
//       const payload = action.payload ?? initialState

//       state.access_token = payload.access_token
//       state.refresh_token = payload.refresh_token
//       state.isAuth = payload.isAuth

//       localStorage.setItem(AUTH_KEY, JSON.stringify(state))
//     },
//   },
// })
// export const { setAuth } = authSlice.actions
// export const authReducer = authSlice.reducer
