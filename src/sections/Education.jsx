import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import ProjectImage from '../components/ProjectImage'
import { education, certifications } from '../data/certifications'

export default function Education() {
  return (
    <section id="education" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="Education & Certifications" title="Learning, formally and by doing." />
        <Reveal className="mt-10">
          <div className="panel p-6">
            <p className="eyebrow">{education.status}</p>
            <h3 className="mt-3 font-display text-2xl font-semibold">{education.degree}</h3>
            <p className="mt-1 text-ti">{education.school} · {education.location}</p>
          </div>
        </Reveal>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.06}>
              <article className="group panel flex h-full gap-5 p-5">
                <div className="w-28 shrink-0 self-start overflow-hidden rounded-lg border border-line sm:w-36">
                  <ProjectImage src={c.image} alt={`${c.title} certificate`} label="Certificate" kind="certificate" fit="contain" size="sm" />
                </div>
                <div>
                  <p className="font-mono text-xs text-mute">{c.issued}</p>
                  <h3 className="mt-1 font-display text-lg font-semibold leading-snug">{c.title}</h3>
                  <p className="mt-1 text-sm text-ti">{c.issuer}</p>
                  {c.focus && <p className="mt-2 text-sm text-sub">{c.focus}</p>}
                  {c.credentialId && <p className="mt-2 font-mono text-xs text-mute">Credential ID: {c.credentialId}</p>}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}