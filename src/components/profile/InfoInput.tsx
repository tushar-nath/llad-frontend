import { useState } from "react";

export const InfoInput = ({
  value,
  setValue,
  handleUpdate,
}: {
  value: string;
  setValue: (value: string) => void;
  handleUpdate?: () => void;
}) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);
  return (
    <div className="flex gap-4 justify-between items-center">
      <input
        type="text"
        placeholder="Add Name"
        value={value}
        className="text-sm font-semibold text-gray-900 outline-none bg-white"
        onChange={(e) => setValue(e.target.value)}
        disabled={!isEditable}
      />
      <button
        className="text-gray-700 font-bold text-[10px] bg-[#F0EFFA] py-1.5 px-4 rounded-3xl"
        onClick={() => {
          if (isEditable && handleUpdate) {
            handleUpdate();
          }
          setIsEditable(!isEditable);
        }}
      >
        {isEditable ? "Save" : "Edit"}
      </button>
    </div>
  );
};
