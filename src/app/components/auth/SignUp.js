import { Icon } from '@iconify/react'
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const SignUp = () => {
    const router = useRouter();
    const [showPassword,setShowPassword]=useState(false);
    return (
        <div className="flex-col md:flex md:flex-row space-y-4  justify-center items-center md:my-28.5 py-4  relative">
            <div
                className="absolute md:size-[302px] size-[160px] z-0 shrink-0 rounded-full md:-top-4  top-[19%]  right-1/4"
                style={{
                    background: "linear-gradient(319deg, #E3FF91 17.52%, #85B103 95.06%)"
                }}
            ></div>
            <div
                className="absolute md:size-[220px] size-[160px] z-0 shrink-0 rounded-full -bottom-16 md:-right-6 -right-1"
                style={{
                    background: "linear-gradient(319deg, #E3FF91 17.52%, #85B103 95.06%)"
                }}
            ></div>
            <div className="flex-col space-y-7">
                <p className="lg:text-8xl md:text-3xl text-2xl  font-semibold text-white md:pr-[55px] md:pt-24!">Enroll Your Journey!</p>
                <div className="flex items-center gap-4 w-full">
                    <button className="border-[4px] text-white border-[#AFD148] py-3.5 px-[25px] rounded-[15px] flex justify-center items-center md:text-[32px] italic font-semibold">
                        Get Started
                    </button>
                    <hr className="flex-grow border-t-2 border-dashed border-white" />
                </div>

            </div>
            <div
                className="inline-flex  md:max-w-[480px] w-full relative flex-col bg-black/70 justify-end items-center  md:px-[40px] px-2 md:py-[97px] py-5 md:pb-[76px] pb-4 text-white "
                style={{
                    borderRadius: "20px",
                    // background:
                    //     "linear-gradient(321deg, rgba(191,191,191,0.31) 20%, rgba(0,0,0,0)), #000000B2",
                    // borderWidth: "1px",
                    // borderStyle: "solid",
                    // borderImageSource: "linear-gradient(to bottom, #AFAFAF, #60606000)",
                 boxShadow: "-8px 4px 5px 0px rgba(0, 0, 0, 0.24)",
                    backdropFilter: "blur(26.5px)",
                }}
            >


                {/* Heading */}
                <div className="w-full text-left">
                    <h1 className="md:text-[36px] text-base font-semibold">Sign Up</h1>
                    <p className="font-medium pt-1">Just some details to get you in.!</p>
                </div>

                {/* Username */}
                <div className="flex  w-full px-4 py-[14px] mt-6 items-center gap-2 border border-white rounded-[12px]">
                    <input
                        type="text"
                        placeholder="Username"
                        className="bg-transparent w-full outline-none placeholder-white md:text-xl text-xs"
                    />
                </div>
                <div className="flex  w-full px-4 py-[14px] mt-6 items-center gap-2 border border-white rounded-[12px]">
                    <input
                        type="text"
                        placeholder="Email/Phone"
                        className="bg-transparent w-full outline-none placeholder-white md:text-xl text-xs"
                    />
                </div>

                {/* Password */}
                <div className="flex  w-full px-4 py-[14px] mt-4 items-center gap-2 border border-white rounded-[12px]">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="bg-transparent w-full outline-none placeholder-white text-xs md:text-xl"
                    />
                    <span
                    onClick={()=>setShowPassword(prev=>!prev)}
                     className="text-white text-lg cursor-pointer">
                        <Icon icon={showPassword ? "humbleicons:eye" : "humbleicons:eye-close"} width="18" height="18" />
                    </span>
                </div>
                <div className="flex  w-full px-4 py-[14px] mt-4 items-center gap-2 border border-white rounded-[12px]">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        className="bg-transparent w-full outline-none placeholder-white text-xs md:text-xl"
                    />
                    <span
                    onClick={()=>setShowPassword(prev=>!prev)}
                     className="text-white text-lg cursor-pointer">
                        <Icon icon={showPassword ? "humbleicons:eye" : "humbleicons:eye-close"} width="18" height="18" />
                    </span>
                </div>


                {/* SignUp Button */}
                <button
                    onClick={() => router.push("/login")}
                    className=" w-full cursor-pointer bg-[#B1ED00] text-black rounded-[12px] py-3 mt-4 font-semibold md:text-x text-sms">
                    Sign Up
                </button>

                <div className="flex items-center justify-center gap-4  w-full mt-6">
                    <hr className="flex-grow h-[2px] bg-white/40 border-0" />
                    <span className="text-base font-medium text-white/40">or</span>
                    <hr className="flex-grow h-[2px] bg-white/40 border-0" />
                </div>

                {/* Logos */}
                <div className="flex gap-6 mt-4">
                    <Image src="/icons/facebook.svg" alt="Facebook" width={42} height={42} className='cursor-pointer' />
                    <Image src="/icons/devicon_google.svg" alt="Google" width={42} height={42} className='cursor-pointer'/>
                    <Image src="/icons/bi_github.svg" alt="Twitter" width={42} height={42} className='cursor-pointer'/>
                </div>

                {/* Sign Up */}
                <div className="text-base font-medium mt-[43px]">
                    Already have an account?{" "}
                    <span
                        onClick={() => router.push("/login")}
                        className="underline cursor-pointer">Sign in</span>
                </div>
                <div className="flex justify-between md:gap-[33px] gap-4 text-sm md:text-base pt-3">
                    <a className='cursor-pointer'>Terms & Conditions</a>
                    <a className='cursor-pointer'>Support</a>
                    <a className='cursor-pointer'>Customer Care</a>
                </div>
            </div>
        </div>
    )
}

export default SignUp
