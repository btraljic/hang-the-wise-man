import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Draggable from 'react-draggable'

import styles from './HangmanKeyboard.module.css'
import { getPuzzle, selectHangmanKeyboardLetters, setKeyboardLetter } from '.'

function HangmanKeyboard() {
  const nodeRef = useRef(null)
  const dispatch = useDispatch()
  const hangmanKeyboardLetters = useSelector(selectHangmanKeyboardLetters)

  const handkeKeyClick = (letter: string) =>
    hangmanKeyboardLetters[letter.charCodeAt(0)]
      ? dispatch(setKeyboardLetter(letter))
      : null

  return (
    <Draggable
      handle='.moveMe'
      defaultPosition={{ x: -175, y: 0 }}
      bounds='#root'
      nodeRef={nodeRef}
    >
      <div className={styles.keyboard} ref={nodeRef}>
        <div className={`moveMe ${styles.moveBar}`}>MOVE ME</div>
        <div className={styles.keyboardRow}>
          <span
            className={
              hangmanKeyboardLetters['Q'.charCodeAt(0)]
                ? styles.key
                : styles.keyDisabled
            }
            onClick={() => handkeKeyClick('Q')}
          >
            Q
          </span>
          <span
            className={
              hangmanKeyboardLetters['W'.charCodeAt(0)]
                ? styles.key
                : styles.keyDisabled
            }
            onClick={() => handkeKeyClick('W')}
          >
            W
          </span>
          <span
            className={
              hangmanKeyboardLetters['E'.charCodeAt(0)]
                ? styles.key
                : styles.keyDisabled
            }
            onClick={() => handkeKeyClick('E')}
          >
            E
          </span>
          <span
            className={
              hangmanKeyboardLetters['R'.charCodeAt(0)]
                ? styles.key
                : styles.keyDisabled
            }
            onClick={() => handkeKeyClick('R')}
          >
            R
          </span>
          <span
            className={
              hangmanKeyboardLetters['T'.charCodeAt(0)]
                ? styles.key
                : styles.keyDisabled
            }
            onClick={() => handkeKeyClick('T')}
          >
            T
          </span>
          <span
            className={
              hangmanKeyboardLetters['Y'.charCodeAt(0)]
                ? styles.key
                : styles.keyDisabled
            }
            onClick={() => handkeKeyClick('Y')}
          >
            Y
          </span>
          <span
            className={
              hangmanKeyboardLetters['U'.charCodeAt(0)]
                ? styles.key
                : styles.keyDisabled
            }
            onClick={() => handkeKeyClick('U')}
          >
            U
          </span>
          <span
            className={
              hangmanKeyboardLetters['I'.charCodeAt(0)]
                ? styles.key
                : styles.keyDisabled
            }
            onClick={() => handkeKeyClick('I')}
          >
            I
          </span>
          <span
            className={
              hangmanKeyboardLetters['O'.charCodeAt(0)]
                ? styles.key
                : styles.keyDisabled
            }
            onClick={() => handkeKeyClick('O')}
          >
            O
          </span>
          <span
            className={
              hangmanKeyboardLetters['P'.charCodeAt(0)]
                ? styles.key
                : styles.keyDisabled
            }
            onClick={() => handkeKeyClick('P')}
          >
            P
          </span>
        </div>
        <div className={styles.keyboardRow}>
          <span
            className={
              hangmanKeyboardLetters['A'.charCodeAt(0)]
                ? styles.key
                : styles.keyDisabled
            }
            onClick={() => handkeKeyClick('A')}
          >
            A
          </span>
          <span
            className={
              hangmanKeyboardLetters['S'.charCodeAt(0)]
                ? styles.key
                : styles.keyDisabled
            }
            onClick={() => handkeKeyClick('S')}
          >
            S
          </span>
          <span
            className={
              hangmanKeyboardLetters['D'.charCodeAt(0)]
                ? styles.key
                : styles.keyDisabled
            }
            onClick={() => handkeKeyClick('D')}
          >
            D
          </span>
          <span
            className={
              hangmanKeyboardLetters['F'.charCodeAt(0)]
                ? styles.key
                : styles.keyDisabled
            }
            onClick={() => handkeKeyClick('F')}
          >
            F
          </span>
          <span
            className={
              hangmanKeyboardLetters['G'.charCodeAt(0)]
                ? styles.key
                : styles.keyDisabled
            }
            onClick={() => handkeKeyClick('G')}
          >
            G
          </span>
          <span
            className={
              hangmanKeyboardLetters['H'.charCodeAt(0)]
                ? styles.key
                : styles.keyDisabled
            }
            onClick={() => handkeKeyClick('H')}
          >
            H
          </span>
          <span
            className={
              hangmanKeyboardLetters['J'.charCodeAt(0)]
                ? styles.key
                : styles.keyDisabled
            }
            onClick={() => handkeKeyClick('J')}
          >
            J
          </span>
          <span
            className={
              hangmanKeyboardLetters['K'.charCodeAt(0)]
                ? styles.key
                : styles.keyDisabled
            }
            onClick={() => handkeKeyClick('K')}
          >
            K
          </span>
          <span
            className={
              hangmanKeyboardLetters['L'.charCodeAt(0)]
                ? styles.key
                : styles.keyDisabled
            }
            onClick={() => handkeKeyClick('L')}
          >
            L
          </span>
        </div>
        <div className={styles.keyboardRow}>
          <span
            className={
              hangmanKeyboardLetters['Z'.charCodeAt(0)]
                ? styles.key
                : styles.keyDisabled
            }
            onClick={() => handkeKeyClick('Z')}
          >
            Z
          </span>
          <span
            className={
              hangmanKeyboardLetters['X'.charCodeAt(0)]
                ? styles.key
                : styles.keyDisabled
            }
            onClick={() => handkeKeyClick('X')}
          >
            X
          </span>
          <span
            className={
              hangmanKeyboardLetters['C'.charCodeAt(0)]
                ? styles.key
                : styles.keyDisabled
            }
            onClick={() => handkeKeyClick('C')}
          >
            C
          </span>
          <span
            className={
              hangmanKeyboardLetters['V'.charCodeAt(0)]
                ? styles.key
                : styles.keyDisabled
            }
            onClick={() => handkeKeyClick('V')}
          >
            V
          </span>
          <span
            className={
              hangmanKeyboardLetters['B'.charCodeAt(0)]
                ? styles.key
                : styles.keyDisabled
            }
            onClick={() => handkeKeyClick('B')}
          >
            B
          </span>
          <span
            className={
              hangmanKeyboardLetters['N'.charCodeAt(0)]
                ? styles.key
                : styles.keyDisabled
            }
            onClick={() => handkeKeyClick('N')}
          >
            N
          </span>
          <span
            className={
              hangmanKeyboardLetters['M'.charCodeAt(0)]
                ? styles.key
                : styles.keyDisabled
            }
            onClick={() => handkeKeyClick('M')}
          >
            M
          </span>
        </div>
        <div className={styles.keyboardRow}>
          <span
            className={`${styles.key} ${styles.reset}`}
            onClick={() => dispatch(getPuzzle())}
          >
            START NEW GAME
          </span>
        </div>
      </div>
    </Draggable>
  )
}

export default HangmanKeyboard
