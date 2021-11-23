import { useSelector } from 'react-redux'

import { Login, selectUser } from '../user'
import Hangman from '../hangman'

function Home() {
  const userName = useSelector(selectUser)

  return (
    <div className='container-fluid'>
      {userName === '' ? (
        <Login />
      ) : (
        <>
          <h3>
            Player: <em>{userName}</em>
          </h3>
          <Hangman />
        </>
      )}
    </div>
  )
}

export default Home
