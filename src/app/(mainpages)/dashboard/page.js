"use client"
import React from 'react'

import TopCards from '@/app/components/dashboard/TopCards'
import AlertTimeline from '@/app/components/dashboard/AlertTimeline'
import CameraView from '@/app/components/dashboard/CameraView'
import BarCard from '@/app/components/dashboard/BarCard'


const Page = () => {
  return (
    <div>

      <div className=' pb-2 px-3  container '>
        <div className='flex-col lg:flex lg:flex-row items-center  gap-[17px]'>
 <div className='flex-col flex-[1.2] space-y-[26px]'>
          <div><TopCards /></div>
          <div ><AlertTimeline/></div>
        </div>
        <div className='flex-col flex-[0.1] lg:mt-30 mt-6 space-y-[30px]'>
          <div> <CameraView/></div>
<div >
          <BarCard/>
        </div>
        </div>
        </div>
      </div>


    </div>

  )
}

export default Page