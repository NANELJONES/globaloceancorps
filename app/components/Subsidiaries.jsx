"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Subsidiaries = () => {
  const oceanSchools = [
    {
      id: 1,
      title: "Coastal Ocean Environment Summer School In Nigeria and Ghana (COESSING)",
      description: "A one-week summer school taking place yearly since 2015 with the goal of educating and inspiring West African scientists at all career stages to pursue ocean-related fields.",
      link: "https://coessing.org"
    },
    {
      id: 2,
      title: "Coastal Ocean Environment School - Western Indian Ocean (COES-WIO)",
      description: "A regional capacity-building initiative providing hands-on training for early-career ocean professionals in East Africa and the Western Indian Ocean region.",
      link: "https://coeswio.org"
    },
    {
      id: 3,
      title: "Gulf of Guinea Ocean Summer School (GGOSS)",
      description: "An annual summer school dedicated to oceanographic and environmental studies for early-career ocean scientists from french speaking countries in the Gulf of Guinea.",
      link: "https://ggosss.org"
    }
  ]

  const affiliatedActions = [
    {
      id: 1,
      title: "EquiSea: The Ocean Science Fund for All",
      description: "A global fund aimed at improving equity in ocean science by providing direct support for equipment, tools, & training.",
      link: "https://equisea.org"
    },
    {
      id: 2,
      title: "CoastPredict",
      description: "A global framework transforming coastal ocean observations and predictions for a sustainable ocean future.",
      link: "https://coastpredict.org"
    },
    {
      id: 3,
      title: "BIOTTA",
      description: "Building Capacity in Ocean Acidification Monitoring in the Gulf of Guinea to understand and address ocean acidification in West Africa.",
      link: null
    },
    {
      id: 4,
      title: "Lusophone Hub of the Ocean Decade",
      description: "Fostering collaboration, capacity building, and knowledge exchange across Portuguese-speaking ocean science communities worldwide.",
      link: null
    },
    {
      id: 5,
      title: "Plastic Punch",
      description: "A non-profit organization focused on raising awareness about marine plastic pollution and sustainable beach cleanups.",
      link: "https://plasticpunch.org"
    }
  ]

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeInOut" }
  }

  return (
    <div className="flex flex-col gap-12 py-8">
      {/* Ocean Schools Section */}
      <div className="flex flex-col gap-6">
        <motion.div
          initial={fadeUp.initial}
          whileInView={fadeUp.animate}
          viewport={{ once: true }}
          transition={fadeUp.transition}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
            Ocean Schools
          </h2>
          <div className="w-full h-[1px] bg-white/40 mb-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {oceanSchools.map((school, index) => (
            <motion.div
              key={school.id}
              className="bg-white/5 border border-white/15 rounded-xl p-6 flex flex-col justify-between hover:border-white/40 transition-all duration-300"
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={{ once: true }}
              transition={{ ...fadeUp.transition, delay: index * 0.15 }}
            >
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-blue-300 mb-2 block">
                  0{school.id} School
                </span>
                <h3 className="text-xl font-semibold mb-3 leading-snug">
                  {school.title}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed mb-6">
                  {school.description}
                </p>
              </div>

              {school.link && (
                <Link
                  href={school.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-blue-300 underline underline-offset-4 transition-colors"
                >
                  <span>Visit Website</span>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Other Affiliated Actions */}
      {/* <div className="flex flex-col gap-6 mt-4">
        <motion.div
          initial={fadeUp.initial}
          whileInView={fadeUp.animate}
          viewport={{ once: true }}
          transition={fadeUp.transition}
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
            Other Affiliated Actions
          </h2>
          <div className="w-full h-[1px] bg-white/40 mb-6" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {affiliatedActions.map((action, index) => (
            <motion.div
              key={action.id}
              className="bg-white/5 border border-white/15 rounded-xl p-6 flex flex-col justify-between hover:border-white/40 transition-all duration-300"
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={{ once: true }}
              transition={{ ...fadeUp.transition, delay: index * 0.1 }}
            >
              <div>
                <h3 className="text-lg font-semibold mb-2 leading-snug">
                  {action.title}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed mb-4">
                  {action.description}
                </p>
              </div>

              {action.link && (
                <Link
                  href={action.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-blue-300 underline underline-offset-4 transition-colors mt-2"
                >
                  <span>Visit Website</span>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div> */}
    </div>
  )
}

export default Subsidiaries

