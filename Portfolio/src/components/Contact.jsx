import React, { useRef, useState } from 'react'

const scriptURL = 'https://script.google.com/macros/s/AKfycbxrJiMtiq7DB4_OzniOt4gyxMu7JSyNJp4zXUW_pF7bP24lWLqFLiFoFSj7xWGiAL-S2A/exec'

const Contact = () => {
  const formRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState({ show: false, success: true, message: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setAlert({ show: false, success: true, message: '' })
    const form = formRef.current
    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
      })
      if (response.ok) {
        setAlert({ show: true, success: true, message: 'Message Successfully Sent!' })
        form.reset()
      } else {
        setAlert({ show: true, success: false, message: 'Failed to send message. Please try again.' })
      }
    } catch (err) {
      setAlert({ show: true, success: false, message: 'Failed to send message. Please try again.' })
    }
    setLoading(false)
  }

  return (
    <section id="contact" className="bg-gray-400/20 rounded-3xl p-8 w-full">
        {/* <!-- Title --> */}
        <div>
          <h2 className="article-title text-3xl font-bold mb-4">Contact</h2>
          <hr className="line rounded-full" />
        </div>
        {/* <!-- Map --> */}
        <section className="mapbox my-6" data-mapbox>
          <figure>
            <div style={{position: 'relative'}}>
              <div style={{position: 'relative', paddingBottom: '75%', height: 0, overflow: 'hidden', filter: 'invert(90%) grayscale(1)'}}>
                <iframe style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0}} loading="lazy"
                  allowFullScreen src="https://maps.google.com/maps?q=bandung%2C+indonesia&output=embed"></iframe></div>
              <a href="https://mapembeds.com" rel="noopener" target="_blank"
                style={{position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0}}>mapembeds.com</a>
            </div>
          </figure>
        </section>
        {/* <!-- Contact Form --> */}
        <div className="mt-6">
          <h3 className="font-extrabold text-xl mb-4">Contact Form</h3>
          {/* <!-- ALERT --> */}
          {alert.show && (
            <div className={`items-start gap-3 p-4 mb-6 rounded-lg transition-all duration-500 ease-in-out flex ${alert.success ? 'bg-yellow-50 text-yellow-800 dark:bg-zinc-800 dark:text-yellow-300' : 'bg-red-100 text-red-800 dark:bg-zinc-800 dark:text-red-300'}`}
              role="alert">
              <svg className="w-5 h-5 mt-1 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <div className="text-sm font-medium">{alert.message}</div>
              <button type="button" onClick={() => setAlert({ ...alert, show: false })}
                className="ms-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 hover:bg-yellow-100 inline-flex items-center justify-center h-8 w-8 dark:bg-zinc-800 dark:text-yellow-300 dark:hover:bg-zinc-700"
                aria-label="Close">
                <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l12 12M13 1L1 13" />
                </svg>
              </button>
            </div>
          )}
          <form name="portfolio-contact-form" className="space-y-4 w-full" ref={formRef} onSubmit={handleSubmit} autoComplete="off">
            {/* <!-- Name & Email --> */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input name="name" id="fullname" type="text" placeholder="Full Name"
                  className="w-full p-4 rounded-xl border border-amber-400 bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition" required />
              </div>
              <div className="flex-1">
                <input name="email" id="email" type="email" placeholder="Email Address"
                  className="w-full p-4 rounded-xl border border-amber-400 bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition" required />
              </div>
            </div>
            {/* <!-- Subject --> */}
            <div>
              <input name="subject" id="subject" type="text" placeholder="Subject"
                className="w-full p-4 rounded-xl border border-amber-400 bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition" />
            </div>
            {/* <!-- Message --> */}
            <div>
              <textarea name="message" id="message" rows="5" placeholder="Your Message" className="w-full p-4 rounded-xl border border-amber-400 bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition resize-none" required></textarea>
            </div>
            {/* <!-- Submit Button --> */}
            <div className="flex justify-end">
              <button type="submit" disabled={loading} className="background relative group w-40 h-14 bg-amber-400  text-white hover:bg-transparent hover:text-amber-400 font-semibold rounded-xl overflow-hidden transition-all duration-300 cursor-pointer">
                <svg id="spinner" className={`loading absolute inset-0 items-center justify-center m-auto animate-spin h-5 w-5 text-white ${loading ? '' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-75" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
                <span className="deactive absolute inset-0 flex items-center justify-center transition-transform duration-300 transform group-hover:-translate-y-full">Send</span>
                <span className="hover absolute inset-0 flex items-center justify-center transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">Send</span>
              </button>
            </div>
          </form>
        </div>
      </section>
  )
}

export default Contact