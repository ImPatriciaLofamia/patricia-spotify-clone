import React from "react";

interface ButtonProps {
  buttonName: string;
  imageIcon?: any;
  className?: string;
  onClick?: () => void;
  image? : string,
  success?: boolean;
  primary?: boolean;
}

const Button = ({
  buttonName,
  imageIcon,
  image,
  className,
  onClick,
  success,
  primary,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${className} rounded-full flex justify-center py-1 border border-gray-400 sm:text-sm items-center font-medium
            ${success && "text-black bg-green-400  hover:bg-green-600"}
            ${primary && "text-white bg-blue-500 hover:bg-blue-600"}
            `}
    >
      <span>
        {imageIcon}
        <img src={image} className={`w-0 hidden sm:block ${image && "w-7"}`} />
      </span>
      {buttonName}
    </button>
  );
};

export default Button;
