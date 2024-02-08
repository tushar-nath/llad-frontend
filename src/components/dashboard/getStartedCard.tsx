const GetStartedCard = ({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-bluePrimary hover:shadow-md duration-300 transition-all p-4">
      <div className="flex items-center gap-3">
        {icon}
        <h1 className="text-base font-bold text-bluePrimary">{title}</h1>
      </div>
    </div>
  );
};

export default GetStartedCard;
