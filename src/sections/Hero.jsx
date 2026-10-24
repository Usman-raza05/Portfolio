import { motion, useReducedMotion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import Btn from '../components/Btn'
import { profile as p } from '../data/profile'

const rows = [
  ['role', '["React.js Intern","Full-Stack Developer"]'],
  ['stack', '["React", "Node", "Python"]'],
  ['building', '["AI tools", "Web apps", "Mobile"]'],
  ['education', '"BCA · Year 3"'],
  ['base', '"Junagadh, India"'],
]

export default function Hero() {
  const reduce = useReducedMotion()
  const fade = (i) => reduce ? {} : {
    initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 },
    transition: { delay: i * 0.08, duration: 0.6, ease: 'easeOut' },
  }
  return (
    <section id="home" className="relative isolate overflow-hidden px-5 pb-24 pt-32 sm:px-8 lg:pt-40">
      <div className="glow absolute inset-0 -z-10" />
      <div className="grid-bg absolute inset-0 -z-10" />
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.p {...fade(0)} className="eyebrow">{p.eyebrow}</motion.p>
          <motion.h1 {...fade(1)} className="mt-5 font-display text-[clamp(3rem,10vw,6.5rem)] font-semibold leading-[0.95] tracking-tight">{p.name}</motion.h1>
          <motion.p {...fade(2)} className="mt-5 max-w-xl text-xl text-ti sm:text-2xl">{p.role}</motion.p>
          <motion.p {...fade(3)} className="mt-5 max-w-xl text-sub">{p.intro}</motion.p>
          <motion.div {...fade(4)} className="mt-8 flex flex-wrap gap-3">
            <Btn href="#projects" primary>View Projects</Btn>
            <Btn href="#contact">Contact Me</Btn>
            <Btn href={p.github}><FaGithub /> Explore GitHub</Btn>
          </motion.div>
          <motion.p {...fade(5)} className="mt-8 flex items-center gap-3 font-mono text-xs text-mute">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-mint opacity-60 motion-safe:animate-ping" />
              <span className="relative h-2 w-2 rounded-full bg-mint" />
            </span>
            {p.status}
          </motion.p>
        </div>
        <motion.div {...fade(3)} className="panel overflow-hidden lg:col-span-5" aria-hidden="true">
          <div className="flex items-center gap-2 border-b border-line px-4 py-3">
            {[0, 1, 2].map((i) => <span key={i} className="h-2.5 w-2.5 rounded-full bg-white/15" />)}
            <span className="ml-3 font-mono text-xs text-mute">usman.config.js</span>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-sub"><code>
            <span className="text-violet">export const</span> usman = {'{'}
            {rows.map(([k, v]) => (
              <span key={k} className="block pl-5"><span className="text-ti">{k}</span>: <span className="text-mint">{v}</span>,</span>
            ))}
            {'}'}
          </code></pre>
        </motion.div>
      </div>
    </section>
  )
}
