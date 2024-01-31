import { Dispatch } from "react";

interface RegisterButtonProps {
  label: string;
  setValue: Dispatch<React.SetStateAction<string>>;
}

const RegisterButton = ({ label, setValue }: RegisterButtonProps) => {
  return (
    <button
      className="mt-8 w-96 py-5 rounded-[3rem] text-2xl font-bold uppercase text-[#7573FF] hover:text-white bg-white hover:bg-[#7573FF] hover:border-gray-200 border border-transparent transition-colors duration-300 shadow-[1px_4px_22.3px_0px_rgba(0,_0,_0,_0.25)]"
      onClick={() => setValue(label)}
    >
      {label}
    </button>
  );
};

export default RegisterButton;
