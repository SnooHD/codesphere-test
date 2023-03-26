import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ className = "", ...rest }: InputProps): JSX.Element => {
  return (
    <input
      className={`
        rounded bg-transparent border-gray-lightest border py-xs px-s
        font-inter text-white font-regular w-full
        placeholder:text-gray
        focus:border-gray
        transition-border duration-300
        ${className}
      `}
      {...rest}
    />
  );
};
