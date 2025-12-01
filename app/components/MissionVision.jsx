import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const MissionVision = () => {
  return (
    <div className="flex flex-col gap-6 h-auto">

<div className="md:ml-[2em] flex flex-col gap-6 max-w-[400px]">

<h5>
        Ocean Corps Mission
      </h5>

     
    <p> An inclusive and integrated ocean science community, fueled by multifaceted knowledge and capacity exchange throughout the globe.</p>
      
</div>

<div className="flex  flex-col md:mt-[4em] self-end gap-6 max-w-[400px]">

<h5>
        Ocean Corps Vision
      </h5>

     
    <p> To facilitate capacity building around the world in ocean science and its application through international exchange with the global community. </p>
      
</div>



<div className="w-full flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-12 justify-between border-t-2 border-white pt-4 mt-4">
  <div className="relative w-full md:w-auto h-[300px] md:h-[400px] min-w-[250px] max-w-[250px] border">
    <Image src="/Flyer.jpg" alt="Ocean Corps" fill className="object-cover w-full h-full" />
  </div>

  <div className="flex flex-col items-center md:items-start gap-4 flex-1 min-w-0 max-w-full">
    <Link href="https://globaloceancorps.org/wp-content/uploads/2022/09/ocean-corps-one-pager.pdf" target="_blank" className="w-full">
      <h4 className="break-words">Download Ocean Corps Flyer</h4>
      <button className="btn-primary">
        Download Flyer
      </button>
    </Link>
  </div>
</div>




    </div>
  )
}

export default MissionVision
