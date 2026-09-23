import { Navigate, useLocation } from 'react-router-dom'
import { useAuthMock } from '../hooks/useAuthMock.js'

export default function ProtectedRoute({ children }) {
    const { isAuthenticated } = useAuthMock()
    const location = useLocation()

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return children
}