"use client";

import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BarCard = () => {
  const chartOptions = {
    chart: {
      type: "bar",
      background: "transparent",
      toolbar: { show: false },
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      labels: {
        style: {
          colors: "#FFFFFF80",
          fontSize: "12px",
         
          
        },
      },
    },
    yaxis: {
      min: 0,
      max: 30,
      tickAmount: 6, 
      labels: {
        style: {
          colors: "#FFFFFF80",
          fontSize: "12px",
        },
      },
    },
     states: {
      hover: {
        filter: {
          type: "none", 
        },
      },
      active: {
        filter: {
          type: "none",
        },
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "34px",
        borderRadius: 5,
        
        
      },
    },
    fill: {
      colors: ["#B1ED00"],
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    grid: {
      borderColor: "#33333366", // subtle grid
    },
  };

  const chartSeries = [
    {
      name: "Alerts",
      data: [10, 18, 8, 15, 25, 20, 12],
    },
  ];

  return (
    <div className="bg-[color:var(--color-darkest)] card-shadow w-full h-[304px] rounded-[20px] p-6 flex flex-col  text-white">
      {/* Header */}
      <div className="flex justify-start text-base font-semibold">Weekly Alerts</div>

      {/* Bar Chart */}
      <div className="w-full h-full">
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="bar"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default BarCard;
