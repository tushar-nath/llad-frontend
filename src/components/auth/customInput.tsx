import { Dispatch } from "react";

interface CustomInputProps {
  setValue: Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  value: string;
  icon: React.ReactNode;
}

const CustomInput = ({
  placeholder,
  setValue,
  value,
  icon,
}: CustomInputProps) => {
  return (
    <div className="flex items-center justify-center mb-6 bg-white rounded-xl shadow-[0px_2px_12.5px_0px_rgba(0,_0,_0,_0.25)]">
      <div className="pl-3.5">{icon}</div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        className="w-full px-4 py-3 rounded-xl text-gray-600 placeholder-gray-600 text-sm font-medium bg-white focus:outline-none focus:border-indigo-500"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default CustomInput;
