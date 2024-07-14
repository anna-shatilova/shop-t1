import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import Navigation from '../navigation/Navigation'
import Logo from '../../assets/logo.svg'

export const Header = () => {
  return (
    <header
      className={`${styles.headerFooter} ${styles.headerBackground} ${styles.wrapper}`}
    >
      <div className={styles.container}>
        <Link
          to={'/'}
          className={styles.logo}
          aria-label="обновление главной страницы"
        >
          <img className={styles.logoImg} src={Logo} alt="logo" />
        </Link>
        <nav>
          <Navigation
            panel="header"
          />
        </nav>
      </div>
    </header>
  )
}

export default Header
