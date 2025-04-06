import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-[90vh] font-emotional">
      {/* Background Image */}
      <Image
        src="/hero.jpg"
        alt="Chasing Horizon Hero Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute top-0 left-0 w-full h-auto"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent"></div>

      {/* Text Content */}
      <div className="absolute -top-48 inset-0 flex flex-col items-center justify-center text-center px-6">
        <p className="text-2xl text-white tracking-tight ">Travel with Us</p>
        <h1 className="text-4xl lg:text-8xl font-bold tracking-tighter  text-white ">
          Great Experience <br /> with Travelling
        </h1>
      </div>
    </div>
  );
};

export default Hero;
