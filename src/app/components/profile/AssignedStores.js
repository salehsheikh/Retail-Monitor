import { Icon } from '@iconify/react'
import React from 'react'

const AssignedStores = () => {
  return (
    <>
      <div className='bg-[color:var(--color-darkest)] rounded-[20px] py-4 px-5'>
        <div className='flex gap-[7px] mb-11'>
          <Icon icon="weui:location-outlined" width="18" height="18" className='text-white' />
          <p className='text-sm text-white'> Assigned Stores</p>
        </div>
        <div className='grid sm:grid-cols-2 grid-cols-1 gap-x-7 gap-y-2.5'>
          <button className='rounded-[20px] border border-[#B1ED00] text-xs  text-white bg-[#B1ED00]/26 py-[7px] lg:px-28'>
            Downtown Mall- Store 15
          </button>
          <button className='rounded-[20px] border border-[#B1ED00] text-xs text-white bg-[#B1ED00]/26 py-[7px] px-10 lg:px-28'>
            Downtown Mall- Store 15
          </button>
          <button className='rounded-[20px] border border-[#B1ED00] text-xs text-white bg-[#B1ED00]/26 py-[7px] px-10 lg:px-28'>
            Downtown Mall- Store 15
          </button>
          <button className='rounded-[20px] border border-[#B1ED00] text-xs text-white bg-[#B1ED00]/26 py-[7px] px-10 lg:px-28'>
            Downtown Mall- Store 15
          </button>
          <button className='rounded-[20px] border border-[#B1ED00] text-xs text-white bg-[#B1ED00]/26 py-[7px] px-10 lg:px-28'>
            Downtown Mall- Store 15
          </button>
          <button className='rounded-[20px] border border-[#B1ED00] text-xs text-white bg-[#B1ED00]/26 py-[7px] px-10 lg:px-28'>
            Downtown Mall- Store 15
          </button>

        </div>
        <div className="w-full h-[1px] bg-white/50 my-7.5" />
        <div className='py-[7px] px-[9px] bg-[#6C6BDB1A] rounded-[10px]'>
          <div className='flex gap-[7px]'>
            <Icon icon="lineicons:eye" width="18" height="18" className='text-[#6C6BDB]' />
            <p className='text-sm text-white'>Currently Assigned </p>
          </div>
          <p className='text-xs text-[#6C6BDB] pt-[9px] pb-4.5 sm:pl-6 pl-1'>You are monitoring 3 stores</p>
          <div className='text-xs text-white/50 flex-col  sm:flex sm:flex-row gap-3 sm:pl-6 pl-1'>
            <div className='py-1 px-2.5 rounded-[10px] border text-center  border-white/50'>Downtown Mall Store-15</div>
            <div className='py-1 px-2.5 rounded-[10px] border text-center mt-1.5 sm:mt-0 border-white/50'>Downtown Mall Store-15</div>
            <div className='py-1! px-2.5 rounded-[10px] border text-center mt-1.5 sm:mt-0 border-white/50'>Downtown Mall Store-15</div>
          </div>

        </div>
      </div>
      <div className="mt-5 flex justify-end">
        <button className=" bg-[#B1ED00] sm:w-fit  w-full cursor-pointer rounded-[10px] px-[74px] py-3.5 text-black text-base ">Save Changes</button>

      </div>
    </>
  )
}

export default AssignedStores