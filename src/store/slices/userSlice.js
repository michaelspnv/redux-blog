import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: "user",
  initialState: {
    info: {
      email: null,
      password: null,
      token: null,
    },
    errors: {
      emailError: null,
      passwordError: null,
      requestError: null,
      otherError: null,
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
          state.errors.passwordError = "Wrong password!"
          break
        case "auth/user-not-found":
          state.errors.emailError = "E-Mail not found."
          break
        case "auth/too-many-requests":
          state.errors.requestError = "Too many requests! Try later."
          break
        case "auth/email-already-in-use":
          state.errors.emailError = "E-Mail is already used."
          break
        default:
          state.errors.otherError =
            "Something went wrong. Try again or return later."
      }
    },
    clearError: (state) => {
      for (let key in state.errors) {
        state.errors[key] = null
      }
    },
  },
})

export const userReducer = userSlice.reducer

export const { createUser, removeUser, handleError, clearError } =
  userSlice.actions
