import { useNavigate } from 'react-router-dom'
import Seo from '../components/layout/Seo.jsx'
import PageContainer from '../components/layout/PageContainer.jsx'
import AuthLayout from '../components/forms/AuthLayout.jsx'
import AuthForm from '../components/forms/AuthForm.jsx'

export default function Login() {
    const navigate = useNavigate()

    return (
        <>
            <Seo path="/login" />
            <PageContainer className="py-12 md:py-20">
                <AuthLayout
                    mode="login"
                    onModeChange={(mode) => mode === 'register' && navigate('/register')}
                    headline="Welcome back — keep learning."
                    photoSrc="/assets/auth/login-photo.jpg"
                >
                    <h1 className="mb-6 font-display text-h2 font-bold text-heading">Login</h1>
                    <AuthForm mode="login" />
                </AuthLayout>
            </PageContainer>
        </>
    )
}