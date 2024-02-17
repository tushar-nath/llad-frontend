interface ErrorModalProps {
  message: string;
  handleClose: () => void;
}

export const ErrorModal = ({ message, handleClose }: ErrorModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 gap-3 rounded-xl w-[450px] h-[200px] flex flex-col items-center justify-center text-center">
        <h1 className="text-red-600 text-2xl font-bold">{message}</h1>
        <button
          onClick={() => handleClose()}
          className="px-5 py-2 bg-red-600 text-white font-semibold rounded-lg mt-4"
        >
          Close
        </button>
      </div>
    </div>
  );
};
