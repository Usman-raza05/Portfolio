import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="bg-bg2 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading n="03" label="Toolkit" title="Technology I work with." />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05}>
              <div className="panel h-full p-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-mint">{g.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li key={s} className="rounded-full border border-line bg-white/[0.02] px-3.5 py-2 text-sm text-sub transition duration-300 hover:-translate-y-0.5 hover:border-mint/50 hover:text-ink hover:shadow-[0_0_20px_-8px_#8BFFB0]">{s}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-sm text-mute">These are technologies I’ve used across projects, not a claim of equal depth in each. The AI groups are split by evidence: hands-on integration in my projects, experiments and prototypes, and coursework or workshops.</p>
      </div>
    </section>
  )
}
