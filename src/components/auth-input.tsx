import { useState } from "react";

interface InputFieldProps {
  label: string;
  placeholder: string;
  helperText?: string;
  password?: boolean;
  required?: boolean;
}

const InputField = ({
  label,
  placeholder,
  helperText,
  password,
  required,
}: InputFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-2 relative">
      <label htmlFor="input" className="text-2xl font-medium text-[#303030]">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <input
          type={password && !showPassword ? "password" : "text"}
          id="input"
          placeholder={placeholder}
          required={required}
          className="p-3 border border-gray-200 rounded-lg w-full pr-14 h-18"
        />
        {password && (
          <button
            type="button"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#2D31AB] text-sm font-medium"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>
      {helperText && <p className="text-sm text-[#717B9E]">{helperText}</p>}
    </div>
  );
};

export default InputField;
