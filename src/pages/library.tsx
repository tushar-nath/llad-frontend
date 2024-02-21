import axios from "axios";
import { LibraryHeader } from "../components/library/LibraryHeader";
import { LibraryTable } from "../components/library/LibraryTable";
import Sidebar from "../components/sidebar/sidebar";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/userContext";
import { BeatLoader } from "react-spinners";
import { Header } from "../components/common/Header";
import { useTranslation } from "react-i18next";
import { SuccessModal } from "../components/common/SuccessModal";

const Library = () => {
  const { t } = useTranslation();
  const [cards, setCards] = useState<any[]>([]);
  const [filteredCards, setFilteredCards] = useState<any[]>([]);
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [tags, setTags] = useState<string[]>([]);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [isFilteredByStarred, setIsFilteredByStarred] =
    useState<boolean>(false);
  const [showDeleteCardModal, setShowDeleteCardModal] =
    useState<boolean>(false);
  const [cardToDelete, setCardToDelete] = useState<string>("");

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

  const handleAddToStarred = async (card: any) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_NODE_SERVER_BASE_URL}/api/v1/star-card`,
        {
          cardId: card._id,
          userId: user?._id,
          isStarred: !card.isStarred,
        }
      );
      getCards();
      setSuccessMessage(
        card.isStarred
          ? t("Card has been removed from starred")
          : t("Card has been added to starred")
      );
      setShowSuccessModal(true);
    } catch {
      console.log("error");
    }
  };

  const handleDeleteCard = async (cardId: string) => {
    try {
      const body = {
        cardId,
        userId: user?._id,
      };
      await axios.delete(
        `${process.env.REACT_APP_NODE_SERVER_BASE_URL}/api/v1/delete-card`,
        {
          data: body,
        }
      );
      getCards();
      setSuccessMessage(t("Card has been deleted"));
      setShowSuccessModal(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = (cardId: string) => {
    setCardToDelete(cardId);
    setShowDeleteCardModal(true);
  };

  return (
    <div className="bg-white w-full h-[100vh] flex gap-12 pl-5 pr-14 py-12">
      <Sidebar />
      <div className="flex flex-col gap-10 w-full">
        {/* Header */}
        <Header titleOne={t("Your Library")} titleTwo="" />
        {/* Main Content */}
        <LibraryHeader
          handleSearch={handleSearch}
          handleFilterByStarred={() => {
            if (isFilteredByStarred) {
              setIsFilteredByStarred(false);
              setFilteredCards(cards);
            } else {
              const filtered = cards.filter((card) => card.isStarred);
              setIsFilteredByStarred(true);
              setFilteredCards(filtered);
            }
          }}
        />
        <div className="h-[70vh] w-full items-center justify-end overflow-y-scroll bg-white">
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
              handleUpdateStarred={handleAddToStarred}
              handleDeleteCard={handleDelete}
            />
          )}
        </div>
      </div>
      {showSuccessModal && (
        <SuccessModal
          handleClose={() => setShowSuccessModal(false)}
          message={successMessage}
        />
      )}
      {showDeleteCardModal && (
        <div className="fixed inset-0 w-full h-full bg-black bg-opacity-50 z-50">
          <div className="flex justify-center items-center w-full h-full">
            <div className="flex flex-col bg-white w-[500px] h-[200px] rounded-3xl shadow-[5px_4px_30.100000381469727px_0px_#00000040] p-8">
              <h1 className="text-2xl font-bold text-bluePrimary mb-4">
                {t("Delete Card")}
              </h1>
              <p className="text-lg font-semibold text-gray-700">
                {t("Are you sure you want to delete this card?")}
              </p>
              <div className="flex justify-center w-full gap-4 mt-auto">
                <button
                  className="flex-1 text-lg font-semibold text-gray-500 hover:bg-gray-100 hover:text-gray-500 rounded-md py-2 px-4"
                  onClick={() => setShowDeleteCardModal(false)}
                >
                  {t("Cancel")}
                </button>
                <button
                  className="flex-1 text-lg font-semibold text-red-500 hover:bg-red-100 hover:text-red-500 rounded-md py-2 px-4"
                  onClick={() => {
                    handleDeleteCard(cardToDelete);
                    setShowDeleteCardModal(false);
                  }}
                >
                  {t("Delete")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Library;
