import { Icon } from '@iconify/react';
import Image from 'next/image';
import React from 'react';

const AlerTime = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-[color:var(--color-dark)] z-40 flex items-center justify-center px-4">
            <div className="w-full max-w-5xl bg-[color:var(--color-darkest)] rounded-[20px] p-6 space-y-6">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Icon
                        onClick={onClose}
                        icon="ep:arrow-left"
                        width="32"
                        height="32"
                        className="cursor-pointer text-white"
                    />
                    <p className="text-xl font-semibold text-white">Alert Timeline</p>
                </div>
                <p className="text-white ml-12">Review and analyze past security incidents</p>

                {/* Alert Row */}
                <div className="flex flex-col sm:flex-row gap-6 items-center  text-white rounded-[15px] p-4 ">
                    {/* Image with Play Icon */}
                    <div className="relative shrink-0">
                        <Image
                            src="/images/cam-1.svg"
                            alt="alert"
                            width={151}
                            height={120}
                            className="rounded-[10px]  opacity-30 object-cover "
                        />
                        <div className="absolute inset-0 flex items-center justify-center">

                            <Icon icon="icon-park-outline:play" width="42" height="42" className='text-white/20' />
                        </div>
                    </div>

                    {/* Info Table */}
                    <div className="flex-1 w-full space-y-[11px]">
                        <div className="grid text-white  grid-cols-6 gap-2 text-xs md:text-base font-medium text-center">
                            <p>Date</p>
                            <p>Alert Type</p>
                            <p>Confidence</p>
                            <p>Camera</p>
                            <p>Location</p>
                            <p>Status</p>
                        </div>
                        <div className="grid grid-cols-6 gap-2  text-xs md:text-base text-center text-white/50 ">
                            <p>25 Jan</p>
                            <p>Shoplifting</p>
                            <p>87%</p>
                            <p>CAM 01</p>
                            <p>Lobby</p>
                            <p className="text-yellow-400">Pending</p>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex-col justify-between max-w-xl mx-auto sm:flex sm:flex-row space-y-2 sm:space-y-0">
                    <button className=" border w-full sm:w-fit border-pink-600 text-pink-600 px-6 py-2 rounded-[10px] text-sm">Unresolved</button>
                    <button className="text-black  w-full sm:w-fit bg-[#B1ED00] px-6 py-2 rounded-[10px] text-sm">Mark Resolved</button>
                    <button className="text-white  w-full sm:w-fit bg-[#FF9F1A80] px-6 py-2 rounded-[10px] text-sm">Pending</button>
                </div>
            </div>
        </div>
    );
};

export default AlerTime;
