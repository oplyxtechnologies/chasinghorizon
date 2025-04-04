import React from "react";
import Image from "next/image";

interface PageHeaderProps {
  title: string;
  imageSrc?: string; // Optional image source
  description: string; // Optional Description
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  imageSrc,
  description,
}) => {
  return (
    <div className="relative w-full h-[40vh] flex items-center      ">
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover absolute z-0 inset-0 w-full h-full  "
        />
      )}
      <div className="flex-col z-0  p-4 px-10 text-white justify-center items-center  gap-4  mx-auto">
        <h2 className="text-7xl text-center font-medium">{title}</h2>
        <p className="text-center">{description} </p>
      </div>
    </div>
  );
};

export default PageHeader;
