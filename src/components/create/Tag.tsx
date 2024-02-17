import { Dispatch, SetStateAction, useState } from "react";

const Tag = ({
  label,
  value,
  onChange,
  setTag,
  Tags,
}: {
  label: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  setTag: Dispatch<SetStateAction<string[]>>;
  Tags: string[];
}) => {
  const [showInput, setShowInput] = useState<boolean>(false);
  return (
    <button
      className="flex items-center justify-center whitespace-nowrap h-6 rounded-lg border-[1.5px] border-none bg-white text-bluePrimary font-bold"
      onClick={() => setShowInput(true)}
    >
      {!showInput && label}
      {showInput && (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={() => setShowInput(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const newTags = [...Tags, value];
              setTag(newTags);
              onChange("");
              setShowInput(false);
            }
          }}
          autoFocus
          className="h-8 rounded-lg w-20 outline-none border-[1.5px] border-bluePrimary"
        />
      )}
    </button>
  );
};

export default Tag;
