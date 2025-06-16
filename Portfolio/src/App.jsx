import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import AboutMe from './components/AboutMe'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

const sectionVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.4 } },
}

const App = () => {
  const [activeSection, setActiveSection] = useState('aboutMe');

  // Handler untuk tombol Let's Talk
  const handleLetsTalk = () => setActiveSection('contact');

  return (
    <main id="body" className="bg-black noise min-h-screen text-white">
      <Navbar setActiveSection={setActiveSection} activeSection={activeSection} />
      <main id="profileContainer" className="pt-26 flex flex-col lg:flex-row gap-6 min-h-screen space-y-8 px-4 md:px-28 lg:px-24 xl:px-60">
        <Profile onLetsTalk={handleLetsTalk} />
        <div id="contentContainer" className="flex flex-col gap-6 lg:w-2/3">
          <AnimatePresence mode="wait">
            {activeSection === 'aboutMe' && (
              <motion.div key="aboutMe" variants={sectionVariants} initial="initial" animate="animate" exit="exit">
                <AboutMe />
              </motion.div>
            )}
            {activeSection === 'resume' && (
              <motion.div key="resume" variants={sectionVariants} initial="initial" animate="animate" exit="exit">
                <Resume />
              </motion.div>
            )}
            {activeSection === 'portfolio' && (
              <motion.div key="portfolio" variants={sectionVariants} initial="initial" animate="animate" exit="exit">
                <Portfolio />
              </motion.div>
            )}
            {activeSection === 'contact' && (
              <motion.div key="contact" variants={sectionVariants} initial="initial" animate="animate" exit="exit">
                <Contact />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </main>
  )
}

export default App
