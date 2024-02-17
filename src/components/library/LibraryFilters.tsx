import { useNavigate } from "react-router-dom";
import { PlusIcon } from "../../svgs/plusIcon";
import { useTranslation } from "react-i18next";

export const LibraryFilters = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <button
      className="flex flex-row items-center gap-4 bg-white px-4 py-3 border border-gray-300 hover:border-gray-400 transition-colors duration-300 rounded-[3rem] shadow-lg text-lg text-gray-900 font-medium"
      onClick={() => navigate("/create")}
    >
      <PlusIcon />
      {t("Add New")}
    </button>
  );
};
