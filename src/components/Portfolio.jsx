import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import demon from '../assets/demon.png'
import todo from '../assets/todo.png'
import invoice from '../assets/Invoice.png'
import mernboard from '../assets/mernboard.png'
import stackbot from '../assets/stackbot.png'
import neural from '../assets/Neural.png'
import eye from '../assets/eye.svg'

/**
 * @file Portfolio.jsx
 * @description A React component that displays a collection of projects in a grid layout.
 * Each project card includes an image, title, type, and a link to the live project.
 * The component uses Framer Motion for entry animations of the project cards.
 */

/**
 * @typedef {object} Project
 * @property {string} img - The source path for the project's preview image.
 * @property {string} link - The URL to the live project or its repository.
 * @property {string} overlay - Tailwind CSS classes for the card's hover overlay background.
 * @property {string} title - The title of the project.
 * @property {string} type - The type or category of the project (e.g., "Game", "App", "Fullstack App").
 */

/**
 * Array of project objects to be displayed in the portfolio.
 * @type {Project[]}
 */

const projects = [
  {
    img: demon,
    link: 'https://adytia855.github.io/Space-Demon/',
    overlay: 'bg-zinc-400/75',
    title: 'Beat The Space Demon',
    type: 'Game',
  },
  {
    img: todo,
    link: 'https://adytia855.github.io/To-Do-app/',
    overlay: 'bg-amber-400/75',
    title: 'To-Do App',
    type: 'App',
  },
  {
    img: invoice,
    link: 'https://adytia855.github.io/Invoice-Generator/',
    overlay: 'bg-zinc-400/75',
    title: 'Invoice To PDF Generator',
    type: 'App',
  },
  {
    img: mernboard,
    link: 'https://mer-nboard.vercel.app/',
    overlay: 'bg-amber-400/75',
    title: 'MERNboard',
    type: 'Fullstack App',
  },
  {
    img: stackbot,
    link: 'https://stack-bot-ai.vercel.app/',
    overlay: 'bg-zinc-400/75',
    title: 'StackBot AI',
    type: 'AI Chatbot',
  },
  {
    img: neural,
    link: 'https://neural-doodle.vercel.app/',
    overlay: 'bg-amber-400/75',
    title: 'NeuralDoodle',
    type: 'AI Image Generator',
  },
]

/**
 * Framer Motion variants for animating the project cards.
 * Defines 'hidden' and 'visible' states for opacity and y-axis translation,
 * with a staggered delay for each card.
 */

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      type: 'spring',
      stiffness: 60,
    },
  }),
}

/**
 * Portfolio component.
 * Renders a section displaying a grid of project cards.
 *
 * @param {object} props - The props passed to the component.
 * @param {boolean} props.isActive - A boolean indicating if the portfolio section is currently active/visible. This is used to trigger animations.
 * @returns {JSX.Element} The Portfolio section component.
 */

const Portfolio = ({ isActive }) => {
  return (
    <section id="portfolio" className="bg-gray-400/20 rounded-3xl p-8 w-full">
      {/* Title */}
      <div>
        <h2 className="article-title text-3xl font-bold mb-4">Portfolio</h2>
        <hr className="line rounded-full" />
      </div>
      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        <AnimatePresence>
          {isActive && projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              className="text-white rounded-xl p-4 flex flex-col items-center justify-center group card-hoverable"
              custom={i}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={cardVariants}
            >
              <div className="cursor-pointer relative w-full h-40 overflow-hidden rounded-3xl mb-2">
                <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 card" src={proj.img} alt={proj.title} />
                <a href={proj.link} target="_blank" rel="noopener noreferrer">
                  <div className={`card-overlay absolute inset-0 ${proj.overlay} opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300`}>
                    <img src={eye} alt="View" className="w-8 h-8" />
                  </div>
                </a>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-base">{proj.title}</h3>
                <p className="text-sm text-zinc-400">{proj.type}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Portfolio