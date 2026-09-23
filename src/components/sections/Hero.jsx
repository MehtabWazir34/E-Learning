import { Play } from 'lucide-react'
import PageContainer from '../layout/PageContainer.jsx'
import Button from '../ui/Button.jsx'

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-primary/5 py-20 md:py-28">
            <PageContainer className="flex flex-col items-center gap-10 md:flex-row">
                <div className="flex-1 text-center md:text-left">
                    <h1 className="font-display text-display font-extrabold text-heading">
                        All-in-one <span className="text-accent-orange-deep">Studying</span> Platform
                    </h1>
                    <p className="mt-6 font-display text-body-lg text-text-body">
                        Browse courses, join live meetings, and manage your learning calendar — all in one
                        community.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                        <Button to="/register" variant="primary" size="lg">
                            Join for free
                        </Button>
                        <Button as="button" type="button" variant="text" className="flex items-center gap-2">
                            <Play size={18} className="fill-current" /> Watch how it works
                        </Button>
                    </div>
                </div>

                <div className="relative flex-1">
                    <div className="aspect-[4/3] w-full rounded-card bg-primary/20 shadow-hero-photo" />

                    <div className="absolute -bottom-6 -left-6 rounded-card bg-surface-glass p-4 backdrop-blur-glass">
                        <p className="font-display text-card-title font-bold text-heading">250k+</p>
                        <p className="font-display text-card-subtitle text-text-body">Active Students</p>
                    </div>

                    <div className="absolute -top-4 -right-4 rounded-card bg-surface-glass p-4 backdrop-blur-glass">
                        <p className="font-display text-card-title font-bold text-heading">Congratulations 🎉</p>
                        <p className="font-display text-card-subtitle text-text-body">Course completed</p>
                    </div>
                </div>
            </PageContainer>
        </section>
    )
}