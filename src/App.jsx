import React, { useState, useRef } from 'react'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import AboutMe from './components/AboutMe'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

const sectionIds = ['aboutMe', 'resume', 'portfolio', 'contact']

const App = () => {
  const [activeSection, setActiveSection] = useState('aboutMe')
  const [activeNav, setActiveNav] = useState('aboutMe')
  const [showAlert, setShowAlert] = useState(false)
  const [formLoading, setFormLoading] = useState(false)
  const formRef = useRef(null)

  // Section navigation handler
  const handleNavClick = (section) => {
    setActiveSection(section)
    setActiveNav(section)
  }

  // Contact form submit handler
  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setFormLoading(true)
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxrJiMtiq7DB4_OzniOt4gyxMu7JSyNJp4zXUW_pF7bP24lWLqFLiFoFSj7xWGiAL-S2A/exec'
    const form = formRef.current
    try {
      await fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      setShowAlert(true)
      form.reset()
    } catch (err) {
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
          <div style={{ display: activeSection === 'aboutMe' ? 'block' : 'none' }}>
            <AboutMe />
          </div>
          <div style={{ display: activeSection === 'resume' ? 'block' : 'none' }}>
            <Resume />
          </div>
          <div style={{ display: activeSection === 'portfolio' ? 'block' : 'none' }}>
            <Portfolio />
          </div>
          <div style={{ display: activeSection === 'contact' ? 'block' : 'none' }}>
            <Contact 
              formRef={formRef} 
              onFormSubmit={handleFormSubmit} 
              showAlert={showAlert} 
              formLoading={formLoading} 
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default App