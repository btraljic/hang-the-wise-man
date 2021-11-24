import { useCallback } from 'react'
import { useSelector } from 'react-redux'

import { selectHangmanScores } from '.'
import styles from './HangmanScores.module.css'

function HangmanScores() {
  const hangmanScores = useSelector(selectHangmanScores)

  const showScores = useCallback(() => {
    return hangmanScores.map((item) => (
      <tr>
        <td>{item.userName}</td>
        <td>{item.errors}</td>
      </tr>
    ))
  }, [hangmanScores])

  if (!hangmanScores.length) {
    return <></>
  }

  return (
    <div className={styles.container}>
      <table className='table table-borderless'>
        <thead>
          <tr>
            <th colSpan={2}>SCORES</th>
          </tr>
        </thead>
        <tbody>{showScores()}</tbody>
      </table>
    </div>
  )
}

export default HangmanScores
