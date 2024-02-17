import { useTranslation } from "react-i18next";
import ChartComponent from "./ChartComponent";

export const RevisionGraph = () => {
  const { t } = useTranslation();
  const graphData = [
    {
      label: t("Revised Today"),
      color: "bg-[#F1FF4C]",
    },
    {
      label: t("Revised Last Week"),
      color: "bg-[#0DB3FB]",
    },
    {
      label: t("Revised Last 15 Days"),
      color: "bg-[#001376]",
    },
    {
      label: t("Revised Last 30 Days"),
      color: "bg-[#9000D4]",
    },
    {
      label: t("Revised Last 60 Days"),
      color: "bg-[#DC005C]",
    },
  ];

  return (
    <div className="flex bg-white shadow-[0px_4px_31.100000381469727px_0px_#00000040] rounded-[2rem]">
      <div className="flex flex-col gap-4 p-6">
        <div className="flex flex-col gap-8">
          {graphData.map((data, index) => (
            <div key={index} className="flex gap-20">
              <div
                className={`flex items-center justify-center w-6 h-6 ${data.color} text-white font-bold`}
              ></div>
              <h1 className="text-base text-center flex justify-center font-semibold text-gray-900">
                {data.label}
              </h1>
            </div>
          ))}
        </div>
        {/* Graph */}
        <div>
          <ChartComponent />
        </div>
      </div>
    </div>
  );
};
