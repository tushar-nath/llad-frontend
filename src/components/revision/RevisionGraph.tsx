import { Chart } from "chart.js";
import ChartComponent from "./ChartComponent";

export const RevisionGraph = () => {
  const graphData = [
    {
      label: "Revised Today",
      color: "bg-[#F1FF4C]",
    },
    {
      label: "Revised Last Week",
      color: "bg-[#0DB3FB]",
    },
    {
      label: "Revised Last 15 Days",
      color: "bg-[#001376]",
    },
    {
      label: "Revised Last 30 Days",
      color: "bg-[#9000D4]",
    },
    {
      label: "Revised Last 60 Days",
      color: "bg-[#DC005C]",
    },
  ];

  return (
    <div className="flex bg-white shadow-[0px_4px_31.100000381469727px_0px_#00000040] rounded-[2rem]">
      <div className="flex flex-col gap-4 p-6">
        <div className="flex flex-col gap-8">
          {graphData.map((data, index) => (
            <div key={index} className="">
              <h1 className="text-lg text-center flex gap-4 font-semibold text-gray-900">
                <div
                  className={`flex items-center justify-center w-6 h-6 ${data.color} text-white font-bold`}
                ></div>
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
