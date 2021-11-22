import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import Spinner from '../common/spinner'

import {
  selectHangmanPuzzle,
  selectHangmanPuzzleShow,
  selectHangmanPuzzleAuthor,
  selectHangmanActiveKeyboardLetter,
  selectHangmanIsFinished,
} from '.'
import styles from './HangmanPuzzle.module.css'
import { selectHangmanPuzzleLoadingStatus } from './hangmanSlice'

function HangmanPuzzle() {
  const hangmanPuzzle = useSelector(selectHangmanPuzzle)
  const hangmanPuzzleShow = useSelector(selectHangmanPuzzleShow)
  const hangmanPuzzleAuthor = useSelector(selectHangmanPuzzleAuthor)
  const hangmanPuzzleLoadingStatus = useSelector(
    selectHangmanPuzzleLoadingStatus
  )
  const hangmanActiveKeyboardLetter = useSelector(
    selectHangmanActiveKeyboardLetter
  )
  const hangmanIsFinished = useSelector(selectHangmanIsFinished)

  const showPuzzle = useCallback(() => {
    const puzzleShow: JSX.Element[] = []
    let word: JSX.Element[] = []

    if (hangmanPuzzleShow.length) {
      hangmanPuzzleShow.forEach((letter, index) => {
        word.push(
          <span
            key={index}
            className={
              hangmanActiveKeyboardLetter &&
              hangmanActiveKeyboardLetter === letter
                ? styles.letterPulse
                : hangmanIsFinished && letter === '_'
                ? styles.letterMissed
                : styles.letter
            }
          >
            {hangmanIsFinished && letter === '_'
              ? hangmanPuzzle[index]
              : letter}
          </span>
        )

        if (letter === ' ' || index === hangmanPuzzleShow.length - 1) {
          puzzleShow.push(
            <span key={index} className={styles.word}>
              {word}
            </span>
          )
          word = []
        }
      })
    }

    return puzzleShow
  }, [
    hangmanPuzzle,
    hangmanPuzzleShow,
    hangmanActiveKeyboardLetter,
    hangmanIsFinished,
  ])

  return (
    <div>
      <Spinner loading={hangmanPuzzleLoadingStatus === 'loading'} />
      <div className={styles.text}>
        <em>
          {hangmanPuzzleAuthor}
          {hangmanPuzzleAuthor && ':'}
        </em>
        <br />
        {showPuzzle()}
      </div>
    </div>
  )
}

export default HangmanPuzzle
