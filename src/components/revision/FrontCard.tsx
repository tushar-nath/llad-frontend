import { Dispatch, SetStateAction, useState } from "react";
import { DotsIcon } from "../../svgs/dotsIcon";
import { StarIcon } from "../../svgs/starIcon";
import { EditIcon } from "../../svgs/editIcon";

export const FrontCard = ({
  card,
  setIsFlipped,
}: {
  card: any;
  setIsFlipped: Dispatch<SetStateAction<boolean>>;
}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  console.log(card);

  return (
    <div
      className="flex flex-col gap-4 shadow-[0px_4px_44.099998474121094px_0px_#0000004F] w-[600px] h-[400px] rounded-[3rem] px-6 py-4 justify-center items-center relative bg-white"
      onClick={() => setIsFlipped((prev) => !prev)}
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
        <div className="absolute flex flex-col top-14 right-8 bg-[#E5E5E5] text-bluePrimary font-semibold gap-2 shadow-lg rounded-lg p-4 px-6">
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
        {card.englishWord}
      </h1>
      <h2 className="text-lg font-semibold text-gray-700">
        {card.englishExample}
      </h2>
      <button>
        <h2 className="text-xs font-bold text-gray-700 absolute bottom-8 right-10">
          Tap to Flip the Card
        </h2>
      </button>
    </div>
  );
};
