import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { Hangman, RootState } from '../../app/types'

const getPuzzleShow = (puzzle: string) => {}

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
    puzzleShow: '',
    puzzleAuthor: '',
    puzzleLoadingStatus: 'success',
  } as Hangman,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPuzzle.pending, (state) => {
        state.puzzleLoadingStatus = 'loading'
      })
      .addCase(getPuzzle.fulfilled, (state, { payload }) => {
        console.log(payload)
        state.puzzle = payload.content
        state.puzzleShow = ''
        state.puzzleAuthor = payload.author
        state.puzzleLoadingStatus = 'success'
      })
      .addCase(getPuzzle.rejected, (state) => {
        state.puzzle = ''
        state.puzzleShow = ''
        state.puzzleAuthor = ''
        state.puzzleLoadingStatus = 'failed'
      })
  },
})

// export const {} = slice.actions
export const selectHangmanPuzzle = (state: RootState) => state.hangman.puzzle
export const selectHangmanPuzzleShow = (state: RootState) =>
  state.hangman.puzzleShow
export const selectHangmanPuzzleAuthor = (state: RootState) =>
  state.hangman.puzzleAuthor
export const selectHangmanPuzzleLoadingStatus = (state: RootState) =>
  state.hangman.puzzleLoadingStatus

export default slice.reducer
