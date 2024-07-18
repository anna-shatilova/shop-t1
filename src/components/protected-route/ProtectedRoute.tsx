import { Navigate} from 'react-router-dom'
import LoginPage from '../../pages/login-page/LoginPage'
interface IProtectedRoute {
  redirectPath?: string
  isAllowed: boolean
}
export const ProtectedRoute: React.FC<IProtectedRoute> = ({ isAllowed }) => {
  if (!isAllowed) {
    return <Navigate to='/' replace />
  }

  return <LoginPage />
}
