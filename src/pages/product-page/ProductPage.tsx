import { Helmet, HelmetProvider } from 'react-helmet-async'
import styles from './ProductPage.module.css'

function ProductPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Essence Mascara Lash Princess | Goods4you</title>
      </Helmet>
      <h1 className={styles.h1}></h1>
    </HelmetProvider>
  )
}

export default ProductPage
