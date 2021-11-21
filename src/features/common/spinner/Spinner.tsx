import styles from './Spinner.module.css'

export interface ISpinnerProps {
  loading: boolean
}

function Spinner({ loading }: ISpinnerProps) {
  return (
    <>
      {loading && (
        <div className={styles.loading}>
          <div className={styles.spinner}>
            <div
              className={'spinner-border text-secondary ' + styles.border}
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
