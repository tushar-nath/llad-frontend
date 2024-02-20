import { Dispatch, useState } from "react";
import { strengthColors } from "./passwordInput";
import { passwordStrength } from "check-password-strength";

interface CustomInputProps {
  setValue: Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  value: string;
  icon: React.ReactNode;
  handleToggle?: () => void;
  type?: string;
  eyeIcon?: React.ReactNode;
  strength?: number;
  setStrength?: Dispatch<React.SetStateAction<number>>;
}

const CustomInput = ({
  placeholder,
  setValue,
  value,
  icon,
  handleToggle,
  type,
  eyeIcon,
  strength,
  setStrength,
}: CustomInputProps) => {
  const [passwordStrengthLevel, setPasswordStrengthLevel] =
    useState<string>("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    const strength = passwordStrength(password);
    console.log(strength);
    setStrength && setStrength(strength.id);
    setPasswordStrengthLevel(strength.value);
    setValue(password);
  };

  return (
    <div className="flex w-full items-center justify-center mb-6 bg-white rounded-xl shadow-[0px_2px_12.5px_0px_rgba(0,_0,_0,_0.25)]">
      <div className="pl-3.5">{icon}</div>
      <input
        type={type ? type : "text"}
        placeholder={placeholder}
        value={value}
        className="w-full px-4 py-3 rounded-xl text-gray-600 placeholder-gray-600 text-sm font-medium bg-white focus:outline-none focus:border-indigo-500"
        onChange={(e) => {
          if (
            placeholder === "New Password" ||
            placeholder === "Confirm Password"
          ) {
            handlePasswordChange(e);
          } else {
            setValue(e.target.value);
          }
        }}
      />

      {placeholder === "Password" && (
        <span
          className="flex justify-around items-center mr-4 cursor-pointer"
          onClick={handleToggle}
        >
          {eyeIcon}
        </span>
      )}

      {passwordStrengthLevel && (
        <h2
          className={`text-sm whitespace-nowrap mx-2 ${strengthColors[strength ? strength : 0].color}`}
        >
          {passwordStrengthLevel}
        </h2>
      )}
    </div>
  );
};

export default CustomInput;
