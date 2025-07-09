"use client"
import AlertFilter from '@/app/components/alerthistory/AlertFilters'
import CtaModal from '@/app/components/modals/CtaModal';
import DataTable from '@/app/shared/DataTable';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import React, { useState } from 'react'

const Page = () => {
    const [selectedUser, setSelectedUser] = useState(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
   

    const columns = [
        { header: "Alert ID", accessorKey: "alertId", id: "alertId" },
         { 
        header: "Store", 
        accessorKey: "store", 
        id: "store",
        cell: ({ row }) => (
            <div className="flex items-center gap-2">
                <Icon icon="weui:location-outlined" width="16" height="16" className="text-white/50" />
                <span>{row.original.store}</span>
            </div>
        )
    },
         { 
        header: "Detection", 
        accessorKey: "detection", 
        id: "detection",
        cell: ({ row }) => (
            <div className="flex items-center gap-3">
                <div className="w-[35px] h-[35px] rounded-[5px] overflow-hidden">
                    <Image 
                    src="/images/livelady.svg"
                        height={35}
                        width={35}
                        className="w-full h-full object-cover"
                    />
                </div>
                <span>{row.original.detection}</span>
            </div>
        )
    },
        { header: "Confidence", accessorKey: "confidence", id: "confidence" },
        { header: "Timestamp", accessorKey: "timestamp", id: "timestamp" },
       { 
        header: "Verdict", 
        accessorKey: "verdict", 
        id: "verdict",
        cell: ({ row }) => {
            const verdict = row.original.verdict;
            const isTheft = /theft/i.test(verdict);
            const isFalsePositive = /false positive/i.test(verdict);
            
            if (isTheft) {
                return (
                    <div className="inline-flex h-[33px] px-3 py-2 items-center gap-2 rounded-[20px] bg-[rgba(255,71,104,0.16)]">
                        <Icon icon="material-symbols-light:warning-outline-rounded" className="text-[#FF4768] text-lg" />
                        <span className="text-xs text-[#FF4768]">{verdict}</span>
                    </div>
                );
            } else if (isFalsePositive) {
                return (
                    <div className="inline-flex h-[33px] px-3 py-2 items-center gap-2 rounded-[20px] bg-[#46CF68]/20">
                        <Icon icon="mdi:close-circle" className="text-[#46CF68] text-lg" />
                        <span className="text-xs text-[#46CF68]">{verdict}</span>
                    </div>
                );
            }
            return (
                <div className="inline-flex h-[33px] px-3 py-2 items-center gap-2 rounded-[20px] bg-white/10">
                    <span className="text-sm font-medium">{verdict}</span>
                </div>
            );
        }
    },
        { header: "Reviewer", accessorKey: "reviewer", id: "reviewer" },
        { header: "Review Time", accessorKey: "reviewTime", id: "reviewTime" },

        {
    header: "Action",
    accessorKey: "action",
    id: "action",
    cell: ({ row }) => (
        <div
            className="cursor-pointer flex items-center gap-1 text-[#B1ED00] hover:text-[#B1ED00]/80 transition-colors"
            onClick={() => {
                setSelectedUser(row.original);
                setIsModalOpen(true);
            }}
        >
            <Icon icon="mdi:eye-outline" className="text-lg" />
            <span className="underline">View</span>
        </div>
    ),
}
    ];

   const data = [
        {
            alertId: "AL-2023-0582",
            store: "NY Downtown",
            detection: "Unauthorized Access",
            confidence: "92%",
            timestamp: "2023-11-15 14:32:45",
            verdict: "Theft",
            reviewer: "Sarah Johnson",
            reviewTime: "2023-11-15 15:45:30"
        },
        {
            alertId: "AL-2023-0581",
            store: "LA Westside",
            detection: "Suspicious Transaction",
            confidence: "78%",
            timestamp: "2023-11-14 09:15:22",
            verdict: "Under Review",
            reviewer: "Michael Chen",
            reviewTime: "2023-11-14 10:30:00"
        },
        {
            alertId: "AL-2023-0580",
            store: "Chicago Main",
            detection: "Data Exfiltration",
            confidence: "85%",
            timestamp: "2023-11-13 16:45:18",
            verdict: "Confirmed Threat",
            reviewer: "Emma Wilson",
            reviewTime: "2023-11-13 17:30:45"
        },
        {
            alertId: "AL-2023-0579",
            store: "Houston Central",
            detection: "POS Malware",
            confidence: "95%",
            timestamp: "2023-11-12 11:20:33",
            verdict: "Confirmed Threat",
            reviewer: "John Smith",
            reviewTime: "2023-11-12 12:15:10"
        },
        {
            alertId: "AL-2023-0578",
            store: "Miami Beach",
            detection: "Phishing Attempt",
            confidence: "65%",
            timestamp: "2023-11-11 13:05:47",
            verdict: "False Positive",
            reviewer: "System Automated",
            reviewTime: "2023-11-11 13:30:00"
        },
        {
            alertId: "AL-2023-0577",
            store: "Seattle North",
            detection: "Policy Violation",
            confidence: "55%",
            timestamp: "2023-11-10 08:45:12",
            verdict: "Whitelisted",
            reviewer: "David Kim",
            reviewTime: "2023-11-10 09:30:25"
        },
        {
            alertId: "AL-2023-0576",
            store: "Boston Harbor",
            detection: "Brute Force Attack",
            confidence: "88%",
            timestamp: "2023-11-09 19:30:00",
            verdict: "Confirmed Threat",
            reviewer: "Lisa Rodriguez",
            reviewTime: "2023-11-09 20:15:40"
        }
    ];
    return (
        <>
            <div className='container md:space-y-7.5 space-y-3.5 mt-[37px] pb-2 px-3'>
                <div className='md:mt-8 py-[7px]'>

                    <p className="md:text-[20px]   font-semibold text-white pb-2.5 ">Incident Archive</p>
                    <p className="pb-3.5 text-white text-sm font-medium ">
                       150 reviewed incidents found
                    </p>
                </div>

                <div>
                    <AlertFilter />
                </div>
                <div>
                    <DataTable columns={columns} data={data} highlightHeader="true"/>
                </div>
            </div>
            {isModalOpen && (
                <CtaModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    user={selectedUser}
                />
            )}
        </>
    )
}

export default Page
