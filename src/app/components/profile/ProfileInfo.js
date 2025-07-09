"use client";

import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const ProfileInfo = () => {
  return (
    <>
    <div className="bg-[color:var(--color-darkest)] p-6 rounded-[20px] text-white ">
      {/* Header */}
      <div className="flex items-center gap-2 pb-[11px]">
        <Icon icon="iconamoon:profile-thin" width="16" height="16" className="text-white/50" />
        <p className="text-sm font-medium ">Profile Information</p>
      </div>
<div className="px-4 space-y-3.5">
      {/* Avatar Row */}
      <div className="flex items-center gap-5">
        <Image
          src="/images/avatar.svg"
          alt="Profile"
          width={62}
          height={62}
          className="rounded-full object-cover"
        />
        <div className="flex-col space-y-[5px]">
            <button className="px-2.5 py-1 text-xs text-white/50  rounded-[10px] border border-white/20">
          Change Avatar
        </button>
           <p className="text-xs text-white/50">Upload a new profile picture</p></div>
       
      </div>
        
     
     

      {/* Divider */}
      <hr className="border-white/50 h-[1px]" />

      {/* Full Name and Email Labels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Enter full name"
            className="w-full px-4 py-2 text-sm  bg-white/20 rounded-[10px] outline-none placeholder-white/50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email Address</label>
          <div className="flex items-center bg-white/20 rounded-[10px] px-4 py-2">
            <Icon icon="ic:round-email" className="text-white/50 mr-2" />
            <input
              type="email"
              placeholder="you@example.com"
              className="bg-transparent w-full text-sm outline-none placeholder-white/50"
            />
          </div>
        </div>
      </div>

      {/* Phone Number */}
      <div>
        <label className="block text-xs mb-1">Phone Number</label>
        <div className="flex items-center bg-white/20 rounded-[10px] px-4 py-2">
          <Icon icon="bi:phone" width="18" height="18" className="text-white/50 mr-2" />
          <input
            type="tel"
            placeholder="+1 300 1234567"
            className="bg-transparent w-full text-sm outline-none placeholder-white/50"
          />
        </div>
      </div>

      {/* Bio */}
      <div>
        <label className="block text-xs mb-1">Bio</label>
        <textarea
          rows={4}
          placeholder="Senior monitoring specialist with 5+ years of experience in retail security and incident review."
          className="w-full px-4 py-2 text-sm  bg-white/20 rounded-[10px] outline-none placeholder-white/50 resize-none"
        ></textarea>
      </div>
      </div>
    </div>
    <div className="mt-5 flex justify-end">
                    <button className=" bg-[#B1ED00] cursor-pointer rounded-[10px] px-[74px] py-3.5 text-black text-base ">Save Changes</button>

        </div>
    </>
  );
};

export default ProfileInfo;
