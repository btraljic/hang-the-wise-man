export type { RootState } from './store'
export type { AppDispatch } from './store'

export type User = {
  name: string
}

export enum GameStatus {
  Start = 'START',
  Playing = 'PLAY',
  Win = 'WIN',
  Lose = 'LOSE',
}

export type Score = {
  quoteId: string
  length: number
  uniqueCharacters: number
  userName: string
  errors: number
  duration: number
}

export type Hangman = {
  puzzle: string[]
  puzzleShow: string[]
  puzzleAuthor: string
  fetchingStatus: string
  activeKeyboardLetter: string
  keyboardLetters: boolean[]
  gameStatus: GameStatus
  score: Score
}
