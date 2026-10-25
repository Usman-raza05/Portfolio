import ProjectImage from './ProjectImage'
import useAvailableImages from '../hooks/useAvailableImages'

// Appears only once at least one screenshot file exists at the documented path.
export default function Gallery({ project }) {
  const shots = useAvailableImages(project.screenshots)
  if (!shots.length) return null
  const phone = project.device === 'phone'
  return (
    <details className="mt-5 rounded-xl border border-line px-4 py-3">
      <summary className="cursor-pointer select-none font-mono text-xs uppercase tracking-widest text-mint">View Screenshots ({shots.length})</summary>
      <ul className={`mt-4 grid gap-3 ${phone ? 'grid-cols-3' : 'sm:grid-cols-2'}`}>
        {shots.map((s, i) => (
          <li key={s} className="panel overflow-hidden">
            <ProjectImage src={s} alt={`${project.title} screenshot ${i + 1}`} label={project.title} kind={phone ? 'phone' : 'landscape'} />
          </li>
        ))}
      </ul>
    </details>
  )
}