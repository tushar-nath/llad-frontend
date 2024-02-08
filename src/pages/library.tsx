import axios from "axios";
import { LibraryHeader } from "../components/library/LibraryHeader";
import { LibraryTable } from "../components/library/LibraryTable";
import Sidebar from "../components/sidebar/sidebar";
import { LanguageIcon } from "../svgs/languageIcon";
import { NotificationIcon } from "../svgs/notificationIcon";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/userContext";
import { BeatLoader } from "react-spinners";

const Library = () => {
  const [cards, setCards] = useState<any[]>([]);
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getCards = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `${process.env.REACT_APP_NODE_SERVER_BASE_URL}/api/v1/get-cards/${user?._id}`,
      );
      setCards(res.data.cards);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      alert("An error occurred. Please try again later.");
    }
  };

  useEffect(() => {
    getCards();
  }, []);

  console.log(cards);

  return (
    <div className="bg-white w-full h-[100vh] flex gap-12 pl-5 pr-14 py-12">
      <Sidebar />
      <div className="flex flex-col gap-10 w-full">
        {/* Header */}
        <div className="flex justify-between w-full">
          <div className="flex flex-row gap-1.5 py-2">
            <h1 className="text-3xl font-bold text-gray-900">Your Library</h1>
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

        {/* Main Content */}
        <LibraryHeader />
        {isLoading ? (
          <div className="flex items-center justify-center h-[70vh] w-full">
            <BeatLoader color="#7573FF" />
          </div>
        ) : (
          <LibraryTable cards={cards} />
        )}
      </div>
    </div>
  );
};

export default Library;
