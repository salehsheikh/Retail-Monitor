import { Icon } from '@iconify/react'
import Image from 'next/image'
import React from 'react'

const LiveFeedModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-[color:var(--color-dark)] z-40 flex items-center justify-center">
            <div className="w-full max-h-[90vh] overflow-y-auto mt-20 px-4">
                <div className="flex-col">
                    <div className="flex gap-5 items-center">
                        <Icon
                            onClick={onClose}
                            icon="ep:arrow-left"
                            width="32"
                            height="32"
                            className="size-8 cursor-pointer text-white"
                        />
                        <p className="text-[20px] text-white font-semibold">
                            Real-Time Alerts
                        </p>
                    </div>
                    <div className="flex justify-start ml-14 mt-2.5 text-white">
                        Live feed
                    </div>

                </div>

                <div className="grid grid-cols-2 xl:grid-cols-3 gap-0 pb-4  ">
                    {['cam-1', 'cam-2', 'cam-3', 'cam-4', 'cam-5', 'cam-6'].map((cam, idx) => (
                        <div key={idx} className="shrink-0 relative">
                            <Image src={`/images/${cam}.svg`} alt={cam} width="411" height="285" className='w-full' />
                            <div className="text-white absolute bottom-4 w-full px-8 flex justify-between text-sm">
                                <div>CAM 01</div>
                                <div>00:01:26:34</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LiveFeedModal;
