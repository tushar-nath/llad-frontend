import axios from "axios";
import { LibraryHeader } from "../components/library/LibraryHeader";
import { LibraryTable } from "../components/library/LibraryTable";
import Sidebar from "../components/sidebar/sidebar";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/userContext";
import { BeatLoader } from "react-spinners";
import { Header } from "../components/common/Header";

const Library = () => {
  const [cards, setCards] = useState<any[]>([]);
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getCards = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `${process.env.REACT_APP_NODE_SERVER_BASE_URL}/api/v1/get-cards/${user?._id}`
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

  const handleSort = () => {
    // Sorting cards by date modified
    const sorted = cards.sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );
    setCards(sorted);
  };

  return (
    <div className="bg-white w-full h-[100vh] flex gap-12 pl-5 pr-14 py-12">
      <Sidebar />
      <div className="flex flex-col gap-10 w-full">
        {/* Header */}
        <Header titleOne="Your Library" titleTwo="" />
        {/* Main Content */}
        <LibraryHeader />
        {isLoading ? (
          <div className="flex items-center justify-center h-[70vh] w-full">
            <BeatLoader color="#7573FF" />
          </div>
        ) : cards && cards.length === 0 ? (
          <div className="flex items-center justify-center h-[70vh] w-full">
            <h1 className="text-2xl text-gray-800 font-semibold">
              You have no cards in your library
            </h1>
          </div>
        ) : (
          <LibraryTable cards={cards} handleSort={handleSort} />
        )}
      </div>
    </div>
  );
};

export default Library;
