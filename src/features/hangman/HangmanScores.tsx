import { useCallback } from 'react'
import { useSelector } from 'react-redux'

import { GameStatus } from '../../app/types'
import { selectHangmanGameStatus, selectHangmanScores } from '.'
import styles from './HangmanScores.module.css'

function HangmanScores() {
  const hangmanScores = useSelector(selectHangmanScores)
  const hangmanGameStatus = useSelector(selectHangmanGameStatus)

  const showScores = useCallback(() => {
    return hangmanScores.map((item) => (
      <tr key={item.quoteId}>
        <td>{item.userName}</td>
        <td>{item.errors}</td>
      </tr>
    ))
  }, [hangmanScores])

  if (!hangmanScores.length) {
    return <></>
  }

  return (
    <div
      className={`${styles.container} ${
        hangmanGameStatus === GameStatus.Lose && styles.lose
      }  ${hangmanGameStatus === GameStatus.Win && styles.win}`}
    >
      <table className='table table-borderless'>
        <thead>
          <tr>
            <th colSpan={2}>
              <div className={styles.head}>
                {hangmanGameStatus === GameStatus.Lose
                  ? 'YOU LOSE!'
                  : 'YOU WIN!'}
              </div>
              SCORES
            </th>
          </tr>
        </thead>
        <tbody>{showScores()}</tbody>
      </table>
    </div>
  )
}

export default HangmanScores
