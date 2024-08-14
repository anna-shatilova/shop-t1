import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import Navigation from '../navigation/Navigation'
import Logo from '../../assets/logo.svg'

interface HeaderProps {
  isLogin: boolean
}

export const Header = ({ isLogin }: HeaderProps) => {
  return (
    <header
      className={`${styles.headerFooter} ${styles.headerBackground} ${styles.wrapper}`}
    >
      <div className={styles.container}>
        <Link to={'/'} className={styles.logo} aria-label="page update">
          <img className={styles.logoImg} src={Logo} alt="logo" />
        </Link>
        {!isLogin && (
          <nav>
            <Navigation panel="header" />
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
