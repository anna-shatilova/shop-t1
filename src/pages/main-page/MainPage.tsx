import styles from './MainPage.module.css'
import { Link } from 'react-router-dom'
import product from '../../assets/product.png'
import Accordion from '../../components/accordion/Accordion'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function MainPage() {
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
                <button className={styles.topButton}>Go to shopping</button>
              </div>
            </div>
          </section>
          <section className={styles.containerCenter}>
            <h1 className={styles.title}>Catalog</h1>
            <input
              className={styles.inputSearch}
              type="text"
              placeholder="Search by title"
              aria-label="поле ввода поиска"
            />
            <div className={styles.productBlock}>
              <section className={styles.product}>
                <Link to={'/'}>
                  <div className={styles.imgContainer}>
                    <img
                      src={product}
                      alt="sneakers"
                      aria-label="Essence Mascara Lash Princess"
                      className={styles.productImg}
                    />
                    <div className={styles.overlay}>Show details</div>
                  </div>
                </Link>
                <div className={styles.productContext}>
                  <Link to={'/'}>
                    <h3 className={styles.productHeading}>
                      Essence Mascara Lash Princess
                    </h3>
                    <p className={styles.productPrice}>110 $</p>
                  </Link>
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
                </div>
              </section>
              <section className={styles.product}>
                <Link to={'/'}>
                  <div className={styles.imgContainer}>
                    <img
                      src={product}
                      alt="sneakers"
                      aria-label="Essence Mascara Lash Princess"
                      className={styles.productImg}
                    />
                    <div className={styles.overlay}>Show details</div>
                  </div>
                </Link>
                <div className={styles.productContext}>
                  <Link to={'/'}>
                    <h3 className={styles.productHeading}>
                      Essence Mascara Lash Princess
                    </h3>
                    <p className={styles.productPrice}>110 $</p>
                  </Link>
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
                </div>
              </section>
              <section className={styles.product}>
                <Link to={'/'}>
                  <div className={styles.imgContainer}>
                    <img
                      src={product}
                      alt="sneakers"
                      aria-label="Essence Mascara Lash Princess"
                      className={styles.productImg}
                    />
                    <div className={styles.overlay}>Show details</div>
                  </div>
                </Link>
                <div className={styles.productContext}>
                  <Link to={'/'}>
                    <h3 className={styles.productHeading}>
                      Essence Mascara Lash Princess
                    </h3>
                    <p className={styles.productPrice}>110 $</p>
                  </Link>
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
                </div>
              </section>
              <section className={styles.product}>
                <Link to={'/'}>
                  <div className={styles.imgContainer}>
                    <img
                      src={product}
                      alt="sneakers"
                      aria-label="Essence Mascara Lash Princess"
                      className={styles.productImg}
                    />
                    <div className={styles.overlay}>Show details</div>
                  </div>
                </Link>
                <div className={styles.productContext}>
                  <Link to={'/'}>
                    <h3 className={styles.productHeading}>
                      Essence Mascara Lash Princess
                    </h3>
                    <p className={styles.productPrice}>110 $</p>
                  </Link>
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
                </div>
              </section>
              <section className={styles.product}>
                <Link to={'/'}>
                  <div className={styles.imgContainer}>
                    <img
                      src={product}
                      alt="sneakers"
                      aria-label="Essence Mascara Lash Princess"
                      className={styles.productImg}
                    />
                    <div className={styles.overlay}>Show details</div>
                  </div>
                </Link>
                <div className={styles.productContext}>
                  <Link to={'/'}>
                    <h3 className={styles.productHeading}>
                      Essence Mascara Lash Princess
                    </h3>
                    <p className={styles.productPrice}>110 $</p>
                  </Link>
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
                </div>
              </section>
              <section className={styles.product}>
                <Link to={'/'}>
                  <div className={styles.imgContainer}>
                    <img
                      src={product}
                      alt="sneakers"
                      aria-label="Essence Mascara Lash Princess"
                      className={styles.productImg}
                    />
                    <div className={styles.overlay}>Show details</div>
                  </div>
                </Link>
                <div className={styles.productContext}>
                  <Link to={'/'}>
                    <h3 className={styles.productHeading}>
                      Essence Mascara Las...
                    </h3>
                    <p className={styles.productPrice}>110 $</p>
                  </Link>
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
                    <p className={styles.counter}>1 item</p>
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
                </div>
              </section>
              <section className={styles.product}>
                <Link to={'/'}>
                  <div className={styles.imgContainer}>
                    <img
                      src={product}
                      alt="sneakers"
                      aria-label="Essence Mascara Lash Princess"
                      className={styles.productImg}
                    />
                    <div className={styles.overlay}>Show details</div>
                  </div>
                </Link>
                <div className={styles.productContext}>
                  <Link to={'/'}>
                    <h3 className={styles.productHeading}>
                      Essence Mascara Lash Princess
                    </h3>
                    <p className={styles.productPrice}>110 $</p>
                  </Link>
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
                </div>
              </section>
              <section className={styles.product}>
                <Link to={'/'}>
                  <div className={styles.imgContainer}>
                    <img
                      src={product}
                      alt="sneakers"
                      aria-label="Essence Mascara Lash Princess"
                      className={styles.productImg}
                    />
                    <div className={styles.overlay}>Show details</div>
                  </div>
                </Link>
                <div className={styles.productContext}>
                  <Link to={'/'}>
                    <h3 className={styles.productHeading}>
                      Essence Mascara Lash Princess
                    </h3>
                    <p className={styles.productPrice}>110 $</p>
                  </Link>
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
                </div>
              </section>
              <section className={styles.product}>
                <Link to={'/'}>
                  <div className={styles.imgContainer}>
                    <img
                      src={product}
                      alt="sneakers"
                      aria-label="Essence Mascara Lash Princess"
                      className={styles.productImg}
                    />
                    <div className={styles.overlay}>Show details</div>
                  </div>
                </Link>
                <div className={styles.productContext}>
                  <Link to={'/'}>
                    <h3 className={styles.productHeading}>
                      Essence Mascara Lash Princess
                    </h3>
                    <p className={styles.productPrice}>110 $</p>
                  </Link>
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
                </div>
              </section>
              <section className={styles.product}>
                <Link to={'/'}>
                  <div className={styles.imgContainer}>
                    <img
                      src={product}
                      alt="sneakers"
                      aria-label="Essence Mascara Lash Princess"
                      className={styles.productImg}
                    />
                    <div className={styles.overlay}>Show details</div>
                  </div>
                </Link>
                <div className={styles.productContext}>
                  <Link to={'/'}>
                    <h3 className={styles.productHeading}>
                      Essence Mascara Lash Princess
                    </h3>
                    <p className={styles.productPrice}>110 $</p>
                  </Link>
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
                </div>
              </section>
              <section className={styles.product}>
                <Link to={'/'}>
                  <div className={styles.imgContainer}>
                    <img
                      src={product}
                      alt="sneakers"
                      aria-label="Essence Mascara Lash Princess"
                      className={styles.productImg}
                    />
                    <div className={styles.overlay}>Show details</div>
                  </div>
                </Link>
                <div className={styles.productContext}>
                  <Link to={'/'}>
                    <h3 className={styles.productHeading}>
                      Essence Mascara Lash Princess
                    </h3>
                    <p className={styles.productPrice}>110 $</p>
                  </Link>
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
                </div>
              </section>
              <section className={styles.product}>
                <Link to={'/'}>
                  <div className={styles.imgContainer}>
                    <img
                      src={product}
                      alt="sneakers"
                      aria-label="Essence Mascara Lash Princess"
                      className={styles.productImg}
                    />
                    <div className={styles.overlay}>Show details</div>
                  </div>
                </Link>
                <div className={styles.productContext}>
                  <Link to={'/'}>
                    <h3 className={styles.productHeading}>
                      Essence Mascara Lash Princess
                    </h3>
                    <p className={styles.productPrice}>110 $</p>
                  </Link>
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
                </div>
              </section>
            </div>
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
