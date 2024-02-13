import { Last15DaysIcon } from "../../svgs/last15DaysIcon";
import { Last30DaysIcon } from "../../svgs/last30DaysIcon";
import { LastWeekIcon } from "../../svgs/lastWeek";
import { ReviseIcon } from "../../svgs/reviseIcon";
import { TodayIcon } from "../../svgs/todayIcon";

export const RevisionDashboard = ({
  setShowCardPreview,
}: {
  setShowCardPreview: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const categories = [
    {
      label: "Revise All",
      icon: <ReviseIcon />,
    },
    {
      label: "Revise by Category",
      icon: <ReviseIcon />,
    },
    {
      label: "Today",
      icon: <TodayIcon />,
    },
    {
      label: "Last Week",
      icon: <LastWeekIcon />,
    },
    {
      label: "Last 15 Days",
      icon: <Last15DaysIcon />,
    },
    {
      label: "Last 30 Days",
      icon: <Last30DaysIcon />,
    },
  ];

  return (
    <div className="flex flex-col flex-1 gap-10 bg-white w-full shadow-[0px_4px_31.100000381469727px_0px_#00000040] rounded-[2rem] p-6">
      <div className="flex flex-wrap gap-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className="flex flex-row items-center gap-4 bg-white w-80 px-6 py-5 border-bluePrimary hover:border-gray-400 transition-colors duration-300 rounded-2xl shadow-sm border-[1.5px]"
            onClick={() => setShowCardPreview(true)}
          >
            {category.icon}
            <h1 className="text-lg text-center flex justify-center font-semibold text-gray-900">
              {category.label}
            </h1>
          </button>
        ))}
      </div>
    </div>
  );
};
