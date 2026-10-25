import { ArrowUpRight, Download } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import Btn from './Btn'
import Reveal from './Reveal'
import ProjectImage from './ProjectImage'
import Gallery from './Gallery'

export default function ProjectShowcase({ p, i }) {
  const flip = i % 2 === 1
  return (
    <Reveal>
      <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
        <div className={`group panel overflow-hidden lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}>
          <ProjectImage src={p.coverImage} alt={p.imageAlt} label={p.title} sub={p.category} device={p.device} eager={i === 0} />
        </div>
        <div className="lg:col-span-5">
          <p className="eyebrow">{String(i + 1).padStart(2, '0')} · {p.category}</p>
          <h3 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{p.title}</h3>
          {p.tagline && <p className="mt-1 text-mint/90">{p.tagline}</p>}
          {p.meta && <p className="mt-1 font-mono text-xs text-mute">{p.meta}</p>}
          {p.status && <p className="mt-1 font-mono text-xs text-mute">{p.status}</p>}
          <p className="mt-4 text-sub">{p.shortDescription}</p>
          {p.highlights?.length > 0 && (
            <ul className="mt-4 space-y-1.5 text-sm text-sub">
              {p.highlights.map((h) => <li key={h} className="flex gap-2"><span className="text-mint">▹</span>{h}</li>)}
            </ul>
          )}
          {p.insight && <p className="mt-4 border-l border-violet/60 pl-4 text-sm text-ti">{p.insight}</p>}
          {p.teamOrIndividualContribution && <p className="mt-4 text-sm text-sub"><span className="font-mono text-xs uppercase tracking-widest text-mute">My role · </span>{p.teamOrIndividualContribution}</p>}
          {p.technologies?.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-2">
              {p.technologies.map((t) => <li key={t} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-sub">{t}</li>)}
            </ul>
          )}
          <div className="mt-6 flex flex-wrap gap-3">
            {p.liveUrl && <Btn href={p.liveUrl} primary>View Project <ArrowUpRight size={16} /></Btn>}
            {p.downloadUrl && <Btn href={p.downloadUrl} primary={!p.liveUrl}><Download size={16} /> Download APK</Btn>}
            {p.repositoryUrl && <Btn href={p.repositoryUrl}><FaGithub /> View Source Code</Btn>}
            {p.links?.map((l) => <Btn key={l.href} href={l.href}>{l.label}</Btn>)}
          </div>
          {p.downloadNote && <p className="mt-3 text-xs text-mute">{p.downloadNote}</p>}
          <Gallery project={p} />
        </div>
      </article>
    </Reveal>
  )
}