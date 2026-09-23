/**
 * Two-option pill toggle, e.g. Login/Register. `value` is the active
 * option's `id`; `onChange` receives the newly selected id.
 */
export default function Toggle({ options, value, onChange, className = '' }) {
    return (
        <div
            role="tablist"
            className={`inline-flex rounded-[33px] bg-primary-60 p-1 ${className}`}
        >
            {options.map((option) => {
                const isActive = option.id === value
                return (
                    <button
                        key={option.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => onChange(option.id)}
                        className={`rounded-pill px-6 py-2 font-body text-button transition-all duration-hover ease-out ${isActive ? 'bg-primary font-bold text-white' : 'font-normal text-white/90'
                            }`}
                    >
                        {option.label}
                    </button>
                )
            })}
        </div>
    )
}