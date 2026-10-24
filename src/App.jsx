import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Journey from './sections/Journey'
import GitHub from './sections/GitHub'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero /><About /><Experience /><Skills /><Projects /><Journey /><GitHub /><Contact />
      </main>
      <Footer />
    </>
  )
}
