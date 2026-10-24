import { Mail } from 'lucide-react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Btn from '../components/Btn'
import { profile as p } from '../data/profile'

export default function Contact() {
  return (
    <section id="contact" className="relative isolate px-5 py-28 sm:px-8">
      <div className="glow absolute inset-0 -z-10" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading n="06" label="Contact" title="Have an idea worth building?">
          I’m interested in useful products, challenging engineering problems, AI-powered applications, and opportunities to keep learning and building.
        </SectionHeading>
        <Reveal className="mt-8 flex flex-wrap gap-3">
          <Btn href={`mailto:${p.email}`} primary><Mail size={16} /> Email Me</Btn>
          <Btn href={p.github}><FaGithub /> GitHub</Btn>
          <Btn href={p.instagram}><FaInstagram /> Instagram</Btn>
          {p.linkedin && <Btn href={p.linkedin}><FaLinkedin /> LinkedIn</Btn>}
        </Reveal>
        <p className="mt-6 font-mono text-sm text-mute">{p.email}</p>
      </div>
    </section>
  )
}
