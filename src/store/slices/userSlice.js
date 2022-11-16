import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: "user",
  initialState: {
    info: {
      email: null,
      password: null,
      token: null,
    },
    error: {
      emailError: null,
      passwordError: null,
      requestError: null,
    },
  },
  reducers: {
    createUser: (state, action) => {
      for (let key in action.payload) {
        state.info[key] = action.payload[key]
      }
    },
    removeUser: (state) => {
      for (let key in state.info) {
        state.info[key] = null
      }
    },
    handleError: (state, action) => {
      switch (action.payload.errorCode) {
        case "auth/wrong-password":
          state.error.passwordError = "Wrong password!"
          break
        case "auth/user-not-found":
          state.error.emailError = "E-Mail not found."
          break
        default:
          state.error.requestError = "Too many requests! Try later."
      }
    },
    clearError: (state) => {
      for (let key in state.error) {
        state.error[key] = null
      }
    },
  },
})

export const userReducer = userSlice.reducer

export const { createUser, removeUser, handleError, clearError } =
  userSlice.actions
