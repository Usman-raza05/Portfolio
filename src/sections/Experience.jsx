import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading n="02" label="Experience" title="Where I learn by building." />
        <ol className="mt-14 space-y-12 border-l border-line pl-6 sm:pl-10">
          {experience.map((e, i) => (
            <li key={e.org} className="relative">
              <span className="absolute -left-[1.8rem] top-2 h-2.5 w-2.5 rounded-full bg-mint shadow-[0_0_12px_#8BFFB0] sm:-left-[2.8rem]" />
              <Reveal delay={i * 0.08}>
                <p className="font-mono text-xs text-mute">{e.period}{e.meta ? ` · ${e.meta}` : ''}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold">{e.role}</h3>
                <p className="text-ti">{e.org}</p>
                {e.tagline && <p className="mt-1 font-mono text-xs text-mint/80">{e.tagline}</p>}
                <p className="mt-4 max-w-2xl text-sub">{e.description}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-sub">
                  {e.points.map((pt) => <li key={pt} className="flex gap-2"><span className="text-mint">▹</span>{pt}</li>)}
                </ul>
                {e.links.length > 0 && (
                  <div className="mt-4 flex gap-5 text-sm">
                    {e.links.map((l) => <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="text-mint hover:underline">{l.label} ↗</a>)}
                  </div>
                )}
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
