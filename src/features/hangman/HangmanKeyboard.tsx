import { useDispatch, useSelector } from 'react-redux'

import styles from './HangmanKeyboard.module.css'
import { getPuzzle, selectKeyboardLetters, setKeyboardLetter } from '.'

function HangmanKeyboard() {
  const dispatch = useDispatch()
  const keyboardLetters = useSelector(selectKeyboardLetters)

  const handkeKeyClick = (letter: string) =>
    keyboardLetters[letter.charCodeAt(0)]
      ? dispatch(setKeyboardLetter(letter))
      : null

  return (
    <div className={styles.keyboard}>
      <div className={styles.keyboardRow}>
        <span
          className={
            keyboardLetters['Q'.charCodeAt(0)] ? styles.key : styles.keyDisabled
          }
          onClick={() => handkeKeyClick('Q')}
        >
          Q
        </span>
        <span
          className={
            keyboardLetters['W'.charCodeAt(0)] ? styles.key : styles.keyDisabled
          }
          onClick={() => handkeKeyClick('W')}
        >
          W
        </span>
        <span
          className={
            keyboardLetters['E'.charCodeAt(0)] ? styles.key : styles.keyDisabled
          }
          onClick={() => handkeKeyClick('E')}
        >
          E
        </span>
        <span
          className={
            keyboardLetters['R'.charCodeAt(0)] ? styles.key : styles.keyDisabled
          }
          onClick={() => handkeKeyClick('R')}
        >
          R
        </span>
        <span
          className={
            keyboardLetters['T'.charCodeAt(0)] ? styles.key : styles.keyDisabled
          }
          onClick={() => handkeKeyClick('T')}
        >
          T
        </span>
        <span
          className={
            keyboardLetters['Y'.charCodeAt(0)] ? styles.key : styles.keyDisabled
          }
          onClick={() => handkeKeyClick('Y')}
        >
          Y
        </span>
        <span
          className={
            keyboardLetters['U'.charCodeAt(0)] ? styles.key : styles.keyDisabled
          }
          onClick={() => handkeKeyClick('U')}
        >
          U
        </span>
        <span
          className={
            keyboardLetters['I'.charCodeAt(0)] ? styles.key : styles.keyDisabled
          }
          onClick={() => handkeKeyClick('I')}
        >
          I
        </span>
        <span
          className={
            keyboardLetters['O'.charCodeAt(0)] ? styles.key : styles.keyDisabled
          }
          onClick={() => handkeKeyClick('O')}
        >
          O
        </span>
        <span
          className={
            keyboardLetters['P'.charCodeAt(0)] ? styles.key : styles.keyDisabled
          }
          onClick={() => handkeKeyClick('P')}
        >
          P
        </span>
      </div>
      <div className={styles.keyboardRow}>
        <span
          className={
            keyboardLetters['A'.charCodeAt(0)] ? styles.key : styles.keyDisabled
          }
          onClick={() => handkeKeyClick('A')}
        >
          A
        </span>
        <span
          className={
            keyboardLetters['S'.charCodeAt(0)] ? styles.key : styles.keyDisabled
          }
          onClick={() => handkeKeyClick('S')}
        >
          S
        </span>
        <span
          className={
            keyboardLetters['D'.charCodeAt(0)] ? styles.key : styles.keyDisabled
          }
          onClick={() => handkeKeyClick('D')}
        >
          D
        </span>
        <span
          className={
            keyboardLetters['F'.charCodeAt(0)] ? styles.key : styles.keyDisabled
          }
          onClick={() => handkeKeyClick('F')}
        >
          F
        </span>
        <span
          className={
            keyboardLetters['G'.charCodeAt(0)] ? styles.key : styles.keyDisabled
          }
          onClick={() => handkeKeyClick('G')}
        >
          G
        </span>
        <span
          className={
            keyboardLetters['H'.charCodeAt(0)] ? styles.key : styles.keyDisabled
          }
          onClick={() => handkeKeyClick('H')}
        >
          H
        </span>
        <span
          className={
            keyboardLetters['J'.charCodeAt(0)] ? styles.key : styles.keyDisabled
          }
          onClick={() => handkeKeyClick('J')}
        >
          J
        </span>
        <span
          className={
            keyboardLetters['K'.charCodeAt(0)] ? styles.key : styles.keyDisabled
          }
          onClick={() => handkeKeyClick('K')}
        >
          K
        </span>
        <span
          className={
            keyboardLetters['L'.charCodeAt(0)] ? styles.key : styles.keyDisabled
          }
          onClick={() => handkeKeyClick('L')}
        >
          L
        </span>
      </div>
      <div className={styles.keyboardRow}>
        <span
          className={
            keyboardLetters['Z'.charCodeAt(0)] ? styles.key : styles.keyDisabled
          }
          onClick={() => handkeKeyClick('Z')}
        >
          Z
        </span>
        <span
          className={
            keyboardLetters['X'.charCodeAt(0)] ? styles.key : styles.keyDisabled
          }
          onClick={() => handkeKeyClick('X')}
        >
          X
        </span>
        <span
          className={
            keyboardLetters['C'.charCodeAt(0)] ? styles.key : styles.keyDisabled
          }
          onClick={() => handkeKeyClick('C')}
        >
          C
        </span>
        <span
          className={
            keyboardLetters['V'.charCodeAt(0)] ? styles.key : styles.keyDisabled
          }
          onClick={() => handkeKeyClick('V')}
        >
          V
        </span>
        <span
          className={
            keyboardLetters['B'.charCodeAt(0)] ? styles.key : styles.keyDisabled
          }
          onClick={() => handkeKeyClick('B')}
        >
          B
        </span>
        <span
          className={
            keyboardLetters['N'.charCodeAt(0)] ? styles.key : styles.keyDisabled
          }
          onClick={() => handkeKeyClick('N')}
        >
          N
        </span>
        <span
          className={
            keyboardLetters['M'.charCodeAt(0)] ? styles.key : styles.keyDisabled
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
          RESET GAME
        </span>
      </div>
    </div>
  )
}

export default HangmanKeyboard
