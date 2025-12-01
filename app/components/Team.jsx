"use client"
import React, { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css/navigation'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const Team = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)
  const swiperRef = useRef(null)

  const teamMembers = [
    {
      id: 1,
      name: "Brian K. Arbic",
      image: "/team/1.png",
      bio: "Brian K. Arbic is a professor in the Department of Earth and Environmental Sciences at the University of Michigan. He is a physical oceanographer whose research interests include global modeling of tides, internal tides and waves, and the eddying general circulation. He has received funding from the US National Science Foundation, Office of Naval Research, Department of Energy, NOAA, and NASA. His interest in capacity development stems back to his service in Ghana, as a US Peace Corps volunteer secondary math and science teacher. He is co-founder of the Coastal Ocean Environment Summer School in Ghana (coessing.org), an effort aimed at building ocean science capacity in Ghana, that has been running for one week every year since 2015. He is also a co-lead on EquiSea: The Ocean Science Fund for All (https://equisea.org)."
    },
    {
      id: 2,
      name: "Osinachi Ajoku",
      image: "/team/2.png",
      bio: "Osinachi Ajoku is a postdoctoral researcher at the National Center for Atmospheric Research (NCAR) through the Advanced Study Program (ASP). His current research focuses on the impacts that biomass burning aerosols have on Earth's climate, specifically over the African continent. Other passions include advancing diversity, equity and inclusion throughout academia and beyond as well as mentoring undergraduate students in STEM majors that are interested in obtaining a PhD degree. In his free time, he is working on building a non-profit startup that aims to engage students from inner-city Los Angeles with climate change education. In his free time, he enjoys writing poetry and cooking new vegan dishes."
    },
    {
      id: 3,
      name: "Joseph K. Ansong",
      image: "/team/3.jpg",
      bio: "Dr. Joseph Kojo Ansong is presently a senior lecturer in the Department of Mathematics at the University of Ghana. He received his PhD in Applied Mathematics at the University of Alberta in Canada. Before joining the University of Ghana, Dr. Ansong worked as a post-doctoral fellow and a Research Scientist in the Department of Earth and Environmental Sciences at the University of Michigan, USA. His specialization is in the area of Applied Mathematics, specifically in Fluid Dynamics, Mathematical Modeling and Physical Oceanography. His research interests include the energetics of regional/global oceanic internal gravity waves, the dynamics of turbulent plumes, buoyancy driven flows and geophysical flows. One of his goals is to use regional ocean models together with observational data to study geophysical phenomena along the Gulf of Guinea in the Atlantic Ocean. Joseph has actively participated as an instructor and organizer of the Coastal Ocean Environment Summer School in Ghana (COESSING; coessing.org) since its inception in 2015. Website: www-personal.umich.edu/~jkansong/."
    },
    {
      id: 4,
      name: "Marcia Creary Ford",
      image: "/team/4.webp",
      bio: "Marcia Creary Ford is a marine scientist with over thirty years' experience working on various aspects of the Jamaican marine and coastal environment, including oceanography, mangrove and wetland ecology, environmental impact assessments, and marine biodiversity. As the Environmental Data Manager in the University of the West Indies-Centre for Marine Sciences (UWI-CMS) she specializes in coral reef monitoring and research on the impacts of climate change (increased sea surface temperature and ocean acidification) on the reef ecosystem. Her current focus, which is supported by The Ocean Foundation, is the establishment of an island-wide ocean acidification monitoring programme in the coastal waters of Jamaica. Marcia is a PhD Candidate at the University of the West Indies (UWI). She also holds an MPhil, in Marine Sciences, a Postgraduate Diploma in Management Studies, and a BSc (Hons) in Zoology also from the UWI."
    },
    {
      id: 5,
      name: "Madeline Foster-Martinez",
      image: "/team/5.png",
      bio: "Maddie Foster-Martinez is an Assistant Research Professor at the University of New Orleans. Her work as an environmental engineer focuses on coastal systems and wetland restoration. Using field observations and modeling, she studies how coastal vegetation can be leveraged to enhance climate change mitigation and adaptation. She holds a PhD from UC Berkeley, where she was an NSF graduate research intern at the USGS Pacific Coastal and Marine Science Center, and a Bachelor of Civil Engineering from Cooper Union in New York City. She is a co-organizer of the Coastal Oceanography and Environment Summer School in Ghana (COESSING) and leads group projects and lectures on mangroves and other coastal ecosystems. As a New Orleans native, her passion for all things Louisiana – music, crawfish, Mardi Gras – drives her work and play."
    },
    {
      id: 6,
      name: "Winn Johnson",
      image: "/team/6.png",
      bio: "Winn is an assistant professor in the Department of Chemistry and Biochemistry and the Center for Marine Science at the University of North Carolina Wilmington. Her research focuses on the cycling of small organic molecules, or metabolites, in marine environments. She uses mass spectrometry to characterize the complex mixture of metabolites found in the ocean to understand their place in the marine carbon cycle and their role within microbial food webs. Winn is a co-organizer of the Coastal Oceanography and Environment Summer School in Ghana and leads lectures, labs, and projects focused on chemical oceanography. She is interested in participating in and facilitating international collaborations that share resource-intensive analytical instrumentation to improve our understanding of global ocean chemistry. She enjoys exploring the marshes and beaches of her new home in Wilmington, NC."
    },
    {
      id: 7,
      name: "Edem Mahu",
      image: "/team/7.png",
      bio: "Edem Mahu is a lecturer of Biogeochemistry at the Department of Marine and Fisheries Sciences at the University of Ghana. Her research interest spans geochemical cycling of elements within the land-sea interface, marine environmental pollution, ecosystem connection to seafood safety and security, climate change, and ocean health. She is a trustee of the Partnership for Observation of the Global Ocean (POGO), an affiliate member of the African Academy of Sciences (AAS), a research fellow of the Royal Society of London, a co-director of the Summer School on the Coastal Ocean environment of Ghana (coessing.org) and a member of the steering committee for CoastPredict (coastpredict.org). She is the Lead Scientist of the BIOTTA (Building CapacIty in Ocean AcidificaTion MoniToring in the Gulf of GuineA) project which is the first coordinated effort to measure ocean acidification in the Gulf of Guinea and other adjoining coasts in Africa. She has in the past received research funding from the Royal Society, POGO, the Organization for women in science for the developing world (OWSD), and the International Foundation for Science."
    },
    {
      id: 8,
      name: "Paige E. Martin",
      image: "/team/8.jpg",
      bio: "Paige is a postdoctoral scholar at the Australian National University/Lamont Doherty Earth Laboratory. She is passionate about using, developing, and sharing open source software within the ocean and climate science communities. Her research currently focuses on how the ocean and atmosphere interact, and how sea surface temperature varies over time and space. As an elected member of the American Geophysical Union Council, she represents early career scientists and pushes the frontier of earth and space science on a variety of topics including innovation, publications, talent pool, and science communication. Paige also leads the computational courses for and is a co-organizer of the Coastal Oceanography and Environment Summer School in Ghana (COESSING; coessing.org), teaching Python programming to West African ocean scientists. In her spare time, she does acrobatics and performs in musical theater, and she is fluent in English, French, and German."
    },
    {
      id: 9,
      name: "Ebenezer Nyadjro",
      image: "/team/9.jpg",
      bio: "Ebenezer (Eben) Nyadjro is an Associate Research Professor with the Northern Gulf Institute (NGI), Mississippi State University. He is also an affiliate of the National Oceanic and Atmospheric Administration (NOAA) National Centers for Environmental Information, Stennis Space Center, Mississippi. Eben is a physical and satellite oceanographer with research focus on microplastics, ocean currents, salinity, air-sea interactions and ocean and environmental leadership and capacity building. Eben has actively participated in the Coastal Ocean Environment Summer School in Ghana (COESSING; coessing.org), since it started in 2015. He previously worked at the NOAA Pacific Marine Environmental Lab (PMEL) in Seattle and the US Naval Research Lab, Stennis Space Center. Eben graduated with a BSc in Oceanography & Fisheries from the University of Ghana, an MS in Marine Science from the University of North Carolina Wilmington, an MS in Organizational Leadership from Cameron University, Oklahoma, and a PhD in physical and satellite oceanography from the University of South Carolina in 2012."
    },
    {
      id: 10,
      name: "Katie Roche",
      image: "/team/10.png",
      bio: "Katie Roche is a Ph.D. student in Biological and Environmental Sciences at the University of Rhode Island (URI). Her research focuses on the influence that bacteria-diatom interactions have on larger ocean processes. She is currently using 'omics methods to investigate the role that bacteria play in harmful algal blooms of phytoplankton in Narragansett Bay, RI. Katie has a passion for education, women's empowerment, and capacity building in the sciences. During her time as a Peace Corps volunteer teaching secondary math, chemistry, and computing in Guinea, Katie engaged with environmental organizations, youth clubs, and women's groups to promote capacity development through STEM."
    },
    {
      id: 11,
      name: "Alexis Valauri-Orton",
      image: "/team/11.webp",
      bio: "Alexis joined TOF in 2016 where she managed program initiatives and activities. She currently leads the International Ocean Acidification Initiative (IOAI), and previously developed and managed programs related to social marketing and behavior change. In her capacity as manager of IOAI she leads international training workshops for scientists, policymakers, and seafood sector workers, develops low-cost systems for responding to ocean acidification, and manages a multiyear strategy for enabling countries around the world to address ocean acidification. She currently serves on the International Experts Group on Ocean Acidification. Prior to joining TOF Alexis worked for the Fish Forever program at Rare, as well as for the ocean acidification programs at Ocean Conservancy and Global Ocean Health. She holds a magna cum laude degree with honors in Biology and Environmental Studies from Davidson College and was awarded a Thomas J. Watson Fellowship to study how ocean acidification might affect marine-dependent communities in Norway, Hong Kong, Thailand, New Zealand, the Cook Islands, and Peru. She highlighted her research during this fellowship as a plenary speaker at the Inaugural Our Ocean Conference in Washington, DC. She has previously published work on cellular toxicology and curriculum design. Beyond the ocean, Alexis' other love is music: she plays flute, piano, and sings and regularly attends and performs at concerts around town."
    },
    {
      id: 12,
      name: "Shau Hwai TAN (Aileen)",
      image: "/team/12.jpg",
      bio: "Prof. Dato' Dr. Aileen Tan Shau Hwai is a Professor in School of Biological Sciences, Universiti Sains Malaysia (USM). She is a Fellow of Academy Science Malaysia. Currently, she is the Vice Chair of IOC Western Pacific (WESTPAC), Director of Centre for Marine and Coastal Studies (CEMACS) in Universiti Sains Malaysia and Executive Director of the Asia-Pacific University-Community Engagement Network (APUCEN). She is also a Board member of Partnership for Observations of the Global Oceans (POGO). She serves as international steering committee in several organisations such as CoastPredict and EquiSea. Her field of expertise is in marine science, specializing in mariculture and conservation of molluscs. She has been elected as the first woman president of the 59-years old UNITAS Malacologica, which is based in Belgium, from 2013-2016. She is the first Malaysian woman who has successfully culture the oysters from eggs and sperms through artificial spawning. She is now actively encouraging the rural coastal communities in Malaysia to culture molluscs to promote \"green aquaculture\" as well as to create a sustainable income for the local communities, besides creating a balance between profit and environment protection. She has also guided the women-folks in Johore Islands in earning their own income through the giant clam conservation programme. She believes strongly in translational knowledge and benefitting the communities with research findings, creating excellence with soul."
    },
    {
      id: 13,
      name: "J. P. Walsh",
      image: "/team/13.webp",
      bio: "J.P. Walsh is Director of the Coastal Resources Center (CRC) and a Professor in the Graduate School of Oceanography at URI. The CRC focuses on using science to address societal concerns, and Walsh works with the talented staff and partners to achieve sustainable communities in New England and around the World. He is a geological oceanographer interested in understanding coastal processes and hazards. His research focuses on sedimentary dynamics and related issues such as coastal erosion and habitat loss. Walsh is currently leading a project examining marine plastics along the shore and seafloor of Narragansett Bay and is also mapping coastal habitats and changes in the Philippines, Madagascar, North Carolina and RI."
    }
  ]

  // Animation variants
  const fadeUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: "easeInOut" }
  }

  // Function to convert URLs and domains in text to clickable links
  const parseBioWithLinks = (text) => {
    // Pattern to match full URLs (http://, https://)
    const fullUrlPattern = /(https?:\/\/[^\s\)]+)/gi
    
    // Pattern to match www. URLs
    const wwwPattern = /(www\.[^\s\)]+)/gi
    
    // Pattern to match domain names (domain.com, domain.org, etc.) - but not emails
    // Common domains from the bios: coessing.org, equisea.org, coastpredict.org, etc.
    const domainPattern = /\b([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*(?:\.(?:com|org|edu|gov|net|io|co|uk|us|au|ca|de|fr|jp|cn|in|br|mx|za|ng|gh|jm|my))(?:\/[^\s\)]*)?)\b/gi
    
    let processedText = text
    
    // First, replace full URLs (https:// or http://)
    processedText = processedText.replace(fullUrlPattern, (match) => {
      return `<a href="${match}" target="_blank" rel="noopener noreferrer" class="underline hover:no-underline text-blue-200">${match}</a>`
    })
    
    // Then replace www. URLs
    processedText = processedText.replace(wwwPattern, (match, p1, offset, fullString) => {
      // Check if already inside a link tag
      const beforeMatch = fullString.substring(0, offset)
      const openTags = (beforeMatch.match(/<a\s/g) || []).length
      const closeTags = (beforeMatch.match(/<\/a>/g) || []).length
      if (openTags > closeTags) return match
      
      return `<a href="https://${match}" target="_blank" rel="noopener noreferrer" class="underline hover:no-underline text-blue-200">${match}</a>`
    })
    
    // Finally, replace domain names (but not those already in links or emails)
    processedText = processedText.replace(domainPattern, (match, p1, offset, fullString) => {
      // Check if already inside a link tag
      const beforeMatch = fullString.substring(0, offset)
      const openTags = (beforeMatch.match(/<a\s/g) || []).length
      const closeTags = (beforeMatch.match(/<\/a>/g) || []).length
      if (openTags > closeTags) return match
      
      // Don't replace if it's part of an email (check character before)
      if (offset > 0) {
        const charBefore = fullString[offset - 1]
        if (charBefore === '@' || /[a-zA-Z0-9]/.test(charBefore)) {
          return match
        }
      }
      
      // Skip if it contains @ or is too short
      if (match.includes('@') || match.length < 4) {
        return match
      }
      
      return `<a href="https://${match}" target="_blank" rel="noopener noreferrer" class="underline hover:no-underline text-blue-200">${match}</a>`
    })
    
    return processedText
  }

  const toggleExpand = (index) => {
    const newExpandedIndex = expandedIndex === index ? null : index
    setExpandedIndex(newExpandedIndex)
    
    // Stop autoplay when expanded, resume when collapsed
    if (swiperRef.current && swiperRef.current.swiper) {
      if (newExpandedIndex !== null) {
        swiperRef.current.swiper.autoplay.stop()
      } else {
        swiperRef.current.swiper.autoplay.start()
      }
    }
  }

  return (
    <div className="">
      <div className="mb-8">
        <h2 className="text-3xl md:!text-[5em]   mb-4">Our Team</h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-4xl">
          We are a team from a variety of backgrounds with a shared interest in ocean science capacity development and research collaboration across the globe
        </p>
      </div>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        navigation={true}
        autoplay={
          expandedIndex === null
            ? {
                delay: 4000,
                disableOnInteraction: false,
              }
            : false
        }
        className="w-full"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={member.id}>
            <motion.div
              className="bg-white/10 rounded-lg overflow-hidden border border-white/20 cursor-pointer h-full flex flex-col"
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={{ once: true }}
              transition={{ ...fadeUp.transition, delay: index * 0.1 }}
              onClick={() => toggleExpand(index)}
              whileHover={{ scale: 1.02 }}
            >
              {/* Image */}
              <div className="relative w-full h-64 md:h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Name */}
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font- mb-2">{member.name}</h3>
                
                {/* Expandable Bio */}
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p 
                        className="text-sm md:text-base max-h-[200px] overflow-y-auto leading-relaxed mt-4"
                        dangerouslySetInnerHTML={{ __html: parseBioWithLinks(member.bio) }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Expand/Collapse Indicator */}
                <div className="mt-4 flex items-center gap-2 text-sm">
                  <span>{expandedIndex === index ? "Read Less" : "Read More"}</span>
                  <motion.svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Team
