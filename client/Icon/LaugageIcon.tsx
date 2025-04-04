import React from "react";
import Image from "next/image";

interface LaugageIconProps {
  width?: number; // Default size
  color?: string; // Color customization
  alt?: string;
}

const LaugageIcon: React.FC<LaugageIconProps> = ({
  width = 50,
  color,
  alt = "Laugage Icon",
}) => {
  return (
    <div className="inline-block" style={{ width }}>
      <Image
        src="/laugage.svg" // Make sure the file exists in /public/icons/
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

export default LaugageIcon;
