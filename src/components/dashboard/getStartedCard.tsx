const GetStartedCard = ({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-bluePrimary hover:shadow-md duration-300 transition-all xl:p-4 p-2.5">
      <div className="flex items-center xl:gap-3 gap-2.5">
        {icon}
        <h1 className="xl:text-base text-sm font-bold text-bluePrimary">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default GetStartedCard;
