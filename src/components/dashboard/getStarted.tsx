import { useNavigate } from "react-router-dom";
import { CreateIconWhite } from "../../svgs/createIconWhite";
import { FormIcon } from "../../svgs/formIcon";
import { GroupWhiteIcon } from "../../svgs/groupWhiteIcon";
import { NoteIcon } from "../../svgs/noteIcon";
import GetStartedCard from "./getStartedCard";
import { useTranslation } from "react-i18next";

const GetStarted = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const Items = [
    {
      title: t("Create a Flash Card"),
      icon: <CreateIconWhite />,
      navigate: "/create",
    },
    {
      title: t("Your Library"),
      icon: <GroupWhiteIcon />,
      navigate: "/library",
    },
    {
      title: t("Improve Your Vocabulary"),
      icon: <NoteIcon />,
      navigate: "/revision",
    },
    {
      title: t("Fill Forms"),
      icon: <FormIcon />,
      navigate: "/forms",
    },
  ];

  return (
    <div className="flex flex-col gap-2 w-full rounded-3xl shadow-[1px_4px_14.5px_0px_rgba(0,_0,_0,_0.25)] xl:p-5 p-4">
      <h1 className="xl:text-2xl text-xl font-bold text-bluePrimary">
        {t("Dashboard")}
      </h1>
      <div className="flex flex-wrap justify-center">
        {Items.map((item) => {
          return (
            <button
              className="w-1/2 p-3"
              onClick={() => navigate(item.navigate)}
            >
              <GetStartedCard title={item.title} icon={item.icon} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default GetStarted;
