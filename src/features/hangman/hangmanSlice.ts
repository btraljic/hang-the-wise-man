import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { GameStatus, Hangman, RootState } from '../../app/types'

const getPuzzleShow = (puzzle: string[]): string[] => {
  return puzzle.map((letter) => (letter < 'A' || letter > 'Z' ? letter : '_'))
}

const getPuzzleUniqueCharacters = (puzzle: string[]): number => {
  return Array.from(
    new Set(puzzle.filter((letter) => letter >= 'A' && letter <= 'Z'))
  ).length
}

const getKeyboardLetters = (): boolean[] => {
  const keyboardLetters: boolean[] = []
  for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
    keyboardLetters[i] = true
  }
  return keyboardLetters
}

export const getPuzzle = createAsyncThunk<{
  _id: string
  content: string
  author: string
}>('hangman/getPuzzle', async () => {
  const response = await axios.get('https://api.quotable.io/random')
  return response.data
})

const slice = createSlice({
  name: 'hangman',

  initialState: {
    puzzle: [],
    puzzleShow: [],
    puzzleId: '',
    puzzleAuthor: '',
    puzzleLength: 0,
    puzzleUniqueCharacters: 0,
    puzzleLoadingStatus: 'success',
    activeKeyboardLetter: '',
    keyboardLetters: [],
    misses: 0,
    gameStatus: GameStatus.Start,
    gameDuration: 0,
  } as Hangman,

  reducers: {
    setKeyboardLetter: (state, { payload: letter }: PayloadAction<string>) => {
      let isMissed = true

      state.puzzle.forEach((item, index) => {
        if (item === letter) {
          state.activeKeyboardLetter = letter
          state.puzzleShow[index] = letter
          isMissed = false
        }
      })
      if (isMissed) {
        state.activeKeyboardLetter = ''
        state.misses++
      }
      state.keyboardLetters[letter.charCodeAt(0)] = false

      if (
        JSON.stringify(state.puzzle) === JSON.stringify(state.puzzleShow) ||
        state.misses > 5
      ) {
        state.gameDuration = Date.now() - state.gameDuration
        state.gameStatus = state.misses > 5 ? GameStatus.Lose : GameStatus.Win
      }
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
        state.puzzleId = payload._id
        state.puzzleAuthor = payload.author
        state.puzzleLength = state.puzzle.length
        state.puzzleUniqueCharacters = getPuzzleUniqueCharacters(state.puzzle)
        state.puzzleLoadingStatus = 'success'
        state.activeKeyboardLetter = ''
        state.keyboardLetters = getKeyboardLetters()
        state.misses = 0
        state.gameStatus = GameStatus.Playing
        state.gameDuration = Date.now()
      })
      .addCase(getPuzzle.rejected, (state) => {
        state.puzzle = []
        state.puzzleShow = []
        state.puzzleId = ''
        state.puzzleAuthor = ''
        state.puzzleLength = 0
        state.puzzleUniqueCharacters = 0
        state.puzzleLoadingStatus = 'failed'
        state.activeKeyboardLetter = ''
        state.keyboardLetters = []
        state.misses = 0
        state.gameDuration = 0
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
export const selectHangmanActiveKeyboardLetter = (state: RootState) =>
  state.hangman.activeKeyboardLetter
export const selectHangmanKeyboardLetters = (state: RootState) =>
  state.hangman.keyboardLetters
export const selectHangmanMisses = (state: RootState) => state.hangman.misses
export const selectHangmanGameStatus = (state: RootState) =>
  state.hangman.gameStatus

export default slice.reducer
