"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Header = () => {
  // Unsplash ocean images
  const oceanImages = [
    'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&h=400&fit=crop',
  ]

  // Animation variants
  const fadeUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: "easeInOut" }
  }

  const fadeDown = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: "easeInOut" }
  }

  return (
 
      <div className="flex flex-col gap-4 mx-auto h-full">
        {/* Main Content Grid */}
        <div className="flex flex-col gap-4 ">
          {/* Left Side - Main Title */}
          <motion.h1 
            className="text-5xl md:!text-6xl lg:!text-7xl max-w-4xl mb-4 leading-tight"
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={fadeUp.transition}
          >
            Global Ocean
            Corps and Conveyor
          </motion.h1>
        </div>
        <motion.div 
          className="flex self-end flex-col max-w-2xl justify-center"
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
        >
          <motion.h4 
            className="text-xl md:text-2xl lg:text-3xl font-medium mb-4 leading-relaxed"
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
          >
            Inspiring sustained, long-term ocean science education and research collaborations between nations
          </motion.h4>
          <motion.button 
            className="btn-primary w-fit"
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ ...fadeUp.transition, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read More
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12L10 8L6 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </motion.div>
        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-8">
          {/* Left - Initiatives Section */}
          <motion.div
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ ...fadeUp.transition, delay: 0.5 }}
          >
            <motion.h5 
              className="text-xl md:text-2xl  mr-4"
              initial={fadeUp.initial}
              animate={fadeUp.animate}
              transition={{ ...fadeUp.transition, delay: 0.6 }}
            >
              Visit Our Initiatives
            </motion.h5>
            
            {/* COESSING Card */}
            <Link href="https://coessing.org/" target="_blank">
              <motion.div 
                className=" border-t-2 border-white/80 pt-4"
                initial={fadeUp.initial}
                animate={fadeUp.animate}
                transition={{ ...fadeUp.transition, delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex gap-4 items-center">
                  <motion.div 
                    className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden flex-shrink-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ ...fadeUp.transition, delay: 0.8 }}
                  >
                    <Image
                      src="/coessing/9.jpg"
                      alt="COESSING"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </motion.div>
                  <div className="flex-1">
                    <motion.h3 
                      className="text-xl md:text-2xl  mb-2"
                      initial={fadeUp.initial}
                      animate={fadeUp.animate}
                      transition={{ ...fadeUp.transition, delay: 0.8 }}
                    >
                      COESSING
                    </motion.h3>
                    <motion.p 
                      className="!text-[0.8em] text-white/90 mb-4"
                      initial={fadeUp.initial}
                      animate={fadeUp.animate}
                      transition={{ ...fadeUp.transition, delay: 0.9 }}
                    >
                      One week immersive summer schools alternating between remote and regional setting res
                    </motion.p>
                    <motion.button 
                      className="btn-primary !text-[0.8em]"
                      initial={fadeUp.initial}
                      animate={fadeUp.animate}
                      transition={{ ...fadeUp.transition, delay: 1.0 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Read More
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12L10 8L6 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Right - Image Gallery */}
          <motion.div 
            className="relative"
            initial={fadeDown.initial}
            animate={fadeDown.animate}
            transition={{ ...fadeDown.transition, delay: 0.5 }}
          >
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={16}
              slidesPerView={3}
              navigation={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                },
              }}
              className="w-full"
            >
              {oceanImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <motion.div 
                    className="aspect-square rounded-lg overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 1.2, 
                      delay: 0.6 + (index * 0.1),
                      ease: "easeInOut"
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={image}
                      alt={`Ocean image ${index + 1}`}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
 
  )
}

export default Header
