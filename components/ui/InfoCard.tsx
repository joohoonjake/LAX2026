interface InfoCardProps {
  title?: string
  children: React.ReactNode
  className?: string
  highlight?: boolean
}

export default function InfoCard({ title, children, className = '', highlight = false }: InfoCardProps) {
  return (
    <div
      className={`rounded-xl bg-white p-5 md:p-6 ${
        highlight
          ? 'border-2 border-[#0F6E56]'
          : 'border border-neutral-200'
      } ${className}`}
    >
      {title && (
        <h2 className="text-base font-medium text-neutral-900 mb-3 tracking-tight">
          {title}
        </h2>
      )}
      {children}
    </div>
  )
}
