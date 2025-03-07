import React from "react";

interface ButtonProps {
  label: string;
  theme: "dark" | "light";
  color?: string;
}

const Button: React.FC<ButtonProps> = ({ label, theme, color }) => {
  const buttonClass =
    theme === "dark"
      ? "bg-[#6300b3] text-white border border-none"
      : "bg-white text-[#6300b3] border border-[#6300b3]";

  return (
    <button className={`p-2 rounded w-[120px] h-auto ${buttonClass} ${color}`}>
      {label}
    </button>
  );
};

export default Button;
