import React from 'react'
import Image from 'next/image'
const UNDirective = () => {
  return (
    <div className="flex flex-col justify-between gap-4 py-4 md:sticky md:top-0 md:h-screen">
        <h2 className="md:!text-[2.5em]">A UN Decade of Ocean Science for Sustainable Development Programme</h2>

        <div className="flex items-center  gap-4 relative w-full h-full max-w-[600px] max-h-[300px] mx-auto">

            <Image src="/stylized logo 2.png" className="object-cover object-top  " alt="UNDirective" fill/>
        </div>
      
    </div>
  )
}

export default UNDirective
