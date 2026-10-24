import { FaGithub } from 'react-icons/fa'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Btn from '../components/Btn'
import { featured } from '../data/projects'
import { profile } from '../data/profile'

const repos = featured.filter((p) => ['visionlab', 'chai-ai'].includes(p.id))

export default function GitHub() {
  return (
    <section id="github" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="GitHub & Open Source" title="Code, experiments, and progress." />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {repos.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <a href={p.repo} target="_blank" rel="noopener noreferrer"
                className="panel group flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:border-mint/40">
                <div className="flex items-center justify-between text-sub"><FaGithub size={22} /><ArrowUpRight size={18} className="transition group-hover:text-mint" /></div>
                <h3 className="mt-6 font-display text-xl font-semibold">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm text-sub">{p.description}</p>
                <p className="mt-4 font-mono text-xs text-mute">{p.tags.join(' · ')}</p>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8"><Btn href={profile.github}><FaGithub /> View all repositories</Btn></Reveal>
      </div>
    </section>
  )
}
