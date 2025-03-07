import { useState } from "react";

interface InputFieldProps {
  label: string;
  placeholder: string;
  password?: boolean;
}

const InputField = ({ label, placeholder, password }: InputFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-2 relative">
      <label htmlFor="input" className="text-2xl font-medium text-[#303030]">
        {label}
      </label>
      <div className="relative">
        <input
          type={password && !showPassword ? "password" : "text"}
          id="input"
          placeholder={placeholder}
          className="p-3 border border-gray-200 rounded-lg w-full pr-14"
        />
        {password && (
          <button
            type="button"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm font-medium"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
