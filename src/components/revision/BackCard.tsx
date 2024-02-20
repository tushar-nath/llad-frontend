import { Dispatch, SetStateAction, useContext, useState } from "react";
import { DotsIcon } from "../../svgs/dotsIcon";
import { EditIcon } from "../../svgs/editIcon";
import { StarIcon } from "../../svgs/starIcon";
import { useTranslation } from "react-i18next";
import { CardContext } from "../../contexts/cardContext";
import { useNavigate } from "react-router-dom";

export const BackCard = ({
  card,
  setIsFlipped,
  handleUpdateStarred,
  setShowCardPreview,
}: {
  card: any;
  setIsFlipped: Dispatch<SetStateAction<boolean>>;
  handleUpdateStarred: any;
  setShowCardPreview: any;
}) => {
  const { t } = useTranslation();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { storeCard } = useContext(CardContext);
  const navigate = useNavigate();

  console.log("card", card);

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
              storeCard({
                englishWord: card?.front?.text
                  ? card.front.text
                  : card.englishWord,
                englishExample: card?.front?.example
                  ? card.front.example
                  : card.englishExample,
                norwegianWord: card?.back?.text
                  ? card.back.text
                  : card.nativeWord,
                norwegianExample: card?.back?.example
                  ? card.back.example
                  : card.nativeExample,
                note: card.note,
                tags: card.tags,
                _id: card._id,
              });
              navigate("/edit");
            }}
            className="border-b border-gray-400 pb-2 flex flex-row gap-2 items-center"
          >
            <EditIcon />
            Edit Card
          </button>
          <button
            onClick={() => {
              handleUpdateStarred(card);
              setShowCardPreview(null);
            }}
            className="flex flex-row gap-2 items-center"
          >
            <StarIcon />
            {card.isStarred ? t("Unstar") : t("Star")}
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
          <h2 className="text-base font-bold text-bluePrimary">{t("Note")}:</h2>
          <h2 className="text-base font-bold text-gray-900">
            {card.note ? card.note : ""}
          </h2>
        </div>
        <div className="flex flex-row gap-1.5 items-center">
          <h2 className="text-base font-bold text-bluePrimary">{t("Tags")}:</h2>
          <h2 className="text-base font-bold text-gray-900">
            {Array.isArray(card.tags) ? card.tags.join(", ") : card.tags}
          </h2>
        </div>
      </div>
      <button>
        <h2 className="text-xs font-bold text-gray-700 absolute bottom-8 right-10">
          {t("Tap to Flip the Card")}
        </h2>
      </button>
    </div>
  );
};
