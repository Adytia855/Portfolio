import React from 'react'
import { motion } from 'framer-motion'
import demon from '../assets/img/demon.png'
import todo from '../assets/img/todo.png'
import invoice from '../assets/img/Invoice.png'
import eye from '../assets/img/eye.svg'
import mern from '../assets/img/mern.png'

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
}

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-gray-400/20 rounded-3xl p-8 w-full">
        {/* <!-- Title --> */}
        <div>
          <h2 className="article-title text-3xl font-bold mb-4">Portfolio</h2>
          <hr className="line rounded-full" />
        </div>
         {/* <!-- Project Grid --> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          {[{
            img: demon,
            title: 'Beat The Space Demon',
            desc: 'Game',
            link: 'https://adytia855.github.io/Space-Demon/',
            overlay: 'bg-zinc-400/75',
          }, {
            img: todo,
            title: 'To-Do App',
            desc: 'App',
            link: 'https://adytia855.github.io/To-Do-app/',
            overlay: 'bg-amber-400/75',
          }, {
            img: invoice,
            title: 'Invoice To PDF Generator',
            desc: 'App',
            link: 'https://adytia855.github.io/Invoice-Generator/',
            overlay: 'bg-zinc-400/75',
          }, {
            img: mern,
            title: 'MERNboard',
            desc: 'Fullstack App',
            link: 'https://mer-nboard.vercel.app',
            overlay: 'bg-zinc-400/75',
          }].map((card, i) => (
            <motion.div
              key={card.title}
              className="text-white rounded-xl p-4 flex flex-col items-center justify-center group"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
              variants={cardVariants}
            >
              <div className="card-hoverable relative w-full h-40 overflow-hidden rounded-3xl mb-2 cursor-pointer">
                <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 card" src={card.img} alt={card.title} />
                <a href={card.link} target="_blank" rel="noopener noreferrer">
                  <div className={`card-overlay absolute inset-0 ${card.overlay} opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300`}>
                    <img src={eye} alt="View" className="w-8 h-8" />
                  </div>
                </a>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-base">{card.title}</h3>
                <p className="text-sm text-zinc-400">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
  )
}

export default Portfolio