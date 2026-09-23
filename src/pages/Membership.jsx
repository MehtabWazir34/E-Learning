import { useEffect, useState } from 'react'
import { Check } from 'lucide-react'
import Seo from '../components/layout/Seo.jsx'
import PageContainer from '../components/layout/PageContainer.jsx'
import Button from '../components/ui/Button.jsx'
import { getMembershipPlans } from '../data/membershipPlans.js'

export default function Membership() {
    const [plans, setPlans] = useState([])

    useEffect(() => {
        getMembershipPlans().then(setPlans)
    }, [])

    return (
        <>
            <Seo path="/membership" />
            <PageContainer className="py-12 md:py-16">
                <h1 className="text-center font-display text-h2 font-bold text-heading">
                    Membership Plans
                </h1>
                <p className="mt-2 text-center text-text-body">
                    Choose the plan that fits how you learn.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`flex flex-col rounded-card p-8 shadow-card ${plan.featured ? 'bg-primary text-white' : 'bg-white'
                                }`}
                        >
                            <h2 className="font-display text-card-title font-bold">{plan.name}</h2>
                            <p className="mt-2">
                                <span className="font-display text-display font-extrabold">${plan.price}</span>
                                <span className={plan.featured ? 'text-white/80' : 'text-text-placeholder'}>
                                    {' '}
                                    /{plan.interval}
                                </span>
                            </p>
                            <ul className="mt-6 flex-1 space-y-3">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-2">
                                        <Check size={18} className="mt-0.5 shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button
                                to="/checkout"
                                variant={plan.featured ? 'ghost' : 'primary'}
                                className="mt-8 w-full"
                            >
                                {plan.cta}
                            </Button>
                        </div>
                    ))}
                </div>
            </PageContainer>
        </>
    )
}