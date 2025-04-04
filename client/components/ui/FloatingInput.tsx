import React, { InputHTMLAttributes } from "react";

interface FloatingInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const FloatingInput: React.FC<FloatingInputProps> = ({
  label,
  id,
  ...props
}) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        id={id}
        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border border-white rounded-lg appearance-none focus:outline-none "
        placeholder=" "
        {...props}
      />
      <label
        htmlFor={id}
        className="absolute text-sm text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 left-2 origin-[0] bg-primary px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;
