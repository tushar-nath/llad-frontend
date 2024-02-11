export const GradeButton = ({
  grade,
  color,
}: {
  grade: string;
  color: string;
}) => {
  return (
    <button
      className={`${color} px-4 py-2.5 rounded-lg shadow-sm text-sm font-bold text-gray-900 hover:opacity-90 transition-all`}
      style={{ boxShadow: "0px 4px 30px 0px #00000040" }}
    >
      {grade}
    </button>
  );
};
