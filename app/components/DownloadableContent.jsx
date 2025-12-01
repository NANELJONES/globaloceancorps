"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const DownloadableContent = () => {
  const downloadableItems = [
    {
      id: 1,
      title: "View Ocean Shot application document",
      fileType: "PDF",
      href: "https://globaloceancorps.org/wp-content/uploads/2021/01/oceancorps_oceanshot.pdf"
    },
    {
      id: 2,
      title: "View the narrated slideshow presentation for the US Launch Meeting",
      fileType: "mp4",
      href: "https://globaloceancorps.org/wp-content/uploads/2021/02/oceancorps_narrated.mp4"
    },
    {
      id: 3,
      title: "View the presentation slides for the US Launch Meeting",
      fileType: "pdf",
      href: "https://globaloceancorps.org/wp-content/uploads/2021/02/oceancorps_slidesonly.pdf"
    },
    {
      id: 4,
      title: "Many of the Ocean Corps co-leads are involved in a related UN Decade concept, EquiSea: The Ocean Science Fund for All",
      fileType: null,
      href: "https://equisea.org/"
    }
  ]

  // Animation variants
  const fadeUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: "easeInOut" }
  }

  return (
    <div className="text-white py-8 md:py-12">
      <div className="">
        <h4 className="text-lg !md:text-[1em] mb-8 md:mb-12">
          In addition to being a UN Ocean Decade Program, the Ocean Corps concept is listed on the Ocean Shot Directory of the US National Committee for the UN Decade of Ocean Science for Sustainable Development.
        </h4>
<br/>
        <div className="flex flex-col gap-6 md:gap-8">
          {downloadableItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="flex flex-col gap-3 border-b-2 border-white pb-4"
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...fadeUp.transition, delay: index * 0.1 }}
            >
              {/* Text Link */}
              <Link href={item.href} className="text-white  hover:no-underline transition-all">
                {item.title}
                {item.fileType && ` (${item.fileType.toUpperCase()})`}
              </Link>

              {/* Download Button */}
              {item.fileType && (
                <motion.button
                  className="btn-download w-fit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Download</span>
                  <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 8L7.5 6L4.5 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </motion.button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DownloadableContent
