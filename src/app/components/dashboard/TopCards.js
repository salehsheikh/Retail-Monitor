"use client"
import { Icon } from '@iconify/react'
import Image from 'next/image'
import React from 'react'

const TopCards = () => {
  return (
    <>
      <div className='  md:mt-8 py-2.5 w-full '>
        <p className='md:text-[20px] font-semibold text-white' >Welcome back, Downtown Store</p>
        <p className='text-sm font-medium text-white'>Here&rsquo;s what&rsquo;s happening with your store security today.</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2    lg:grid-cols-3  gap-[17px] '>
        <div className='bg-[color:var(--color-darkest)] rounded-[20px] px-5 py-11 mt-5 card-shadow w-full h-[211px]'>
          <div className='flex justify-between'>
            <p className='text-sm font-medium text-white'>Total Incidents Today</p>
            <Icon icon="si:alert-line" width="18" height="18" className="text-[#FF6666]" />
          </div>
          <div className='flex-col '>
            <p className='md:text-[32px] text-lg py-5 text-white text-center'>
              7

            </p>
            <p className='text-xs text-white/50 '>8% more than last week</p>
            

          </div>



        </div>
        <div className='bg-[color:var(--color-darkest)]   rounded-[20px] px-5 py-11 mt-5 card-shadow w-full h-[211px]'>
          <div className='flex justify-between'>
            <p className='text-sm font-medium text-white'>Review Status</p>
            <Icon icon="charm:circle-tick" width="18" height="18"  className='text-[#46CF68]'/>
          </div>
          <div className='flex-col -space-y-2  pt-4 text-[#B1ED00]'>
            <p className='md:text-[40px] text-lg flex  gap-2.5 justify-center items-center '>
              5
              <span className='text-base'> Reviewed</span>
            </p>
            <p className='md:text-[40px] text-lg flex mb-2  gap-2.5 justify-center items-center'>
              2
              <span className='text-base'> Unreviewed</span>
            </p>
            
            

          </div>



        </div>

        <div className='bg-[color:var(--color-darkest)]  rounded-[20px] px-5 py-11 mt-5 card-shadow w-full  h-[211px]'>
          <div className='flex justify-between'>
            <p className='text-sm font-medium text-white'>Most Frequent Alert</p>
            <Icon icon="material-symbols-light:shield-outline" width="18" height="18"className="text-[#B1ED00]" />
          </div>
          <div className='flex-col space-y-[13px] '>
            <p className='md:text-2xl text-lg pt-10 text-white '>
             Shoplifting

            </p>
            <p className='text-xs text-white/50 '>67% of today’s incidents</p>
            

          </div>



        </div>
        
      </div>
    </>
  )
}

export default TopCards