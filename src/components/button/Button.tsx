import styles from './Button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  mode: boolean
  typeButton: 'button' | 'submit'
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ label, mode, typeButton }) => {
  const modeStyles = mode ? styles.buttonMainPage : styles.buttonProductPage
  return (
    <button type={typeButton} className={`${styles.button} ${modeStyles}`}>
      {label}
    </button>
  )
}

export default Button
