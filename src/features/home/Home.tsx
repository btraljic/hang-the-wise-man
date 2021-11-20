import { useSelector } from 'react-redux'

import { Login, selectUser } from '../user'

function Home() {
  const username = useSelector(selectUser)

  return (
    <div className='container-fluid'>
      {username === '' ? (
        <Login />
      ) : (
        <>
          <h3>Home page</h3>
          <p>Hang the wise man, {username}</p>
        </>
      )}
    </div>
  )
}

export default Home
