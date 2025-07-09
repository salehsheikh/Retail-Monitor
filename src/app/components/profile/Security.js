import { Icon } from '@iconify/react'
import React from 'react'

const Security = () => {
    return (
        <>
            <div className='bg-[color:var(--color-darkest)] rounded-[20px] py-5.5 px-5 w-full text-white'>
                <div className='flex gap-[7px] '>
                    <Icon icon="material-symbols-light:shield-lock-outline" width="18" height="18" />
                    <p className='text-sm text-white mb-5'>Security Settings</p>

                </div>
                <label className='pb-[9px]'>Password</label>
                <div className='rounded-[5px] w-fit px-4 py-1.5 border border-white/20 flex items-center gap-2'>
                    <Icon icon="mdi-light:lock" width="14" height="14" />
                    <input type="password" placeholder='Change Password' className='text-xs placeholder:text-white/50 outline-none' />

                </div>
                <p className='text-xs text-white/50 pt-2.5 '>Last Updated 3 Months Ago</p>
                <div className="w-full h-[1px] bg-white/50 mt-[18px] " />

                <div className='flex justify-between items-center pb-7 pt-2.5'>
                    <p className='text-xs text-white '>Two Factor Authentication</p>
                    <button className='text-xs  cursor-pointer px-3.5 py-1.5 border border-white/20 rounded-[5px]'>
                        Enable 2FA
                    </button>



                </div>
                <div className="w-full h-[1px] bg-white/50  " />
                <p className='text-xs text-white py-2.5'>Active Sessions</p>
                <div className='rounded-[5px] border border-white/20 px-2.5 py-2'>
                    <div className='flex justify-between'>

                        <div className='flex items-center gap-2'>
                            <Icon icon="ic:baseline-monitor" width="20" height="20" />
                            <div className='flex-col gap-[3px]'>
                                <p className='text-xs'>Current Session</p>
                                <p className='text-white/50 text-xs'>Chrome on windows 192.168.1.1</p>
                            </div>
                        </div>

                        <button className='text-xs px-4 py-1.5 cursor-pointer bg-[#40BBD133] rounded-[5px]'>Active</button>

                    </div>

                </div>

            </div>
            <div className="mt-5 flex justify-end">
                <button className=" bg-[#B1ED00] w-full sm:w-fit cursor-pointer rounded-[10px] px-[74px] py-3.5 text-black text-base ">Save Changes</button>

            </div>
        </>
    )
}

export default Security