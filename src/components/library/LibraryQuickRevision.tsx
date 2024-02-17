import { useTranslation } from "react-i18next";
import { ResetIcon } from "../../svgs/resetIcon";

export const LibraryQuickRevision = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row items-center gap-4 bg-white px-4 py-3 border border-gray-300 hover:border-gray-400 transition-colors duration-300 rounded-[3rem] shadow-lg">
      <ResetIcon />
      <select
        className="rounded-lg text-lg focus:outline-none focus:border-bluePrimary w-44 text-gray-900 font-medium"
        name="filters"
        id="filters"
      >
        <option value="all">{t("Quick Revision")}</option>
        <option value="today">{t("Today")}</option>
        <option value="last-week">{t("Last Week")}</option>
        <option value="last-15-days">{t("Last 15 Days")}</option>
        <option value="last-30-days">{t("Last 30 Days")}</option>
      </select>
    </div>
  );
};
