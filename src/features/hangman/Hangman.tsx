import HangmanSVG from './HangmanSVG'
import HangmanPuzzle from './HangmanPuzzle'
import HangmanKeyboard from './HangmanKeyboard'
import HangmanFinished from './HangmanFinished'
import HangmanScores from './HangmanScores'

function Hangman() {
  return (
    <>
      <HangmanFinished />
      <HangmanSVG />
      <HangmanPuzzle />
      <HangmanScores />
      <HangmanKeyboard />
    </>
  )
}

export default Hangman
