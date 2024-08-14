import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'
import cartSvg from '../../assets/cart.svg'
import {
  handleScrollToAnchorCatalog,
  handleScrollToAnchorFQA,
} from '../../helpers/Helper'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

interface NavigationProps {
  panel: 'header' | 'footer'
}

function Navigation({ panel }: NavigationProps) {
  const { firstName, lastName } = useSelector((state: RootState) => state.auth)
  const cartUser = useSelector((state: RootState) => {
    if (state.cart.dataById) return state.cart.dataById
  })

  return (
    <ul className={styles.ul}>
      <Link to={'/#catalog'}>
        <li className={styles.li} onClick={handleScrollToAnchorCatalog}>
          Catalog
        </li>
      </Link>

      <Link to={'/#FQA'}>
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
          <li className={styles.liAvatar}>
            {firstName} {lastName}
          </li>
        </>
      )}
    </ul>
  )
}

export default Navigation
