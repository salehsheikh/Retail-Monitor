import { Icon } from '@iconify/react'
import React from 'react'

const Apearence = () => {
  return (
    <>
      <div className='bg-[color:var(--color-darkest)] rounded-[20px] py-5.5 px-5'>
        <div className='flex gap-[7px] '>
          <Icon icon="mage:laptop" width="18" height="18" className='text-white' />
          <p className='text-sm text-white mb-5'>Appearance Settings</p>
        </div>
        <p className='text-sm font-medium pl-6 text-white pb-[31px]'>Theme Preference</p>
        <div className='flex lg:justify-around justify-between  flex-wrap space-y-2'>
          <div className='bg-[#B1ED0042] py-[13px]! h-[72px] lg:w-fit flex justify-center items-center w-full cursor-pointer px-[114px] gap-[3px] rounded-[10px] border border-[#B1ED00]'>
            <Icon icon="mynaui:sun" width="26" height="26" className='text-white' />
            <p className='text-xs text-white'>Light</p>
          </div>
          <div className='bg-white/20 py-[13px] h-[72px] lg:w-fit flex justify-center items-center  w-full cursor-pointer px-[114px] gap-[3px] rounded-[10px] '>
            <Icon icon="solar:moon-line-duotone" width="21" height="21" className='text-white' />
            <p className='text-xs text-white'>Dark</p>
          </div>
          <div className='bg-[#0D0D0D] cursor-pointer h-[72px] lg:w-fit  w-full flex justify-center items-center py-[13px] gap-[3px] px-[114px] rounded-[10px] border border-white/20'>
            <Icon icon="mage:laptop" width="26" height="26" className='text-white' />
            <p className='text-xs text-white'>Light</p>
          </div>
        </div>
        <div className="w-full h-[1px] bg-white/50 my-7.5 " />
        <div className='px-5 py-[9px] rounded-[10px] bg-[#0D0D0D] text-white'>
          <p className='text-sm pb-[19px]'>Preview</p>
          <div className='flex items-center gap-2'>
            <Icon icon="mingcute:alert-line" width="14" height="14" className='text-[#FF4768]' />
            <span className='text-xs'>High Priority Alert</span>
            <div className='rounded-[10px] py-1 px-3 w-fit text-xs text-black bg-[#FF4768]'>
              New
            </div>
          </div>
          <div className='flex items-center gap-2 pt-[9px] mb-5'>
            <Icon icon="charm:circle-tick" width="14" height="14" className='text-[#B1ED00]' />
            <span className='text-xs'>High Priority Alert</span>
            <div className='rounded-[10px] py-1 px-3 w-fit text-xs text-black bg-[#B1ED00]'>
              Completed
            </div>
          </div>

        </div>

      </div>
      <div className="mt-5 flex justify-end">
        <button className=" bg-[#B1ED00] sm:w-fit w-full cursor-pointer rounded-[10px] px-[74px] py-3.5 text-black text-base ">Save Changes</button>

      </div>
    </>
  )
}

export default Apearence