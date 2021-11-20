import { useState } from 'react'
import { useDispatch } from 'react-redux'

import styles from './Login.module.css'
import loginImg from '../../assets/img/login.png'
import { setUser } from '../user'

function Login() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img className={styles.img} src={loginImg} alt='Login' />
        <div className={styles.form}>
          <label htmlFor='loginaName' className='form-label'>
            Name of the player
          </label>
          <input
            type='text'
            className='form-control'
            id='loginaName'
            placeholder='name'
            onChange={(e) => setName(e.target.value)}
          />
          <button
            type='submit'
            className='btn btn-outline-light'
            onClick={() =>
              name ? dispatch(setUser(name)) : alert('Please enter your name.')
            }
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
