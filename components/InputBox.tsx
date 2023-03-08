import React from "react";

interface InputProps {
  placeholder?: string;
  className?: string;
  type?: string;
  value?: string;
  onChange?: (text: string) => void;
  label?: string;
}

const InputBox = ({
  placeholder,
  className,
  type,
  value,
  onChange = () => null,
  label,
}: InputProps) => {
  <>
    {label && <p className="text-sm font-bold"> {label} </p>}
    <input
      className={`${className} bg-white border pb-3 border-gray-400 text-base text-black font-medium rounded-lg
    ${type && "accent-green-500"} `}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </>;
};

export default InputBox;
