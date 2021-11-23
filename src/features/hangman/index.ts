export { default } from './Hangman'
export {
  default as hangmanReducer,
  setKeyboardLetter,
  getPuzzle,
  postScore,
  selectHangmanPuzzle,
  selectHangmanPuzzleShow,
  selectHangmanPuzzleAuthor,
  selectHangmanFetchingStatus,
  selectHangmanActiveKeyboardLetter,
  selectHangmanKeyboardLetters,
  selectHangmanMisses,
  selectHangmanGameStatus,
} from './hangmanSlice'
