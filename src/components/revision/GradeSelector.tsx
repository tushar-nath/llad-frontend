import { GradeButton } from "./GradeButton";

export const GradeSelector = () => {
  const grades = [
    { grade: "Forgot", color: "bg-[#FF0000]" },
    { grade: "Mildly Recalled", color: "bg-[#E46000]" },
    { grade: "Partially Recalled", color: "bg-[#FFA800]" },
    { grade: "Recalled with Effort", color: "bg-[#C0E000]" },
    { grade: "Easily Recalled", color: "bg-[#43D300]" },
  ];
  return (
    <div className="flex flex-row gap-4 items-center">
      {grades.map((grade, index) => (
        <GradeButton key={index} grade={grade.grade} color={grade.color} />
      ))}
    </div>
  );
};
