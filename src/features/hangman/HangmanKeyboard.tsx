import { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Draggable from 'react-draggable'

import styles from './HangmanKeyboard.module.css'
import { selectUser } from '../user'
import {
  getPuzzle,
  selectHangmanGameStatus,
  selectHangmanKeyboardLetters,
  setKeyboardLetter,
} from '.'
import { GameStatus } from '../../app/types'

const keyboardRows = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
]

function useKeyboardLetters(
  hangmanKeyboardLetters: boolean[],
  hangmanGameStatus: GameStatus
): JSX.Element[] {
  const dispatch = useDispatch()
  const [keyboardLetters, setKeyboardLetters] = useState([] as JSX.Element[])

  const handkeKeyClick = useCallback(
    (letter: string) =>
      hangmanKeyboardLetters[letter.charCodeAt(0)] &&
      hangmanGameStatus === GameStatus.Playing
        ? dispatch(setKeyboardLetter(letter))
        : null,
    [dispatch, hangmanGameStatus, hangmanKeyboardLetters]
  )

  useEffect(() => {
    const arr: JSX.Element[] = []
    keyboardRows.forEach((row, rowIndex) => {
      arr.push(
        <div key={rowIndex} className={styles.keyboardRow}>
          {row.map((letter, letterIndex) => (
            <span
              key={`${rowIndex}-${letterIndex}`}
              className={
                hangmanKeyboardLetters[letter.charCodeAt(0)]
                  ? styles.key
                  : styles.keyDisabled
              }
              onClick={() => handkeKeyClick(letter)}
            >
              {letter}
            </span>
          ))}
        </div>
      )
      setKeyboardLetters(arr)
    })
  }, [handkeKeyClick, hangmanKeyboardLetters])

  return keyboardLetters
}

function HangmanKeyboard() {
  const [isMinimize, setIsMinimize] = useState(false)
  const nodeRef = useRef(null)
  const dispatch = useDispatch()
  const userName = useSelector(selectUser)
  const hangmanKeyboardLetters = useSelector(selectHangmanKeyboardLetters)
  const hangmanGameStatus = useSelector(selectHangmanGameStatus)
  const keyboardLetters = useKeyboardLetters(
    hangmanKeyboardLetters,
    hangmanGameStatus
  )

  const handleMinimize = () => setIsMinimize((prev) => !prev)

  return (
    <Draggable
      handle='.moveMe'
      defaultPosition={{ x: -175, y: 0 }}
      bounds='#root'
      nodeRef={nodeRef}
    >
      <div
        className={`${styles.keyboard} ${
          hangmanGameStatus === GameStatus.Lose && styles.lose
        }  ${hangmanGameStatus === GameStatus.Win && styles.win}`}
        ref={nodeRef}
      >
        <div className={`moveMe ${styles.moveBar}`}>MOVE ME</div>
        <span className={styles.minimize} onClick={handleMinimize}>
          {isMinimize ? '▼' : '▲'}
        </span>
        {!isMinimize && (
          <>
            {keyboardLetters}
            <div className={styles.keyboardRow}>
              <span
                className={`${styles.key} ${styles.reset}`}
                onClick={() => dispatch(getPuzzle({ userName }))}
              >
                START A NEW GAME
              </span>
            </div>
          </>
        )}
      </div>
    </Draggable>
  )
}

export default HangmanKeyboard
