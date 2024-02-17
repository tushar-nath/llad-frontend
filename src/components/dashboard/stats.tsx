import { CalculatorIcon } from "../../svgs/calculatorIcon";
import { LibraryIcon } from "../../svgs/libraryIcon";
import NetworkIcon from "../../svgs/networkIcon";
import { StatsIcon } from "../../svgs/statsIcon";
import StatsCard from "./statsCard";

const Stats = () => {
  const Stats = [
    {
      stat: "Active hours this week",
      value: "12 Hours more than last week",
      Icon: <NetworkIcon />,
    },
    {
      stat: "Words in your library",
      value: "You have added 12 more words than last week",
      Icon: <LibraryIcon />,
    },
    {
      stat: "Words learned this week",
      value: "You have learned 40 words this week",
      Icon: <CalculatorIcon />,
    },
  ];

  return (
    <div className="flex flex-col gap-4 w-full p-6 rounded-3xl shadow-[1px_4px_22.3px_0px_rgba(0,_0,_0,_0.25)]">
      <div className="flex items-center gap-3">
        <StatsIcon />
        <h1 className="text-2xl font-semibold text-gray-800">Stats</h1>
      </div>
      <div className="flex flex-col gap-6">
        {Stats.map((stat) => {
          return (
            <StatsCard stat={stat.stat} value={stat.value} icon={stat.Icon} />
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
