import { GradeButton } from "./GradeButton";

interface GradeSelectorProps {
  handleGrade: (cardId: string, grade: number) => void;
  card: any;
}

export const GradeSelector = ({ handleGrade, card }: GradeSelectorProps) => {
  const grades = [
    { id: 1, grade: "Forgot", color: "bg-[#FF0000]" },
    { id: 2, grade: "Mildly Recalled", color: "bg-[#E46000]" },
    { id: 3, grade: "Partially Recalled", color: "bg-[#FFA800]" },
    { id: 4, grade: "Recalled with Effort", color: "bg-[#C0E000]" },
    { id: 5, grade: "Easily Recalled", color: "bg-[#43D300]" },
  ];

  return (
    <div className="flex flex-row gap-4 items-center">
      {grades.map((grade, index) => (
        <GradeButton
          key={index}
          grade={grade}
          color={grade.color}
          handleGrade={handleGrade}
          card={card}
        />
      ))}
    </div>
  );
};
