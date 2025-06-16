import React from 'react'

const AboutMe = () => {
  return (
    <section id="aboutMe" class="bg-gray-400/20 rounded-3xl p-8 w-full">
        {/* <!-- Title --> */}
        <div>
          <h2 class="text-3xl text-zinc-200 font-bold mb-2">About</h2>
          <hr class="line rounded-full" />
        </div>
        <div class="my-4 flex flex-col">
          {/* <!-- Hero --> */}
          <div class="text-zinc-400 rounded-xl p-4 text-left">
            <h2 class="text-2xl text-zinc-200 font-bold mb-3">About me</h2>
            <p>I thrive on new challenges, constantly exploring different industries—from event organizing and teaching to logistics, photography, and video editing. Every career shift has given me fresh perspectives, new skills, and a deeper appreciation for creativity and problem-solving.</p>
            <br/>
            <p>Now, I’m diving into web development, bringing my diverse experience into the digital space. For me, growth isn’t about staying in one lane, it’s about embracing change, adapting fast, and building something uniquely my own.</p>
          </div>

          {/* <!-- Hero2  --> */}
          <div class="text-zinc-200 rounded-xl mt-4 p-4 text-left">
            <h2 class="text-2xl font-bold mb-1">My Expertise</h2>
          </div>
          <div class="p-4 flex flex-col items-center justify-center">
            <div class="my-1 flex flex-col md:flex-row gap-2 w-full">
              <div class="md:w-1/2 bg-zinc-900 shadow-lg drop-shadow-xl/25 text-zinc-200 rounded-xl p-4 flex items-center justify-center">
                <svg class="mr-4" version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 32 32"
                  xml:space="preserve" fill="#000000">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <style type="text/css">
                      
                    </style>
                    <path class="blueprint_een"
                      d="M8,9H4v3h4V9z M7,11H5v-1h2V11z M8,13H4v3h4V13z M7,15H5v-1h2V15z M6,17c-1.657,0-3,1.343-3,3 s1.343,3,3,3s3-1.343,3-3S7.657,17,6,17z M6,22c-1.103,0-2-0.897-2-2c0-1.103,0.897-2,2-2s2,0.897,2,2C8,21.103,7.103,22,6,22z M21.646,11.646l0.707,0.707l-2,2l-0.707-0.707L21.646,11.646z M31,4h-1.586l-1.707-1.707c-0.391-0.391-1.023-0.391-1.414,0 L24.586,4H1C0.448,4,0,4.448,0,5v22c0,0.552,0.448,1,1,1h30c0.552,0,1-0.448,1-1V5C32,4.448,31.552,4,31,4z M16,14v4h4l8-8v13H11V9 h10L16,14z M17,14.707L19.293,17H17V14.707z M20.146,16.439l-2.586-2.586L27,4.414L29.586,7L20.146,16.439z M2,26V6h22l-2,2H10v16 h19V9l1-1v18H2z">
                    </path>
                  </g>
                </svg>
                <div>
                  <h3 class="font-semibold text-white text-base">UI/UX</h3>
                  <p class="text-sm text-zinc-400">The most advanced and premium design crafted with professional excellence.</p>
                </div>
              </div>
              {/* <!-- Right Section --> */}
              <div class="md:w-1/2 bg-zinc-900 drop-shadow-xl/25 text-white rounded-xl p-4 flex items-center justify-center">
                <svg class="mr-4" fill="#FFB900" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 480 480" xml:space="preserve" width="64px"
                  height="64px" stroke="#FFB900">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <g>
                        <path
                          d="M56,416c-30.872,0-56,25.128-56,56c0,4.424,3.576,8,8,8h96c4.424,0,8-3.576,8-8C112,441.128,86.872,416,56,416z M16.808,464C19.992,448.36,32.36,436.072,48,432.88V448h16v-15.12c15.64,3.2,28.008,15.48,31.192,31.12H16.808z">
                        </path>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M472,344h-14.032c-0.44-1.112-0.896-2.216-1.392-3.328l9.928-9.928c3.128-3.128,3.128-8.184,0-11.312l-33.936-33.936 c-1.656-1.656-3.84-2.376-6.008-2.272C439.24,276.496,448,263.32,448,248V40c0-22.056-17.944-40-40-40H40C17.944,0,0,17.944,0,40 v208c0,22.056,17.944,40,40,40h104.4l-30.224,56H112h-12c-15.44,0-28,12.56-28,28s12.56,28,28,28h172c0,4.424,3.576,8,8,8h14.032 c0.44,1.112,0.896,2.216,1.392,3.328l-9.928,9.928c-3.128,3.128-3.128,8.184,0,11.312l33.936,33.936 c3.128,3.128,8.184,3.128,11.312,0l9.928-9.928c1.112,0.496,2.216,0.952,3.328,1.392V472c0,4.424,3.576,8,8,8h48 c4.424,0,8-3.576,8-8v-14.032c1.112-0.44,2.216-0.896,3.328-1.392l9.928,9.928c3.128,3.128,8.184,3.128,11.312,0l33.936-33.936 c3.128-3.128,3.128-8.184,0-11.312l-9.928-9.928c0.496-1.112,0.952-2.216,1.392-3.328H472c4.424,0,8-3.576,8-8v-48 C480,347.576,476.424,344,472,344z M16,40c0-13.232,10.768-24,24-24h368c13.232,0,24,10.768,24,24v168H16V40z M40,272 c-13.232,0-24-10.768-24-24v-24h416v24c0,13.232,10.768,24,24,24h-8h-48h-61.808H157.808H40z M421.152,285.6l-9.824,9.824 c-1.112-0.496-2.216-0.952-3.328-1.392V288C412.632,288,417.008,287.056,421.152,285.6z M344,288v6.032 c-1.112,0.44-2.216,0.896-3.328,1.392L333.248,288H344z M316.92,288l-6.896,6.896L305.328,288H316.92z M272,384H100 c-6.616,0-12-5.384-12-12c0-6.616,5.384-12,12-12h12h6.944H272V384z M132.356,343.992L162.576,288h123.392l12.544,18.408 l-13.016,13.016c-3.128,3.128-3.128,8.184,0,11.312l9.928,9.928c-0.496,1.112-0.952,2.216-1.392,3.328H280H132.356z M464,392 h-11.672c-3.496,0-6.576,2.264-7.632,5.592c-1.216,3.864-2.856,7.8-4.88,11.672c-1.616,3.104-1.032,6.888,1.44,9.36l8.288,8.288 l-22.624,22.624l-8.288-8.288c-2.48-2.472-6.256-3.048-9.36-1.44c-3.872,2.024-7.808,3.664-11.672,4.88 c-3.336,1.064-5.6,4.144-5.6,7.64V464h-32v-11.672c0-3.496-2.264-6.576-5.592-7.632c-3.864-1.216-7.8-2.856-11.672-4.88 c-3.104-1.608-6.888-1.032-9.36,1.44l-8.288,8.288l-22.624-22.624l8.288-8.288c2.472-2.472,3.056-6.256,1.44-9.36 c-2.024-3.872-3.664-7.808-4.88-11.672c-1.064-3.336-4.144-5.6-7.64-5.6H288v-32h11.672c3.496,0,6.576-2.264,7.632-5.592 c1.216-3.864,2.856-7.8,4.88-11.672c1.616-3.104,1.032-6.888-1.44-9.36l-8.288-8.288l22.624-22.624l8.288,8.288 c2.472,2.48,6.256,3.056,9.36,1.44c3.872-2.024,7.808-3.664,11.672-4.88c3.336-1.064,5.6-4.144,5.6-7.64V288h32v11.672 c0,3.496,2.264,6.576,5.592,7.632c3.864,1.216,7.8,2.856,11.672,4.88c3.104,1.616,6.88,1.04,9.36-1.44l8.288-8.288l22.624,22.624 l-8.288,8.288c-2.472,2.472-3.056,6.256-1.44,9.36c2.024,3.872,3.664,7.808,4.88,11.672c1.064,3.336,4.144,5.6,7.64,5.6H464V392z">
                        </path>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M376,328c-26.472,0-48,21.528-48,48s21.528,48,48,48s48-21.528,48-48S402.472,328,376,328z M376,408 c-17.648,0-32-14.352-32-32s14.352-32,32-32s32,14.352,32,32S393.648,408,376,408z">
                        </path>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M157.656,61.656l-11.312-11.312l-56,56c-3.128,3.128-3.128,8.184,0,11.312l56,56l11.312-11.312L107.312,112 L157.656,61.656z">
                        </path>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M333.656,106.344l-56-56l-11.312,11.312L316.688,112l-50.344,50.344l11.312,11.312l56-56 C336.784,114.528,336.784,109.472,333.656,106.344z">
                        </path>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="131.509" y="96.019" transform="matrix(0.4472 -0.8944 0.8944 0.4472 24.1457 247.1068)"
                          width="160.955" height="16"></rect>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="312" y="160" width="16" height="16"></rect>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="344" y="160" width="16" height="16"></rect>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="376" y="160" width="16" height="16"></rect>
                      </g>
                    </g>
                  </g>
                </svg>
                <div>
                  <h3 class="font-semibold text-zinc-200 text-base">Web Development</h3>
                  <p class="text-sm text-zinc-400">Premium website development executed with professional expertise.</p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Marquee --> */}
          <div class="text-zinc-200 rounded-xl  p-4 text-left">
            <h2 class="text-2xl font-bold my-8">My Tools</h2>
          </div>
          <div class="overflow-hidden w-full py-4">
            <div class="marquee flex w-max animate-marquee">
              <div class="flex items-center space-x-20">
                <img src="img/html5.svg" class="h-12 w-12 object-contain lg:h-20 lg:w-20" />
                <img src="img/css.svg" class="h-12 w-12 object-contain lg:h-20 lg:w-20" />
                <img src="img/js.svg" class="h-12 w-12 object-contain lg:h-20 lg:w-20" />
                <img src="img/node-js.svg" class="h-12 w-12 object-contain lg:h-20 lg:w-20" />
                <img src="img/git.svg" class="h-12 w-12 object-contain lg:h-20 lg:w-20" />
                <img src="img/github.svg" class="h-12 w-12 object-contain lg:h-20 lg:w-20" />
                <img src="img/json.svg" class="h-12 w-12 object-contain lg:h-20 lg:w-20" />
                <img src="img/eslint.svg" class="h-12 w-12 object-contain lg:h-20 lg:w-20" />
                <img src="img/bootstrap.svg" class="h-12 w-12 object-contain lg:h-20 lg:w-20" />
                <img src="img/tailwind.svg" class="h-12 w-12 object-contain lg:h-20 lg:w-20" />
                <img src="img/alpine.svg" class="h-12 w-12 object-contain lg:h-20 lg:w-20" />
                <img src="img/postman.svg" class="h-12 w-12 object-contain lg:h-20 lg:w-20" />
              </div>
              <div class="flex items-center space-x-20 ml-20">
                <img src="img/html5.svg" class="h-12 w-12 object-contain lg:h-20 lg:w-20" />
                <img src="img/css.svg" class="h-12 w-12 object-contain lg:h-20 lg:w-20" />
                <img src="img/js.svg" class="h-12 w-12 object-contain lg:h-20 lg:w-20" />
                <img src="img/node-js.svg" class="h-12 w-12 object-contain lg:h-20 lg:w-20" />
                <img src="img/git.svg" class="h-12 w-12 object-contain lg:h-20 lg:w-20" />
                <img src="img/github.svg" class="h-12 w-12 object-contain lg:h-20 lg:w-20" />
                <img src="img/json.svg" class="h-12 w-12 object-contain lg:h-20 lg:w-20" />
                <img src="img/eslint.svg" class="h-12 w-12 object-contain lg:h-20 lg:w-20" />
                <img src="img/bootstrap.svg" class="h-12 w-12 object-contain lg:h-20 lg:w-20" />
                <img src="img/tailwind.svg" class="h-12 w-12 object-contain lg:h-20 lg:w-20" />
                <img src="img/alpine.svg" class="h-12 w-12 object-contain lg:h-20 lg:w-20" />
                <img src="img/postman.svg" class="h-12 w-12 object-contain lg:h-20 lg:w-20" />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutMe