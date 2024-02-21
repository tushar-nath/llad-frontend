import { Dispatch, SetStateAction, useContext, useState } from "react";
import { DotsIcon } from "../../svgs/dotsIcon";
import { StarIcon } from "../../svgs/starIcon";
import { EditIcon } from "../../svgs/editIcon";
import { useTranslation } from "react-i18next";
import { CardContext } from "../../contexts/cardContext";
import { useNavigate } from "react-router-dom";

export const FrontCard = ({
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
              storeCard({
                englishWord: card?.front?.text
                  ? card.front.text
                  : card.englishWord,
                englishExample: card?.front?.example
                  ? card.front.example
                  : card.englishExample,
                norwegianWord: card?.back?.text
                  ? card.back.text
                  : card.norwegianWord,
                norwegianExample: card?.back?.example
                  ? card.back.example
                  : card.norwegianExample,
                note: card.note,
                tags: card.tags,
                _id: card._id,
                // storing location url to redirect to the same page after editing
                location: window.location.pathname,
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
      <h2 className="text-lg font-semibold text-gray-700 italic">
        {card?.front?.example ? card.front.example : card.englishExample}
      </h2>
      <button>
        <h2 className="text-xs font-bold text-gray-700 absolute bottom-8 right-10">
          {t("Tap to Flip the Card")}
        </h2>
      </button>
    </div>
  );
};
