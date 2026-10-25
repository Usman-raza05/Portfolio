import { FaGithub } from 'react-icons/fa'
import { ArrowUpRight } from 'lucide-react'
import ProjectImage from './ProjectImage'
import Gallery from './Gallery'

export default function ProjectCard({ p }) {
  const line = [p.period, p.status].filter(Boolean).join(' · ')
  return (
    <article className="group panel flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-white/25">
      <ProjectImage src={p.coverImage} alt={p.imageAlt} label={p.title} device={p.device} size="sm" />
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow">{p.category}</p>
        <h3 className="mt-3 font-display text-xl font-semibold">{p.title}</h3>
        {line && <p className="mt-1 font-mono text-xs text-mute">{line}</p>}
        <p className="mt-2 flex-1 text-sm text-sub">{p.shortDescription}</p>
        {p.technologies.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {p.technologies.map((t) => <li key={t} className="rounded-full border border-line px-2.5 py-1 font-mono text-xs text-sub">{t}</li>)}
          </ul>
        )}
        {(p.liveUrl || p.repositoryUrl) && (
          <div className="mt-5 flex gap-4 text-sm">
            {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-mint hover:underline">View Project <ArrowUpRight size={14} /></a>}
            {p.repositoryUrl && <a href={p.repositoryUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sub hover:text-ink"><FaGithub /> View Source Code</a>}
          </div>
        )}
        <Gallery project={p} />
      </div>
    </article>
  )
}