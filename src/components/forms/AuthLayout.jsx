import Toggle from '../ui/Toggle.jsx'

const TOGGLE_OPTIONS = [
    { id: 'login', label: 'Login' },
    { id: 'register', label: 'Register' },
]

/**
 * Split layout: rounded photo panel (hidden below the mobile breakpoint,
 * per the dedicated Mobile Login/Register frames) + form panel. Owns the
 * active Login/Register tab and hands it to both the Toggle and AuthForm.
 */
export default function AuthLayout({ mode, onModeChange, headline, photoSrc, children }) {
    return (
        <div className="mx-auto flex max-w-[1440px] flex-col overflow-hidden md:min-h-[720px] md:flex-row md:items-stretch">
            <div className="relative hidden overflow-hidden rounded-card shadow-hero-photo md:block md:w-1/2">
                <img
                    src={photoSrc}
                    alt=""
                    className="h-full w-full object-cover"
                    onError={(event) => {
                        event.currentTarget.style.display = 'none'
                    }}
                />
                {headline && (
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 to-transparent p-8">
                        <p className="font-display text-body-lg font-bold text-white">{headline}</p>
                    </div>
                )}
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-8 p-6 md:w-1/2 md:p-12">
                <Toggle options={TOGGLE_OPTIONS} value={mode} onChange={onModeChange} />
                <div className="w-full max-w-sm">{children}</div>
            </div>
        </div>
    )
}