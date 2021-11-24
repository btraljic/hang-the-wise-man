import { useSelector } from 'react-redux'

import { Login, selectUser } from '../user'
import Hangman from '../hangman'
import styles from './Home.module.css'

function Home() {
  const userName = useSelector(selectUser)

  return (
    <div className='container-fluid'>
      {userName === '' ? (
        <Login />
      ) : (
        <>
          <div className={styles.container}>
            <h3>
              Player: <em>{userName}</em>
            </h3>
          </div>
          <Hangman />
        </>
      )}
    </div>
  )
}

export default Home
