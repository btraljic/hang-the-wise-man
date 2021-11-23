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

export const getPuzzle = createAsyncThunk(
  'hangman/getPuzzle',
  async ({ userName }: { userName: string }) => {
    const response = await axios.get('https://api.quotable.io/random')
    return { ...response.data, userName }
  }
)

export const postScore = createAsyncThunk(
  'hangman/postScore',
  async (_, { getState }) => {
    console.log('getState', (getState() as RootState).hangman.score)
    const response = await axios.post(
      'https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscoress',
      JSON.stringify('aaa'),
      {
        headers: { 'content-type': 'application/json' },
      }
    )
    return response.data
  }
)

const slice = createSlice({
  name: 'hangman',

  initialState: {
    puzzle: [],
    puzzleShow: [],
    puzzleAuthor: '',
    fetchingStatus: 'success',
    activeKeyboardLetter: '',
    keyboardLetters: [],
    gameStatus: GameStatus.Start,
    score: {
      quoteId: '',
      length: 0,
      uniqueCharacters: 0,
      userName: 'user',
      errors: 0,
      duration: 0,
    },
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
        state.score.errors++
      }
      state.keyboardLetters[letter.charCodeAt(0)] = false

      if (
        JSON.stringify(state.puzzle) === JSON.stringify(state.puzzleShow) ||
        state.score.errors > 5
      ) {
        state.score.duration = Date.now() - state.score.duration
        state.gameStatus =
          state.score.errors > 5 ? GameStatus.Lose : GameStatus.Win
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getPuzzle.pending, (state) => {
        state.fetchingStatus = 'loading'
      })
      .addCase(getPuzzle.fulfilled, (state, { payload }) => {
        console.log('payload', payload)
        state.puzzle = payload.content.toUpperCase().split('')
        state.puzzleShow = getPuzzleShow(state.puzzle)
        state.puzzleAuthor = payload.author
        state.fetchingStatus = 'success'
        state.activeKeyboardLetter = ''
        state.keyboardLetters = getKeyboardLetters()
        state.gameStatus = GameStatus.Playing
        state.score = {
          quoteId: payload._id,
          length: state.puzzle.length,
          uniqueCharacters: getPuzzleUniqueCharacters(state.puzzle),
          userName: payload.userName,
          errors: 0,
          duration: Date.now(),
        }
      })
      .addCase(getPuzzle.rejected, (state) => {
        state.puzzle = []
        state.puzzleShow = []
        state.puzzleAuthor = ''
        state.fetchingStatus = 'failed'
        state.activeKeyboardLetter = ''
        state.keyboardLetters = []
        state.score = {
          quoteId: '',
          length: 0,
          uniqueCharacters: 0,
          userName: 'user',
          errors: 0,
          duration: 0,
        }
      })
      .addCase(postScore.pending, (state) => {
        state.fetchingStatus = 'loading'
      })
      .addCase(postScore.fulfilled, (state, { payload }) => {
        state.fetchingStatus = 'success'
      })
      .addCase(postScore.rejected, (state) => {
        state.fetchingStatus = 'failed'
      })
  },
})

export const { setKeyboardLetter } = slice.actions

export const selectHangmanPuzzle = (state: RootState) => state.hangman.puzzle
export const selectHangmanPuzzleShow = (state: RootState) =>
  state.hangman.puzzleShow
export const selectHangmanPuzzleAuthor = (state: RootState) =>
  state.hangman.puzzleAuthor
export const selectHangmanFetchingStatus = (state: RootState) =>
  state.hangman.fetchingStatus
export const selectHangmanActiveKeyboardLetter = (state: RootState) =>
  state.hangman.activeKeyboardLetter
export const selectHangmanKeyboardLetters = (state: RootState) =>
  state.hangman.keyboardLetters
export const selectHangmanMisses = (state: RootState) =>
  state.hangman.score.errors
export const selectHangmanGameStatus = (state: RootState) =>
  state.hangman.gameStatus

export default slice.reducer
