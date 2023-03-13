import React from "react";

interface InputProps {
  placeholder?: string;
  className?: string;
  type: string;
  value?: any;
  label?: string;
}

export const InputField = ({
  placeholder,
  className,
  type = "text",
  value,
  label,
}: InputProps) => {
  return (
    <div>
      {label && <p className="text-sm font-bold pb-2"> {label} </p>}
      <input
        className={`${className} 
        ${type == "checkbox" && "accent-green-500"} 
        ${type === "range" && 'flex items-center' } 
        bg-white border pb-0 border-gray-400 text-base text-black font-medium rounded-lg
    `}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </div>
  );
};

export default InputField;
