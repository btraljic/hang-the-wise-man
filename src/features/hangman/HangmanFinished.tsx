import { useSelector } from 'react-redux'

import { selectHangmanIsFinished, selectHangmanMisses } from '.'
import styles from './HangmanFinished.module.css'
import winImg from '../../assets/img/win.png'
import loseImg from '../../assets/img/lose.png'

function HangmanFinished() {
  const hangmanIsFinished = useSelector(selectHangmanIsFinished)
  const hangmanMisses = useSelector(selectHangmanMisses)

  if (!hangmanIsFinished) {
    return <></>
  }

  return (
    <div className={styles.container}>
      {hangmanMisses > 5 ? (
        <img className={styles.img} src={loseImg} alt='Lose' />
      ) : (
        <img className={styles.img} src={winImg} alt='Win' />
      )}
    </div>
  )
}

export default HangmanFinished
