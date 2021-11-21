import { useSelector } from 'react-redux'

import { Login, selectUser } from '../user'
import Hangman from '../hangman'

function Home() {
  const username = useSelector(selectUser)

  return (
    <div className='container-fluid'>
      {username === '' ? (
        <Login />
      ) : (
        <>
          <h3>
            Player: <em>{username}</em>
          </h3>
          <Hangman />
        </>
      )}
    </div>
  )
}

export default Home
