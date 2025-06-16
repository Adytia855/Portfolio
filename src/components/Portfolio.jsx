import React from 'react'
import demon from '../assets/demon.png'
import todo from '../assets/todo.png'
import invoice from '../assets/Invoice.png'
import eye from '../assets/eye.svg'

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-gray-400/20 rounded-3xl p-8 w-full">
        {/* Title */}
        <div>
          <h2 className="article-title text-3xl font-bold mb-4">Portfolio</h2>
          <hr className="line rounded-full" />
        </div>
         {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          {/* Project 1 Card Template */}
          <div className="cursor-pointer text-white rounded-xl p-4 flex flex-col items-center justify-center group">
            <div className="card-hoverable relative w-full h-40 overflow-hidden rounded-3xl mb-2">
              <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 card"
                src={demon} alt="Beat The Space Demon" />
                <a href="https://adytia855.github.io/Space-Demon/" target="_blank" rel="noopener noreferrer"><div
                className="card-overlay absolute inset-0 bg-zinc-400/75 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <img src={eye} alt="View" className="w-8 h-8" />
              </div></a>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-base">Beat The Space Demon</h3>
              <p className="text-sm text-zinc-400">Game</p>
            </div>
          </div>
        
          {/* Project 2 */}
          <div className="text-white rounded-xl p-4 flex flex-col items-center justify-center group">
            <div className="card-hoverable cursor-pointer relative w-full h-40 overflow-hidden rounded-3xl mb-2">
              <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 card" src={todo}
                alt="To-Do App" />
              <a href="https://adytia855.github.io/To-Do-app/" target="_blank" rel="noopener noreferrer"><div
                className="card-overlay absolute inset-0 bg-amber-400/75 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <img src={eye} alt="View" className="w-8 h-8" />
              </div></a>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-base">To-Do App</h3>
              <p className="text-sm text-zinc-400">Application</p>
            </div>
          </div>
        
          {/* Project 3 */}
          <div className="text-white rounded-xl p-4 flex flex-col items-center justify-center group">
            <div className="card-hoverable cursor-pointer relative w-full h-40 overflow-hidden rounded-3xl mb-2">
              <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 card"
                src={invoice} alt="Invoice To PDF Generator" />
              <a href="https://adytia855.github.io/Invoice-Generator/" target="_blank" rel="noopener noreferrer"><div
                className="card-overlay absolute inset-0 bg-zinc-400/75 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <img src={eye} alt="View" className="w-8 h-8" />
              </div></a>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-base">Invoice To PDF Generator</h3>
              <p className="text-sm text-zinc-400">Application</p>
            </div>
          </div>
        </div>
        
      </section>
  )
}

export default Portfolio