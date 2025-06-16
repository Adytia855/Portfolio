import React from 'react'

const Resume = () => {
  return (
    <section id="resume" className="p-8 w-full rounded-3xl bg-gray-400/20">
        <section className="mx-auto space-y-10">
          {/* <!-- Title --> */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Resume</h2>
            <hr className="line rounded-full" />
          </div>

          {/* <!-- Education --> */}
          <div className="ct">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-yellow-400" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0H6m6 0h6" />
              </svg>
              Education
            </h2>
            <ol className="relative border-s border-amber-200 dark:border-amber-400">
              <li className="mb-10 ms-4">
                <div
                  className="absolute w-3 h-3 bg-amber-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-amber-500 dark:bg-amber-400">
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Universitas Pasundan</h3>
                <time className="mb-1 text-sm font-normal leading-none text-yellow-400">Januari 2021</time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Bachelor of Art in Art and Design Department (B.A. ADD)</p>
              </li>
            </ol>
          </div>

          {/* <!-- Experience --> */}
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-yellow-400" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v12a2 2 0 01-2 2z" />
              </svg>
              Experience
            </h2>
            <ol className="relative border-s border-amber-200 dark:border-amber-400">
              <li className="mb-10 ms-4">
                <div
                  className="absolute w-3 h-3 bg-amber-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-amber-500 dark:bg-amber-400">
                </div>
                <h3 className="font-bold text-lg">Video Editor</h3>
                <p className="text-gray-400">Konten.Creativee</p>
                <p className="text-yellow-400">May, 2024 — Dec, 2024</p>
                <p className="italic text-sm text-gray-500">Bandung, Indonesia</p>
                <ul className="list-disc ml-5 mt-2 space-y-1 text-sm text-gray-300">
                  <li>Work closely with directors, producers, and other team members to understand project requirements and vision.</li>
                  <li>Incorporate feedback from clients or creative teams to refine the final product.</li>
                  <li>Apply creative storytelling techniques to engage audiences and convey the intended message.</li>
                </ul>
              </li>
              <li className="mb-10 ms-4">
                <div
                  className="absolute w-3 h-3 bg-amber-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-amber-500 dark:bg-amber-400">
                </div>
                <h3 className="font-bold text-lg">Photographer</h3>
                <p className="text-gray-400">Cetak Biru</p>
                <p className="text-yellow-400">May, 2024 — Nov, 2024</p>
                <p className="italic text-sm text-gray-500">Bandung, Indonesia</p>
                <ul className="list-disc ml-5 mt-2 space-y-1 text-sm text-gray-300">
                  <li> Capturing high-quality images of events, including key moments, guest interactions, stage performances, and venue setups.</li>
                  <li> Collaborating with event organizers and production teams to understand photography needs and key deliverables.</li>
                  <li>Editing and retouching photos to ensure professional-quality output that aligns with the event’s branding and promotional needs.</li>
                  <li>Coordinating with other media personnel, such as videographers and social media teams, to provide comprehensive event coverage.</li>
                </ul>
              </li>
              <li className="mb-10 ms-4">
                <div
                  className="absolute w-3 h-3 bg-amber-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-amber-500 dark:bg-amber-400">
                </div>
                <h3 className="font-bold text-lg">Travel Coordinator</h3>
                <p className="text-gray-400">Riztour</p>
                <p className="text-yellow-400">Apr, 2023 — Apr, 2024</p>
                <p className="italic text-sm text-gray-500">Batam, Indonesia</p>
                <ul className="list-disc ml-5 mt-2 space-y-1 text-sm text-gray-300">
                  <li>Communicate with clients to understand their travel needs and preferences and providing detailed information on travel packages, 
                    destination, price, etc.</li>
                  <li>Ensure compliance with travel regulations, including visa requirements and health protocols.</li>
                  <li>Coordinate and discuss about heritage and historical assets with other tour guides, participant, local community, and government</li>
                  <li>Coordinate travel itineraries to ensure smooth travel experiences for clients.</li>
                </ul>
              </li>
              <li className="mb-10 ms-4">
                <div
                  className="absolute w-3 h-3 bg-amber-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-amber-500 dark:bg-amber-400">
                </div>
                <h3 className="font-bold text-lg">Business Owner</h3>
                <p className="text-gray-400">Scootel</p>
                <p className="text-yellow-400">Aug, 2022 — May, 2024</p>
                <p className="italic text-sm text-gray-500">Bandung, Indonesia</p>
                <ul className="list-disc ml-5 mt-2 space-y-1 text-sm text-gray-300">
                  <li>Managed business operations for e-scooter business, focusing on customer service</li>
                  <li>Implemented strategies to grow the business and deliver high-quality products to customers.</li>
                  <li>Developed skills in entrepreneurship and operations management</li>
                  <li>Successfully captured the market's attention, achieving impressive revenue of IDR 20 - 50+ million / month, by implementing innovative business strategies.</li>
                </ul>
              </li>
              <li className="mb-10 ms-4">
                <div
                  className="absolute w-3 h-3 bg-amber-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-amber-500 dark:bg-amber-400">
                </div>
                <h3 className="font-bold text-lg">Freight Forwarding Coordinator</h3>
                <p className="text-gray-400">Puri Cipta Mandiri</p>
                <p className="text-yellow-400">Jan, 2022 — Jul, 2022</p>
                <p className="italic text-sm text-gray-500">Surabaya, Indonesia</p>
                <ul className="list-disc ml-5 mt-2 space-y-1 text-sm text-gray-300">
                  <li>Prepare and process shipping documents (e.g. bills of lading, invoice, packing lists)</li>
                  <li>Create a show report detailing any incidents, technical issues, crew performance, necessary improvements or any notable observations.</li>
                  <li>Coordinate with technical crew, venue staff, and vendors for load-out logistics to verify all stage elements are accounted for and to 
                    ensure that all venue requirements for post-event cleanup are met.</li>
                  <li>Do Final checks at the day of event (e.g lighting, venue, stage, talent, etc.) to ensure everything meet standards</li>
                </ul>
              </li>
              <li className="mb-10 ms-4">
                <div
                  className="absolute w-3 h-3 bg-amber-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-amber-500 dark:bg-amber-400">
                </div>
                <h3 className="font-bold text-lg">Stage Manager</h3>
                <p className="text-gray-400">Cipta Media</p>
                <p className="text-yellow-400">Jun, 2015 — Aug, 2021</p>
                <p className="italic text-sm text-gray-500">Bandung, Indonesia</p>
                <ul className="list-disc ml-5 mt-2 space-y-1 text-sm text-gray-300">
                  <li> Coordinate with technical crew, venue staff, and vendors for load-out logistics to verify all stage elements are accounted for and to 
                    ensure that all venue requirements for post-event cleanup are met.</li>
                  <li>Plan event with attention to financial, time, and any other related resources constraints.</li>
                  <li> Create a show report detailing any incidents, technical issues, crew performance, necessary improvements or any notable observations.</li>
                </ul>
              </li>
              <li className="mb-10 ms-4">
                <div
                  className="absolute w-3 h-3 bg-amber-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-amber-500 dark:bg-amber-400">
                </div>
                <h3 className="font-bold text-lg">Photographer</h3>
                <p className="text-gray-400">Cipta Media</p>
                <p className="text-yellow-400">Jun, 2015 — Aug, 2021</p>
                <p className="italic text-sm text-gray-500">Bandung, Indonesia</p>
                <ul className="list-disc ml-5 mt-2 space-y-1 text-sm text-gray-300">
                  <li>Capturing high-quality images of events, including key moments, guest interactions, stage performances, and venue setups.</li>
                  <li>Collaborating with event organizers and production teams to understand photography needs and key deliverables.</li>
                  <li>Editing and retouching photos to ensure professional-quality output that aligns with the event’s branding and promotional needs</li>
                  <li>Coordinating with other media personnel, such as videographers and social media teams, to provide comprehensive event coverage.</li>
                </ul>
              </li>
              <li className="mb-10 ms-4">
                <div
                  className="absolute w-3 h-3 bg-amber-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-amber-500 dark:bg-amber-400">
                </div>
                <h3 className="font-bold text-lg">Production Runner</h3>
                <p className="text-gray-400">Cipta Media</p>
                <p className="text-yellow-400">Jun, 2015 — Aug, 2021</p>
                <p className="italic text-sm text-gray-500">Bandung, Indonesia</p>
                <ul className="list-disc ml-5 mt-2 space-y-1 text-sm text-gray-300">
                  <li>Act as a liaison between departments, ensuring are delivered promptly.</li>
                  <li>Help with checking in guests, distributing merchandises, and providing directions.</li>
                  <li>Assists unexpected challenges that arise during the event.</li>
                  <li>Assists with last-minute purchases or deliveries to support the needs of various teams and talents.</li>
                </ul>
              </li>
            </ol>
          </div>

        </section>
      </section>
  )
}

export default Resume