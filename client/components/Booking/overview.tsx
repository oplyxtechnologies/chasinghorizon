"use client";
import Image from "next/image";
import React, { useState } from "react";
import Trip from "./Trip";
import Stays from "./Stays";

const Overview = () => {
  const [activeTab, setActiveTab] = useState<string>("flights");

  return (
    <div className="relative flex items-center justify-center text-primary drop-shadow-xl p-2 px-4 w-full">
      <div className="bg-white -mt-48 flex flex-col p-4  md:px-10 rounded-md w-full max-w-full md:max-w-4xl lg:max-w-5xl h-[800px]  sm:max-h-[450px] transition-all duration-300 ease-in-out shadow-lg overflow-hidden">
        {/* Tabs */}
        <div className="flex my-4 border-gray-300 w-full">
          <div
            className={`flex text-lg md:text-xl items-center font-medium gap-2 md:gap-4 px-3 md:px-4 pb-2 cursor-pointer transition-all duration-200 ${
              activeTab === "flights"
                ? "border-primary border-b-2 text-primary"
                : "text-gray-500 hover:text-primary"
            }`}
            onClick={() => setActiveTab("flights")}
          >
            <Image
              src="/airplane.svg"
              alt="airplane"
              width={20}
              height={20}
              className="w-5 h-5 md:w-6 md:h-6"
            />
            Flights
          </div>
          <div
            className={`flex text-lg md:text-xl items-center font-medium gap-2 md:gap-4 px-3 md:px-4 pb-2 cursor-pointer transition-all duration-200 ${
              activeTab === "stays"
                ? "border-primary border-b-2 text-primary"
                : "text-gray-500 hover:text-primary"
            }`}
            onClick={() => setActiveTab("stays")}
          >
            <Image
              src="/bed.svg"
              alt="bed"
              width={20}
              height={20}
              className="w-5 h-5 md:w-6 md:h-6"
            />
            Hotels
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-grow relative w-full overflow-hidden">
          <div
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${
              activeTab === "flights"
                ? "opacity-100 visible"
                : "opacity-0 invisible"
            }`}
          >
            <Trip />
          </div>
          <div
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${
              activeTab === "stays"
                ? "opacity-100 visible"
                : "opacity-0 invisible"
            }`}
          >
            <Stays />
          </div>
        </div>

        {/* Search Button (Now naturally positioned at the bottom) */}
        <div className=" flex justify-center w-full">
          <a href="/booking-search">
            <button className="flex items-center justify-center cursor-pointer bg-primary text-white py-3 md:py-4 rounded-md hover:bg-[rgb(0,12,135)] px-6 w-full max-w-[8rem] text-center transition-all duration-200">
              Search
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Overview;
