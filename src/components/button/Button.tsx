import styles from './Button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  mode: boolean
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ label, mode }) => {
  const modeStyles = mode ? styles.buttonMainPage : styles.buttonProductPage
  return (
    <button type="button" className={`${styles.button} ${modeStyles}`}>
      {label}
    </button>
  )
}

export default Button
