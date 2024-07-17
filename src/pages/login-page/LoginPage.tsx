import { Helmet, HelmetProvider } from 'react-helmet-async'
import Header from '../../components/header/Header'
import styles from './LoginPage.module.css'
import Button from '../../components/button/Button'
import { useId, useState } from 'react'
import { useGetTokenMutation } from '../../services/userApi'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IUserLogin } from '../../interface/ApiInterface'
// import { useAppDispatch } from '../../store/store'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const [errorMessage, setErrorMessage] = useState('')

  const [getToken, { isLoading }] = useGetTokenMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>()

  const form = useId()
  //   const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<IUserLogin> = async (data) => {
    await getToken(data)
      .unwrap()
      .then((fulfilled) => {
        localStorage.setItem('access_token', fulfilled.token)

        navigate('/')
      })
      .catch((rejected) => {
        if (rejected.status === 400) {
          setErrorMessage('Incorrect login or password')
        }
        if (rejected.status === 500) {
          setErrorMessage('Server is not available')
        }

        return
      })

    // dispatch(setUser(data.email))
  }


  return (
    <HelmetProvider>
      <Helmet>
        <title>Sign in | Goods4you</title>
      </Helmet>
      <Header isLogin={true} />
      <main className={styles.wrapper}>
        <div className={styles.container}>
          {isLoading ? (
            <h1 className={styles.loading}>Loading...</h1>
          ) : (
            <>
              <h1 className={styles.loginHeading}>Sign in</h1>
              <form
                id={form}
                className={styles.form}
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  {...register('login', { required: true })}
                  className={styles.input}
                  type="text"
                  name="login"
                  placeholder="Login"
                />
                <input
                  {...register('password', { required: true })}
                  className={styles.input}
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                {errors.login && (
                  <h2 className={styles.inputError}>Login is required</h2>
                )}
                {errors.password && (
                  <h2 className={styles.inputError}>Password is required</h2>
                )}
                {errorMessage && (
                  <h2 className={styles.inputError}>{errorMessage}</h2>
                )}
                <Button typeButton={'submit'} label={'Sign in'} mode={false} />
              </form>
            </>
          )}
        </div>
      </main>
    </HelmetProvider>
  )
}

export default LoginPage
