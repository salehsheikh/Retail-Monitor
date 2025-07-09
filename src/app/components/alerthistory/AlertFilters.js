"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import Dropdown from '../../shared/DropDown';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AlertFilter = () => {
    const [selectedDate, setSelectedDate] = useState();
    const [showDatePicker, setShowDatePicker] = useState(false);
    const datePickerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
                setShowDatePicker(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    const handleChange = (val) => {
        console.log("Selected:", val);
    };

    const handleDateSelect = (date) => {
        setSelectedDate(date);
        setShowDatePicker(false);
    };

    return (
        <div className='rounded-[20px] md:py-5 md:px-[33px] p-2 bg-[color:var(--color-darkest)]'>
            <div className='flex-col space-y-7.5'>
                <p className='text-sm text-white font-semibold'>Filters</p>
                <div className="relative w-full h-[40px]">
                    <div className="flex items-center px-4 h-full rounded-[15px] border border-white/20 bg-transparent text-white">
                        <Icon icon="mynaui:search" className="text-white/22 text-base mr-4 size-6" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-transparent text-white text-sm outline-none placeholder-white w-full"
                        />
                    </div>
                </div>
                <div>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-[45px]'>
                        <Dropdown
                            label="All Verdicts"
                            options={["Review", "Unreviewed", "Pending"]}
                            onSelect={handleChange}
                        />
                        <Dropdown
                            label="All Stores"
                            options={["Store 1", "Store 2", "Store 3"]}
                            onSelect={handleChange}
                        />
                        <Dropdown
                            label="All Reviewers"
                            options={["Admin", "User", "Staff"]}
                            onSelect={handleChange}
                        />

                        <div className="relative" ref={datePickerRef}>
                            <div
                                className="flex items-center gap-2 text-white text-sm font-medium h-[40px] px-3 border border-white/22 rounded-[15px] cursor-pointer"
                                onClick={() => setShowDatePicker(!showDatePicker)}
                            >
                                <Icon icon="proicons:calendar" width={16} height={16} className='text-white/50' />
                                <p>
                                    {selectedDate ? format(selectedDate, 'MMM dd, yyyy') : 'Select Date'}
                                </p>
                            </div>

                            {showDatePicker && (
                                <div className="absolute -left-40 md:left-0 lg:-left-12 z-10 mt-1 bg-[color:var(--color-darkest)] border border-white/20 rounded-[15px] p-2 shadow-lg 
                  w-[90vw] max-w-[320px] sm:max-w-[360px] md:max-w-[400px]">
                                    <DayPicker
                                        mode="single"
                                        selected={selectedDate}
                                        onSelect={handleDateSelect}
                                        styles={{
                                            caption: { color: 'white' },
                                            day: { color: 'white' },
                                            head_cell: { color: 'white' },
                                        }}
                                        className="text-white bg-[color:var(--color-darkest)]"
                                    />
                                </div>
                            )}

                        </div>

                        <Dropdown
                            label="Sort By"
                            options={["Newest First", "High Confidence", "Low Confidence"]}
                            onSelect={handleChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlertFilter;