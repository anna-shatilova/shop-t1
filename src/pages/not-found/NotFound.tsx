import { Link } from 'react-router-dom'
import imageNotFound from '../../assets/not-found.png'
// import { Button } from '../../App.styles'
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
      <h3 className={styles.heading}>Страница не найдена</h3>
      <p className={styles.text}>
        Возможно, она была удалена <br /> или перенесена на другой адрес
      </p>

      <Link to={`/`}>
        <button className={styles.button}>Вернуться на главную</button>
      </Link>
    </div>
  )
}

export default NotFound
//       <img src={reactLogo} className={styles.logo} alt="React logo" />
