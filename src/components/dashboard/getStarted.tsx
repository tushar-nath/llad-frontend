import { CreateIconWhite } from "../../svgs/createIconWhite";
import { FormIcon } from "../../svgs/formIcon";
import { GroupWhiteIcon } from "../../svgs/groupWhiteIcon";
import { NoteIcon } from "../../svgs/noteIcon";
import GetStartedCard from "./getStartedCard";

const GetStarted = () => {
  const Items = [
    {
      title: "Create a Flash Card",
      icon: <CreateIconWhite />,
    },
    {
      title: "Your Library",
      icon: <GroupWhiteIcon />,
    },
    {
      title: "Improve Your Vocabulary",
      icon: <NoteIcon />,
    },
    {
      title: "Fill Forms",
      icon: <FormIcon />,
    },
  ];

  return (
    <div className="flex flex-col gap-2 w-full rounded-3xl shadow-[1px_4px_14.5px_0px_rgba(0,_0,_0,_0.25)] p-5">
      <h1 className="text-2xl font-bold text-[#7573FF]">Dashboard</h1>
      <div className="flex flex-wrap justify-center">
        {Items.map((item) => {
          return (
            <button className="w-1/2 p-3">
              <GetStartedCard title={item.title} icon={item.icon} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default GetStarted;
