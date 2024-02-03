import GetStarted from "../components/dashboard/getStarted";
import Revision from "../components/dashboard/revision";
import Stats from "../components/dashboard/stats";
import Sidebar from "../components/sidebar/sidebar";
import { LanguageIcon } from "../svgs/languageIcon";
import { NotificationIcon } from "../svgs/notificationIcon";

const Dashboard = () => {
  return (
    <div className="bg-white w-full h-[100vh] flex gap-12 pl-5 pr-14 py-12">
      <Sidebar />
      <div className="flex flex-col gap-10 w-full">
        {/* Header */}
        <div className="flex justify-between w-full">
          <div className="flex flex-row gap-1.5 py-2">
            <h1 className="text-3xl font-bold text-gray-900">Welcome To</h1>
            <p className="text-[#7573FF] font-bold text-3xl">Learning App</p>
          </div>
          <div className="flex items-center gap-4">
            <button>
              <NotificationIcon />
            </button>
            <div className="flex flex-row gap-4">
              <LanguageIcon />
              <select className="w-24 outline-none text-[#7573FF] font-semibold">
                <option value="english">English</option>
                <option value="norwegian">Norwegian</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-row gap-12">
          <div className="flex flex-col gap-10">
            <GetStarted />
            <Stats />
          </div>
          <Revision />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
