import { createSlice } from "@reduxjs/toolkit"

export const menuSlice = createSlice({
  name: "menu",
  initialState: {},
  reducers: {
    initExactMenu: (state, action) => {
      const isOpen = action.payload.isOpen
      state[action.payload.name] = { isOpen }
    },
    toggleStateOfExactMenu: (state, action) => {
      const newState = !state[action.payload.name].isOpen
      state[action.payload.name].isOpen = newState
    },
  },
})

export const menuReducer = menuSlice.reducer

export const { initExactMenu, toggleStateOfExactMenu } = menuSlice.actions
