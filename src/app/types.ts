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

export type Hangman = {
  puzzle: string[]
  puzzleShow: string[]
  puzzleId: string
  puzzleAuthor: string
  puzzleLength: number
  puzzleUniqueCharacters: number
  puzzleLoadingStatus: string
  activeKeyboardLetter: string
  keyboardLetters: boolean[]
  misses: number
  gameStatus: GameStatus
  gameDuration: number
}
