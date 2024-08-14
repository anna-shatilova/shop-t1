import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import Navigation from '../navigation/Navigation'
import Logo from '../../assets/logo.svg'

function Footer() {
  return (
    <footer className={`${styles.headerFooter} ${styles.footerBackground}`}>
      <div className={styles.container}>
        <Link
          to={'/'}
          className={styles.logo}
          aria-label="обновление главной страницы"
        >
          <img className={styles.logoImg} src={Logo} alt="logo" />
        </Link>
        <Navigation panel="footer" />
      </div>
    </footer>
  )
}

export default Footer
