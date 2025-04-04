import React from "react";
import Image from "next/image";

interface FlightIconProps {
  width?: number; // Default size
  color?: string; // Color customization
  alt?: string;
}

const FlightIcon: React.FC<FlightIconProps> = ({
  width = 50,
  color,
  alt = "Flight Icon",
}) => {
  return (
    <div className="inline-block" style={{ width }}>
      <Image
        src="/flight.svg" // Make sure the file exists in /public/icons/
        alt={alt}
        width={width}
        height={width}
        className={color ? "filter" : ""}
        style={{
          filter: color
            ? `invert(50%) sepia(1) saturate(5) hue-rotate(${color})`
            : "none",
        }}
      />
    </div>
  );
};

export default FlightIcon;
