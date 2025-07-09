"use client";

import React, { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";

const Dropdown = ({ label = "Select", options = [], onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(label);
  const dropdownRef = useRef(null);

  const handleSelect = (option) => {
    setSelected(option);
    onSelect?.(option);
    setIsOpen(false);
  };

  // Detect click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative w-full h-[40px]"
    >
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-between px-4 h-full rounded-[15px] border border-white/20 cursor-pointer bg-transparent text-white"
      >
        <span className="text-white text-sm">{selected}</span>
        <Icon
          icon={isOpen ? "mdi:chevron-up" : "mdi:chevron-down"}
          className="text-white/22 size-6"
          width={12}
          height={24}
        />
      </div>

      {isOpen && (
        <div className="absolute top-[110%] left-0 z-10 bg-[color:var(--color-darkest)] rounded-[10px] border border-white/10 w-full">
          {options.map((opt, index) => (
            <div
              key={index}
              onClick={() => handleSelect(opt)}
              className="px-4 py-2 text-white text-sm hover:bg-white/10 cursor-pointer"
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
