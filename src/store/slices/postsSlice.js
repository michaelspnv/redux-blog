import { createSlice, combineReducers } from "@reduxjs/toolkit"

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

const postsReducer = postsSlice.reducer

export const rootReducer = combineReducers({
  posts: postsReducer,
})

export const { createPost, deletePost } = postsSlice.actions
