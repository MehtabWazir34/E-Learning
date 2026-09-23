import { useNavigate } from 'react-router-dom'
import Seo from '../components/layout/Seo.jsx'
import PageContainer from '../components/layout/PageContainer.jsx'
import AuthLayout from '../components/forms/AuthLayout.jsx'
import AuthForm from '../components/forms/AuthForm.jsx'

export default function Register() {
    const navigate = useNavigate()

    return (
        <>
            <Seo path="/register" />
            <PageContainer className="py-12 md:py-20">
                <AuthLayout
                    mode="register"
                    onModeChange={(mode) => mode === 'login' && navigate('/login')}
                    headline="Join a community of learners."
                    photoSrc="/assets/auth/register-photo.jpg"
                >
                    <h1 className="mb-6 font-display text-h2 font-bold text-heading">Register</h1>
                    <AuthForm mode="register" />
                </AuthLayout>
            </PageContainer>
        </>
    )
}