import { Helmet, HelmetProvider } from 'react-helmet-async'
import styles from './CartPage.module.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import TableTotalPrice from '../../components/table/TableTotalPrice'
import { useGetCartUserByIdQuery } from '../../services/hook'
import { calculateTotalPriceProduct, pluralizeItem } from '../../helpers/Helper'

function CartPage() {
  const idUserForCart = 33
  const { data: cartUserById, isError, isLoading } = useGetCartUserByIdQuery(idUserForCart)
  
  const cartUser = cartUserById?.carts[0]

  const cartUserProducts = cartUser?.products

  return (
    <HelmetProvider>
      <Helmet>
        <title>My cart | Goods4you</title>
      </Helmet>
      <Header />
      <main className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={styles.title}>My cart</h1>
          {isError ? (
            <>Oh no, there was an error</>
          ) : isLoading ? (
            <>Loading...</>
          ) : cartUser && cartUserProducts ? (
            <section className={styles.cartContainer}>
              <ul className={styles.cartList}>
                {cartUser.products.map((product) => (
                  <li key={product.id} className={styles.cartItem}>
                    <div className={styles.cartItemContent}>
                      <img
                        src={product.thumbnail}
                        alt="fotoProduct"
                        className={styles.cartImg}
                      />
                      <div>
                        <Link to={`/product/${product.id}`}>
                          <h3 className={styles.itemHeading}>
                            {product.title}
                          </h3>
                        </Link>
                        <h4 className={styles.itemPrice}>
                          {calculateTotalPriceProduct(
                            product.price,
                            product.discountPercentage,
                          )}{' '}
                          $
                        </h4>
                      </div>
                    </div>
                    <div className={styles.cartButtonBlock}>
                      <div className={styles.buttonBlock}>
                        <button className={styles.buttonCount}>
                          <svg
                            width="18"
                            height="4"
                            viewBox="0 0 18 4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.5 3.5L1.5 3.5C0.671573 3.5 0 2.82843 0 2C0 1.17157 0.671573 0.5 1.5 0.5L16.5 0.5C17.3284 0.5 18 1.17157 18 2C18 2.82843 17.3284 3.5 16.5 3.5Z"
                              fill="white"
                            />
                          </svg>
                        </button>
                        <p className={styles.counter}>
                          {product.quantity} {pluralizeItem(product.quantity)}
                        </p>
                        <button
                          className={`${styles.buttonCountPlus} ${styles.buttonCount}`}
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17 10L1 10C0.447715 10 0 9.55228 0 9C0 8.44772 0.447716 8 1 8L17 8C17.5523 8 18 8.44772 18 9C18 9.55228 17.5523 10 17 10Z"
                              fill="white"
                            />
                            <path
                              d="M8 17L8 1C8 0.447715 8.44772 0 9 0C9.55228 0 10 0.447716 10 1L10 17C10 17.5523 9.55228 18 9 18C8.44772 18 8 17.5523 8 17Z"
                              fill="white"
                            />
                          </svg>
                        </button>
                      </div>
                      <button className={styles.deleteText}>Delete</button>
                    </div>
                  </li>
                ))}
              </ul>

              {/* <li className={`${styles.cartItem} ${styles.cartItemStartDel}`}>
                  <div className={styles.cartItemContent}>
                    <img
                      src={shoes}
                      alt="shoes"
                      className={`${styles.cartImg} ${styles.cartImgStartDel}`}
                    />
                    <div className={styles.nameProdStartDel}>
                      <Link to={'/product/12'}>
                        <h3 className={styles.itemHeading}>
                          Essence Mascara Lash Princess
                        </h3>
                      </Link>
                      <h4 className={styles.itemPrice}>110 $</h4>
                    </div>
                  </div>
                  <button className={styles.productButton} aria-label="addCart">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.14286H16.6038L13.0359 0.34668C12.8589 0.00908289 12.475 -0.101141 12.1784 0.10185C11.8823 0.304841 11.7865 0.743572 11.9641 1.08189L15.1461 7.14286H4.85388L8.03587 1.08184C8.21348 0.743524 8.11767 0.304793 7.82164 0.101802C7.52439 -0.101189 7.14173 0.00903482 6.96411 0.346631L3.39617 7.14281H0V8.57139H1.35651L2.94432 18.2512C3.11033 19.2648 3.88547 20 4.78761 20H15.2124C16.1145 20 16.8896 19.2648 17.055 18.252L18.6434 8.57139H20C20 8.57139 20 7.14286 20 7.14286ZM15.8264 17.989C15.7715 18.3266 15.5133 18.5715 15.2124 18.5715H4.78761C4.4867 18.5715 4.22854 18.3266 4.173 17.9883L2.62789 8.57139H17.3721L15.8264 17.989Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </li> */}

              <TableTotalPrice
                totalProducts={cartUser.totalProducts}
                total={cartUser.total}
                discountedTotal={cartUser.discountedTotal}
              />
            </section>
          ) : (
            <h3 className={styles.noItems}>No items</h3>
          )}
        </div>
      </main>
      <Footer />
    </HelmetProvider>
  )
}

export default CartPage
