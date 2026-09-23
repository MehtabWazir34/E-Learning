import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext.jsx'

export function useAuthMock() {
    const ctx = useContext(AuthContext)
    if (!ctx) {
        throw new Error('useAuthMock must be used within an AuthProvider')
    }
    return ctx
}