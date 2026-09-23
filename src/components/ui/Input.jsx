import { useId, useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

export default function Input({
    label,
    type = 'text',
    error,
    id,
    className = '',
    ...props
}) {
    const generatedId = useId()
    const inputId = id || generatedId
    const [showPassword, setShowPassword] = useState(false)
    const isPassword = type === 'password'
    const resolvedType = isPassword && showPassword ? 'text' : type

    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            {label && (
                <label htmlFor={inputId} className="font-body text-label text-black">
                    {label}
                </label>
            )}
            <div className="relative">
                <input
                    id={inputId}
                    type={resolvedType}
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? `${inputId}-error` : undefined}
                    className={`h-[54px] w-full rounded-pill border border-primary bg-white px-5 font-body text-placeholder text-text-body placeholder:text-text-placeholder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${isPassword ? 'pr-12' : ''
                        } ${error ? 'border-accent-coral' : ''}`}
                    {...props}
                />
                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-text-placeholder hover:text-primary"
                    >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                )}
            </div>
            {error && (
                <p id={`${inputId}-error`} className="text-small text-accent-coral">
                    {error}
                </p>
            )}
        </div>
    )
}