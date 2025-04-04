import Image from "next/image";
import React from "react";

type SendIconProps = {
  className?: string;
  size?: number;
};

const SendIcon: React.FC<SendIconProps> = ({ className = "", size = 24 }) => {
  return (
    <Image
      src="/sendicon.svg"
      alt="Send Icon"
      width={size}
      height={size}
      className={`inline-block ${className}`}
    />
  );
};

export default SendIcon;
