import { Helmet, HelmetProvider } from 'react-helmet-async'
import styles from './ProductPage.module.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Rating from '../../components/raiting/Rating'
import { Link, useParams } from 'react-router-dom'
import { calculateTotalPriceProduct } from '../../helpers/Helper'
import { useGetProductByIdQuery } from '../../api/productApi'
import { useState } from 'react'

function ProductPage() {
  const { id } = useParams()
  const paramsToNumber = Number(id)
  const [currentImgUrl, setCurrentImgUrl] = useState('')

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductByIdQuery(paramsToNumber)

  return (
    <HelmetProvider>
      <Helmet>
        <title>{`product?.title`} | Goods4you</title>
      </Helmet>
      <Header />
      <main className={styles.wrapper}>
        <div className={styles.container}>
          {isLoading ? (
            <h3 className={styles.loading}>Loading...</h3>
          ) : error ? (
            <Link to="/" />
          ) : (
            <>
              <section className={styles.blockProductImg}>
                <img
                  src={currentImgUrl ? currentImgUrl : product?.thumbnail}
                  alt="productFotoMain"
                  className={styles.mainImg}
                />
                <div
                  style={{
                    visibility:
                      product!.images.length < 2 ? 'hidden' : 'visible',
                  }}
                  className={styles.containerImg}
                >
                  {product?.images.map((el, index) => (
                    <img
                      key={index}
                      src={el}
                      alt="productFoto"
                      style={{
                        border: currentImgUrl === el ? '3px solid #c4c4c4' : 'none',
                      }}
                      className={styles.img}
                      onClick={() => setCurrentImgUrl(el)}
                    />
                  ))}
                </div>
              </section>
              <section className={styles.blockProductRight}>
                <div className={styles.topProduct}>
                  <h1 className={styles.title}>{product?.title}</h1>
                  <div className={styles.rating}>
                    <Rating rating={Math.round(product!.rating)} />
                    <div className={styles.ratingText}>
                      {product?.tags.map((element: string, index: number) => (
                        <p key={index}>{element}</p>
                      ))}
                    </div>
                  </div>
                </div>
                <h3 className={styles.productLimitation}>
                  In Stock - Only {product?.stock} left!
                </h3>
                <h6 className={styles.description}>{product?.description}</h6>
                <div className={styles.termBlock}>
                  <p className={styles.termItem}>
                    {product?.warrantyInformation}
                  </p>
                  <p className={styles.termItem}>
                    {product?.shippingInformation}
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
                      <p className={styles.price}>{product?.price} $</p>
                    </div>
                    <span className={styles.verticalLine}></span>
                    <p
                      className={`${styles.ratingText} ${styles.textDiscount}`}
                    >
                      Your discount:{' '}
                      <span className={styles.spanPrice}>
                        {product?.discountPercentage}%
                      </span>
                    </p>
                  </div>
                  <button className={styles.priceButton}>Add to cart</button>
                </div>
              </section>
            </>
          )}
        </div>
      </main>
      <Footer />
    </HelmetProvider>
  )
}

export default ProductPage
