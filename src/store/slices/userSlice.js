import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: null,
    password: null,
    token: null,
  },
  reducers: {
    createUser: (state, action) => {
      for (let key in action.payload) {
        state[key] = action.payload[key]
      }
    },
    removeUser: (state) => {
      for (let key in state) {
        state[key] = null
      }
    },
  },
})

export const userReducer = userSlice.reducer

export const { createUser, removeUser } = userSlice.actions
