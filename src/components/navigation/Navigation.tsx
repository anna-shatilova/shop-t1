import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'
import cartSvg from '../../assets/cart.svg'
import {
  handleScrollToAnchorCatalog,
  handleScrollToAnchorFQA,
} from '../../helpers/Helper'

interface NavigationProps {
  panel: string
  totalQuantityCart?: number
}

function Navigation({ panel, totalQuantityCart }: NavigationProps) {
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
              {totalQuantityCart && (
                <span className={styles.cartCounter}>{totalQuantityCart}</span>
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
