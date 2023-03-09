import React from "react";
import Svg from "./Svg";
interface ButtonProps {
  buttonName: string,
  icon?: any,
  className?: string,
  onClick?: () => void,
  src? : string,
  success?: boolean,
  primary?: boolean
}

const Button = ({
  buttonName,
  icon,
  src,
  className,
  onClick,
  success,
  primary,
}: ButtonProps) => {
    return(
        <button
            onClick={onClick}
            className={`${className} rounded-full flex justify-center py-1 border border-gray-400 sm:text-sm items-center font-medium
            ${success && "text-black bg-green-400  hover:bg-green-600"}
            ${primary && "text-white bg-blue-500 hover:bg-blue-600"}
            `}
        >
            <span className="hidden sm:block">
                {icon}
                <img
                className={`${success && 'w-0'} ${!src && 'w-0'} w-7`}
                src={src}
                />
            </span>
            {buttonName}
        </button>
    )
};

export default Button;
