interface AuthButtonProps {
  label: string;
  handleAuth: () => void;
  disabled?: boolean;
}

const AuthButton = ({ label, handleAuth, disabled }: AuthButtonProps) => {
  return (
    <button
      className="mt-4 px-12 py-2 rounded-lg text-lg font-semibold text-white hover:text-bluePrimary bg-bluePrimary hover:bg-transparent hover:border-gray-200 border border-transparent transition-colors duration-300"
      disabled={disabled}
      onClick={handleAuth}
    >
      {label}
    </button>
  );
};

export default AuthButton;
