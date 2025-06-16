import React, { useState } from 'react'
import { motion } from 'framer-motion'
import pc3 from '../assets/pc3.jpg'

const sosmedVariants = {
  initial: { scale: 1, rotate: 0 },
  animate: { scale: 1.18, rotate: -10, transition: { type: 'spring', stiffness: 300, damping: 15, duration: 0.18 } },
  rest: { scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 300, damping: 20, duration: 0.18 } },
}

const Profile = ({ onTalkClick }) => {
  const [talkClicked, setTalkClicked] = useState(false)
  const [sosmedClicked, setSosmedClicked] = useState(null)

  // Handler for Let's Talk button
  const handleTalkClick = () => {
    setTalkClicked(true)
    if (onTalkClick) onTalkClick()
    setTimeout(() => setTalkClicked(false), 600)
  }

  // Handler for social media button click/touch
  const handleSosmedClick = (id) => {
    setSosmedClicked(id)
    setTimeout(() => setSosmedClicked(null), 400)
  }

  return (
    <aside id="profile" className="bg-gray-400/20 rounded-3xl p-8 text-center lg:w-1/3 max-h-max ">
      <img src={pc3} alt="Profile Picture" className="mx-auto mb-6 h-72 w-60 rounded-xl object-cover" />
      <h2 className="text-zinc-200 text-3xl font-extrabold mb-2">Adytia Griansyah</h2>
      <p className="text-amber-400 text-2xl mb-1">Frontend Developer</p>
      <p className="text-gray-400 mb-4">Bandung, Indonesia</p>

      <div className="flex justify-center space-x-5 mb-6 text-gray-400">
        {/* GitHub */}
        <motion.a
          className={`sosmed-btn relative p-2 rounded-md group transition`}
          href="https://github.com/Adytia855"
          target="_blank" aria-label="GitHub"
          onTouchStart={() => handleSosmedClick('github')}
          onClick={() => handleSosmedClick('github')}
          variants={sosmedVariants}
          initial="initial"
          animate={sosmedClicked==='github' ? 'animate' : 'rest'}
          whileHover={{ scale: 1.12, rotate: 4 }}
          whileTap={{ scale: 0.95, rotate: 0 }}
        >
          <svg className="w-6 h-6 rounded-2xl hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61a3.18 3.18 0 0 0-1.34-1.76c-1.1-.76.08-.75.08-.75a2.52 2.52 0 0 1 1.84 1.24 2.54 2.54 0 0 0 3.47 1 2.54 2.54 0 0 1 .76-1.6c-2.67-.3-5.47-1.34-5.47-5.96a4.67 4.67 0 0 1 1.24-3.24 4.3 4.3 0 0 1 .12-3.19s1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23a4.3 4.3 0 0 1 .12 3.19 4.67 4.67 0 0 1 1.24 3.24c0 4.63-2.8 5.66-5.48 5.96a2.86 2.86 0 0 1 .82 2.22v3.29c0 .32.21.7.83.58A12 12 0 0 0 12 0z" />
          </svg>
          <span className="absolute inset-0 bg-amber-400 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-md -z-10"></span>
        </motion.a>
        {/* Instagram */}
        <motion.a
          className={`sosmed-btn relative p-2 rounded-md group transition`}
          href="https://instagram.com/adytgriansyah"
          target="_blank" aria-label="Instagram"
          onTouchStart={() => handleSosmedClick('instagram')}
          onClick={() => handleSosmedClick('instagram')}
          variants={sosmedVariants}
          initial="initial"
          animate={sosmedClicked==='instagram' ? 'animate' : 'rest'}
          whileHover={{ scale: 1.12, rotate: 4 }}
          whileTap={{ scale: 0.95, rotate: 0 }}
        >
          <svg className="w-6 h-6 hover:text-pink-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm4.75-2.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
          </svg>
          <span className="absolute inset-0 bg-amber-400 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-md -z-10"></span>
        </motion.a>
        {/* LinkedIn */}
        <motion.a
          className={`sosmed-btn relative p-2 rounded-md group transition`}
          href="https://linkedin.com/in/muhammadadytia"
          target="_blank" aria-label="LinkedIn"
          onTouchStart={() => handleSosmedClick('linkedin')}
          onClick={() => handleSosmedClick('linkedin')}
          variants={sosmedVariants}
          initial="initial"
          animate={sosmedClicked==='linkedin' ? 'animate' : 'rest'}
          whileHover={{ scale: 1.12, rotate: 4 }}
          whileTap={{ scale: 0.95, rotate: 0 }}
        >
          <svg className="w-6 h-6 hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v13.5h-4V8zm7.5 0h3.6v1.84h.05c.5-.95 1.75-1.84 3.6-1.84 3.85 0 4.56 2.53 4.56 5.82v6.68h-4V14.5c0-1.44-.03-3.3-2-3.3-2 0-2.3 1.56-2.3 3.2v7.1h-4V8z" />
          </svg>
          <span className="absolute inset-0 bg-amber-400 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-md -z-10"></span>
        </motion.a>
      </div>

      <button id="btTalk"
        className={`relative group w-1/2 border border-amber-400 bg-amber-400 text-white font-semibold py-3 rounded-lg hover:border-amber-400 hover:bg-transparent hover:border hover:text-amber-400 transition cursor-pointer overflow-hidden h-12 ${talkClicked ? 'clicked' : ''}`}
        onClick={handleTalkClick}
        onTouchStart={handleTalkClick}
      >
        <div className="relative h-full overflow-hidden">
          <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 transform group-hover:-translate-y-full">Let's Talk</span>
          <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">Let's Talk</span>
        </div>
      </button>
    </aside>
  )
}

export default Profile