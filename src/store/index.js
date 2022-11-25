import { configureStore, combineReducers } from "@reduxjs/toolkit"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"
import { postsReducer } from "./slices/postsSlice"
import { userReducer } from "./slices/userSlice"
import { menuReducer } from "./slices/menuSlice"

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["menu"],
}

const rootReducer = combineReducers({
  posts: postsReducer,
  user: userReducer,
  menu: menuReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

export default store
