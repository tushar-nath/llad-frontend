import Sidebar from "../components/sidebar/sidebar";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/userContext";
import CardPreview from "../components/revision/CardPreview";
import { RevisionDashboard } from "../components/revision/RevisionDashboard";
import { RevisionGraph } from "../components/revision/RevisionGraph";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import { Header } from "../components/common/Header";
import { useTranslation } from "react-i18next";

const Revision = () => {
  const { t } = useTranslation();
  const { user } = useContext(UserContext);
  const [showCardPreview, setShowCardPreview] = useState<boolean>(false);
  const [cards, setCards] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [index, setIndex] = useState<number>(0);
  const [tags, setTags] = useState<string[]>([]);

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
      console.error(error);
    }
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

  useEffect(() => {
    // check if filter is present in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const filter = urlParams.get("filter");

    if (filter) {
      setShowCardPreview(true);
      console.log(cards);
      switch (filter) {
        case "today":
          const today = new Date().toISOString().split("T")[0];
          const filteredCards = cards.filter((card) => card.dueDate === today);
          setCards(filteredCards);
          break;
        case "last-week":
          const lastWeek = new Date(
            new Date().getTime() - 7 * 24 * 60 * 60 * 1000
          ).toISOString();
          const filteredCardsLastWeek = cards.filter(
            (card) =>
              new Date(card.dueDate).getTime() > new Date(lastWeek).getTime()
          );
          setCards(filteredCardsLastWeek);
          break;
        case "last-15-days":
          const last15Days = new Date(
            new Date().getTime() - 15 * 24 * 60 * 60 * 1000
          ).toISOString();
          const filteredCardsLast15Days = cards.filter(
            (card) =>
              new Date(card.dueDate).getTime() > new Date(last15Days).getTime()
          );
          setCards(filteredCardsLast15Days);
          break;
        case "last-30-days":
          const last30Days = new Date(
            new Date().getTime() - 30 * 24 * 60 * 60 * 1000
          ).toISOString();
          const filteredCardsLast30Days = cards.filter(
            (card) =>
              new Date(card.dueDate).getTime() > new Date(last30Days).getTime()
          );
          setCards(filteredCardsLast30Days);
          break;
        default:
          break;
      }
    }

    getCards();
    getTags();
    sortCards(cards);
  }, []);

  const sortCards = (cards: any[]) => {
    return cards.sort((a, b) => {
      return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
    });
  };

  const filterTags = async (tag: string) => {
    // Filter out cards with the selected tag
    const filteredCards = cards.filter((card) => card.tags.includes(tag));
    setCards(filteredCards);
    setShowCardPreview(true);
  };

  return (
    <div className="bg-white w-full h-[100vh] flex gap-12 pl-5 pr-14 py-12">
      <Sidebar />
      <div className="flex flex-col gap-10 w-full">
        {/* Header */}
        <Header titleOne={t("Revision")} titleTwo="" />
        {/* Main Content */}
        {isLoading ? (
          <div className="flex items-center justify-center h-[70vh] w-full">
            <BeatLoader color="#7573FF" />
          </div>
        ) : showCardPreview ? (
          <div className="flex flex-col items-center justify-center h-[70vh]">
            {cards && cards.length > 0 && index !== cards.length ? (
              <CardPreview
                card={cards[index]}
                getCards={getCards}
                updateIndex={setIndex}
                setShowCardPreview={setShowCardPreview}
              />
            ) : (
              <h1 className="xl:text-2xl text-xl font-semibold text-bluePrimary">
                {t("No cards to revise")}
              </h1>
            )}
          </div>
        ) : (
          <div className="flex gap-10">
            <div style={{ flex: "1 1 auto" }}>
              <RevisionDashboard
                setShowCardPreview={setShowCardPreview}
                tags={tags}
                filterTags={filterTags}
              />
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
