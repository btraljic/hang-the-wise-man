import HangmanSVG from './HangmanSVG'
import HangmanPuzzle from './HangmanPuzzle'
import HangmanKeyboard from './HangmanKeyboard'
import HangmanFinished from './HangmanFinished'

function Hangman() {
  return (
    <>
      <HangmanFinished />
      <HangmanSVG />
      <HangmanPuzzle />
      <HangmanKeyboard />
    </>
  )
}

export default Hangman
