"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const WhatWeDo = () => {
  const sections = [
    {
      id: 1,
      title: "Scientific Discovery",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop",
      description: "Oceanography is a global science and we need partners everywhere to successfully observe and model the global ocean, and to develop solutions for a more sustainable treatment of the ocean."
    },
    {
      id: 2,
      title: "Global Engagement",
      image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&h=600&fit=crop",
      description: "Just as the Peace Corps inspires young Americans to engage the world, Ocean Corps will inspire oceanographers to engage the world via capacity development and research collaboration."
    },
    {
      id: 3,
      title: "Equity and Diversity",
      image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&h=600&fit=crop",
      description: "Ocean science infrastructure is unequally distributed across the globe. Ocean Corps will create and support existing collaboration with ocean scientists globally to address this inequity."
    }
  ]

  // Animation variants
  const fadeUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: "easeInOut" }
  }

  return (
  
     <div className="flex gap-[2em]">
         <div className='w-full md:sticky  top-4 h-[1px] max-w-[100px] gap-10 bg-white hidden lg:block '>
  
 </div>
        
         <div className="md:col-span-1 lg:col-span-2">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            style={{ top: `${index * 100}px` }}
            className={`mb-16 md:mb-20 sticky bg-background top-[${index * 100}px] last:mb-0`}
            initial={fadeUp.initial}
            whileInView={fadeUp.animate}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...fadeUp.transition, delay: index * 0.2 }}
          >
            {/* Title */}
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl  mb-6 md:mb-8"
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={{ once: true }}
              transition={{ ...fadeUp.transition, delay: index * 0.2 + 0.1 }}
            >
              {section.title}
            </motion.h2>
            <br/>

            {/* Image */}
            <motion.div
              className="w-full h-64 md:h-70  overflow-hidden mb-6 md:mb-8"
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={{ once: true }}
              transition={{ ...fadeUp.transition, delay: index * 0.2 + 0.2 }}
            >
              <Image
                src={section.image}
                alt={section.title}
                width={1200}
                height={600}
                className="w-full h-full object-cover"
                unoptimized
              />
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl"
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={{ once: true }}
              transition={{ ...fadeUp.transition, delay: index * 0.2 + 0.3 }}
            >
              {section.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
 

     </div>
  )
}

export default WhatWeDo
