"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Review Queue", href: "/alerts" },
    { label: "Archive", href: "/alert-history" },
    { label: "Profile & Settings", href: "/profile" },
  ];

  const activeStyle =
    "bg-[#B1ED00] text-[#000000] text-sm font-medium  rounded-[10px] w-[139.084px] h-[43px] flex items-center justify-center";

  return (
    <nav className="w-full container px-3   py-5 bg-transparent">
      <div className="flex items-center justify-between ">
        <div className="shrink-0">
          <Image src="/images/logo.svg" alt="logo" width={114} height={66} />
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <div className="relative">
            <Icon icon="mdi:bell-outline" className="text-white text-2xl" />
            <span className="absolute -top-1 -right-1 bg-[color:var(--color-red)] text-[#0D0D0D] text-[10px] font-medium rounded-full size-[15px] flex items-center justify-center">
              3
            </span>
          </div>

          <Icon
            icon={isOpen ? "mdi:close" : "mdi:menu"}
            className="text-white text-3xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        <div className="hidden md:flex bg-[color:var(--color-darkest)] text-white xl:max-w-[897px] lg:max-w-[697px] md:max-w-[540px] h-[69px] rounded-[10px] w-full mx-4 items-center justify-between px-3 lg:px-10 ">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium cursor-pointer whitespace-nowrap  ${pathname === item.href ? activeStyle : "px-3 py-2"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block relative ml-4">
          <Icon icon="mdi:bell-outline" className="text-white text-2xl" />
          <span className="absolute -top-1 -right-1 bg-[color:var(--color-red)] text-[#0D0D0D] text-[10px] font-medium rounded-full size-[15px] flex items-center justify-center">
            3
          </span>
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 md:hidden bg-[color:var(--color-darkest)] rounded-[10px] p-4 text-white space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block text-sm font-medium cursor-pointer  ${pathname === item.href ? activeStyle : "py-2 px-3"
                }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
