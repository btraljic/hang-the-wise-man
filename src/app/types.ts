export type { RootState } from './store'
export type { AppDispatch } from './store'

export type User = {
  name: string
}

export type Hangman = {
  puzzle: string[]
  puzzleShow: string[]
  puzzleAuthor: string
  puzzleLoadingStatus: string
  keyboardLetters: boolean[]
  missed: number
}
