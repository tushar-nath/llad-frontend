import { useNavigate } from "react-router-dom";
import { LogoutIcon } from "../../svgs/logoutIcon";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import SidebarProfile from "./sidebarProfile";
import { ChevronIconLeft } from "../../svgs/chevronIconLeft";
import { ChevronIconRight } from "../../svgs/chevronIconRight";
import { DashboardIcon } from "../../svgs/dashboardIcon";
import { CreateIcon } from "../../svgs/createIcon";
import { GroupIcon } from "../../svgs/groupIcon";
import { RevisionIconSidebar } from "../../svgs/revisionIconSidebar";

interface ExpandedSidebarProps {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExpandedSidebar = ({ expanded, setExpanded }: ExpandedSidebarProps) => {
  const navigate = useNavigate();
  const URL = window.location.href;
  const { user } = useContext(UserContext);

  return (
    <div className="h-full w-[450px] rounded-3xl shadow-[1px_4px_46px_0px_#0000004A]">
      <div className="flex items-center justify-center py-7 relative">
        <div className="flex items-center justify-between w-full px-8 mr-3">
          {expanded && (
            <div className="flex flex-col justify-center ml-6">
              <h2 className="text-gray-900 font-bold text-2xl">
                {user?.name.split(" ")[0]}
              </h2>
              <button className="text-bluePrimary font-bold text-sm">
                View Profile
              </button>
            </div>
          )}
          <SidebarProfile />
        </div>
        <button
          className="absolute -right-5"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? <ChevronIconLeft /> : <ChevronIconRight />}
        </button>
      </div>
      <div>
        <div className="flex flex-col justify-center items-center gap-7 px-8 w-full">
          <button
            onClick={() => navigate("/dashboard")}
            className={`flex items-center justify-between rounded-[3rem] py-2 px-6 w-full ${URL.includes("dashboard") && expanded && "bg-bluePrimary"}`}
          >
            {expanded && (
              <h2
                className={`${URL.includes("dashboard") ? "text-white" : "text-gray-900"} font-semibold text-base`}
              >
                Dashboard
              </h2>
            )}
            <DashboardIcon
              size={URL.includes("dashboard") && !expanded ? "56" : "36"}
            />
          </button>
          <button
            onClick={() => navigate("/create")}
            className={`flex items-center justify-between rounded-[3rem] py-2 px-6 w-full ${URL.includes("create") && expanded && "bg-bluePrimary"}`}
          >
            {expanded && (
              <h2
                className={`${URL.includes("create") ? "text-white" : "text-gray-900"} font-semibold text-base`}
              >
                Add Flash Cards
              </h2>
            )}
            <CreateIcon
              size={URL.includes("create") && !expanded ? "56" : "36"}
            />
          </button>
          <button
            onClick={() => navigate("/library")}
            className={`flex items-center justify-between rounded-[3rem] py-2 px-6 w-full ${URL.includes("library") && expanded && "bg-bluePrimary"}`}
          >
            {expanded && (
              <h2
                className={`${URL.includes("library") ? "text-white" : "text-gray-900"} font-semibold text-base`}
              >
                Your Library
              </h2>
            )}
            <GroupIcon
              size={URL.includes("library") && !expanded ? "56" : "36"}
            />
          </button>
          <button
            onClick={() => navigate("/revision")}
            className={`flex items-center justify-between rounded-[3rem] py-2 px-6 w-full ${URL.includes("revision") && expanded && "bg-bluePrimary"}`}
          >
            {expanded && (
              <h2
                className={`${URL.includes("revision") ? "text-white" : "text-gray-900"} font-semibold text-base`}
              >
                Revisions
              </h2>
            )}
            <RevisionIconSidebar
              size={URL.includes("revision") && !expanded ? "56" : "36"}
            />
          </button>
          <button
            onClick={() => {
              localStorage.removeItem("user");
              navigate("/");
            }}
            className={`flex items-center justify-between rounded-[3rem] py-2 px-6 w-full`}
          >
            {expanded && (
              <h2 className="text-gray-900 font-semibold text-base">Log Out</h2>
            )}
            <LogoutIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpandedSidebar;
