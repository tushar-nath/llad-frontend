import { DashboardIcon } from "../../svgs/dashboardIcon";
import { CreateIcon } from "../../svgs/createIcon";
import { LogoutIcon } from "../../svgs/logoutIcon";
import { GroupIcon } from "../../svgs/groupIcon";
import SidebarProfile from "./sidebarProfile";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const URL = window.location.href;

  return (
    <div className="border-[1.5px] h-[85vh] w-28 rounded-3xl border-[#7573FF] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]">
      <div className="flex items-center justify-center py-7">
        <SidebarProfile />
      </div>
      <div className="sidebar-menu">
        <div className="flex flex-col items-center justify-center gap-7">
          <button onClick={() => navigate("/dashboard")}>
            <DashboardIcon size={URL.includes("dashboard") ? "60" : "36"} />
          </button>
          <button onClick={() => navigate("/create")}>
            <CreateIcon size={URL.includes("create") ? "60" : "36"} />
          </button>
          <button onClick={() => navigate("/library")}>
            <GroupIcon size={URL.includes("library") ? "60" : "36"} />
          </button>
          <button
            onClick={() => {
              localStorage.removeItem("user");
              navigate("/");
            }}
          >
            <LogoutIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
