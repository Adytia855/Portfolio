import React from 'react'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import AboutMe from './components/AboutMe'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

const App = () => {
  return (
    <main id="body" className="bg-black noise min-h-screen text-white">
      <Navbar />
      <section id="profileContainer" class="pt-26 flex flex-col lg:flex-row gap-6 min-h-screen space-y-8 px-4 md:px-28 lg:px-24 xl:px-60">
        <Profile />
        <div id="contentContainer" class="flex flex-col gap-6 lg:w-2/3">
        <AboutMe />
        <Resume />
        <Portfolio />
        <Contact />
        </div>
      </section>
    </main>
  )
}

export default App