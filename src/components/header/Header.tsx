import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import Navigation from '../navigation/Navigation'
import Logo from '../../assets/logo.svg'
import { useGetCartUserByIdQuery } from '../../services/hook'

const Header = () => {
  const idUserForCart = 33

  const { data: cartUserById } = useGetCartUserByIdQuery(idUserForCart)
  const cartUser = cartUserById?.carts[0]
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
            totalQuantityCart={cartUser?.totalQuantity}
          />
        </nav>
      </div>
    </header>
  )
}

export default Header
