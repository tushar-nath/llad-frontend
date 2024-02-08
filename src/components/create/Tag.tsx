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
      className="flex items-center justify-center w-20 h-8 rounded-lg border-[1.5px] border-bluePrimary bg-white text-bluePrimary font-bold shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
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
          className="w-20 h-8 rounded-lg outline-none border-[1.5px] border-bluePrimary px-2"
        />
      )}
    </button>
  );
};

export default Tag;
