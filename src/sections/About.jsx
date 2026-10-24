import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { profile } from '../data/profile'

export default function About() {
  const { about } = profile
  return (
    <section id="about" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading n="01" label="About" title="Curious by nature. A builder by practice." />
        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <Reveal className="space-y-5 text-sub lg:col-span-7">
            {about.paragraphs.map((t) => <p key={t}>{t}</p>)}
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <dl className="panel divide-y divide-line">
              {about.facts.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-6 px-5 py-4 text-sm">
                  <dt className="font-mono text-mute">{k}</dt><dd className="text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {about.focus.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="panel h-full p-6"><p className="eyebrow">{f.title}</p><p className="mt-3 text-sub">{f.text}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
