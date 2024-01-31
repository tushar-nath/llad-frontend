interface AuthButtonProps {
  label: string;
  handleAuth: () => void;
}

const AuthButton = ({ label, handleAuth }: AuthButtonProps) => {
  return (
    <button
      className="mt-4 px-12 py-2 rounded-lg text-lg font-semibold text-white hover:text-[#7573FF] bg-[#7573FF] hover:bg-transparent hover:border-gray-200 border border-transparent transition-colors duration-300"
      onClick={handleAuth}
    >
      {label}
    </button>
  );
};

export default AuthButton;
