"use client"
import FilterSection from '@/app/components/timealerts/FilterSection'
import QueueSection from '@/app/components/timealerts/QueueSection'
import React from 'react'


const Page = () => {
  return (
    <div className='container md:mt-[37px] pb-2 px-3'>
      <div className='pb-7.5 md:mt-8'>
        <p className="md:text-[20px] font-semibold text-white pb-2.5">Review Queue</p>
        <p className="pb-3.5 text-white text-sm font-medium">
          Monitor and review security incidents as they happen
        </p>
      </div>

      <div className='pb-13'>
        <FilterSection />
      </div>
      <div>
         <QueueSection/>
      </div>
     
    </div>
  )
}

export default Page