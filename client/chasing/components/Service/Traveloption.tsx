import Image from "next/image";
import React from "react";
import SendIcon from "../Icon/SendIcon";

const services = [
  {
    title: "Flights",
    description:
      "Search Flights & Places Hire to our most popular destinations",
    image: "/flight.jpg", // Change to the actual image path
    link: "/flights",
    buttonText: "Show Flights",
  },
  {
    title: "Hotels",
    description: "Search hotels & Places Hire to our most popular destinations",
    image: "/hotel.jpg", // Change to the actual image path
    link: "/hotels",
    buttonText: "Show Hotels",
  },
];

const TravelOptions = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {services.map((service, index) => (
        <a
          key={index}
          href={service.link}
          className="relative group block overflow-hidden rounded-xl shadow-lg"
        >
          {/* Background Image */}
          <div className="relative w-full h-[500px]">
            <Image
              src={service.image}
              alt={service.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />
          </div>

          {/* Content */}
          <div className="absolute inset-x-0  bottom-2 flex flex-col items-center justify-center text-white text-center p-6">
            <h2 className="text-2xl font-bold">{service.title}</h2>
            <p className="text-sm mb-4">{service.description}</p>
            <button className="bg-white text-gray-800 px-4 py-2 text-sm font-medium rounded-md flex items-center gap-2 shadow-md transition-all hover:bg-gray-200">
              <SendIcon size={16} className="text-primary" />{" "}
              {service.buttonText}
            </button>
          </div>
        </a>
      ))}
    </div>
  );
};

export default TravelOptions;
