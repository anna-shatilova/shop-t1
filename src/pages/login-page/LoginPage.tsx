import { Helmet, HelmetProvider } from 'react-helmet-async'
import Header from '../../components/header/Header'
import styles from './LoginPage.module.css'
import Button from '../../components/button/Button'
import { useEffect, useState } from 'react'

function LoginPage() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [inputError, setInputError] = useState('')

  const handlerSubmitForm = async () => {
    try {
      if (!login) {
        setInputError('Enter login')
        return
      }
      if (!password) {
        setInputError('Enter password')
        return
      }
      //   await getTokens({ login, password }).then((tokensData) => {
      //     if (tokensData.error?.status === 401) {
      //       setInputError('Неправильный пароль')
      //       return
      //     } else {
      //       dispatch(
      //         setAuth({
      //           access_token: tokensData.data.access_token,
      //           refresh_token: tokensData.data.refresh_token,
      //           isAuth: true,
      //         }),
      //       )

      //       navigate('/profile', { replace: true })
      //     }
      //   })
    } catch (error) {
      // setInputError(error.message)
    }
  }
  
  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setInputError('')
  }, [login, password])

  return (
    <HelmetProvider>
      <Helmet>
        <title>Sign in | Goods4you</title>
      </Helmet>
      <Header />
      <main className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={styles.loginHeading}>Sign in</h1>
          <form className={styles.form} action="/login" method="">
            <input
              className={styles.input}
              type="text"
              name="login"
              placeholder="Login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {inputError && <h2 className={styles.inputError}>{inputError}</h2>}
            <Button
              onClick={handlerSubmitForm}
              typeButton={'submit'}
              label={'Sign in'}
              mode={false}
            />
          </form>
        </div>
      </main>
    </HelmetProvider>
  )
}

export default LoginPage
