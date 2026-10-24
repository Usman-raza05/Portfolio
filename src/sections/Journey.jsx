import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

const steps = [
  ['01', 'Understand', 'Identify the user problem, goals, and requirements.'],
  ['02', 'Design', 'Plan the interface, user journey, component structure, and visual hierarchy.'],
  ['03', 'Build', 'Implement frontend components, backend logic, APIs, and database workflows.'],
  ['04', 'Refine', 'Test functionality, resolve bugs, improve performance, and refine usability.'],
]

export default function Journey() {
  return (
    <section id="journey" className="bg-bg2 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading n="05" label="Approach" title="From an idea to a working product." />
        <ol className="mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          {steps.map(([n, t, d], i) => (
            <li key={n} className="relative border-l border-line pl-6 md:border-l-0 md:border-t md:pl-0 md:pt-6">
              <span className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-mint md:-top-[5px] md:left-0" />
              <Reveal delay={i * 0.08}>
                <p className="font-display text-5xl font-semibold text-white/10">{n}</p>
                <h3 className="mt-2 font-mono text-sm uppercase tracking-widest text-ink">{t}</h3>
                <p className="mt-3 text-sm text-sub">{d}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
