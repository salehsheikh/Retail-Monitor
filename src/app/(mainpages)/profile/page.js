"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";

import Apearence from "@/app/components/profile/Apearence";
import AssignedStores from "@/app/components/profile/AssignedStores";
import NotificationPref from "@/app/components/profile/NotificationPref";
import ProfileInfo from "@/app/components/profile/ProfileInfo";
import Security from "@/app/components/profile/Security";

const tabs = [
  { key: "notification", label: "Notification", icon: "mdi:bell-outline" },
  { key: "appearance", label: "Appearance", icon: "mage:laptop" },
  { key: "assignedStores", label: "Assigned Stores", icon: "weui:location-outlined" },
  { key: "profile", label: "Profile", icon: "mdi:account-outline" },
  { key: "security", label: "Security", icon: "material-symbols-light:shield-lock-outline" },
];

const Page = () => {
  const [activeTab, setActiveTab] = useState("notification");

  const renderTabComponent = () => {
    switch (activeTab) {
      case "notification":
        return <NotificationPref />;
      case "appearance":
        return <Apearence />;
      case "assignedStores":
        return <AssignedStores />;
      case "profile":
        return <ProfileInfo />;
      case "security":
        return <Security />;
      default:
        return null;
    }
  };

  return (
    <div className="container px-3 md:mt-[37px] pb-10">
      {/* Header */}
      <div className="py-2.5 md:mt-8">
        <p className="md:text-[20px] font-semibold text-white pb-2.5">Profile and Settings</p>
        <p className="text-sm text-white font-medium">
          Manage your store information and preferences
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        {/* Sidebar */}
        <div className="lg:w-[325px] md:w-[200px] h-[298px] w-full bg-[color:var(--color-darkest)] rounded-[20px] p-4 space-y-3 shrink-0">
          {tabs.map((tab) => (
            <div
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-3 px-4 py-2 cursor-pointer rounded-[12px] transition-all
                ${activeTab === tab.key
                  ? "bg-[#B1ED00] text-black font-medium "
                  : "text-white hover:bg-white/10"
                }`}
            >
              <Icon icon={tab.icon} width={16} height={16} />
              <span className="text-sm ">{tab.label}</span>
            </div>
          ))}
        </div>
        <div className="flex-1 space-y-8">{renderTabComponent()}</div>
      </div>
    </div>
  );
};

export default Page;
