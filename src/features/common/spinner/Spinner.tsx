import style from './Spinner.module.css'

export interface ISpinnerProps {
  loading: boolean
}

function Spinner({ loading }: ISpinnerProps) {
  return (
    <>
      {loading && (
        <div className={style.loading}>
          <div className={style.spinner}>
            <div
              className={'spinner-border text-secondary ' + style.border}
              role='status'
            >
              <span className='visually-hidden'>Loading...</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Spinner
