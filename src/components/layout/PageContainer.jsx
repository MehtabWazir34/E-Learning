export default function PageContainer({ className = '', children }) {
    return (
        <div className={`mx-auto max-w-[1600px] px-6 md:px-10 ${className}`}>{children}</div>
    )
}