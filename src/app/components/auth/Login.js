"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Login = () => {
    const router = useRouter();
    const[showPassword, setShowPassword]=useState(false);
    return (
        <div className="flex-col md:flex md:flex-row space-y-4  justify-center items-center md:my-28.5 my-8   relative">
            <div
                className="absolute md:size-[302px] size-[180px]  z-0 shrink-0 rounded-full md:-top-4  right-0 top-1/6 md:right-[23%]   "
                style={{
                    background: "linear-gradient(319deg, #E3FF91 17.52%, #85B103 95.06%)"
                }}
            ></div>
            <div
                className="absolute md:size-[220px] size-[180px] z-0 shrink-0 rounded-full -bottom-20 md:-right-5  -right-2"
                style={{
                    background: "linear-gradient(319deg, #E3FF91 17.52%, #85B103 95.06%)"
                }}
            ></div>
            <div className="flex-col space-y-7">
                <p className="lg:text-8xl md:text-3xl  font-semibold text-white md:pr-[55px] md:pt-24!">Welcome Back .!</p>
                <div className="flex items-center gap-4 w-full">
                    <button className="border-[4px] cursor-pointer text-white border-[#AFD148] py-3.5 px-[25px] rounded-[15px] flex justify-center items-center  text-sm md:text-[32px] italic font-semibold">
                        Get Started
                    </button>
                    <hr className="flex-grow border-t-2 border-dashed border-white" />
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
                    <h1 className="md:text-[36px] text-base font-semibold">Login</h1>
                    <p className="font-medium pt-1">Glad you’re back.!</p>
                </div>

                {/* Username */}
                <div className="flex  w-full  px-4 py-[14px] mt-6 items-center gap-2 border border-white rounded-[12px]">
                    <input
                        type="text"
                        placeholder="Username"
                        className="bg-transparent w-full outline-none placeholder-white md:text-xl text-xs"
                    />
                </div>

                {/* Password */}
                <div className="flex  w-full  px-4 py-[14px] mt-4 items-center gap-2 border border-white rounded-[12px]">
                    <input
                        type={showPassword ? "text":"password"}
                        placeholder="Password"
                        className="bg-transparent w-full outline-none placeholder-white md:text-xl text-xs"
                    />
                    <span
                    onClick={()=>setShowPassword (prev=>!prev)}
                     className="text-white text-lg cursor-pointer">
                        <Icon  icon={showPassword ? "humbleicons:eye" : "humbleicons:eye-close"}
                        width="18" height="18" />
                    </span>
                </div>


                {/* Remember Me */}
                <div className="flex  w-full  items-center mt-4 text-base gap-2">
                    <input type="checkbox" id="remember" className="accent-[#B1ED00] size-[18px]" />
                    <label htmlFor="remember">Remember me</label>
                </div>

                {/* Login Button */}
                <button
                    onClick={() => router.push("/dashboard")}
                    className=" w-full cursor-pointer bg-[#B1ED00] text-black rounded-[12px] py-3 mt-4 font-semibold md:text-xl">
                    Login
                </button>

                {/* Forgot Password */}
                <p
                    onClick={() => router.push("/forget-password")}
                    className="text-center font-medium  mt-4 cursor-pointer">
                    Forgot Password?
                </p>

                <div className="flex items-center justify-center gap-4 w-full mt-6">
                    <hr className="flex-grow h-[2px] bg-white/40 border-0" />
                    <span className="text-base font-medium text-white/40">or</span>
                    <hr className="flex-grow h-[2px] bg-white/40 border-0" />
                </div>




                {/* Logos */}
                <div className="flex gap-6 mt-4">
                    <Image src="/icons/facebook.svg" alt="Facebook" width={42} height={42} className="cursor-pointer" />
                    <Image src="/icons/devicon_google.svg" alt="Google" width={42} height={42} className="cursor-pointer" />
                    <Image src="/icons/bi_github.svg" alt="Twitter" width={42} height={42}  className="cursor-pointer"/>
                </div>

                {/* Sign Up */}
                <div className="text-base font-medium md:mt-[101px] mt-8">
                    Don’t have an account?{" "}
                    <span
                        onClick={() => router.push("/signup")}
                        className="underline cursor-pointer">Signup</span>
                </div>
                <div className="flex md:gap-[33px] gap-4 text-sm md:text-base  pt-3">
                    <a className="cursor-pointer">Terms & Conditions</a>
                    <a className="cursor-pointer">Support</a>
                    <a className="cursor-pointer">Customer Care</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
