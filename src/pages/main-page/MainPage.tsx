import styles from './MainPage.module.css'
import { Link } from 'react-router-dom'
import Accordion from '../../components/accordion/Accordion'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { handleScrollToAnchorCatalog } from '../../helpers/Helper'
import { useGetProductsQuery } from '../../api/productApi'
import ProductItems from '../../components/product-items/ProductItems'
import { useState } from 'react'
// import { debounce } from 'lodash'

function MainPage() {
  const [countProduct, setCountProduct] = useState(12)
  const [searchText, setSearchText] = useState('')
  // const [allProducts, setAllProducts] = useState()

  const {
    data: allProducts,
    isLoading,
    error,
  } = useGetProductsQuery({
    limit: countProduct,
    search: searchText,
  })

  // const debouncedSearchText = useCallback(
  //   debounce((value: string) => setSearchText(value), 300),
  //   []
  // );

  // const handlerSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   debouncedSearchText(event.currentTarget.value);
  // };

  const handlerSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.currentTarget.value)
  }
  const handlerAddMoreProducts = () => {
    setCountProduct(countProduct + 12)
  }

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
              value={searchText}
              onChange={handlerSearchText}
              className={styles.inputSearch}
              type="text"
              placeholder="Search by title"
              aria-label="поле ввода поиска"
            />
            {allProducts?.total === 0 && (
              <h3 className={styles.noProducts}>
                No products found. Try again.
              </h3>
            )}
            <ProductItems
              allProducts={allProducts?.products}
              isLoading={isLoading}
              error={error}
            />
            <button
              style={{
                visibility:
                  allProducts?.total === allProducts?.limit
                    ? 'hidden'
                    : 'visible',
              }}
              className={styles.buttonShowMore}
              onClick={handlerAddMoreProducts}
            >
              Show more
            </button>
          </section>
          <Accordion />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  )
}

export default MainPage
