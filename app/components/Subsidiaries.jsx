"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Subsidiaries = () => {
  const subsidiaries = [
    {
      id: 1,
      number: "01",
      title: "Coastal Ocean and Environment Summer School in Nigeria and Ghana (COESSING)",
      description: "COESSING is a one-week summer school that has taken place yearly since 2015 with the goal of educating and inspiring West African scientists at all career stages to pursue ocean-related fields. From 2015-2019 COESSING was held in Ghana, from 2020-2021 it was held virtually, and in 2022 it was held in Nigeria, which demonstrates that the summer school concept can be successful in multiple countries and formats. COESSING is one example of the exchange modalities that will be supported by Ocean Corps. COESSING is also an endorsed UN Ocean Decade Project.",
      link: "https://coessing.org",
      images: [
        "/coessing/1.webp",
        "/coessing/3.JPG",
        "/coessing/9.jpg",
      ]
    }
  ]

  // Animation variants
  const fadeUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: "easeInOut" }
  }

  return (
    <div className="flex flex-col gap-6 ">
        <h4 className='text-2xl md:!text-[2em]'>Our Initiatives</h4>
      {subsidiaries.map((subsidiary, index) => (
        <motion.div
          key={subsidiary.id}
          className="flex flex-col gap-6  pb-4"
          initial={fadeUp.initial}
          whileInView={fadeUp.animate}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ...fadeUp.transition, delay: index * 0.2 }}
        >
          {/* Header Section with Number and Title */}
          <div className="flex items-start gap-4 md:gap-6">
            {/* Number - Hollow/Outlined */}
            <motion.div
              className="text-6xl md:text-7xl lg:text-8xl  border-current bg-transparent flex-shrink-0 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center"
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={{ once: true }}
              transition={{ ...fadeUp.transition, delay: index * 0.2 + 0.1 }}
            >
              {subsidiary.number}
            </motion.div>

            {/* Title - Wraps to multiple lines */}
            <motion.h2
              className="text-2xl md:text-3xl lg:text-[4em]  leading-tight flex-1 max-w-4xl"
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={{ once: true }}
              transition={{ ...fadeUp.transition, delay: index * 0.2 + 0.2 }}
            >
              {subsidiary.title}
            </motion.h2>
          </div>

          {/* Separator Line */}
          <motion.div
            className="w-full h-[1px] bg-current mt-2"
            initial={fadeUp.initial}
            whileInView={fadeUp.animate}
            viewport={{ once: true }}
            transition={{ ...fadeUp.transition, delay: index * 0.2 + 0.3 }}
          />

          {/* Content Section: Text on Left, Images on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-6 md:gap-8 lg:gap-12 items-start">
            {/* Left: Description Text */}
            <motion.div
              className="flex flex-col gap-4"
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={{ once: true }}
              transition={{ ...fadeUp.transition, delay: index * 0.2 + 0.4 }}
            >
                <div className='md:mt-[15em]'>

               
              <p className="text-base  md:text-lg leading-relaxed">
                {subsidiary.description}
              </p>

              {subsidiary.link && (
                <Link
                  href={subsidiary.link}
                  target="_blank"
                  className="underline hover:no-underline transition-all w-fit mt-2"
                >
                <button className='btn-primary'>  {subsidiary.link.replace('https://', '').replace('http://', '')}</button> 
                </Link>
              )}
               </div>
            </motion.div>

            {/* Right: Image Swiper */}
            <motion.div
              className="w-full h-[300px] "
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={{ once: true }}
              transition={{ ...fadeUp.transition, delay: index * 0.2 + 0.5 }}
            >
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={16}
                slidesPerView={1}
                navigation={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                className="w-full h-full overflow-hidden"
              >
                {subsidiary.images.map((image, imgIndex) => (
                  <SwiperSlide key={imgIndex}>
                    <div className="relative w-full h-full max-h-[400px]">
                      <Image
                        src={image}
                        alt={`${subsidiary.title} - Image ${imgIndex + 1}`}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default Subsidiaries
