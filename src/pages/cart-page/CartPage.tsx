import { Helmet, HelmetProvider } from 'react-helmet-async'
import styles from './CartPage.module.css'

function CartPage() {
  return (
    <HelmetProvider>
      <div className={styles.div}>
        <Helmet>
          <title>My cart | Goods4you</title>
        </Helmet>
      </div>
    </HelmetProvider>
  )
}

export default CartPage
