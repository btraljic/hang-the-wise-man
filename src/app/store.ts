import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from '../features/user'
import { hangmanReducer } from '../features/hangman'

export const store = configureStore({
  reducer: {
    user: userReducer,
    hangman: hangmanReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
