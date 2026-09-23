import { useState } from 'react'
import Input from '../ui/Input.jsx'
import Button from '../ui/Button.jsx'

export default function CheckoutForm({ onSuccess }) {
    const [submitting, setSubmitting] = useState(false)

    function handleSubmit(event) {
        event.preventDefault()
        setSubmitting(true)
        // Mocked: no real payment processing.
        setTimeout(() => {
            setSubmitting(false)
            onSuccess?.()
        }, 600)
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <Input label="Full Name" placeholder="Jane Doe" required autoComplete="name" />
            <Input label="Email" type="email" placeholder="you@example.com" required autoComplete="email" />
            <Input label="Card Number" placeholder="4242 4242 4242 4242" required autoComplete="cc-number" />
            <div className="grid grid-cols-2 gap-4">
                <Input label="Expiry" placeholder="MM/YY" required autoComplete="cc-exp" />
                <Input label="CVC" placeholder="123" required autoComplete="cc-csc" />
            </div>
            <Button as="button" type="submit" disabled={submitting} className="w-full">
                {submitting ? 'Processing…' : 'Confirm & Pay'}
            </Button>
        </form>
    )
}