import React from "react";

interface ButtonProps {
  buttonName: string;
  imageIcon?: any;
  className?: string;
  onClick?: () => void;
  value? : any,
  onChange?: (text: string) => void,
  image? : string,
  success?: boolean;
  primary?: boolean;
}

const Button = ({
  buttonName,
  imageIcon,
  image,
  value,
  className,
  onClick,
  onChange = () => null,
  success,
  primary,
}: ButtonProps) => {
  return (
    <button
      value={value}
      onClick={onClick}
      onChange={(e) => onChange(e.target.value)}
      className={`${className} ${imageIcon && 'gap-2'} rounded-full flex justify-center py-1 sm:text-sm items-center font-medium
            ${success && "text-black bg-green-400  hover:scale-125 border border-gray-400"}
            ${primary && "text-white bg-blue-500 hover:bg-blue-600 border border-gray-400"}
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
