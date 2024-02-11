import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { FrontCard } from "./FrontCard";
import { BackCard } from "./BackCard";
import { GradeSelector } from "./GradeSelector";

const CardPreview = ({ card }: { card: any }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  return (
    <div className="bg-white w-full h-[70vh] flex flex-col gap-10 rounded-3xl items-center justify-center shadow-[5px_4px_30.100000381469727px_0px_#00000040]">
      <div className="flex flex-col gap-6 items-center">
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <FrontCard key="front" card={card} setIsFlipped={setIsFlipped} />
          <BackCard key="back" card={card} setIsFlipped={setIsFlipped} />
        </ReactCardFlip>
        <GradeSelector />
      </div>
    </div>
  );
};

export default CardPreview;
