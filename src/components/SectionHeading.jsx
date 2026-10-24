import Reveal from './Reveal'

export default function SectionHeading({ n, label, title, children }) {
  return (
    <Reveal>
      <p className="eyebrow">{n ? `${n} / ${label}` : label}</p>
      <h2 className="mt-4 max-w-3xl font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-tight tracking-tight">{title}</h2>
      {children && <p className="mt-4 max-w-2xl text-sub">{children}</p>}
    </Reveal>
  )
}
