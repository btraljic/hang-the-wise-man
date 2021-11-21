import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import Spinner from '../common/spinner'

import { selectHangmanPuzzleShow, selectHangmanPuzzleAuthor } from '.'
import styles from './HangmanPuzzle.module.css'
import { selectHangmanPuzzleLoadingStatus } from './hangmanSlice'

function HangmanPuzzle() {
  const hangmanPuzzleShow = useSelector(selectHangmanPuzzleShow)
  const hangmanPuzzleAuthor = useSelector(selectHangmanPuzzleAuthor)
  const hangmanPuzzleLoadingStatus = useSelector(
    selectHangmanPuzzleLoadingStatus
  )

  const showPuzzle = useCallback(() => {
    const puzzleShow: JSX.Element[] = []
    let word: JSX.Element[] = []

    if (hangmanPuzzleShow.length) {
      hangmanPuzzleShow.forEach((letter, index) => {
        word.push(
          <span key={index} className={styles.letter}>
            {letter}
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

    console.log(puzzleShow)
    return puzzleShow
  }, [hangmanPuzzleShow])

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