import Image from 'next/image';
import React from 'react';

const Card = ({ imgSrc, alt, description, confidence, status, statusColor, store }) => (
  <div className="bg-[color:var(--color-darkest)] py-[15px] px-2.5 rounded-[20px] space-y-2.5">
    <Image src={imgSrc} width={370} height={214} alt={alt} className="rounded-[20px]  w-full h-[214px] object-cover" />
    

    
    <p className="text-white">{description}</p>

    <div className="flex justify-between text-white">
      <span>Confidence:</span>
      <span className="text-[#A0D300]">{confidence}</span>
    </div>

    <div className="flex justify-between text-white">
      <span>Status:</span>
      <span className={statusColor}>{status}</span>
    </div>

    <div className="flex justify-between text-white">
      <span>Store:</span>
      <span className="text-white/50">{store}</span>
    </div>
  </div>
);

const QueueSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-18 gap-y-7.5">
      <Card
        imgSrc="/images/livelady.svg"
        alt="Customer in live feed"
        description="Customer is putting items in bag without scanning"
        confidence="82% High"
        status="Resolved"
        statusColor="text-[#A0D300]"
        store="Store 01"
      />
      <Card
        imgSrc="/images/cam-6.svg"
        alt="Camera 6 footage"
        description="Customer is putting items in bag without scanning"
        confidence="82% High"
        status="Pending"
        statusColor="text-[#FF9500]"
        store="Store 02"
      />
      <Card
        imgSrc="/images/cam-2.svg"
        alt="Camera 2 footage"
        description="Customer is Pocketing others Customers"
        confidence="82% High"
        status="Unresolved"
        statusColor="text-[#FF2D55]"
        store="Store 03"
      />
       <Card
        imgSrc="/images/cam-5.svg"
        alt="Customer in live feed"
        description="Customer is putting items in bag without scanning"
        confidence="82% High"
        status="Resolved"
        statusColor="text-[#A0D300]"
        store="Store 01"
      />
      <Card
        imgSrc="/images/cam-4.svg"
        alt="Camera 6 footage"
        description="Customer is putting items in bag without scanning"
        confidence="82% High"
        status="Pending"
        statusColor="text-[#FF9500]"
        store="Store 02"
      />
      <Card
        imgSrc="/images/cam-1.svg"
        alt="Camera 2 footage"
        description="Customer is Pocketing others Customers"
        confidence="82% High"
        status="Unresolved"
        statusColor="text-[#FF2D55]"
        store="Store 03"
      />
    </div>
  );
};

export default QueueSection;
