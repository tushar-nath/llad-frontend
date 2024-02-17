import axios from "axios";
import { LibraryHeader } from "../components/library/LibraryHeader";
import { LibraryTable } from "../components/library/LibraryTable";
import Sidebar from "../components/sidebar/sidebar";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/userContext";
import { BeatLoader } from "react-spinners";
import { Header } from "../components/common/Header";
import { useTranslation } from "react-i18next";

const Library = () => {
  const { t } = useTranslation();
  const [cards, setCards] = useState<any[]>([]);
  const [filteredCards, setFilteredCards] = useState<any[]>([]);
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [tags, setTags] = useState<string[]>([]);

  const getCards = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `${process.env.REACT_APP_NODE_SERVER_BASE_URL}/api/v1/get-cards/${user?._id}`
      );
      setCards(res.data.cards);
      setFilteredCards(res.data.cards);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      alert("An error occurred. Please try again later.");
    }
  };

  useEffect(() => {
    getCards();
    getTags();
  }, []);

  const handleSort = () => {
    // Sorting cards by date modified
    const sorted = cards.sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );
    setCards(sorted);
  };

  const handleSearch = (search: any) => {
    const filtered = cards.filter((card) => {
      return (
        card.front.text.toLowerCase().includes(search.toLowerCase()) ||
        card.back.text.toLowerCase().includes(search.toLowerCase()) ||
        card.tags.join(", ").toLowerCase().includes(search.toLowerCase()) ||
        card.note.toLowerCase().includes(search.toLowerCase())
      );
    });
    setFilteredCards(filtered);
  };

  const handleFilterByTag = (tag: string) => {
    const filtered = cards.filter((card) => card.tags.includes(tag));
    setFilteredCards(filtered);
  };

  const getTags = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_NODE_SERVER_BASE_URL}/api/v1/get-tags/${user?._id}`
      );
      setTags(res.data.tags);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white w-full h-[100vh] flex gap-12 pl-5 pr-14 py-12">
      <Sidebar />
      <div className="flex flex-col gap-10 w-full">
        {/* Header */}
        <Header titleOne={t("Your Library")} titleTwo="" />
        {/* Main Content */}
        <LibraryHeader handleSearch={handleSearch} />
        {isLoading ? (
          <div className="flex items-center justify-center h-[70vh] w-full">
            <BeatLoader color="#7573FF" />
          </div>
        ) : filteredCards && filteredCards.length === 0 ? (
          <div className="flex items-center justify-center h-[70vh] w-full">
            <h1 className="text-2xl text-gray-800 font-semibold">
              {t("You have no cards in your library")}
            </h1>
          </div>
        ) : (
          <LibraryTable
            cards={filteredCards}
            handleFilterByTag={handleFilterByTag}
            tags={tags}
          />
        )}
      </div>
    </div>
  );
};

export default Library;
