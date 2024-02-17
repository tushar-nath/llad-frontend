import { Dispatch, SetStateAction, useState } from "react";
import { TextIcon } from "../../svgs/textIcon";
import { GridIcon } from "../../svgs/gridIcon";
import Tag from "./Tag";

interface CreateBackSideProps {
  setNorwegianWord: Dispatch<SetStateAction<string>>;
  norwegianWord: string;
  setNorwegianExample: Dispatch<SetStateAction<string>>;
  norwegianExample: string;
  setNote: Dispatch<SetStateAction<string>>;
  note: string;
  setTags: Dispatch<SetStateAction<string[]>>;
  tags: string[];
}

const CreateBackSide = ({
  setNorwegianWord,
  norwegianWord,
  setNorwegianExample,
  norwegianExample,
  setNote,
  note,
  setTags,
  tags,
}: CreateBackSideProps) => {
  const [addTagValue, setAddTagValue] = useState<string>("");

  const defaultTags = ["noun", "verb", "adjective"];

  return (
    <div className="w-[50%] h-[520px] bg-[#F9F9F9] rounded-[4rem] border-[2px] border-bluePrimary p-8 flex flex-col gap-10">
      <div className="flex items-center justify-center">
        <h1 className="text-3xl font-bold text-bluePrimary">Back Side</h1>
      </div>
      <div className="flex items-center gap-3 justify-between bg-white shadow-[0px_3px_27.6px_0px_rgba(0,_0,_0,_0.25)] rounded-2xl px-4">
        <TextIcon />
        <input
          type="text"
          className="w-full h-16 rounded-2xl outline-none px-2 text-gray-900 font-medium"
          placeholder="Enter text in Norwegian Language"
          value={norwegianWord}
          onChange={(e) => setNorwegianWord(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-3 justify-between bg-white shadow-[0px_3px_27.6px_0px_rgba(0,_0,_0,_0.25)] rounded-2xl px-4">
        <GridIcon />
        <input
          type="text"
          className="w-full h-16 rounded-2xl outline-none px-2 text-gray-900 font-medium"
          placeholder="Example in Norwegian Language"
          value={norwegianExample}
          onChange={(e) => setNorwegianExample(e.target.value)}
        />
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col">
          <h1 className="text-lg font-bold text-bluePrimary">Notes</h1>
          <textarea
            className="w-64 h-32 rounded-2xl outline-none border-[1.2px] border-bluePrimary px-6 resize-none p-4 text-gray-700 font-medium"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap pt-5 gap-3">
          <h1 className="text-lg font-bold text-bluePrimary">Tags:</h1>
          <div className="flex flex-wrap gap-3">
            {defaultTags.map((tag, index) => (
              <button
                key={index}
                className="flex items-center justify-center  h-8 px-2 rounded-lg border-[1.5px] border-bluePrimary bg-white text-bluePrimary font-bold shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
                onClick={() => setTags((prev) => [...prev, tag])}
              >
                {tag}
              </button>
            ))}
          </div>
          {tags.map((tag, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-2 h-8 rounded-lg border-[1.5px] border-bluePrimary bg-white text-gray-600 font-bold shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
            >
              {tag}
            </div>
          ))}
          {tags.length < 12 && (
            <div
              className="flex items-center justify-center w-20 h-8 rounded-lg border-[1.5px] border-bluePrimary bg-white text-gray-600 font-bold shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
              style={{ flexBasis: "25%" }}
            >
              <Tag
                label="Add Tag"
                value={addTagValue}
                onChange={setAddTagValue}
                setTag={setTags}
                Tags={tags}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateBackSide;
