import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../contexts/userContext";
import { UserPlaceholder } from "../../svgs/userPlaceholder";
import { Tooltip } from "react-tooltip";

export const ProfileInfo = () => {
  const { t } = useTranslation();
  const { user } = useContext(UserContext) as any;
  const [userPhoneNo, setUserPhoneNo] = useState<string>(user?.phone || "");
  const [userName, setUserName] = useState<string>(user?.name || "");
  const [userEmail, setUserEmail] = useState<string>(user?.email || "");
  const [userAbout, setUserAbout] = useState<string>(user?.about || "");
  const [userKYCStatus, setUserKYCStatus] = useState<string>(
    user?.kycStatus || ""
  );
  const [userKYCDetails, setUserKYCDetails] = useState<string>(
    user?.kycDetails || ""
  );
  const [userProfilePicture, setUserProfilePicture] = useState<string>(
    user?.profilePicture || ""
  );

  return (
    <div className="flex flex-col gap-4 items-center justify-center w-[900px]">
      <div className="flex items-center justify-between w-full px-60">
        {user?.profilePicture ? (
          <div>
            <img
              src={user?.profilePicture}
              alt="profile"
              className="w-20 h-20 rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
        ) : (
          <UserPlaceholder />
        )}
        <div>
          <button className="text-gray-700 font-bold text-[10px] bg-[#F0EFFA] py-1.5 px-4 rounded-3xl">
            Change Picture
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3 border border-gray-200 w-full px-60 py-3 rounded-lg shadow-md">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold text-gray-600">
            {t("Your Name")}
          </p>
          <div className="flex gap-4 justify-between items-center">
            <input
              type="text"
              placeholder="Add Name"
              value={userName}
              className="text-sm font-semibold text-gray-900 outline-none"
              onChange={(e) => setUserName(e.target.value)}
            />
            <button className="text-gray-700 font-bold text-[10px] bg-[#F0EFFA] py-1.5 px-4 rounded-3xl">
              Edit
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold text-gray-600">{t("Email")}</p>
          <div className="flex gap-4 justify-between items-center">
            <input
              type="text"
              placeholder="Add Email"
              value={userEmail}
              className="text-sm font-semibold text-gray-900 outline-none"
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <button className="text-gray-700 font-bold text-[10px] bg-[#F0EFFA] py-1.5 px-4 rounded-3xl">
              Edit
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold text-gray-600">{t("Phone")}</p>
          <div className="flex gap-4 justify-between items-center">
            <input
              type="text"
              placeholder="Add Phone Number"
              value={userPhoneNo}
              className="text-sm font-semibold text-gray-900 outline-none"
              onChange={(e) => setUserPhoneNo(e.target.value)}
            />
            <button className="text-gray-700 font-bold text-[10px] bg-[#F0EFFA] py-1.5 px-4 rounded-3xl">
              Edit
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 border border-gray-200 w-full py-3 px-60 rounded-lg shadow-md">
        <div className="flex gap-4 justify-between items-center">
          <div className="flex gap-2">
            <h2 className="text-sm font-semibold text-gray-900">
              {t("About")}
            </h2>
            <h2 className="text-sm font-semibold text-bluePrimary">
              {user?.name}
            </h2>
          </div>
          <button className="text-gray-700 font-bold text-[10px] bg-[#F0EFFA] py-1.5 px-4 rounded-3xl">
            Edit
          </button>
        </div>
        <textarea
          value={userAbout}
          onChange={(e) => setUserAbout(e.target.value)}
          className="w-full h-24 text-sm font-semibold text-gray-900 outline-none resize-none"
          placeholder="Add a short bio about yourself"
        ></textarea>
      </div>
      <div className="flex flex-col gap-2 border border-gray-200 w-full py-3 px-60 rounded-lg shadow-md">
        <h2 className="text-sm font-semibold text-gray-900">{t("Legal")}</h2>
        <div className="flex justify-between items-center">
          <h2 className="text-sm font-semibold text-gray-900">
            {t("KYC Status")}
          </h2>
          <button
            className="text-[10px] font-semibold text-gray-900 bg-[#99FDD2] px-4 py-1.5 rounded-3xl"
            data-tooltip-content="Coming soon"
            data-tooltip-id="coming-soon-tooltip"
          >
            {t("Verified")}
          </button>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-sm font-semibold text-gray-900">
            {t("KYC Details")}
          </h2>
          <button
            className="text-gray-700 font-bold text-[10px] bg-[#F0EFFA] py-1.5 px-4 rounded-3xl"
            data-tooltip-content="Coming soon"
            data-tooltip-id="coming-soon-tooltip"
          >
            {t("View")}
          </button>
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
