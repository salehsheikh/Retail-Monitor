import React from 'react'
import Dropdown from '../../shared/DropDown';
import { Icon } from '@iconify/react';

const FilterSection = () => {
  const handleChange = (val) => {
    console.log("Selected:", val);
  };
  return (
    <div className='rounded-[20px] lg:h-[127px] md:py-5 md:px-[33px] p-2  bg-[color:var(--color-darkest)]'>
      <div className='flex-col space-y-7.5'>
        <p className='text-sm text-white font-semibold'> Filters</p>
        <div>
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:gap-11 gap-2.5 md:px-6'>
            <div className="relative w-full h-[40px]">
              <div className="flex items-center px-4 h-full rounded-[15px] border border-white/20 bg-transparent text-white">
                <Icon icon="mynaui:search" className="text-white text-base mr-4 size-6" />
                <input
                  type="text"
                  placeholder="Search "
                  className="bg-transparent text-white text-sm outline-none placeholder-white w-full"
                />
              </div>
            </div>
            <Dropdown
              label="All Types"
              options={["Admin", "User", "Staff"]}
              onSelect={handleChange}
            />
            <Dropdown
              label="All Confidence"
              options={["Low",  "Medium","High",]}
              onSelect={handleChange}
            />
            <Dropdown
              label="All Stores"
              options={["Store 1", "Store 2", "Store 3"]}
              onSelect={handleChange}
            />
            <button className=' cursor-pointer py-2.5 shrink-0 text-sm text-black flex items-center justify-center rounded-[15px] bg-[#B1ED00]'>
              Clear filters
            </button>
          </div>


        </div>
      </div>


    </div>
  )
}

export default FilterSection