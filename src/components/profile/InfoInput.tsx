import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";

export const InfoInput = ({
  type,
  value,
  setValue,
  handleUpdate,
  placeholder,
}: {
  type?: string;
  value: string;
  setValue: (value: string) => void;
  handleUpdate?: () => void;
  placeholder: string;
}) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const { user } = useContext(UserContext) as any;
  return (
    <div className="flex gap-4 justify-between items-center">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        className={`text-sm font-semibold text-gray-900 outline-none bg-white w-48 ${
          isEditable ? "border-b-2 border-bluePrimary" : ""
        } ${!isEditable ? "cursor-default" : ""}`}
        onChange={(e) => setValue(e.target.value)}
        disabled={!isEditable}
      />
      {user?.googleId && type == "email" ? (
        <></>
      ) : (
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
      )}
    </div>
  );
};
