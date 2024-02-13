interface AuthButtonProps {
  label: string;
  handleAuth: () => void;
  disabled?: boolean;
}

const AuthButton = ({ label, handleAuth, disabled }: AuthButtonProps) => {
  return (
    <button
      className={`mt-4 px-12 py-2 rounded-lg text-lg font-semibold text-white  bg-bluePrimary hover:border-gray-200 border border-transparent transition-colors duration-300 ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-transparent hover:text-bluePrimary"}`}
      disabled={disabled}
      onClick={handleAuth}
    >
      {label}
    </button>
  );
};

export default AuthButton;
