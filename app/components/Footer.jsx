"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Footer = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeInOut" }
  }

  return (
    <footer className="border-t border-white/20 mt-16 md:mt-20">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-8 md:py-12">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8"
          initial={fadeUp.initial}
          whileInView={fadeUp.animate}
          viewport={{ once: true }}
          transition={fadeUp.transition}
        >
          {/* Copyright */}
          <div className="text-sm md:text-base text-white/80 text-center md:text-left">
            © {new Date().getFullYear()} Global Ocean Corps. All rights reserved.
          </div>

          {/* Built by Kr8tos */}
          <div className="text-sm md:text-base text-white/80 text-center md:text-right">
            Built and developed by{' '}
            <Link
              href="https://kr8tos.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline transition-all text-white hover:text-blue-200"
            >
              Kr8tos
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
