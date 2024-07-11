import styles from './MainPage.module.css'
import { Link } from 'react-router-dom'
import Accordion from '../../components/accordion/Accordion'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { handleScrollToAnchorCatalog } from '../../helpers/Helper'
import { useGetProductsQuery } from '../../api/productApi'
import ProductItems from '../../components/product-items/ProductItems'

function MainPage() {
  const { data: allProducts, isLoading} = useGetProductsQuery(12)
console.log(allProducts);
  return (
    <HelmetProvider>
      <div className={styles.wrapper}>
        <Helmet>
          <title>Catalog | Goods4you</title>
        </Helmet>
        <Header />
        <main>
          <section className={styles.top}>
            <div className={styles.containerTop}>
              <div className={styles.containerRelative}>
                <h2 className={styles.topHeading}>
                  Any products from famous brands <br /> with worldwide delivery
                </h2>
                <h3 className={styles.topText}>
                  We sell smartphones, laptops, clothes, shoes <br /> and many
                  other products at low prices
                </h3>
                <Link to={'#catalog'}>
                  <button
                    onClick={handleScrollToAnchorCatalog}
                    className={styles.topButton}
                  >
                    Go to shopping
                  </button>
                </Link>
              </div>
            </div>
          </section>
          <section className={styles.containerCenter}>
            <h1 className={styles.title} id="catalog">
              Catalog
            </h1>
            <input
              className={styles.inputSearch}
              type="text"
              placeholder="Search by title"
              aria-label="поле ввода поиска"
            />
            <ProductItems allProducts={allProducts?.products} isLoading={isLoading}/>
            <button className={styles.buttonShowMore}>Show more</button>
          </section>
          <Accordion />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  )
}

export default MainPage
