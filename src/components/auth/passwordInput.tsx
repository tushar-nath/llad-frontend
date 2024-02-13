import React, { Dispatch, useState } from "react";
import { passwordStrength } from "check-password-strength";

interface PasswordInputProps {
  setValue: Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  value: string;
  icon: React.ReactNode;
  setStrength?: Dispatch<React.SetStateAction<number>>;
  strength: number;
}

const PasswordInput = ({
  placeholder,
  setValue,
  value,
  icon,
  setStrength,
  strength,
}: PasswordInputProps) => {
  const [passwordStrengthLevel, setPasswordStrengthLevel] = useState("");

  const strengthColors = [
    { color: "text-red-600" },
    { color: "text-orange-600" },
    { color: "text-yellow-600" },
    { color: "text-green-600" },
  ];

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    const strength = passwordStrength(password);
    console.log(strength);
    setStrength && setStrength(strength.id);
    setPasswordStrengthLevel(strength.value);
    setValue(password);
  };

  return (
    <div className="flex items-center justify-center mb-6 bg-white rounded-xl shadow-[0px_2px_12.5px_0px_rgba(0,_0,_0,_0.25)]">
      <div className="pl-3.5">{icon}</div>
      <input
        type="password"
        placeholder={placeholder}
        value={value}
        className="w-full px-4 py-3 rounded-xl text-gray-600 placeholder-gray-600 text-sm font-medium bg-white focus:outline-none focus:border-indigo-500"
        onChange={handlePasswordChange}
      />
      {passwordStrengthLevel && (
        <div className={`w-32 text-sm ml-2 ${strengthColors[strength].color}`}>
          {passwordStrengthLevel}
        </div>
      )}
    </div>
  );
};

export default PasswordInput;
