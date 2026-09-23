const CATEGORIES = ['All', 'Literature', 'Design', 'Technology', 'Business']

export default function CourseFilterBar({ active, onChange }) {
    return (
        <div role="group" aria-label="Filter courses by category" className="flex flex-wrap gap-3">
            {CATEGORIES.map((category) => {
                const isActive = category === active
                return (
                    <button
                        key={category}
                        type="button"
                        aria-pressed={isActive}
                        onClick={() => onChange(category)}
                        className={`rounded-pill px-5 py-2 font-body text-button transition-all duration-hover ease-out hover:scale-[1.03] ${isActive ? 'bg-primary text-white' : 'border border-primary text-text-body'
                            }`}
                    >
                        {category}
                    </button>
                )
            })}
        </div>
    )
}