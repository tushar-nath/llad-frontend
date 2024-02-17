import { useTranslation } from "react-i18next";
import { Header } from "../components/common/Header";
import GetStarted from "../components/dashboard/getStarted";
import Revision from "../components/dashboard/revision";
import Stats from "../components/dashboard/stats";
import Sidebar from "../components/sidebar/sidebar";

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white w-full h-[100vh] flex gap-12 pl-5 pr-14 py-12">
      <Sidebar />
      <div className="flex flex-col gap-10 w-full">
        {/* Header */}
        <Header titleOne={t("Welcome To")} titleTwo={t("Learning App")} />
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
