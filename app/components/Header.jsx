"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Header = () => {
  // Animation variants
  const fadeUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: "easeInOut" }
  }

  return (
    <div className="flex flex-col gap-6 mx-auto w-full py-6 md:py-10">
      {/* Main Title */}
      <motion.h1 
        className="text-5xl md:!text-6xl lg:!text-7xl max-w-4xl leading-tight"
        initial={fadeUp.initial}
        animate={fadeUp.animate}
        transition={fadeUp.transition}
      >
        Global Ocean
        Corps and Conveyor
      </motion.h1>

      <motion.div 
        className="flex flex-col max-w-3xl justify-center gap-6 mt-2"
        initial={fadeUp.initial}
        animate={fadeUp.animate}
        transition={{ ...fadeUp.transition, delay: 0.2 }}
      >
        <motion.h4 
          className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed text-white/90"
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ ...fadeUp.transition, delay: 0.3 }}
        >
          Inspiring sustained, long-term ocean science education and research collaborations between nations
        </motion.h4>
        
        <motion.div
          className="flex flex-wrap gap-3"
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ ...fadeUp.transition, delay: 0.4 }}
        >
          <Link href="mailto:COESSING@GMAIL.COM">
            <motion.button 
              className="btn-primary w-fit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12L10 8L6 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Header

