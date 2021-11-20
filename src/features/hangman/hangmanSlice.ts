import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { Hangman, RootState } from '../../app/types'

export const getPuzzle = createAsyncThunk<{ content: string; author: string }>(
  'hangman/getPuzzle',
  async () => {
    const response = await axios.get('https://api.quotable.io/random')
    return response.data
  }
)

const slice = createSlice({
  name: 'hangman',
  initialState: {
    puzzle: '',
    puzzleAuthor: '',
    puzzleStatus: 'success',
  } as Hangman,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPuzzle.pending, (state) => {
        state.puzzleStatus = 'loading'
      })
      .addCase(getPuzzle.fulfilled, (state, { payload }) => {
        console.log(payload)
        state.puzzle = payload.content
        state.puzzleAuthor = payload.author
        state.puzzleStatus = 'success'
      })
      .addCase(getPuzzle.rejected, (state) => {
        state.puzzle = ''
        state.puzzleAuthor = ''
        state.puzzleStatus = 'failed'
      })
  },
})

// export const {} = slice.actions
export const selectHangmanPuzzle = (state: RootState) => state.hangman.puzzle
export const selectHangmanPuzzleAuthor = (state: RootState) =>
  state.hangman.puzzleAuthor

export default slice.reducer
