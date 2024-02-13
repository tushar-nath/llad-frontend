export const SuccessModal = ({
  message,
  handleClose,
}: {
  message: string;
  handleClose: any;
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-xl w-[450px] h-[200px] flex flex-col items-center justify-center">
        <h1 className="text-bluePrimary text-2xl font-bold">{message}</h1>
        <button
          onClick={() => handleClose()}
          className="px-5 py-2 bg-bluePrimary text-white font-semibold rounded-lg mt-4"
        >
          Okay
        </button>
      </div>
    </div>
  );
};
