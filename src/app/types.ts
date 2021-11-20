export type { RootState } from './store'
export type { AppDispatch } from './store'

export type User = {
  name: string
}

export type Hangman = {
  puzzle: string
  puzzleAuthor: string
  puzzleStatus: string
}
