import { useDispatch, useSelector } from 'react-redux'

import { getPuzzle, selectHangmanPuzzle, selectHangmanPuzzleAuthor } from './'

function HangmanPuzzle() {
  const hangmanPuzzle = useSelector(selectHangmanPuzzle)
  const hangmanPuzzleAuthor = useSelector(selectHangmanPuzzleAuthor)
  const dispatch = useDispatch()

  return (
    <div>
      <p>
        <em>{hangmanPuzzleAuthor}:</em>
        <br />
        {hangmanPuzzle}
      </p>
      <button
        type='button'
        className='btn btn-outline-light'
        onClick={() => dispatch(getPuzzle())}
      >
        Get Puzzle
      </button>
    </div>
  )
}

export default HangmanPuzzle
