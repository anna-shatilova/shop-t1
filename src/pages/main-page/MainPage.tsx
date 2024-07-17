import styles from './MainPage.module.css'
import { Link } from 'react-router-dom'
import Accordion from '../../components/accordion/Accordion'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { handleScrollToAnchorCatalog } from '../../helpers/Helper'
import {
  useGetCurrentUserQuery,
  useGetProductsQuery,
} from '../../services/productApi'
import ProductItems from '../../components/product-items/ProductItems'
import { useCallback, useState } from 'react'
import { debounce } from 'lodash'
// import { useGetCartUserByIdQuery } from '../../services/hook'
import { Button } from '../../components/button/Button'
// import { useGetCurrentUserQuery } from '../../services/userApi'

function MainPage() {
  const [countProduct, setCountProduct] = useState(12)
  const [searchText, setSearchText] = useState('')
  const [debouncedSearchText, setDebouncedSearchText] = useState('')

  const { data: currentUser, isLoading: loadingAuth } =
    useGetCurrentUserQuery('')
  console.log(currentUser)

  const {
    data: allProducts,
    isLoading,
    error,
  } = useGetProductsQuery({
    limit: countProduct,
    search: debouncedSearchText,
  })

  // useEffect(() => {
  //   if (currentUser) dispatch(setUserData(currentUser))
  // }, [currentUser, getUser])

  // const idUserForCart = currentUser?.id

  // const { data: cartUserById } =
  //   useGetCartUserByIdQuery(idUserForCart)
  // console.log(cartUserById)

  const debouncedHandlerSearchText = useCallback(
    debounce((value) => {
      setDebouncedSearchText(value)
    }, 500),
    [],
  )

  const handlerSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.currentTarget.value)
    debouncedHandlerSearchText(event.currentTarget.value)
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
        {loadingAuth ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <Header isLogin={false} />
            <main>
              <section className={styles.top}>
                <div className={styles.containerTop}>
                  <div className={styles.containerRelative}>
                    <h2 className={styles.topHeading}>
                      Any products from famous brands <br /> with worldwide
                      delivery
                    </h2>
                    <h3 className={styles.topText}>
                      We sell smartphones, laptops, clothes, shoes <br /> and
                      many other products at low prices
                    </h3>
                    <Link to={'#catalog'}>
                      <Button
                        onClick={handleScrollToAnchorCatalog}
                        label={'Go to shopping'}
                        mode={true}
                        typeButton={'button'}
                      />
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
                  aria-label="search input field"
                />
                {allProducts?.total === 0 && (
                  <h1 className={styles.noProducts}>
                    No products found. Try again.
                  </h1>
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
            <Footer />{' '}
          </>
        )}
      </div>
    </HelmetProvider>
  )
}

export default MainPage
