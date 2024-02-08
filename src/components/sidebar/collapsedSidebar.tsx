import { useNavigate } from "react-router-dom";
import { ChevronIconLeft } from "../../svgs/chevronIconLeft";
import { ChevronIconRight } from "../../svgs/chevronIconRight";
import SidebarProfile from "./sidebarProfile";
import { DashboardIcon } from "../../svgs/dashboardIcon";
import { CreateIcon } from "../../svgs/createIcon";
import { GroupIcon } from "../../svgs/groupIcon";
import { LogoutIcon } from "../../svgs/logoutIcon";
import { RevisionIconSidebar } from "../../svgs/revisionIconSidebar";

interface ExpandedSidebarProps {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExpandedSidebar = ({ expanded, setExpanded }: ExpandedSidebarProps) => {
  const navigate = useNavigate();
  const URL = window.location.href;
  return (
    <div className="h-[85vh] w-28 rounded-3xl shadow-[1px_4px_46px_0px_#0000004A]">
      <div className="flex items-center justify-center py-7 relative">
        <div className="flex items-center justify-center w-full">
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
        <div className="flex flex-col justify-center items-center gap-7 px-6 w-full">
          <button
            onClick={() => navigate("/dashboard")}
            className={`flex items-center justify-between rounded-[3rem] px-0`}
          >
            <DashboardIcon
              size={URL.includes("dashboard") && !expanded ? "56" : "36"}
            />
          </button>
          <button
            onClick={() => navigate("/create")}
            className={`flex items-center justify-between rounded-[3rem] px-0`}
          >
            <CreateIcon
              size={URL.includes("create") && !expanded ? "56" : "36"}
            />
          </button>
          <button
            onClick={() => navigate("/library")}
            className={`flex items-center justify-between rounded-[3rem] px-0`}
          >
            <GroupIcon
              size={URL.includes("library") && !expanded ? "56" : "36"}
            />
          </button>
          <button
            onClick={() => navigate("/revision")}
            className={`flex items-center justify-between rounded-[3rem] px-0`}
          >
            <RevisionIconSidebar
              size={URL.includes("revision") && !expanded ? "56" : "36"}
            />
          </button>
          <button
            onClick={() => {
              localStorage.removeItem("user");
              navigate("/");
            }}
            className={`flex items-center justify-between rounded-[3rem] px-0`}
          >
            <LogoutIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpandedSidebar;
