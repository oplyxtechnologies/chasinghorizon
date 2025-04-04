"use client";
import React, { useState } from "react";

const Trip: React.FC = () => {
  const [selectedTrip, setSelectedTrip] = useState<string>("round-trip");

  return (
    <div className="block">
      {/* Trip Type Selector */}
      <div className="flex items-center gap-4 py-5">
        {/* One-Way Trip */}
        <div className="flex items-center">
          <input
            id="one-way"
            type="radio"
            value="one-way"
            name="trip"
            checked={selectedTrip === "one-way"}
            onChange={() => setSelectedTrip("one-way")}
            className="w-4 h-4 text-primary bg-gray-100 border-gray-300"
          />
          <label
            htmlFor="one-way"
            className="ml-2 text-sm font-medium text-primary"
          >
            One-Way Trip
          </label>
        </div>

        {/* Round Trip */}
        <div className="flex items-center">
          <input
            id="round-trip"
            type="radio"
            value="round-trip"
            name="trip"
            checked={selectedTrip === "round-trip"}
            onChange={() => setSelectedTrip("round-trip")}
            className="w-4 h-4 text-primary bg-gray-100 border-gray-300"
          />
          <label
            htmlFor="round-trip"
            className="ml-2 text-sm font-medium text-primary"
          >
            Round Trip
          </label>
        </div>
      </div>

      {/* Trip Details Section */}
      <div className="block sm:flex text-black border-collapsebun dev">
        <div className="block border-2 p-4 sm:rounded-l-md pr-6 border-gray-200 space-y-1">
          <p className="text-sm text-gray-400">From</p>
          <p className="text-xl font-black">Kathmandu</p>
          <p className="text-sm text-gray-400">
            KTM, Tribhuwan International Airport
          </p>
        </div>
        <div className="block border-2 p-4 pr-6 border-gray-200 space-y-1">
          <p className="text-sm text-gray-400">To</p>
          <p className="text-xl font-black">Delhi</p>
          <p className="text-sm text-gray-400">
            DEL, Delhi International Airport
          </p>
        </div>
        <div className="block border-2 p-4 pr-6 border-gray-200 space-y-1">
          <p className="text-sm text-gray-400">Departure</p>
          <p className="text-xl font-black">15th March 2025</p>
          <p className="text-sm text-gray-400">Thursday</p>
        </div>

        {/* Show Return Date Only for Round Trip */}
        {selectedTrip === "round-trip" && (
          <div className="block border-2 p-4 pr-6 border-gray-200 space-y-1">
            <p className="text-sm text-gray-400">Return</p>
            <p className="text-xl font-black">18th March 2025</p>
            <p className="text-sm text-gray-400">Sunday</p>
          </div>
        )}

        <div className="block border-2 p-4 sm:rounded-r-md pr-6 border-gray-200 space-y-1">
          <p className="text-sm text-gray-400">Travellers and Class</p>
          <p className="text-xl font-black">1 Traveller</p>
          <p className="text-sm text-gray-400">Economy/ Premium Economy</p>
        </div>
      </div>
    </div>
  );
};

export default Trip;
