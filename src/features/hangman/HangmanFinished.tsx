import { useDispatch, useSelector } from 'react-redux'

import { postScore, selectHangmanGameStatus } from '.'
import styles from './HangmanFinished.module.css'
import winImg from '../../assets/img/win.png'
import loseImg from '../../assets/img/lose.png'
import { GameStatus } from '../../app/types'
import { useEffect } from 'react'

function HangmanFinished() {
  const dispatch = useDispatch()
  const hangmanGameStatus = useSelector(selectHangmanGameStatus)

  useEffect(() => {
    if (
      hangmanGameStatus === GameStatus.Win ||
      hangmanGameStatus === GameStatus.Lose
    ) {
      dispatch(postScore())
    }
  }, [hangmanGameStatus, dispatch])

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
