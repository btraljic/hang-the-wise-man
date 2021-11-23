import { useSelector } from 'react-redux'

import { selectHangmanGameStatus } from '.'
import styles from './HangmanFinished.module.css'
import winImg from '../../assets/img/win.png'
import loseImg from '../../assets/img/lose.png'
import { GameStatus } from '../../app/types'

function HangmanFinished() {
  const hangmanGameStatus = useSelector(selectHangmanGameStatus)

  if (
    hangmanGameStatus === GameStatus.Start ||
    hangmanGameStatus === GameStatus.Playing
  ) {
    return <></>
  }

  return (
    <div className={styles.container}>
      {hangmanGameStatus === GameStatus.Lose ? (
        <img className={styles.img} src={loseImg} alt='Lose' />
      ) : (
        <img className={styles.img} src={winImg} alt='Win' />
      )}
    </div>
  )
}

export default HangmanFinished
