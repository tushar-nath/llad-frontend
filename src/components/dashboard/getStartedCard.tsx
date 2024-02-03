const GetStartedCard = ({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-[#7573FF] hover:shadow-md duration-300 transition-all p-4">
      <div className="flex items-center gap-3">
        {icon}
        <h1 className="text-base font-bold text-[#7573FF]">{title}</h1>
      </div>
    </div>
  );
};

export default GetStartedCard;
