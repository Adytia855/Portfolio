import React, { useState, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import AboutMe from './components/AboutMe'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

/**
 * @file App.jsx
 * @description The main application component for the portfolio website.
 * It manages the active section, navigation, and handles form submissions.
 * It orchestrates the rendering of different sections like AboutMe, Resume, Portfolio, and Contact.
 */

/**
 * The main App component.
 * Handles routing between different sections of the portfolio,
 * manages state for active navigation, form submissions, and alerts.
 *
 * @returns {JSX.Element} The main application structure.
 */

const App = () => {
   /**
   * State to track the currently visible section (e.g., 'aboutMe', 'resume').
   * @type {[string, React.Dispatch<React.SetStateAction<string>>]}
   */
  const [activeSection, setActiveSection] = useState('aboutMe')
  /**
   * State to track the currently active navigation item in the Navbar.
   * @type {[string, React.Dispatch<React.SetStateAction<string>>]}
   */
  const [activeNav, setActiveNav] = useState('aboutMe')
  /**
   * State to control the visibility of the contact form submission success alert.
   * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]}
   */
  const [showAlert, setShowAlert] = useState(false)
  /**
   * State to indicate if the contact form is currently submitting.
   * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]}
   */
  const [formLoading, setFormLoading] = useState(false)
  /**
   * Ref to the contact form element.
   * @type {React.RefObject<HTMLFormElement>}
   */
  const formRef = useRef(null)

  /**
   * Refs for each main section to enable smooth scrolling.
   * @type {{aboutMe: React.RefObject<HTMLDivElement>, resume: React.RefObject<HTMLDivElement>, portfolio: React.RefObject<HTMLDivElement>, contact: React.RefObject<HTMLDivElement>}}
   */
  const sectionRefs = {
    aboutMe: useRef(null),
    resume: useRef(null),
    portfolio: useRef(null),
    contact: useRef(null),
  }

  /**
   * Handles navigation clicks.
   * Sets the active section and navigation item, then scrolls to the selected section.
   * @param {string} section - The ID of the section to navigate to.
   */
  const handleNavClick = (section) => {
    setActiveSection(section)
    setActiveNav(section)
    setTimeout(() => {
      const el = sectionRefs[section]?.current
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
      }
    }, 100)
  }

    /**
   * Handles the submission of the contact form.
   * Sends form data to a Google Apps Script endpoint.
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
   */
  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setFormLoading(true)
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxrJiMtiq7DB4_OzniOt4gyxMu7JSyNJp4zXUW_pF7bP24lWLqFLiFoFSj7xWGiAL-S2A/exec'
    const form = formRef.current
    try {
      await fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      setShowAlert(true)
      form.reset()
    } catch {
      // Optionally handle error
    } finally {
      setFormLoading(false)
      setTimeout(() => setShowAlert(false), 2000)
    }
  }

  return (
    <main id="body" className="bg-black noise min-h-screen text-white">
      <Navbar activeNav={activeNav} onNavClick={handleNavClick} />
      <section id="profileContainer" className="pt-26 flex flex-col lg:flex-row gap-6 min-h-screen space-y-8 px-4 md:px-28 lg:px-24 xl:px-60">
        <Profile onTalkClick={() => handleNavClick('contact')} />
        <div id="contentContainer" className="flex flex-col gap-6 lg:w-2/3">
          {/* All sections rendered, but animated in/out with Framer Motion */}
          <AnimatePresence mode="wait" initial={false}>
            {['aboutMe', 'resume', 'portfolio', 'contact'].map((section) => (
              activeSection === section && (
                <motion.div
                  key={section}
                  ref={sectionRefs[section]}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.6, type: 'spring', stiffness: 60 } }}
                  exit={{ opacity: 0, y: -40, transition: { duration: 0.3 } }}
                  style={{ width: '100%', scrollMarginTop: '120px', position: 'relative' }}
                >
                  {section === 'aboutMe' && <AboutMe />}
                  {section === 'resume' && <Resume />}
                  {section === 'portfolio' && <Portfolio isActive={activeSection === 'portfolio'} />}
                  {section === 'contact' && <Contact formRef={formRef} onFormSubmit={handleFormSubmit} showAlert={showAlert} formLoading={formLoading} />}
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </section>
    </main>
  )
}

export default App