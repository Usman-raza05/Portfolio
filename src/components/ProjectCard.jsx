import { FaGithub } from 'react-icons/fa'
import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ p }) {
  return (
    <article className="panel flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:border-white/25">
      <p className="eyebrow">{p.category}</p>
      <h3 className="mt-3 font-display text-xl font-semibold">{p.name}</h3>
      <p className="mt-2 flex-1 text-sm text-sub">{p.description}</p>
      {p.tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => <li key={t} className="rounded-full border border-line px-2.5 py-1 font-mono text-xs text-sub">{t}</li>)}
        </ul>
      )}
      {(p.live || p.repo) && (
        <div className="mt-5 flex gap-4 text-sm">
          {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-mint hover:underline">View Project <ArrowUpRight size={14} /></a>}
          {p.repo && <a href={p.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sub hover:text-ink"><FaGithub /> View Source</a>}
        </div>
      )}
    </article>
  )
}
