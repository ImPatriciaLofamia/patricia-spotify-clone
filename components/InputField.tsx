import React from "react";

interface InputProps {
  placeholder?: string,
  className?: string,
  type: string,
  value?: any,
  label?: string,
  min? : any,
  max? : any
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
      {label && <p className="text-sm font-bold"> {label} </p>}
      <input
        className={`${className} ${
          type == "checkbox" && "accent-green-500"
        }  bg-white border pb-3 border-gray-400 text-base text-black font-medium rounded-lg
    `}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </div>
  );
};

export default InputField;
