import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { profile } from '../data/profile'

const links = [['Home', 'home'], ['About', 'about'], ['Experience', 'experience'], ['Skills', 'skills'], ['Projects', 'projects'], ['Contact', 'contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    links.forEach(([, id]) => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect() }
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${scrolled || open ? 'border-b border-line bg-bg/80 backdrop-blur-xl' : 'border-b border-transparent'}`}>
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="font-mono text-sm font-medium tracking-widest">{profile.brand}</a>
        <ul className="hidden items-center gap-7 md:flex">
          {links.map(([label, id]) => (
            <li key={id}>
              <a href={`#${id}`} className={`relative text-sm transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-mint after:transition-all after:duration-300 ${
                active === id ? 'text-ink after:w-full' : 'text-sub after:w-0 hover:text-ink hover:after:w-full'}`}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="Usman Raza on GitHub" className="text-sub transition hover:text-ink"><FaGithub size={20} /></a>
          <a href="#contact" className="hidden rounded-full border border-mint/40 px-4 py-1.5 text-sm text-mint transition hover:bg-mint/10 hover:shadow-[0_0_20px_-8px_#8BFFB0] sm:block">Let’s Talk</a>
          <button className="p-1 md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-line px-5 pb-5 pt-3 md:hidden">
          {[...links, ["Let’s Talk", 'contact']].map(([label, id]) => (
            <li key={label}><a href={`#${id}`} onClick={() => setOpen(false)} className="block py-3 text-lg text-sub hover:text-ink">{label}</a></li>
          ))}
        </ul>
      )}
    </header>
  )
}
