import { useTranslation } from "react-i18next";
import { Header } from "../components/common/Header";
import Sidebar from "../components/sidebar/sidebar";
import { ProfileInfo } from "../components/profile/ProfileInfo";

const Profile = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white w-full h-[100vh] flex gap-12 pl-5 pr-14 py-12 overflow-y-scroll">
      <Sidebar />
      <div className="flex flex-col gap-10 w-full">
        {/* Header */}
        <Header titleOne={t("Welcome To")} titleTwo={t("Learning App")} />
        {/* Main Content */}
        <div className="flex justify-center gap-12 shadow-[0px_4px_4px_0px_#00000040] rounded-2xl py-4 px-5 border border-gray-100">
          <ProfileInfo />
        </div>
      </div>
    </div>
  );
};
export default Profile;
