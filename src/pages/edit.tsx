import { useContext, useState } from "react";
import CreateBackSide from "../components/create/createBackSide";
import CreateFrontSide from "../components/create/createFrontSide";
import Sidebar from "../components/sidebar/sidebar";
import axios from "axios";
import { UserContext } from "../contexts/userContext";
import { CardContext } from "../contexts/cardContext";
import { SuccessModal } from "../components/common/SuccessModal";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/common/Header";
import { useTranslation } from "react-i18next";

const Edit = () => {
  const { t } = useTranslation();
  const { card } = useContext(CardContext);
  const [nativeWord, setNativeWord] = useState<string>(
    card ? card.englishWord : "",
  );
  const [norwegianWord, setNorwegianWord] = useState<string>(
    card ? card.norwegianWord : "",
  );
  const [nativeExample, setNativeExample] = useState<string>(
    card ? card.englishExample : "",
  );
  const [norwegianExample, setNorwegianExample] = useState<string>(
    card ? card.norwegianExample : "",
  );
  const [note, setNote] = useState<string>(card ? card.note : "");
  const [tags, setTags] = useState<string[]>(card ? card.tags.split(",") : []);
  const { user } = useContext(UserContext);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSave = async () => {
    try {
      await axios.patch(
        `${process.env.REACT_APP_NODE_SERVER_BASE_URL}/api/v1/update-card`,
        {
          cardId: card?._id,
          userId: user?._id,
          frontText: nativeWord,
          frontExample: nativeExample,
          backText: norwegianWord,
          backExample: norwegianExample,
          note,
          tags,
        },
      );
      setShowSuccessModal(true);
    } catch (error) {
      alert("Card creation failed");
      console.error(error);
    }
  };

  const handleClose = () => {
    setShowSuccessModal(false);
    navigate("/library");
  };

  return (
    <div className="bg-white w-full h-[100vh] flex gap-12 pl-5 pr-14 py-12">
      <Sidebar />
      <div className="flex flex-col gap-10 w-full">
        {/* Header */}
        <Header titleOne="Edit" titleTwo="Flash Card" />
        {/* Main Content */}
        <div className="flex flex-row gap-8">
          <CreateFrontSide
            setNativeWord={setNativeWord}
            nativeWord={nativeWord}
            setNativeExample={setNativeExample}
            nativeExample={nativeExample}
          />
          <CreateBackSide
            setNorwegianWord={setNorwegianWord}
            norwegianWord={norwegianWord}
            setNorwegianExample={setNorwegianExample}
            norwegianExample={norwegianExample}
            setNote={setNote}
            note={note}
            setTags={setTags}
            tags={tags}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="border-[1.5px] border-bluePrimary px-14 transition-all duration-300 hover:shadow-[1px_4px_14.5px_0px_rgba(0,_0,_0,_0.25)] rounded-2xl text-bluePrimary font-bold text-lg py-3"
            onClick={handleSave}
          >
            {t("Update")}
          </button>
        </div>
        {showSuccessModal && (
          <SuccessModal
            handleClose={handleClose}
            message="Card updated successfully!"
          />
        )}
      </div>
    </div>
  );
};

export default Edit;
