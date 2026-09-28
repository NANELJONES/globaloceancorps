"use client"
import React from 'react'
import { motion } from 'framer-motion'

const WhatWeDo = () => {
  const statements = [
    "Oceanography is a global science and we need partners everywhere to successfully observe and model the global ocean, and to develop solutions for a more sustainable treatment of the ocean.",
    "Ocean Corps will inspire oceanographers to engage the world via capacity development and research collaboration.",
    "Ocean science infrastructure is unequally distributed across the globe. Ocean Corps will create and support existing collaboration with ocean scientists globally to address this."
  ]

  // Animation variants
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeInOut" }
  }

  return (
    <div className="flex flex-col gap-8 py-4">
      {statements.map((statement, index) => (
        <motion.div
          key={index}
          className="border-l-2 border-white/60 pl-6 py-2"
          initial={fadeUp.initial}
          whileInView={fadeUp.animate}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ ...fadeUp.transition, delay: index * 0.15 }}
        >
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white/95">
            {statement}
          </p>
        </motion.div>
      ))}
    </div>
  )
}

export default WhatWeDo

