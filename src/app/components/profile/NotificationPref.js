"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import DeleteConfirmation from "../modals/DeleteConfirmation";
import { useRouter } from "next/navigation";

const NotificationPref = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = () => {
    setIsModalOpen(true);

    setTimeout(() => {
      setIsModalOpen(false);
      router.push("/profile");
    }, 1500);
  };

  const [preferences, setPreferences] = useState({
    bag: true,
    personalBag: false,
    jacket: false,
    multipleitems: false,
    suspicious: false,
    emailDigest: false,
    reports: false,
    alerts: false

  });

  const togglePreference = (key) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };


  return (
    <>
      <div className="bg-[color:var(--color-darkest)] rounded-[20px] py-5 md:px-[33px] px-3 text-white w-full  space-y-6">
        {/* Header */}
        <div className="flex items-center gap-2.5">
          <Icon icon="basil:notification-outline" width="18" height="18" />
          <h2 className="text-sm font-medium">Notification Preferences</h2>
        </div>



        {/* First Two Alerts */}
        <div className="space-y-[11px]">
          <div className="flex justify-between items-center  ">
            <div className="flex-col space-y-[5px]">
              <p className="text-xs font-medium">New Incidents</p>
              <p className="text-xs text-white/50">Get Notified when new incidents are detected.</p>
            </div>
            <button
              onClick={() => togglePreference("bag")}
              className={`w-[42px] cursor-pointer h-[20px] rounded-full flex items-center px-1  transition-all ${preferences.bag ? "bg-[#B1ED00]" : "bg-white/20"
                }`}
            >
              <div
                className={`w-3 h-3  bg-black rounded-full transition-transform ${preferences.bag ? "translate-x-[20px]" : ""
                  }`}
              />
            </button>
          </div>
          <div className="w-full h-[1px] bg-white/20 " />

          <div className="flex justify-between items-center  ">
            <div className="flex-col space-y-[5px]">
              <p className="text-xs font-medium">Escalations</p>
              <p className="text-xs text-white/50">High-priority incidents requiring immediate attention</p>
            </div>
            <button
              onClick={() => togglePreference("jacket")}
              className={`w-[42px] h-[20px] cursor-pointer rounded-full flex items-center px-1 transition-all ${preferences.jacket ? "bg-[#B1ED00]" : "bg-white/20"
                }`}
            >
              <div
                className={`w-3 h-3 bg-black rounded-full transition-transform ${preferences.jacket ? "translate-x-[20px]" : ""
                  }`}
              />
            </button>
          </div>
          <div className="w-full h-[1px] bg-white/20 " />
          <div className="flex justify-between items-center  ">
            <div className="flex-col space-y-[5px]">
              <p className="text-xs font-medium">Daily Digest</p>
              <p className="text-xs text-white/50">Summary of daily review activity and metrics</p>
            </div>
            <button
              onClick={() => togglePreference("personalBag")}
              className={`w-[42px] h-[20px]  cursor-pointer rounded-full flex items-center px-1 transition-all ${preferences.personalBag ? "bg-[#B1ED00]" : "bg-white/20"
                }`}
            >
              <div
                className={`w-3 h-3 bg-black rounded-full transition-transform ${preferences.personalBag ? "translate-x-[20px]" : ""
                  }`}
              />
            </button>
          </div>
          <div className="w-full h-[1px] bg-white/20 " />

          <div className="flex justify-between items-center  ">
            <div className="flex-col space-y-[5px]">
              <p className="text-xs font-medium">Email Alerts</p>
              <p className="text-xs text-white/50">Receive notifications via Email</p>
            </div>
            <button
              onClick={() => togglePreference("multipleitems")}
              className={`w-[42px] h-[20px] cursor-pointer rounded-full flex items-center px-1 transition-all ${preferences.multipleitems ? "bg-[#B1ED00]" : "bg-white/20"
                }`}
            >
              <div
                className={`w-3 h-3 bg-black rounded-full transition-transform ${preferences.multipleitems ? "translate-x-[20px]" : ""
                  }`}
              />
            </button>
          </div>
          <div className="w-full h-[1px] bg-white/20 " />

          <div className="flex justify-between items-center  ">
            <div className="flex-col space-y-[5px]">
              <p className="text-xs font-medium">Push Notifications</p>
              <p className="text-xs text-white/50">Browser push notifications for urgent alerts</p>
            </div>
            <button
              onClick={() => togglePreference("suspicious")}
              className={`w-[42px] h-[20px] cursor-pointer rounded-full flex items-center px-1 transition-all ${preferences.suspicious ? "bg-[#B1ED00]" : "bg-white/20"
                }`}
            >
              <div
                className={`w-3 h-3 bg-black rounded-full transition-transform ${preferences.suspicious ? "translate-x-[20px]" : ""
                  }`}
              />
            </button>
          </div>

        </div>

      </div>
      {isModalOpen && (
        <DeleteConfirmation
          isOpen={isModalOpen}
          desc="Changes Saved Successfully!"
          onClose={() => setIsModalOpen(false)}

        />
      )}
      <div className="mt-5 flex-col sm:flex sm:flex-row space-y-2 justify-between">
        <button className="border w-full sm:w-fit border-[#B1ED00] cursor-pointer rounded-[10px] px-[74px] py-3.5 text-[#B1ED00] text-base "
          onClick={() => router.push('/login')}>Logout</button>
        <button className=" bg-[#B1ED00] 
                    cursor-pointer rounded-[10px] w-full sm:w-fit px-[74px] py-3.5 text-black text-base ">Save Changes</button>

      </div>
    </>
  );
};

export default NotificationPref;
