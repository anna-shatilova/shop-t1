import { Link } from 'react-router-dom'
import imageNotFound from '../../assets/not-found.png'
import styles from './NotFound.module.css'

function NotFound() {
  return (
    <div className={styles.container}>
      <img
        src={imageNotFound}
        alt="foto page not found"
        className={styles.image}
      />
      <h1 className={styles.title}>404</h1>
      <h3 className={styles.heading}>Page not found</h3>
      <p className={styles.text}>
      It may have been deleted <br /> or moved to another address
      </p>

      <Link to={`/`}>
        <button className={styles.button}>Go back to the main page</button>
      </Link>
    </div>
  )
}

export default NotFound
