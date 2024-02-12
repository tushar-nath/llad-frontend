import { useContext, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { FrontCard } from "./FrontCard";
import { BackCard } from "./BackCard";
import { GradeSelector } from "./GradeSelector";
import axios from "axios";
import { UserContext } from "../../contexts/userContext";

const CardPreview = ({
  card,
  getCards,
  updateIndex,
}: {
  card: any;
  getCards: any;
  updateIndex: any;
}) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const { user } = useContext(UserContext);

  const handleGrade = async (cardId: string, grade: number) => {
    try {
      await axios.put(
        `${process.env.REACT_APP_NODE_SERVER_BASE_URL}/api/v1/revision`,
        {
          userId: user?._id,
          cardId,
          grade,
        }
      );
      updateIndex((prev: number) => prev + 1);
      // getCards();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white w-full h-[70vh] flex flex-col gap-10 rounded-3xl items-center justify-center shadow-[5px_4px_30.100000381469727px_0px_#00000040]">
      <div className="flex flex-col gap-6 items-center">
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <FrontCard key="front" card={card} setIsFlipped={setIsFlipped} />
          <BackCard key="back" card={card} setIsFlipped={setIsFlipped} />
        </ReactCardFlip>
        {isFlipped && <GradeSelector handleGrade={handleGrade} card={card} />}
      </div>
    </div>
  );
};

export default CardPreview;
