"use client"
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import AlerTime from '../modals/AlertTime';
const alerts = [
  {
    title: 'Shoplifting',
    icon: 'solar:bag-outline',
    color: '#FF4768',
    time: '09:12 AM',
    camera: 'Camera 03',
  },
  {
    title: 'Pocketing',
    icon: 'ph:shield-light',
    color: '#FF9F1A',
    time: '09:12 AM',
    camera: 'Camera 03',
  },
  {
    title: 'Items in bag',
    icon: 'solar:bag-outline',
    color: '#B1ED00',
    time: '09:12 AM',
    camera: 'Camera 03',
  },
  {
    title: 'Shoplifting',
    icon: 'solar:bag-outline',
    color: '#FF4768',
    time: '09:12 AM',
    camera: 'Camera 03',
  },
  {
    title: 'Pocketing',
    icon: 'ph:shield-light',
    color: '#FF9F1A',
    time: '09:12 AM',
    camera: 'Camera 03',
  },
  {
    title: 'Items in bag',
    icon: 'solar:bag-outline',
    color: '#B1ED00',
    time: '09:12 AM',
    camera: 'Camera 03',
  },
];

const AlertItem = ({ title, icon, color, time, camera, onClick }) => (
  <>

    <div className="flex justify-between items-center">
      <div className="flex gap-5.5">
        <div className={`rounded-[10px] p-[7px] flex items-center justify-center`} style={{ background: color }}>
          <Icon icon={icon} width="24" height="24" />
        </div>
        <div className="flex flex-col space-y-[5px]">
          <p className="text-base font-medium text-white">{title}</p>
          <p className="text-xs font-medium text-white/50">{camera}</p>
        </div>
      </div>

      <p className="font-medium text-white/50">{time}</p>

      <div className="w-[9px] h-[23px] rounded-[10px]" style={{ background: color }} />

      <button
        onClick={onClick}
        className="text-base cursor-pointer text-white font-medium px-10 py-2.5 rounded-[10px] bg-[#B1EC0080]">
        View Details
      </button>
    </div>
    <hr className="border border-dashed border-white/30" />
  </>
);

const AlertTimeline = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <p className="pb-[17px] text-xl font-semibold text-white">Alert Timeline</p>

      <div className="overflow-x-auto">
        <div className="min-w-[510px] bg-[color:var(--color-darkest)] px-7.5 py-4.5 rounded-[20px] space-y-[13px] shadow-[0px_0px_3px_0px_rgba(0,0,0,0.25)]">
          {alerts.map((alert, index) => (
            <AlertItem key={index} {...alert} onClick={() => setShowModal(true)} />
          ))}
        </div>
      </div>
      {showModal && <AlerTime onClose={() => setShowModal(false)} />}
    </>

  );
};

export default AlertTimeline;
