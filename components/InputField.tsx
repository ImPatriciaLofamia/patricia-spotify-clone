import React from "react";

interface InputProps {
  placeholder?: string;
  className?: string;
  type?: string;
  value?: string;
  onChange?: (text: string) => void;
  label?: string;
}

export const InputField = ({
  placeholder,
  className,
  type,
  value,
  label,
  onChange = () => null,
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
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default InputField;
