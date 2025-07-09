import { Icon } from '@iconify/react'
import Image from 'next/image'
import React from 'react'

const ViewClipModal = ({ onClose }) => {
    return (
        <div className="fixed inset-x-0 2xl:inset-y-24 inset-y-0 bg-[color:var(--color-dark)] z-40 flex items-center justify-center">
            <div>
                <div className='flex justify-between'>
                    <div className='flex gap-5'>
                        <Icon
                            onClick={onClose}
                            icon="ep:arrow-left" width="32" height="32" className="size-8 cursor-pointer text-white" />
                        <p className='text-[20px] text-white font-semibold'>
                            Real-Time Alerts
                        </p>

                    </div>
                    <div className='w-[114px] mt-4 rounded-[10px] h-10 border flex items-center justify-center text-xs border-[#B1EC00] text-[#B1ED00]'>
                        Download
                    </div>
                </div>
                <div className='text-center text-2xl mt-9 font-semibold text-white'>
                    Customer placing item in personal bag without scanning
                </div>
                <div className='pt-6'>
                    <Image src="/images/Frame 17 (1).svg" alt='img' width="752" height="494" />
                </div>

            </div>

        </div>
    )
}

export default ViewClipModal