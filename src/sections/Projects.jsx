import SectionHeading from '../components/SectionHeading'
import ProjectShowcase from '../components/ProjectShowcase'
import ProjectCard from '../components/ProjectCard'
import { featured, additional } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading n="04" label="Selected Work" title="Projects built to solve real problems.">
          A selection of applications, experiments, and digital products spanning AI, web development, mobile applications, productivity, and education.
        </SectionHeading>
        <div className="mt-16 space-y-24">
          {featured.map((p, i) => <ProjectShowcase key={p.id} p={p} i={i} />)}
        </div>
        <h3 className="mt-28 font-display text-2xl font-semibold">More work</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {additional.map((p) => <ProjectCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  )
}
