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
  activeKeyboardLetter: string
  keyboardLetters: boolean[]
  misses: number
}
