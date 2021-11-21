import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../common/spinner'

import { getPuzzle, selectHangmanPuzzle, selectHangmanPuzzleAuthor } from './'
import style from './HangmanPuzzle.module.css'
import { selectHangmanPuzzleLoadingStatus } from './hangmanSlice'

function HangmanPuzzle() {
  const hangmanPuzzle = useSelector(selectHangmanPuzzle)
  const hangmanPuzzleAuthor = useSelector(selectHangmanPuzzleAuthor)
  const hangmanPuzzleLoadingStatus = useSelector(
    selectHangmanPuzzleLoadingStatus
  )
  const dispatch = useDispatch()

  return (
    <div>
      <Spinner loading={hangmanPuzzleLoadingStatus === 'loading'} />
      <div className={style.text}>
        <em>{hangmanPuzzleAuthor}</em>
        <br />
        {hangmanPuzzle}
      </div>
      <button
        type='button'
        className='btn btn-outline-light'
        onClick={() => dispatch(getPuzzle())}
      >
        RESET GAME
      </button>
    </div>
  )
}

export default HangmanPuzzle
