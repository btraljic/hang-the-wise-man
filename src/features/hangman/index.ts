export { default } from './Hangman'
export {
  default as hangmanReducer,
  setKeyboardLetter,
  getPuzzle,
  postScore,
  getScores,
  selectHangmanPuzzle,
  selectHangmanPuzzleShow,
  selectHangmanPuzzleAuthor,
  selectHangmanFetchingStatus,
  selectHangmanActiveKeyboardLetter,
  selectHangmanKeyboardLetters,
  selectHangmanMisses,
  selectHangmanGameStatus,
  selectHangmanScores,
} from './hangmanSlice'
