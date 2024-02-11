export const GradeButton = ({
  grade,
  color,
  handleGrade,
  card,
}: {
  grade: any;
  color: string;
  handleGrade: (cardId: string, grade: number) => void;
  card: any;
}) => {
  return (
    <button
      className={`${color} px-4 py-2.5 rounded-lg shadow-sm text-sm font-bold text-gray-900 hover:opacity-90 transition-all`}
      style={{ boxShadow: "0px 4px 30px 0px #00000040" }}
      onClick={() => handleGrade(card._id, grade.id)}
    >
      {grade.grade}
    </button>
  );
};
