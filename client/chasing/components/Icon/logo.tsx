import Image from "next/image";
import React from "react";

type LogoProps = {
  className?: string;
  size?: number;
};

const Logo: React.FC<LogoProps> = ({ className = "", size = 24 }) => {
  return (
    <Image
      src="/logowhite.svg"
      alt="Logo"
      width={size}
      height={size}
      className={`inline-block ${className}`}
    />
  );
};

export default Logo;
