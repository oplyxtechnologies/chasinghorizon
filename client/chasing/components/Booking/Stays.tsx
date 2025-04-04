"use client";
import React, { useState } from "react";

const Stays: React.FC = () => {
  const [selectedTrip, setSelectedTrip] = useState<string>("round-trip");

  return (
    <div className="block py-2 w-full h-full">
      <div className=" block sm:flex text-black border-2 border-gray-200 rounded-md overflow-hidden h-full">
        <div className="flex-1 p-4 space-y-1 sm:border-r  border-gray-200">
          <p className="text-sm text-gray-400">City</p>
          <p className="text-xl font-black">Goa</p>
          <p className="text-sm text-gray-400">India</p>
        </div>

        <div className="flex-1 p-4 space-y-1 sm:border-r border-gray-200">
          <p className="text-sm text-gray-400">Check In</p>
          <p className="text-xl font-black">15th March 2025</p>
          <p className="text-sm text-gray-400">Thursday</p>
        </div>

        <div className="flex-1 p-4 space-y-1 sm:border-r border-gray-200">
          <p className="text-sm text-gray-400">Check Out</p>
          <p className="text-xl font-black">15th March 2025</p>
          <p className="text-sm text-gray-400">Thursday</p>
        </div>

        <div className="flex-1 p-4 space-y-1">
          <p className="text-sm text-gray-400">Rooms and Guest</p>
          <p className="text-xl font-black">1 Room and 2 Adult</p>
        </div>
      </div>
    </div>
  );
};

export default Stays;
