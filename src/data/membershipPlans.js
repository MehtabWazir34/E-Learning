const membershipPlans = [
    {
        id: 'basic',
        name: 'Basic',
        price: 0,
        interval: 'forever',
        features: ['Access to free courses', 'Community forum access', 'Monthly newsletter'],
        cta: 'Start Free',
    },
    {
        id: 'pro',
        name: 'Pro',
        price: 19,
        interval: 'month',
        featured: true,
        features: [
            'Everything in Basic',
            'Unlimited course access',
            'Live meeting rooms',
            'Calendar & scheduling tools',
        ],
        cta: 'Go Pro',
    },
    {
        id: 'teams',
        name: 'Teams',
        price: 49,
        interval: 'month',
        features: [
            'Everything in Pro',
            'Up to 10 seats',
            'Admin dashboard (coming soon)',
            'Priority support',
        ],
        cta: 'Contact Sales',
    },
]

export function getMembershipPlans() {
    return Promise.resolve(membershipPlans)
}