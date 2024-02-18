import { Dispatch } from "react";

interface RegisterButtonProps {
  label: string;
  setValue: Dispatch<React.SetStateAction<string>>;
}

const RegisterButton = ({ label, setValue }: RegisterButtonProps) => {
  return (
    <button
      className="xl:mt-8 mt-6 xl:w-96 w-80 xl:py-5 py-3 rounded-[3rem] xl:text-2xl text-xl font-bold uppercase text-bluePrimary hover:text-white bg-white hover:bg-bluePrimary hover:border-gray-200 border border-transparent transition-colors duration-300 shadow-[1px_4px_22.3px_0px_rgba(0,_0,_0,_0.25)]"
      onClick={() => setValue(label)}
    >
      {label}
    </button>
  );
};

export default RegisterButton;
