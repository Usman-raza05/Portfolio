import { ArrowUp } from 'lucide-react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { profile } from '../data/profile'

export default function Footer() {
  const link = 'inline-flex items-center gap-2 text-sub transition hover:text-ink'
  return (
    <footer className="border-t border-line px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-sm tracking-widest">{profile.brand}</p>
          <p className="mt-1 text-sm text-mute">Designed with intent. Built with code.</p>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-sm">
          <a className={link} href={profile.github} target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
          <a className={link} href={profile.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a>
          {profile.linkedin && <a className={link} href={profile.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>}
          <a className={link} href={`mailto:${profile.email}`}>Email</a>
          <a className={link} href="#home" aria-label="Back to top"><ArrowUp size={16} /> Top</a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl font-mono text-xs text-mute">© {new Date().getFullYear()} {profile.name}</p>
    </footer>
  )
}
