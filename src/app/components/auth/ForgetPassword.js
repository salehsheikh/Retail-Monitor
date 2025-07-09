"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

const ForgetPassword = () => {
    const router = useRouter();
    return (
        <div className="flex-col md:flex md:flex-row space-y-4  justify-center items-center md:my-28.5 my-8 relative">
            <div
                className="absolute md:size-[302px] size-[160px] z-0 shrink-0 rounded-full md:-top-4  top-[24%] md:right-1/3 right-50"
                style={{
                    background: "linear-gradient(319deg, #E3FF91 17.52%, #85B103 95.06%)"
                }}
            ></div>
            <div
                className="absolute md:size-[220px] size-[160px] z-0 shrink-0 rounded-full -bottom-20 md:right-2 right-0"
                style={{
                    background: "linear-gradient(319deg, #E3FF91 17.52%, #85B103 95.06%)"
                }}
            ></div>
            <div className="flex-col space-y-7">
                <p className="lg:text-8xl md:text-3xl   font-semibold text-white md:pr-[55px] md:pt-24!">No Worries!</p>
                <div className="flex items-center gap-4 w-full">
                    <button className="border-[4px] cursor-pointer text-white border-[#AFD148] py-3.5 px-[25px] rounded-[15px] flex justify-center items-center md:text-[32px] italic font-semibold">
                        Take me back
                    </button>
                    <hr className="flex-grow border-t-2 border-dashed border-[#D2D2D2]" />
                </div>

            </div>
            <div
                className="inline-flex  md:w-fit w-full relative flex-col bg-black/70 justify-end items-center  md:px-[40px] px-2 md:py-[97px] py-5 md:pb-[76px] pb-4 text-white "
                style={{
                    borderRadius: "20px",
                    // background:
                    //     "linear-gradient(321deg, rgba(191,191,191,0.31) 20%, rgba(0,0,0,0)), #000000B2",
                    // borderWidth: "1px",
                    // borderStyle: "solid",
                    // borderImageSource: "linear-gradient(to bottom, #AFAFAF, #60606000)",
                    borderImageSlice: 1,
                    boxShadow: "-8px 4px 5px 0px rgba(0, 0, 0, 0.24)",
                    backdropFilter: "blur(26.5px)",
                }}
            >


                {/* Heading */}
                <div className="w-full text-left">
                    <h1 className="md:text-[36px] text-base font-semibold">Forgot Password?</h1>
                    <p className="font-medium pt-1">Please enter your email</p>
                </div>

                {/* email */}
                <div className="flex  w-full px-4 py-[14px] mt-6 items-center gap-2 border border-white rounded-[12px]">
                    <input
                        type="email"
                        placeholder="ali@example.com"
                        className="bg-transparent w-full outline-none placeholder-white md:text-xl text-xs"
                    />
                </div>

                {/* Reset Button */}
                <button 
                onClick={() => router.push("/reset-password")}
                className=" w-full bg-[#B1ED00] cursor-pointer text-black rounded-[12px] py-3 mt-4 font-semibold text-sm md:text-xl">
                    Reset Password
                </button>

                <div className="flex items-center justify-center gap-4  w-full mt-6">
                    <hr className="flex-grow h-[2px] bg-white/40 border-0" />
                    <span className="text-base font-medium text-white/40">or</span>
                    <hr className="flex-grow h-[2px] bg-white/40 border-0" />
                </div>



                {/* Sign in */}
                <div className="text-base font-medium md:mt-[350px] mt-8">
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

export default ForgetPassword
