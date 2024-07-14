import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'
import cartSvg from '../../assets/cart.svg'
import {
  handleScrollToAnchorCatalog,
  handleScrollToAnchorFQA,
} from '../../helpers/Helper'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { selectDataById } from '../../services/cartSlice'

interface NavigationProps {
  panel: 'header' | 'footer'
}

function Navigation({ panel }: NavigationProps) {
  const idUserForCart = 33
  const cartUserById = useSelector((state: RootState) => selectDataById(state, idUserForCart))

  const cartUser = cartUserById?.carts[0]

  return (
    <ul className={styles.ul}>
      <Link to={'#catalog'}>
        <li className={styles.li} onClick={handleScrollToAnchorCatalog}>
          Catalog
        </li>
      </Link>

      <Link to={'#FQA'}>
        <li className={styles.li} onClick={handleScrollToAnchorFQA}>
          FAQ
        </li>
      </Link>

      {panel === 'header' && (
        <>
          <Link to={'/cart'} className={styles.cartBlock}>
            <li className={styles.li}>Cart</li>
            <div className={styles.cartBlockSvg}>
              <img className={styles.cartImg} src={cartSvg} alt="cart" />
              {cartUser?.totalQuantity && (
                <span className={styles.cartCounter}>
                  {cartUser?.totalQuantity}
                </span>
              )}
            </div>
          </Link>
          <li className={styles.liAvatar}>Johnson Smith</li>
        </>
      )}
    </ul>
  )
}

export default Navigation
