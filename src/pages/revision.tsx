import Sidebar from "../components/sidebar/sidebar";
import { LanguageIcon } from "../svgs/languageIcon";
import { NotificationIcon } from "../svgs/notificationIcon";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/userContext";
import CardPreview from "../components/revision/CardPreview";
import { RevisionDashboard } from "../components/revision/RevisionDashboard";
import { RevisionGraph } from "../components/revision/RevisionGraph";

const Revision = () => {
  const { user } = useContext(UserContext);
  const [showCardPreview, setShowCardPreview] = useState<boolean>(false);

  return (
    <div className="bg-white w-full h-[100vh] flex gap-12 pl-5 pr-14 py-12">
      <Sidebar />
      <div className="flex flex-col gap-10 w-full">
        {/* Header */}
        <div className="flex justify-between w-full">
          <div className="flex flex-row gap-1.5 py-2">
            <h1 className="text-3xl font-bold text-bluePrimary">Revisions</h1>
          </div>
          <div className="flex items-center gap-4">
            <button>
              <NotificationIcon />
            </button>
            <div className="flex flex-row gap-4">
              <LanguageIcon />
              <select className="w-24 outline-none text-bluePrimary font-semibold">
                <option value="english">English</option>
                <option value="norwegian">Norwegian</option>
              </select>
            </div>
          </div>
        </div>

        {showCardPreview ? (
          <div className="flex flex-col items-center justify-center h-[70vh]">
            <CardPreview
              card={{
                englishWord: "Perfect",
                englishExample: "I am perfect today",
                norwegianWord: "Perfekt",
                norwegianExample: "Jeg er perfekt i dag",
              }}
            />
          </div>
        ) : (
          <div className="flex gap-10">
            <div style={{ flex: "1 1 auto" }}>
              <RevisionDashboard setShowCardPreview={setShowCardPreview} />
            </div>
            <div>
              <RevisionGraph />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Revision;
