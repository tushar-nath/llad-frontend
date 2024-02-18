import { useState } from "react";
import { Last15DaysIcon } from "../../svgs/last15DaysIcon";
import { Last30DaysIcon } from "../../svgs/last30DaysIcon";
import { LastWeekIcon } from "../../svgs/lastWeek";
import { ReviseIcon } from "../../svgs/reviseIcon";
import { TodayIcon } from "../../svgs/todayIcon";
import { useTranslation } from "react-i18next";

interface RevisionDashboardProps {
  setShowCardPreview: React.Dispatch<React.SetStateAction<boolean>>;
  tags: string[];
  filterTags: (tag: string) => void;
}

export const RevisionDashboard = ({
  setShowCardPreview,
  tags,
  filterTags,
}: RevisionDashboardProps) => {
  const { t } = useTranslation();
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const categories = [
    {
      label: t("Revise All"),
      icon: <ReviseIcon />,
    },
    {
      label: t("Revise by Category"),
      icon: <ReviseIcon />,
    },
    {
      label: t("Today"),
      icon: <TodayIcon />,
    },
    {
      label: t("Last Week"),
      icon: <LastWeekIcon />,
    },
    {
      label: t("Last 15 Days"),
      icon: <Last15DaysIcon />,
    },
    {
      label: t("Last 30 Days"),
      icon: <Last30DaysIcon />,
    },
  ];

  return (
    <div className="flex flex-col flex-1 gap-10 bg-white w-full shadow-[0px_4px_31.100000381469727px_0px_#00000040] rounded-[2rem] xl:p-6 p-5">
      <div className="flex flex-wrap xl:gap-4 gap-3">
        {categories.map((category, index) => (
          <div className="flex flex-col">
            <button
              key={index}
              className="flex flex-row items-center gap-4 bg-white w-80 px-6 xl:py-5 py-3.5 border-bluePrimary hover:border-gray-400 transition-colors duration-300 rounded-2xl shadow-sm border-[1.5px]"
              onClick={() => {
                if (
                  category.label === "Revise by Category" ||
                  category.label === "Revider etter kategori"
                ) {
                  setShowDropdown((prev) => !prev);
                } else {
                  setShowCardPreview(true);
                }
              }}
            >
              {category.icon}
              <h1 className="xl:text-lg text-base text-center flex justify-center font-semibold text-gray-900">
                {category.label}
              </h1>
            </button>
            {showDropdown &&
              (category.label === "Revise by Category" ||
                category.label === "Revider etter kategori") && (
                <div
                  className="flex flex-col gap-2 absolute top-[240px] left-[532px] bg-white w-80 border-bluePrimary transition-colors duration-300 rounded-2xl shadow-sm border-[1.5px]"
                  onClick={() => setShowDropdown(false)}
                >
                  {tags.map((tag, index) => (
                    <button
                      key={index}
                      className="text-lg text-center font-semibold text-gray-900 hover:bg-bluePrimary py-2 px-5 rounded-xl hover:text-white"
                      onClick={() => filterTags(tag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              )}
          </div>
        ))}
      </div>
    </div>
  );
};
