import { Dispatch, SetStateAction, useState } from "react";
import { DotsIcon } from "../../svgs/dotsIcon";
import { EditIcon } from "../../svgs/editIcon";
import { StarIcon } from "../../svgs/starIcon";

export const BackCard = ({
  card,
  setIsFlipped,
}: {
  card: any;
  setIsFlipped: Dispatch<SetStateAction<boolean>>;
}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div
      className="flex flex-col gap-4 shadow-[0px_4px_44.099998474121094px_0px_#0000004F] w-[600px] h-[400px] rounded-[3rem] px-6 py-4 justify-center items-center relative bg-white"
      onClick={() => {
        setIsFlipped((prev) => !prev);
        setShowMenu(false);
      }}
    >
      <button
        className="absolute top-6 right-8"
        onClick={(e) => {
          e.stopPropagation();
          setShowMenu((prev) => !prev);
        }}
      >
        <DotsIcon />
      </button>
      {showMenu && (
        <div className="absolute flex flex-col top-14 right-8 bg-[#E5E5E5] text-bluePrimary font-semibold gap-2 shadow-lg rounded-lg p-4">
          <button
            onClick={() => {
              setIsFlipped(false);
              setShowMenu(false);
            }}
            className="border-b border-gray-400 pb-2 flex flex-row gap-2 items-center"
          >
            <EditIcon />
            Edit Card
          </button>
          <button
            onClick={() => {
              setIsFlipped(false);
              setShowMenu(false);
            }}
            className="flex flex-row gap-2 items-center"
          >
            <StarIcon />
            Star
          </button>
        </div>
      )}

      <h1 className="text-3xl font-bold text-bluePrimary">
        {card?.front?.text ? card.front.text : card.englishWord}
      </h1>
      <h2 className="text-lg font-semibold text-gray-700 italic mb-4">
        {card?.front?.example ? card.front.example : card.englishExample}
      </h2>

      <h1 className="text-3xl font-bold text-bluePrimary">
        {card?.back?.text ? card.back.text : card.norwegianWord}
      </h1>
      <h2 className="text-lg font-semibold text-gray-700 italic">
        {card?.back?.example ? card.back.example : card.norwegianExample}
      </h2>
      <div className="flex flex-row gap-1.5 items-center justify-between w-full px-8 mt-4">
        <div className="flex flex-row gap-1.5 items-center">
          <h2 className="text-base font-bold text-bluePrimary">Note:</h2>
          <h2 className="text-base font-bold text-gray-900">
            {card.note ? card.note : ""}
          </h2>
        </div>
        <div className="flex flex-row gap-1.5 items-center">
          <h2 className="text-base font-bold text-bluePrimary">Tags:</h2>
          <h2 className="text-base font-bold text-gray-900">
            {Array.isArray(card.tags) ? card.tags.join(", ") : card.tags}
          </h2>
        </div>
      </div>
      <button>
        <h2 className="text-xs font-bold text-gray-700 absolute bottom-8 right-10">
          Tap to Flip the Card
        </h2>
      </button>
    </div>
  );
};
