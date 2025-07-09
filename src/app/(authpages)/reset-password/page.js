"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

const Page = () => {
    const router = useRouter();
    return (
        <div className="flex-col md:flex md:flex-row space-y-4  justify-center items-center md:my-38.5! px-3 container relative">
            <div
                className="absolute md:size-[302px] size-[160px] z-0 shrink-0 rounded-full md:-top-32  top-[19%] sm:right-1/3 right-0"
                style={{
                    background: "linear-gradient(319deg, #E3FF91 17.52%, #85B103 95.06%)"
                }}
            ></div>
            <div
                className="absolute size-[220px] z-0 shrink-0 rounded-full -bottom-20 right-40"
                style={{
                    background: "linear-gradient(319deg, #E3FF91 17.52%, #85B103 95.06%)"
                }}
            ></div>
            <div className="flex-col space-y-7">
                <p className="lg:text-8xl md:text-3xl text-2xl  font-semibold text-white pr-[55px] md:pt-24! pt-4">No Worries!</p>
                <div className="flex items-center gap-4 w-full">
                    <button className="border-[4px] text-white border-[#AFD148] py-3.5 px-[25px] rounded-[15px] flex justify-center items-center md:text-[32px] italic font-semibold">
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
                    <h1 className="md:text-[36px] font-semibold">Forgot Password?</h1>
                    <p className="font-medium pt-1">Please enter your OTP sent to your email</p>
                </div>
               {/* OTP Input Fields */}
<div className="flex gap-[25px] my-9.5">
  {[1, 2, 3, 4].map((_, index) => (
    <input
      key={index}
      type="text"
      maxLength="1"
      className="w-[49px] h-[49px] rounded-[12px] border border-white px-4 py-[14px] text-center text-white text-[20px] focus:outline-none"
    />
  ))}
</div>
                <button className=" cursor-pointer w-full bg-[#B1ED00] text-black rounded-[12px] py-3 mt-4 font-semibold text-xl">
                    Submit
                </button>

                {/* Sign in */}
                <div className="text-base font-medium md:mt-30 mt-4">
                    Already have an account?{" "}
                    <span
                        onClick={() => router.push("/login")}
                        className="underline cursor-pointer">Sign in</span>
                </div>
                <div className="flex justify-between md:gap-[33px] gap-4 text-xs md:text-base pt-3">
                    <a className='cursor-pointer'>Terms & Conditions</a>
                    <a className='cursor-pointer'>Support</a>
                    <a className='cursor-pointer'>Customer Care</a>
                </div>
            </div>
        </div>
    )
}

export default Page
