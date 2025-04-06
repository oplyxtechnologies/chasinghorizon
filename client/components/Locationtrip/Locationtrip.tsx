import Image from "next/image";
import React from "react";

const destinations = [
  {
    name: "Tokyo, Japan",
    description: "Flight . Hotels . Resorts",
    image: "/hero.jpg",
    link: "/destinations/tokyo",
  },
  {
    name: "Paris, France",
    description: "Luxury . Romance . Culture",
    image: "/hero.jpg",
    link: "/destinations/paris",
  },
  {
    name: "New York, USA",
    description: "Skyscrapers . Broadway . Food",
    image: "/hero.jpg",
    link: "/destinations/new-york",
  },
  {
    name: "Bali, Indonesia",
    description: "Beaches . Villas . Adventure",
    image: "/hero.jpg",
    link: "/destinations/bali",
  },
  {
    name: "Rome, Italy",
    description: "History . Architecture . Food",
    image: "/hero.jpg",
    link: "/destinations/rome",
  },
  {
    name: "Dubai, UAE",
    description: "Luxury . Shopping . Desert Safari",
    image: "/hero.jpg",
    link: "/destinations/dubai",
  },
  {
    name: "Dubai, UAE",
    description: "Luxury . Shopping . Desert Safari",
    image: "/hero.jpg",
    link: "/destinations/dubai",
  },
  {
    name: "Dubai, UAE",
    description: "Luxury . Shopping . Desert Safari",
    image: "/hero.jpg",
    link: "/destinations/dubai",
  },
  {
    name: "Dubai, UAE",
    description: "Luxury . Shopping . Desert Safari",
    image: "/hero.jpg",
    link: "/destinations/dubai",
  },
];

const Locationtrip = () => {
  return (
    <div className="block max-w-7xl  py-16 mx-auto space-y-6">
      {/* Header Section */}
      <div className="grid grid-cols-2 px-4 w-full items-center">
        <div className="space-y-3">
          <h1 className="sm:text-3xl text-lg tracking-tight leading-5 text-left">
            {" "}
            Plan your Perfect Trip{" "}
          </h1>
          <p className="text-gray-400 text-xs md:text-lg">
            Search Flights & Places Hire to our most popular destinations
          </p>
        </div>
        <div className="flex justify-end">
          <button>
            <a
              className="text-sm hover:text-white text-primary border-2 border-primary rounded-sm hover:bg-primary transition-all duration-200 p-2"
              href="/trip"
            >
              See More Places
            </a>
          </button>
        </div>
      </div>

      {/* Destination Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {destinations.map((destination, index) => (
          <div key={index} className="bg-white drop-shadow-lg rounded-md p-4">
            <a href={destination.link}>
              <div className="flex items-center gap-3">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  width={100}
                  height={100}
                  quality={100}
                  className="rounded-lg aspect-square object-cover"
                />
                <div className="block space-y-1">
                  <p className="font-bold text-primary">{destination.name}</p>
                  <p className="text-sm text-gray-600">
                    {destination.description}
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locationtrip;
