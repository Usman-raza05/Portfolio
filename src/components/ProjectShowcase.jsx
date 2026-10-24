import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import Btn from './Btn'
import Reveal from './Reveal'

function Preview({ p }) {
  if (p.image) {
    return <img src={p.image} alt={`${p.name} screenshot`} loading="lazy" width="1280" height="800"
      className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
  }
  // Branded placeholder: replaced automatically once `image` is set in projects.js
  return (
    <div className="grid aspect-[16/10] w-full place-items-center bg-[radial-gradient(circle_at_30%_20%,rgba(139,255,176,0.12),transparent_60%)] p-6 text-center transition duration-700 group-hover:scale-[1.03]">
      <div>
        <p className="font-display text-4xl font-semibold text-white/15 sm:text-6xl">{p.name}</p>
        <p className="mt-3 font-mono text-xs uppercase tracking-widest text-mute">{p.category}</p>
      </div>
    </div>
  )
}

export default function ProjectShowcase({ p, i }) {
  const flip = i % 2 === 1
  return (
    <Reveal>
      <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
        <div className={`group panel overflow-hidden lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}><Preview p={p} /></div>
        <div className="lg:col-span-5">
          <p className="eyebrow">{String(i + 1).padStart(2, '0')} · {p.category}</p>
          <h3 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{p.name}</h3>
          {p.tagline && <p className="mt-1 text-mint/90">{p.tagline}</p>}
          {p.meta && <p className="mt-1 font-mono text-xs text-mute">{p.meta}</p>}
          <p className="mt-4 text-sub">{p.description}</p>
          {p.highlights?.length > 0 && (
            <ul className="mt-4 space-y-1.5 text-sm text-sub">
              {p.highlights.map((h) => <li key={h} className="flex gap-2"><span className="text-mint">▹</span>{h}</li>)}
            </ul>
          )}
          {p.insight && <p className="mt-4 border-l border-violet/60 pl-4 text-sm text-ti">{p.insight}</p>}
          {p.tags?.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => <li key={t} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-sub">{t}</li>)}
            </ul>
          )}
          <div className="mt-6 flex flex-wrap gap-3">
            {p.live && <Btn href={p.live} primary>View Project <ArrowUpRight size={16} /></Btn>}
            {p.repo && <Btn href={p.repo}><FaGithub /> View Source</Btn>}
            {p.links?.map((l) => <Btn key={l.href} href={l.href}>{l.label}</Btn>)}
          </div>
        </div>
      </article>
    </Reveal>
  )
}
