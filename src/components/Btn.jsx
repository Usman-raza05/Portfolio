export default function Btn({ href, children, primary = false, className = '' }) {
  const ext = /^https?:/.test(href)
  return (
    <a href={href} {...(ext && { target: '_blank', rel: 'noopener noreferrer' })}
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition duration-300 hover:-translate-y-0.5 ${
        primary ? 'bg-mint text-black hover:shadow-[0_0_28px_-6px_#8BFFB0]' : 'border border-line text-ink hover:border-white/30 hover:bg-white/5'
      } ${className}`}>
      {children}
    </a>
  )
}
