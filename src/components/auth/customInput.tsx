import { Dispatch } from "react";

interface CustomInputProps {
  setValue: Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  value: string;
  icon: React.ReactNode;
  handleToggle?: () => void;
  type?: string;
  eyeIcon?: React.ReactNode;
}

const CustomInput = ({
  placeholder,
  setValue,
  value,
  icon,
  handleToggle,
  type,
  eyeIcon,
}: CustomInputProps) => {
  return (
    <div className="flex items-center justify-center mb-6 bg-white rounded-xl shadow-[0px_2px_12.5px_0px_rgba(0,_0,_0,_0.25)]">
      <div className="pl-3.5">{icon}</div>
      <input
        type={type ? type : "text"}
        placeholder={placeholder}
        value={value}
        className="w-full px-4 py-3 rounded-xl text-gray-600 placeholder-gray-600 text-sm font-medium bg-white focus:outline-none focus:border-indigo-500"
        onChange={(e) => setValue(e.target.value)}
      />

      {placeholder === "Password" && (
        <span
          className="flex justify-around items-center mr-4 cursor-pointer"
          onClick={handleToggle}
        >
          {eyeIcon}
        </span>
      )}
    </div>
  );
};

export default CustomInput;
