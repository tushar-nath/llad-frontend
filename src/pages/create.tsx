import { useContext, useState } from "react";
import axios from "axios";
import CreateBackSide from "../components/create/createBackSide";
import CreateFrontSide from "../components/create/createFrontSide";
import Sidebar from "../components/sidebar/sidebar";
import { UserContext } from "../contexts/userContext";
import { SuccessModal } from "../components/common/SuccessModal";
import { Header } from "../components/common/Header";
import { useTranslation } from "react-i18next";
import { ErrorModal } from "../components/common/ErrorModal";
import { BeatLoader } from "react-spinners";

const Create = () => {
  const { t } = useTranslation();
  const [nativeWord, setNativeWord] = useState<string>("");
  const [norwegianWord, setNorwegianWord] = useState<string>("");
  const [nativeExample, setNativeExample] = useState<string>("");
  const [norwegianExample, setNorwegianExample] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);
  const [note, setNote] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const { user } = useContext(UserContext);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [saving, setSaving] = useState<boolean>(false);

  const handleSave = async () => {
    try {
      setSaving(true);
      if (
        !nativeWord ||
        !norwegianWord ||
        !nativeExample ||
        !norwegianExample
      ) {
        setSaving(false);
        setErrorMessage(t("Please fill all the fields"));
        setShowErrorModal(true);
        return;
      }
      await axios.post(
        `${process.env.REACT_APP_NODE_SERVER_BASE_URL}/api/v1/create-card`,
        {
          userId: user?._id,
          frontText: nativeWord,
          frontExample: nativeExample,
          backText: norwegianWord,
          backExample: norwegianExample,
          note,
          tags,
        }
      );
      setSaving(false);
      resetValues();
      setShowSuccessModal(true);
    } catch (error) {
      setSaving(false);
      setErrorMessage(t("Card creation failed"));
      setShowErrorModal(true);
      console.error(error);
    }
  };

  const resetValues = () => {
    setNativeWord("");
    setNorwegianWord("");
    setNativeExample("");
    setNorwegianExample("");
    setNote("");
    setTags([]);
  };

  return (
    <div className="bg-white w-full h-[100vh] flex gap-12 pl-5 pr-14 py-12">
      <Sidebar />
      <div className="flex flex-col gap-10 w-full">
        {/* Header */}
        <Header titleOne={t("Create a")} titleTwo={t("Flash Card")} />
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
            disabled={saving}
          >
            {saving ? (
              <span className="flex items-center justify-center px-2 py-1.5">
                <BeatLoader color="#7573FF" loading={true} size={12} />
              </span>
            ) : (
              t("Create")
            )}
          </button>
        </div>
        {showSuccessModal && (
          <SuccessModal
            handleClose={() => setShowSuccessModal(false)}
            message={t("Card created successfully")}
          />
        )}
        {showErrorModal && (
          <ErrorModal
            handleClose={() => setShowErrorModal(false)}
            message={errorMessage}
          />
        )}
      </div>
    </div>
  );
};

export default Create;
