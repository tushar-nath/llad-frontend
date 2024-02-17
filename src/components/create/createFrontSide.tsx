import { Dispatch, SetStateAction } from "react";
import { TextIcon } from "../../svgs/textIcon";
import { GridIcon } from "../../svgs/gridIcon";
import { useTranslation } from "react-i18next";

interface CreateFrontSideProps {
  setNativeWord: Dispatch<SetStateAction<string>>;
  nativeWord: string;
  setNativeExample: Dispatch<SetStateAction<string>>;
  nativeExample: string;
}

const CreateFrontSide = ({
  setNativeWord,
  nativeWord,
  setNativeExample,
  nativeExample,
}: CreateFrontSideProps) => {
  const { t } = useTranslation();

  return (
    <div className="w-[50%] h-[520px] bg-[#F9F9F9] rounded-[4rem] border-[2px] border-bluePrimary p-8 flex flex-col gap-10">
      <div className="flex items-center justify-center">
        <h1 className="text-3xl font-bold text-bluePrimary">
          {t("Front Side")}
        </h1>
      </div>
      <div className="flex items-center gap-3 justify-between bg-white shadow-[0px_3px_27.6px_0px_rgba(0,_0,_0,_0.25)] rounded-2xl px-4">
        <TextIcon />
        <input
          type="text"
          className="w-full h-16 rounded-2xl outline-none px-2 text-gray-900 font-medium"
          placeholder={t("Enter text in your Native Language")}
          value={nativeWord}
          onChange={(e) => setNativeWord(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-3 justify-between bg-white shadow-[0px_3px_27.6px_0px_rgba(0,_0,_0,_0.25)] rounded-2xl px-4">
        <GridIcon />
        <input
          type="text"
          className="w-full h-16 rounded-2xl outline-none px-2 text-gray-900 font-medium"
          placeholder={t("Example in your Native Language")}
          value={nativeExample}
          onChange={(e) => setNativeExample(e.target.value)}
        />
      </div>
    </div>
  );
};

export default CreateFrontSide;
