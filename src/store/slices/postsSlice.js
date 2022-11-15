import { createSlice } from "@reduxjs/toolkit"

export const postsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    createPost: (state, action) => {
      state.push(action.payload)
    },
    deletePost: (state, action) => {
      return state.filter((post) => post.id !== action.payload.id)
    },
  },
})

export const postsReducer = postsSlice.reducer

export const { createPost, deletePost } = postsSlice.actions
