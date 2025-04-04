import React from "react";
import Image from "next/image";
import FlightIcon from "@/Icon/FlightIcon";
import LaugageIcon from "@/Icon/LaugageIcon";
import CultureIcon from "@/Icon/CultureIcon";

// Define TypeScript Props for FeatureItem
interface FeatureItemProps {
  Icon: React.FC<{ width?: number; color?: string }>;
  title: string;
  description: string;
}

// Define TypeScript Props for FloatingImage
interface FloatingImageProps {
  src: string;
  alt: string;
  className?: string;
}

const TourismSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center gap-10">
      {/* Content Section */}
      <div className="w-full lg:w-1/2 space-y-6 text-left">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          We have been in the tourism industry for more than 20 years
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Leave your guidebooks at home and dive into the local cultures that
          make each destination so special. We&apos;ll connect you with our
          exclusive experiences.
        </p>

        {/* Feature List */}
        <div className="space-y-6">
          <FeatureItem
            Icon={FlightIcon}
            title="Book With Confidence"
            description="Each trip is carefully crafted to leave you free to live in the moment and enjoy your vacation."
          />
          <FeatureItem
            Icon={LaugageIcon}
            title="Freedom to discover, confidence to explore"
            description="Each trip is carefully crafted to leave you free to live in the moment and enjoy your vacation."
          />
          <FeatureItem
            Icon={CultureIcon}
            title="Dive into Culture"
            description="Each trip is carefully crafted to leave you free to live in the moment and enjoy your vacation."
          />
        </div>

        {/* CTA Button */}
        <div className="mt-4">
          <a
            href="#"
            className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:shadow-primary transition duration-200"
          >
            Book Now!
          </a>
        </div>
      </div>

      {/* Images Section */}
      <div className="relative w-full lg:w-1/2 flex justify-center p-4">
        <div className="relative w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px] h-[400px] sm:h-[450px] md:h-[500px]">
          {/* Large Background Image */}
          <Image
            src="/eiffel-tower.jpg"
            alt="Eiffel Tower"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Floating Images */}
        <FloatingImage
          src="/night-bridge.jpg"
          alt="Bridge"
          className="absolute top-0 right-0 w-24 sm:w-32 md:w-40 h-28 sm:h-36 md:h-48 transform -translate-x-6 -translate-y-6"
        />
        <FloatingImage
          src="/paris-view.jpg"
          alt="Paris City View"
          className="absolute bottom-0 left-0 w-24 sm:w-32 md:w-40 h-28 sm:h-36 md:h-48 transform translate-x-6 translate-y-6"
        />
        <FloatingImage
          src="/beach-swing.jpg"
          alt="Beach Swing"
          className="absolute bottom-0 right-0 w-28 sm:w-36 md:w-44 h-32 sm:h-40 md:h-52 transform -translate-x-6 translate-y-6"
        />
      </div>
    </section>
  );
};

/** ✅ Feature Item Component with TypeScript */
const FeatureItem: React.FC<FeatureItemProps> = ({
  Icon,
  title,
  description,
}) => (
  <div className="flex items-start gap-4">
    <Icon width={40} color="blue" />
    <div>
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  </div>
);

/** ✅ Floating Image Component with TypeScript */
const FloatingImage: React.FC<FloatingImageProps> = ({
  src,
  alt,
  className,
}) => (
  <div className={className}>
    <Image
      src={src}
      alt={alt}
      layout="fill"
      objectFit="cover"
      className="rounded-lg shadow-md"
    />
  </div>
);

export default TourismSection;
