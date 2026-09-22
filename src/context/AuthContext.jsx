import { createContext, useCallback, useMemo, useState } from 'react'

export const AuthContext = createContext(null)

/**
 * Mocked authentication state. No real backend/session — this only exists
 * so route-guard UX (e.g. redirecting /checkout to /login) behaves
 * realistically. login()/register() are stubs that flip local state.
 */
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const login = useCallback((credentials) => {
    // Mocked: accept anything, "log in" as a fake user.
    setUser({ name: credentials?.username || 'Student', email: credentials?.email })
    setIsAuthenticated(true)
  }, [])

  const register = useCallback((details) => {
    setUser({ name: details?.name || 'Student', email: details?.email })
    setIsAuthenticated(true)
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    setIsAuthenticated(false)
  }, [])

  const value = useMemo(
    () => ({ isAuthenticated, user, login, register, logout }),
    [isAuthenticated, user, login, register, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}