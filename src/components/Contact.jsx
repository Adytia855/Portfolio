import React from 'react'

/**
 * @file Contact.jsx
 * @description A React component that displays a contact form and a map.
 * This component is part of a portfolio website and allows users to send messages
 * and view a location on a map. It receives props from its parent component (`App.jsx`)
 * to handle form submission, display alerts, and manage loading states.
 */

/**
 * Contact component.
 * Renders the contact section of the portfolio, including an embedded map
 * and a contact form. The form's submission logic and alert/loading states
 * are handled by props passed from the parent `App` component.
 * @param {object} props - The props passed to the component.
 * @param {React.RefObject<HTMLFormElement>} props.formRef - A ref to the form element, used by the parent to access form data.
 * @param {function} props.onFormSubmit - Callback function to handle the form submission.
 * @param {boolean} props.showAlert - Boolean to control the visibility of the success alert.
 * @param {boolean} props.formLoading - Boolean to indicate if the form is currently submitting.
 * @returns {JSX.Element} The Contact section component.
 */

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-400/20 rounded-3xl p-8 w-full">
        {/* Title */}
        <div>
          <h2 className="article-title text-3xl font-bold mb-4">Contact</h2>
          <hr className="line rounded-full" />
        </div>

         {/* Embedded Google Map */}
        <section className="mapbox my-6" data-mapbox>
          <figure>
            <div style={{ position: 'relative' }}>
              <div
                style={{ position: 'relative', paddingBottom: '75%', height: 0, overflow: 'hidden', filter: 'invert(90%) grayscale(1)' }}>
                <iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }} loading="lazy"
                  allowFullScreen src="https://maps.google.com/maps?q=bandung%2C+indonesia&output=embed"></iframe></div>
              <a href="https://mapembeds.com" rel="noopener" target="_blank"
                style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>mapembeds.com</a>
            </div>
          </figure>
        </section>

        {/* Contact Form */}
        <div className="mt-6">
          <h3 className="font-extrabold text-xl mb-4">Contact Form</h3>
          {/* Alert message display (visibility controlled by parent component) */}
          <div id="alert-4" className="items-start gap-3 p-4 mb-6 text-yellow-800 rounded-lg bg-yellow-50 dark:bg-zinc-800 dark:text-yellow-300 
            transition-all duration-500 ease-in-out opacity-0 translate-y-3" style={{ display: 'none' }} role="alert">
            {/* Icon */}
            <svg className="w-5 h-5 mt-1 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
              viewBox="0 0 20 20">
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            {/* Message */}
            <div className="text-sm font-medium">
              Message Successfully Sent!.
            </div>
            {/* Tombol close */}
            <button type="button"
              className="ms-auto -mx-1.5 -my-1.5 bg-yellow-50 text-yellow-800 rounded-lg p-1.5 hover:bg-yellow-100 inline-flex items-center justify-center h-8 w-8 dark:bg-zinc-800 dark:text-yellow-300 dark:hover:bg-zinc-700"
              aria-label="Close">
              <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M1 1l12 12M13 1L1 13" />
              </svg>
            </button>
          </div>
          {/* The actual form element. Submission is handled by the parent component via props. */}
          <form name="portfolio-contact-form" className="space-y-4 w-full">
            {/* Name & Email */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input name="name" id="fullname" type="text" placeholder="Full Name"
                  className="w-full p-4 rounded-xl border border-amber-400 bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition" required/>
              </div>
              <div className="flex-1">
                <input name="email" id="email" type="email" placeholder="Email Address"
                  className="w-full p-4 rounded-xl border border-amber-400 bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition" required/>
              </div>
            </div>

            {/* Subject */}
            <div>
              <input name="subject" id="subject" type="text" placeholder="Subject"
                className="w-full p-4 rounded-xl border border-amber-400 bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition" />
            </div>

            {/* Message */}
            <div>
              <textarea name="message" id="message" rows="5" placeholder="Your Message" className="w-full p-4 rounded-xl border border-amber-400 bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition resize-none" required></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button type="submit" className="background relative group w-40 h-14 bg-amber-400  text-white hover:bg-transparent hover:text-amber-400 font-semibold rounded-xl overflow-hidden transition-all duration-300 cursor-pointer">
                {/* Loading spinner (visibility controlled by parent component) */}
                <svg id="spinner" className="loading hidden absolute inset-0 items-center justify-center m-auto animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-75" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z">
                  </path>
                </svg>
                <span className="active absolute left-0 top-0 h-full w-1 border border-amber-200 bg-amber-200 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500"></span>
                <span className="deactive absolute inset-0 flex items-center justify-center transition-transform duration-300 transform group-hover:-translate-y-full">Send</span>
                <span className="hover absolute inset-0 flex items-center justify-center transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">Send</span>
                <span className="active absolute right-0 top-0 h-full w-1 border border-amber-200 bg-amber-200 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500"></span>
              </button>
            </div>
          </form>
      </div>
    </section>
  )
}

export default Contact