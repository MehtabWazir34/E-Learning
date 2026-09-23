import { useState } from 'react'
import Seo from '../components/layout/Seo.jsx'
import PageContainer from '../components/layout/PageContainer.jsx'
import CheckoutForm from '../components/forms/CheckoutForm.jsx'

export default function Checkout() {
    const [confirmed, setConfirmed] = useState(false)

    return (
        <>
            <Seo path="/checkout" />
            <PageContainer className="py-12 md:py-16">
                <h1 className="font-display text-h2 font-bold text-heading">Checkout</h1>

                {confirmed ? (
                    <div className="mt-8 rounded-card bg-white p-8 shadow-card">
                        <p className="font-display text-card-title font-bold text-primary">
                            Order confirmed 🎉
                        </p>
                        <p className="mt-2 text-text-body">
                            This is a mocked confirmation — no real payment was processed.
                        </p>
                    </div>
                ) : (
                    <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-3">
                        <div className="rounded-card bg-white p-6 shadow-card lg:col-span-1">
                            <h2 className="font-display text-card-title font-bold text-text-dark">
                                Order Summary
                            </h2>
                            <div className="mt-4 flex justify-between text-text-body">
                                <span>Selected course/plan</span>
                                <span>$79.00</span>
                            </div>
                            <div className="mt-2 flex justify-between border-t border-black/5 pt-2 font-semibold text-text-dark">
                                <span>Total</span>
                                <span>$79.00</span>
                            </div>
                        </div>
                        <div className="rounded-card bg-white p-6 shadow-card lg:col-span-2">
                            <CheckoutForm onSuccess={() => setConfirmed(true)} />
                        </div>
                    </div>
                )}
            </PageContainer>
        </>
    )
}