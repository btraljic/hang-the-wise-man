import { useDispatch, useSelector } from 'react-redux'

import { selectUser, setUser } from './features/user/userSlice'

function App() {
  const username = useSelector(selectUser)
  const dispatch = useDispatch()

  return (
    <div className=''>
      <p>Hang the wise man, {username}</p>
      <button onClick={() => dispatch(setUser('UserName'))}>Set User</button>
    </div>
  )
}

export default App
