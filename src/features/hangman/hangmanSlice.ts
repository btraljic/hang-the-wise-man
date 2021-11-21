import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { Hangman, RootState } from '../../app/types'

const getPuzzleShow = (puzzle: string[]): string[] => {
  return puzzle.map((letter) => (letter < 'A' || letter > 'Z' ? letter : '_'))
}

const getKeyboardLetters = (): boolean[] => {
  const keyboardLetters: boolean[] = []
  for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
    keyboardLetters[i] = true
  }
  return keyboardLetters
}

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
    puzzle: [],
    puzzleShow: [],
    puzzleAuthor: '',
    puzzleLoadingStatus: 'success',
    keyboardLetters: [],
    missed: 0,
  } as Hangman,

  reducers: {
    setKeyboardLetter: (state, { payload: letter }: PayloadAction<string>) => {
      state.keyboardLetters[letter.charCodeAt(0)] = false
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getPuzzle.pending, (state) => {
        state.puzzleLoadingStatus = 'loading'
      })
      .addCase(getPuzzle.fulfilled, (state, { payload }) => {
        console.log(payload)
        state.puzzle = payload.content.toUpperCase().split('')
        state.puzzleShow = getPuzzleShow(state.puzzle)
        state.puzzleAuthor = payload.author
        state.puzzleLoadingStatus = 'success'
        state.keyboardLetters = getKeyboardLetters()
      })
      .addCase(getPuzzle.rejected, (state) => {
        state.puzzle = []
        state.puzzleShow = []
        state.puzzleAuthor = ''
        state.puzzleLoadingStatus = 'failed'
        state.keyboardLetters = []
        state.missed = 0
      })
  },
})

export const { setKeyboardLetter } = slice.actions

export const selectHangmanPuzzle = (state: RootState) => state.hangman.puzzle
export const selectHangmanPuzzleShow = (state: RootState) =>
  state.hangman.puzzleShow
export const selectHangmanPuzzleAuthor = (state: RootState) =>
  state.hangman.puzzleAuthor
export const selectHangmanPuzzleLoadingStatus = (state: RootState) =>
  state.hangman.puzzleLoadingStatus
export const selectKeyboardLetters = (state: RootState) =>
  state.hangman.keyboardLetters

export default slice.reducer
