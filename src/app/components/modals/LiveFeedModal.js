import { Icon } from '@iconify/react'
import Image from 'next/image'
import React from 'react'

const LiveFeedModal = ({ onClose }) => {
    return (
        <div className="fixed inset-x-0 2xl:inset-y-24  inset-y-0 bg-[#00000066] z-40 flex items-center justify-center">
            <div className='p-5 bg-[#434343] w-[546] h-[278] rounded-[10px]'>
                <div className='flex justify-between'>
                    <p className='text-xs font-semibold text-white'>Live Feed - CAM-01</p>
                    <div>
                        <Icon
                            onClick={onClose}
                            icon="ion:close-circle-outline" width="21" height="21" className='text-white cursor-pointer' />

                    </div>
                </div>
                <div className='relative'>
                    <Image src="/images/livelady.svg" width={506} height={182} className='rounded-[10px] pt-5' alt='img' />
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center '>

                        <Icon icon="fluent:share-20-regular" width="45" height="45" className='text-white' />
                        <p className='text-xs font-semibold text-white'>Live Feed Stream</p>
                        <p className='text-[#A8A8A8] text-[10px]'>CAM-01</p>
                        <p className='text-[#A8A8A8] text-[10px] flex items-center gap-[7px] pl-5'>
                            <span className='bg-[#B1ED00] size-[7px] rounded-full'/>Live</p>

                    </div>
                </div>
                <div className='flex justify-between pt-1.5'>
                    <div className='text-[10px] text-white/50 flex space-x-4.5 items-center'>
                        <p>
                            Status: Online
                        </p>
                        <p>Quality: HD</p>

                        <p className='gap-0.5'> <span className='size-[5px] rounded-full bg-white/50' />Downtown Store</p>
                    </div>
                    <button
                        onClick={onClose}
                        className='text-[10px] cursor-pointer text-white border border-white/20 rounded-[5px] 
                bg-transparent flex items-center justify-center w-25 h-6'>
                        Report Issue
                    </button>
                </div>
            </div>


        </div>
    )
}

export default LiveFeedModal