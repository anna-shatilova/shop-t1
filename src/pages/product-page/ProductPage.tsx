import { Helmet, HelmetProvider } from 'react-helmet-async'
import styles from './ProductPage.module.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Rating from '../../components/raiting/Rating'
import { useParams } from 'react-router-dom'
import {
  calculateTotalPriceProduct,
  findProductQuantity,
} from '../../helpers/Helper'
import { useState } from 'react'
import { useGetProductByIdQuery } from '../../services/productApi'
import { RootState } from '../../store/store'
import { selectDataById } from '../../services/cartSlice'
import { useSelector } from 'react-redux'
import Button from '../../components/button/Button'

function ProductPage() {
  const { id } = useParams()
  const paramsToNumber = Number(id)
  const [currentImgUrl, setCurrentImgUrl] = useState('')

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductByIdQuery(paramsToNumber)

  const idUserForCart = 33
  const cartUserById = useSelector((state: RootState) =>
    selectDataById(state, idUserForCart),
  )
  const cartUser = cartUserById?.carts[0]

  return (
    <HelmetProvider>
      <Helmet>
        <title>{`product?.title`} | Goods4you</title>
      </Helmet>
      <Header />
      <main className={styles.wrapper}>
        <div className={styles.container}>
          {error ? (
            <h1>Oh no, there was an error</h1>
          ) : isLoading ? (
            <h1 className={styles.loading}>Loading...</h1>
          ) : product ? (
            <>
              <section className={styles.blockProductImg}>
                <img
                  src={currentImgUrl ? currentImgUrl : product.thumbnail}
                  alt="productFotoMain"
                  className={styles.mainImg}
                />
                <div
                  style={{
                    visibility:
                      product.images.length < 2 ? 'hidden' : 'visible',
                  }}
                  className={styles.containerImg}
                >
                  {product.images.map((el, index) => (
                    <img
                      key={index}
                      src={el}
                      alt="productFoto"
                      style={{
                        border:
                          currentImgUrl === el ? '3px solid #c4c4c4' : 'none',
                      }}
                      className={styles.img}
                      onClick={() => setCurrentImgUrl(el)}
                    />
                  ))}
                </div>
              </section>
              <section className={styles.blockProductRight}>
                <div className={styles.topProduct}>
                  <h1 className={styles.title}>{product.title}</h1>
                  <div className={styles.rating}>
                    <Rating rating={Math.round(product.rating)} />
                    <div className={styles.ratingText}>
                      {product.tags.map((element: string, index: number) => (
                        <p key={index}>{element}</p>
                      ))}
                    </div>
                  </div>
                </div>
                <h2 className={styles.productLimitation}>
                  In Stock - Only {product.stock} left!
                </h2>
                <h3 className={styles.description}>{product.description}</h3>
                <div className={styles.termBlock}>
                  <p className={styles.termItem}>
                    {product.warrantyInformation}
                  </p>
                  <p className={styles.termItem}>
                    {product.shippingInformation}
                  </p>
                </div>
                <div className={styles.priceBlockProduct}>
                  <div className={styles.priceContent}>
                    <div>
                      <p className={styles.priceDiscount}>
                        {calculateTotalPriceProduct(
                          product!.price,
                          product!.discountPercentage,
                        )}
                        $
                      </p>
                      <p className={styles.price}>{product.price} $</p>
                    </div>
                    <span className={styles.verticalLine}></span>
                    <p
                      className={`${styles.ratingText} ${styles.textDiscount}`}
                    >
                      Your discount:{' '}
                      <span className={styles.spanPrice}>
                        {product.discountPercentage}%
                      </span>
                    </p>
                  </div>

                  {findProductQuantity(product.id, cartUser?.products) ? (
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
                        {findProductQuantity(product.id, cartUser?.products)}{' '}
                        items
                      </p>
                      <button className={styles.buttonCount}>
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
                  ) : (
                    <Button label={'Add to cart'} mode={false} typeButton={"button"}/>
                  )}
                </div>
              </section>
            </>
          ) : null}
        </div>
      </main>
      <Footer />
    </HelmetProvider>
  )
}

export default ProductPage
