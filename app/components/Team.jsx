"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null)

  const teamMembers = [
    {
      id: 1,
      name: "Brian K. Arbic",
      bio: "Brian K. Arbic is a professor in the Department of Earth and Environmental Sciences at the University of Michigan. He is a physical oceanographer whose research interests include global modeling of tides, internal tides and waves, and the eddying general circulation. He has received funding from the US National Science Foundation, Office of Naval Research, Department of Energy, NOAA, and NASA. His interest in capacity development stems back to his service in Ghana, as a US Peace Corps volunteer secondary math and science teacher. He is co-founder of the Coastal Ocean Environment Summer School in Ghana (coessing.org), an effort aimed at building ocean science capacity in Ghana, that has been running for one week every year since 2015. He is also a co-lead on EquiSea: The Ocean Science Fund for All (https://equisea.org)."
    },
    {
      id: 2,
      name: "Osinachi Ajoku",
      bio: "Osinachi Ajoku is a postdoctoral researcher at the National Center for Atmospheric Research (NCAR) through the Advanced Study Program (ASP). His current research focuses on the impacts that biomass burning aerosols have on Earth's climate, specifically over the African continent. Other passions include advancing diversity, equity and inclusion throughout academia and beyond as well as mentoring undergraduate students in STEM majors that are interested in obtaining a PhD degree. In his free time, he is working on building a non-profit startup that aims to engage students from inner-city Los Angeles with climate change education. In his free time, he enjoys writing poetry and cooking new vegan dishes."
    },
    {
      id: 3,
      name: "Joseph K. Ansong",
      bio: "Dr. Joseph Kojo Ansong is presently a senior lecturer in the Department of Mathematics at the University of Ghana. He received his PhD in Applied Mathematics at the University of Alberta in Canada. Before joining the University of Ghana, Dr. Ansong worked as a post-doctoral fellow and a Research Scientist in the Department of Earth and Environmental Sciences at the University of Michigan, USA. His specialization is in the area of Applied Mathematics, specifically in Fluid Dynamics, Mathematical Modeling and Physical Oceanography. His research interests include the energetics of regional/global oceanic internal gravity waves, the dynamics of turbulent plumes, buoyancy driven flows and geophysical flows. One of his goals is to use regional ocean models together with observational data to study geophysical phenomena along the Gulf of Guinea in the Atlantic Ocean. Joseph has actively participated as an instructor and organizer of the Coastal Ocean Environment Summer School in Ghana (COESSING; coessing.org) since its inception in 2015. Website: www-personal.umich.edu/~jkansong/."
    },
    {
      id: 4,
      name: "Marcia Creary Ford",
      bio: "Marcia Creary Ford is a marine scientist with over thirty years' experience working on various aspects of the Jamaican marine and coastal environment, including oceanography, mangrove and wetland ecology, environmental impact assessments, and marine biodiversity. As the Environmental Data Manager in the University of the West Indies-Centre for Marine Sciences (UWI-CMS) she specializes in coral reef monitoring and research on the impacts of climate change (increased sea surface temperature and ocean acidification) on the reef ecosystem. Her current focus, which is supported by The Ocean Foundation, is the establishment of an island-wide ocean acidification monitoring programme in the coastal waters of Jamaica. Marcia is a PhD Candidate at the University of the West Indies (UWI). She also holds an MPhil, in Marine Sciences, a Postgraduate Diploma in Management Studies, and a BSc (Hons) in Zoology also from the UWI."
    },
    {
      id: 5,
      name: "Madeline Foster-Martinez",
      bio: "Maddie Foster-Martinez is an Assistant Research Professor at the University of New Orleans. Her work as an environmental engineer focuses on coastal systems and wetland restoration. Using field observations and modeling, she studies how coastal vegetation can be leveraged to enhance climate change mitigation and adaptation. She holds a PhD from UC Berkeley, where she was an NSF graduate research intern at the USGS Pacific Coastal and Marine Science Center, and a Bachelor of Civil Engineering from Cooper Union in New York City. She is a co-organizer of the Coastal Oceanography and Environment Summer School in Ghana (COESSING) and leads group projects and lectures on mangroves and other coastal ecosystems. As a New Orleans native, her passion for all things Louisiana – music, crawfish, Mardi Gras – drives her work and play."
    },
    {
      id: 6,
      name: "Winn Johnson",
      bio: "Winn is an assistant professor in the Department of Chemistry and Biochemistry and the Center for Marine Science at the University of North Carolina Wilmington. Her research focuses on the cycling of small organic molecules, or metabolites, in marine environments. She uses mass spectrometry to characterize the complex mixture of metabolites found in the ocean to understand their place in the marine carbon cycle and their role within microbial food webs. Winn is a co-organizer of the Coastal Oceanography and Environment Summer School in Ghana and leads lectures, labs, and projects focused on chemical oceanography. She is interested in participating in and facilitating international collaborations that share resource-intensive analytical instrumentation to improve our understanding of global ocean chemistry. She enjoys exploring the marshes and beaches of her new home in Wilmington, NC."
    },
    {
      id: 7,
      name: "Edem Mahu",
      bio: "Edem Mahu is a lecturer of Biogeochemistry at the Department of Marine and Fisheries Sciences at the University of Ghana. Her research interest spans geochemical cycling of elements within the land-sea interface, marine environmental pollution, ecosystem connection to seafood safety and security, climate change, and ocean health. She is a trustee of the Partnership for Observation of the Global Ocean (POGO), an affiliate member of the African Academy of Sciences (AAS), a research fellow of the Royal Society of London, a co-director of the Summer School on the Coastal Ocean environment of Ghana (coessing.org) and a member of the steering committee for CoastPredict (coastpredict.org). She is the Lead Scientist of the BIOTTA (Building CapacIty in Ocean AcidificaTion MoniToring in the Gulf of GuineA) project which is the first coordinated effort to measure ocean acidification in the Gulf of Guinea and other adjoining coasts in Africa. She has in the past received research funding from the Royal Society, POGO, the Organization for women in science for the developing world (OWSD), and the International Foundation for Science."
    },
    {
      id: 8,
      name: "Paige E. Martin",
      bio: "Paige is a postdoctoral scholar at the Australian National University/Lamont Doherty Earth Laboratory. She is passionate about using, developing, and sharing open source software within the ocean and climate science communities. Her research currently focuses on how the ocean and atmosphere interact, and how sea surface temperature varies over time and space. As an elected member of the American Geophysical Union Council, she represents early career scientists and pushes the frontier of earth and space science on a variety of topics including innovation, publications, talent pool, and science communication. Paige also leads the computational courses for and is a co-organizer of the Coastal Oceanography and Environment Summer School in Ghana (COESSING; coessing.org), teaching Python programming to West African ocean scientists. In her spare time, she does acrobatics and performs in musical theater, and she is fluent in English, French, and German."
    },
    {
      id: 9,
      name: "Ebenezer Nyadjro",
      bio: "Ebenezer (Eben) Nyadjro is an Associate Research Professor with the Northern Gulf Institute (NGI), Mississippi State University. He is also an affiliate of the National Oceanic and Atmospheric Administration (NOAA) National Centers for Environmental Information, Stennis Space Center, Mississippi. Eben is a physical and satellite oceanographer with research focus on microplastics, ocean currents, salinity, air-sea interactions and ocean and environmental leadership and capacity building. Eben has actively participated in the Coastal Ocean Environment Summer School in Ghana (COESSING; coessing.org), since it started in 2015. He previously worked at the NOAA Pacific Marine Environmental Lab (PMEL) in Seattle and the US Naval Research Lab, Stennis Space Center. Eben graduated with a BSc in Oceanography & Fisheries from the University of Ghana, an MS in Marine Science from the University of North Carolina Wilmington, an MS in Organizational Leadership from Cameron University, Oklahoma, and a PhD in physical and satellite oceanography from the University of South Carolina in 2012."
    },
    {
      id: 10,
      name: "Katie Roche",
      bio: "Katie Roche is a Ph.D. student in Biological and Environmental Sciences at the University of Rhode Island (URI). Her research focuses on the influence that bacteria-diatom interactions have on larger ocean processes. She is currently using 'omics methods to investigate the role that bacteria play in harmful algal blooms of phytoplankton in Narragansett Bay, RI. Katie has a passion for education, women's empowerment, and capacity building in the sciences. During her time as a Peace Corps volunteer teaching secondary math, chemistry, and computing in Guinea, Katie engaged with environmental organizations, youth clubs, and women's groups to promote capacity development through STEM."
    },
    {
      id: 11,
      name: "Alexis Valauri-Orton",
      bio: "Alexis joined TOF in 2016 where she managed program initiatives and activities. She currently leads the International Ocean Acidification Initiative (IOAI), and previously developed and managed programs related to social marketing and behavior change. In her capacity as manager of IOAI she leads international training workshops for scientists, policymakers, and seafood sector workers, develops low-cost systems for responding to ocean acidification, and manages a multiyear strategy for enabling countries around the world to address ocean acidification. She currently serves on the International Experts Group on Ocean Acidification. Prior to joining TOF Alexis worked for the Fish Forever program at Rare, as well as for the ocean acidification programs at Ocean Conservancy and Global Ocean Health. She holds a magna cum laude degree with honors in Biology and Environmental Studies from Davidson College and was awarded a Thomas J. Watson Fellowship to study how ocean acidification might affect marine-dependent communities in Norway, Hong Kong, Thailand, New Zealand, the Cook Islands, and Peru. She highlighted her research during this fellowship as a plenary speaker at the Inaugural Our Ocean Conference in Washington, DC. She has previously published work on cellular toxicology and curriculum design. Beyond the ocean, Alexis' other love is music: she plays flute, piano, and sings and regularly attends and performs at concerts around town."
    },
    {
      id: 12,
      name: "Shau Hwai TAN (Aileen)",
      bio: "Prof. Dato' Dr. Aileen Tan Shau Hwai is a Professor in School of Biological Sciences, Universiti Sains Malaysia (USM). She is a Fellow of Academy Science Malaysia. Currently, she is the Vice Chair of IOC Western Pacific (WESTPAC), Director of Centre for Marine and Coastal Studies (CEMACS) in Universiti Sains Malaysia and Executive Director of the Asia-Pacific University-Community Engagement Network (APUCEN). She is also a Board member of Partnership for Observations of the Global Oceans (POGO). She serves as international steering committee in several organisations such as CoastPredict and EquiSea. Her field of expertise is in marine science, specializing in mariculture and conservation of molluscs. She has been elected as the first woman president of the 59-years old UNITAS Malacologica, which is based in Belgium, from 2013-2016. She is the first Malaysian woman who has successfully culture the oysters from eggs and sperms through artificial spawning. She is now actively encouraging the rural coastal communities in Malaysia to culture molluscs to promote \"green aquaculture\" as well as to create a sustainable income for the local communities, besides creating a balance between profit and environment protection. She has also guided the women-folks in Johore Islands in earning their own income through the giant clam conservation programme. She believes strongly in translational knowledge and benefitting the communities with research findings, creating excellence with soul."
    },
    {
      id: 13,
      name: "J. P. Walsh",
      bio: "J.P. Walsh is Director of the Coastal Resources Center (CRC) and a Professor in the Graduate School of Oceanography at URI. The CRC focuses on using science to address societal concerns, and Walsh works with the talented staff and partners to achieve sustainable communities in New England and around the World. He is a geological oceanographer interested in understanding coastal processes and hazards. His research focuses on sedimentary dynamics and related issues such as coastal erosion and habitat loss. Walsh is currently leading a project examining marine plastics along the shore and seafloor of Narragansett Bay and is also mapping coastal habitats and changes in the Philippines, Madagascar, North Carolina and RI."
    }
  ]

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeInOut" }
  }

  const parseBioWithLinks = (text) => {
    const fullUrlPattern = /(https?:\/\/[^\s\)]+)/gi
    const wwwPattern = /(www\.[^\s\)]+)/gi
    
    let processedText = text.replace(fullUrlPattern, (match) => {
      return `<a href="${match}" target="_blank" rel="noopener noreferrer" class="underline text-blue-300 hover:text-white">${match}</a>`
    })
    
    processedText = processedText.replace(wwwPattern, (match, p1, offset, fullString) => {
      const beforeMatch = fullString.substring(0, offset)
      const openTags = (beforeMatch.match(/<a\s/g) || []).length
      const closeTags = (beforeMatch.match(/<\/a>/g) || []).length
      if (openTags > closeTags) return match
      return `<a href="https://${match}" target="_blank" rel="noopener noreferrer" class="underline text-blue-300 hover:text-white">${match}</a>`
    })
    
    return processedText
  }

  return (
    <div className="flex flex-col gap-6 py-8">
      <motion.div
        initial={fadeUp.initial}
        whileInView={fadeUp.animate}
        viewport={{ once: true }}
        transition={fadeUp.transition}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
          Founding Members
        </h2>
        <div className="w-full h-[1px] bg-white/40 mb-6" />
      </motion.div>

      {/* Grid of Names */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            className="bg-white/5 border border-white/15 hover:border-white/40 rounded-xl p-5 cursor-pointer transition-all duration-300 flex flex-col justify-between"
            initial={fadeUp.initial}
            whileInView={fadeUp.animate}
            viewport={{ once: true }}
            transition={{ ...fadeUp.transition, delay: index * 0.05 }}
            onClick={() => setSelectedMember(selectedMember?.id === member.id ? null : member)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg md:text-xl font-semibold text-white">
                {member.name}
              </h3>
              <span className="text-xs font-mono text-white/50 border border-white/20 rounded-full px-2 py-0.5">
                {selectedMember?.id === member.id ? "Close" : "Bio"}
              </span>
            </div>

            <AnimatePresence>
              {selectedMember?.id === member.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-4 pt-4 border-t border-white/10"
                >
                  <p 
                    className="text-xs md:text-sm text-white/85 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: parseBioWithLinks(member.bio) }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Team

