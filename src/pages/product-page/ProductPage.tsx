import { Helmet, HelmetProvider } from 'react-helmet-async'
import styles from './ProductPage.module.css'
import shoes from '../../assets/shoes.png'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Rating from '../../components/raiting/Rating'

function ProductPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Essence Mascara Lash Princess | Goods4you</title>
      </Helmet>
      <Header />
      <main className={styles.wrapper}>
        <div className={styles.container}>
          <section className={styles.blockProductImg}>
            <img src={shoes} alt="shoes" className={styles.mainImg} />
            <div className={styles.containerImg}>
              <img src={shoes} alt="shoes1" className={styles.img} />
              <img src={shoes} alt="shoes2" className={styles.img} />
              <img src={shoes} alt="shoes3" className={styles.img} />
              <img src={shoes} alt="shoes4" className={styles.img} />
              <img src={shoes} alt="shoes5" className={styles.img} />
              <img src={shoes} alt="shoes6" className={styles.img} />
            </div>
          </section>
          <section className={styles.blockProductRight}>
            <div className={styles.topProduct}>
              <h1 className={styles.title}>Essence Mascara Lash Princess</h1>
              <div className={styles.rating}>
                <Rating rating={4} />
                <p className={styles.ratingText}>electronics, selfie accessories</p>
              </div>
            </div>
              <h3 className={styles.productLimitation}>In Stock - Only 5 left!</h3>
              <h6 className={styles.description}>The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.</h6>
            <div className={styles.termBlock}>
              <p className={styles.termItem}>1 month warranty</p>
              <p className={styles.termItem}>Ships in 1 month</p>
            </div>
            <div className={styles.priceBlockProduct}>
              <div className={styles.priceContent}>
                <div>
                <p className={styles.priceDiscount}>7.17$</p>
                <p className={styles.price}>9.99$</p>
                </div>
                <span className={styles.verticalLine}></span>
                <p className={`${styles.ratingText} ${styles.textDiscount}`}>Your discount: <span className={styles.spanPrice}>14.5%</span></p>
              </div>
              <button className={styles.priceButton}>Add to cart</button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </HelmetProvider>
  )
}

export default ProductPage
