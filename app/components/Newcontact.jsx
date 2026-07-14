import React from 'react'
import Link from 'next/link'

const Newcontact = () => {
  return (
    <div
      className="relative w-full min-h-[320px] md:min-h-[420px] overflow-hidden rounded-lg flex items-center justify-center"
      style={{
        backgroundImage: "url('/coessing/9.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center text-center gap-4 px-6 py-12 max-w-xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl">Contact Us</h2>
        <p className="text-lg md:text-xl text-white/90">
          Get in touch with Global Ocean Corps. We&apos;d love to hear from you.
        </p>
        <Link href="mailto:COESSING@GMAIL.COM">
          <button className="btn-primary">
            Contact Us
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12L10 8L6 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Newcontact
