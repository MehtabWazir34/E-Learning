import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Input from '../ui/Input.jsx'
import Checkbox from '../ui/Checkbox.jsx'
import Button from '../ui/Button.jsx'
import { useAuthMock } from '../../hooks/useAuthMock.js'

const INITIAL_STATE = {
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
}

export default function AuthForm({ mode }) {
    const isRegister = mode === 'register'
    const { login, register } = useAuthMock()
    const navigate = useNavigate()
    const location = useLocation()
    const [values, setValues] = useState(INITIAL_STATE)
    const [errors, setErrors] = useState({})

    function handleChange(field) {
        return (event) => {
            const value = field === 'rememberMe' ? event.target.checked : event.target.value
            setValues((prev) => ({ ...prev, [field]: value }))
        }
    }

    function validate() {
        const nextErrors = {}
        if (isRegister && !values.name) nextErrors.name = 'Name is required'
        if (isRegister && !values.email) nextErrors.email = 'Email is required'
        if (!isRegister && !values.username) nextErrors.username = 'Username is required'
        if (!values.password) nextErrors.password = 'Password is required'
        if (isRegister && values.password !== values.confirmPassword) {
            nextErrors.confirmPassword = 'Passwords do not match'
        }
        return nextErrors
    }

    function handleSubmit(event) {
        event.preventDefault()
        const nextErrors = validate()
        setErrors(nextErrors)
        if (Object.keys(nextErrors).length > 0) return

        // Mocked auth: no backend call, just flips context state.
        if (isRegister) {
            register(values)
        } else {
            login(values)
        }

        const redirectTo = location.state?.from?.pathname || '/'
        navigate(redirectTo, { replace: true })
    }

    return (
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            {isRegister && (
                <Input
                    label="Full Name"
                    placeholder="Jane Doe"
                    value={values.name}
                    onChange={handleChange('name')}
                    error={errors.name}
                    autoComplete="name"
                />
            )}

            {isRegister ? (
                <Input
                    label="Email"
                    type="email"
                    placeholder="you@example.com"
                    value={values.email}
                    onChange={handleChange('email')}
                    error={errors.email}
                    autoComplete="email"
                />
            ) : (
                <Input
                    label="Username"
                    placeholder="janedoe"
                    value={values.username}
                    onChange={handleChange('username')}
                    error={errors.username}
                    autoComplete="username"
                />
            )}

            <Input
                label="Password"
                type="password"
                placeholder="••••••••"
                value={values.password}
                onChange={handleChange('password')}
                error={errors.password}
                autoComplete={isRegister ? 'new-password' : 'current-password'}
            />

            {isRegister && (
                <Input
                    label="Confirm Password"
                    type="password"
                    placeholder="••••••••"
                    value={values.confirmPassword}
                    onChange={handleChange('confirmPassword')}
                    error={errors.confirmPassword}
                    autoComplete="new-password"
                />
            )}

            {!isRegister && (
                <div className="flex items-center justify-between">
                    <Checkbox
                        label="Remember me"
                        checked={values.rememberMe}
                        onChange={handleChange('rememberMe')}
                    />
                    <a href="#forgot-password" className="text-small text-text-body hover:text-primary">
                        Forgot Password?
                    </a>
                </div>
            )}

            <Button as="button" type="submit" className="w-full">
                {isRegister ? 'Create Account' : 'Login'}
            </Button>
        </form>
    )
}