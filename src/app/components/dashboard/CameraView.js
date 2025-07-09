import Image from 'next/image'
import React from 'react'

const CameraView = () => {
  return (
       <div className="bg-[color:var(--color-darkest)] px-4.5  rounded-[20px] space-y-[13px]  shadow-[0px_0px_3px_0px_rgba(0,0,0,0.25)]">
<div className='text-white flex justify-between pt-11 pl-[15px]'>
    <p className='text-sm font-medium'>Camera Quick View </p> 
    <Image src="/icons/time.svg" width={18} height={18} alt='img'/>
</div>
<div className='pt-10'>
    <Image src="/images/livelady.svg" width={275} height={162} alt='lady' className='rounded-[10px] h-[162px]  w-full  object-contain'/>
</div>
<div className='space-y-[3px] pl-[15px] '>
    <p className='text-white text-xs '>Camera-01 </p>
<p className='text-white/50 text-xs leading-3'>09:12 AM</p>
</div>
<button className='text-base font-medium cursor-pointer text-white px-8 py-2.5 bg-white/20 rounded-[10px] mb-[29px] ml-[15px]'>View All Cameras</button>


    </div>
  )
}

export default CameraView