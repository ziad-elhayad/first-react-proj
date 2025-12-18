import React from 'react';

export default function StarDivider({ colorClass = "white" }) {
  const lineColor = colorClass === "white" ? "bg-white" : "bg-slate-700";
  const starColor = colorClass === "white" ? "text-white" : "text-slate-700";

  return (
    <div className="flex items-center justify-center gap-4 my-4">
      <div className={`h-1 w-20 ${lineColor}`}></div>
      <div className={`${starColor} text-2xl`}>★</div>
      <div className={`h-1 w-20 ${lineColor}`}></div>
    </div>
  );
}