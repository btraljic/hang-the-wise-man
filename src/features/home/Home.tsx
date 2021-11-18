import { useDispatch, useSelector } from 'react-redux'

import { selectUser, setUser } from '../user/userSlice'

function Home() {
  const username = useSelector(selectUser)
  const dispatch = useDispatch()

  return (
    <div className='container-fluid'>
      <h3>Home page</h3>
      <p>Hang the wise man, {username}</p>
      <button onClick={() => dispatch(setUser('UserName'))}>Set User</button>
    </div>
  )
}

export default Home
