import { useId } from 'react'

export default function Checkbox({ label, id, className = '', ...props }) {
    const generatedId = useId()
    const checkboxId = id || generatedId

    return (
        <label htmlFor={checkboxId} className={`flex items-center gap-2 ${className}`}>
            <input
                id={checkboxId}
                type="checkbox"
                className="h-4 w-4 rounded border-black text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                {...props}
            />
            <span className="font-body text-small text-text-body">{label}</span>
        </label>
    )
}