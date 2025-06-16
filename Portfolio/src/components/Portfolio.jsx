import React from 'react'

const Portfolio = () => {
  return (
    <section id="portfolio" class="bg-gray-400/20 rounded-3xl p-8 w-full">
        {/* <!-- Title --> */}
        <div>
          <h2 class="article-title text-3xl font-bold mb-4">Portfolio</h2>
          <hr class="line rounded-full" />
        </div>
         {/* <!-- Project Grid --> */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          {/* <!-- Project 1 Card Template --> */}
          <div class="cursor-pointer text-white rounded-xl p-4 flex flex-col items-center justify-center group">
            <div class="card-hoverable relative w-full h-40 overflow-hidden rounded-3xl mb-2">
              <img class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 card"
                src="img/demon.png" alt="Beat The Space Demon" />
                <a href="https://adytia855.github.io/Space-Demon/" target="_blank"><div
                class="card-overlay absolute inset-0 bg-zinc-400/75 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <img src="img/eye.svg" alt="View" class="w-8 h-8" />
              </div></a>
            </div>
            <div class="text-center">
              <h3 class="font-semibold text-base">Beat The Space Demon</h3>
              <p class="text-sm text-zinc-400">Game</p>
            </div>
          </div>
        
          {/* <!-- Project 2 --> */}
          <div class="text-white rounded-xl p-4 flex flex-col items-center justify-center group">
            <div class="card-hoverable cursor-pointer relative w-full h-40 overflow-hidden rounded-3xl mb-2">
              <img class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 card" src="img/todo.png"
                alt="To-Do App" />
              <a href="https://adytia855.github.io/To-Do-app/" target="_blank"><div
                class="card-overlay absolute inset-0 bg-amber-400/75 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <img src="img/eye.svg" alt="View" class="w-8 h-8" />
              </div></a>
            </div>
            <div class="text-center">
              <h3 class="font-semibold text-base">To-Do App</h3>
              <p class="text-sm text-zinc-400">Application</p>
            </div>
          </div>
        
          {/* <!-- Project 3 --> */}
          <div class="text-white rounded-xl p-4 flex flex-col items-center justify-center group">
            <div class="card-hoverable cursor-pointer relative w-full h-40 overflow-hidden rounded-3xl mb-2">
              <img class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 card"
                src="img/Invoice.png" alt="Invoice To PDF Generator" />
              <a href="https://adytia855.github.io/Invoice-Generator/" target="_blank"><div
                class="card-overlay absolute inset-0 bg-zinc-400/75 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <img src="img/eye.svg" alt="View" class="w-8 h-8" />
              </div></a>
            </div>
            <div class="text-center">
              <h3 class="font-semibold text-base">Invoice To PDF Generator</h3>
              <p class="text-sm text-zinc-400">Application</p>
            </div>
          </div>
        </div>
        
      </section>
  )
}

export default Portfolio