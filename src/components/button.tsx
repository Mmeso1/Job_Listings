import React from "react";

interface ButtonProps {
  label: string;
  theme: "dark" | "light";
}

const Button: React.FC<ButtonProps> = ({ label, theme }) => {
  const buttonClass =
    theme === "dark"
      ? "bg-[#6300b3] text-white border border-none"
      : "bg-white text-[#6300b3] border border-[#6300b3]";

  return (
    <button className={`p-2 rounded w-[120px] h-auto ${buttonClass}`}>
      {label}
    </button>
  );
};

export default Button;
