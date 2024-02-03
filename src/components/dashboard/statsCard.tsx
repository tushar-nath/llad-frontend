const StatsCard = ({
  stat,
  value,
  icon,
}: {
  stat: string;
  value: string;
  icon: any;
}) => {
  return (
    <div className="flex justify-between items-center w-[75%]">
      <div className="flex items-center gap-6">
        <div>{icon}</div>
        <div className="flex flex-col">
          <h1 className="text-base font-semibold">{stat}</h1>
          <h1 className="text-sm font-medium text-gray-700">{value}</h1>
        </div>
      </div>
      <div className="rounded-full bg-[#B1FFAF] px-2.5 py-2">
        <h1 className="text-sm font-semibold text-gray-800">{99}</h1>
      </div>
    </div>
  );
};

export default StatsCard;
