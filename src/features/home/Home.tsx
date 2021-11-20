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
          <h3>Home page</h3>
          <p>
            Player, <strong>{username}</strong>
          </p>
          <Hangman />
        </>
      )}
    </div>
  )
}

export default Home
