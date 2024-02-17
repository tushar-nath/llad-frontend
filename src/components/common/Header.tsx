import { LanguageIcon } from "../../svgs/languageIcon";
import { NotificationIcon } from "../../svgs/notificationIcon";
import { Tooltip } from "react-tooltip";
import { useEffect, useState } from "react";
import i18n from "../../i18n";

interface HeaderProps {
  titleOne: string;
  titleTwo: string;
}

export const Header = ({ titleOne, titleTwo }: HeaderProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "no" : "en";
    i18n.changeLanguage(newLanguage);
  };

  useEffect(() => {
    // Storing the selected language in local storage to persist the language selection
    const language = localStorage.getItem("language");
    if (language) {
      setSelectedLanguage(language);
      i18n.changeLanguage(language === "english" ? "en" : "no");
    }
  }, []);

  return (
    <div className="flex justify-between w-full">
      <div className="flex flex-row gap-1.5 py-2">
        <h1 className="text-3xl font-bold text-gray-900">{titleOne}</h1>
        <p className="text-bluePrimary font-bold text-3xl">{titleTwo}</p>
      </div>
      <div className="flex items-center gap-4">
        <button
          data-tooltip-content="Coming soon"
          data-tooltip-id="coming-soon-tooltip"
        >
          <NotificationIcon />
        </button>
        <div className="flex flex-row gap-4">
          <LanguageIcon />
          <select
            className="w-28 outline-none text-bluePrimary font-semibold"
            value={selectedLanguage}
            onChange={(e) => {
              setSelectedLanguage(e.target.value);
              localStorage.setItem("language", e.target.value);
              toggleLanguage();
            }}
          >
            <option value="english">English</option>
            <option value="norwegian">Norwegian</option>
          </select>
        </div>
      </div>
      <Tooltip
        className="!max-w-[32rem] !z-[100] !bg-grayBg !text-bluePrimary !font-medium !border-borderColor !rounded-lg !shadow-md"
        id="coming-soon-tooltip"
        variant="light"
        opacity={1}
      />
    </div>
  );
};
