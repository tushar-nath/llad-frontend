import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../contexts/userContext";
import { UserPlaceholder } from "../../svgs/userPlaceholder";
import { Tooltip } from "react-tooltip";
import { InfoInput } from "./InfoInput";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export const ProfileInfo = () => {
  const { t } = useTranslation();
  const { user, storeUser } = useContext(UserContext) as any;
  const [userPhoneNo, setUserPhoneNo] = useState<string>(
    user?.phoneNumber || ""
  );
  const [userName, setUserName] = useState<string>(user?.name || "");
  const [userEmail, setUserEmail] = useState<string>(user?.email || "");
  const [userAbout, setUserAbout] = useState<string>(user?.about || "");
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [userKYCStatus, setUserKYCStatus] = useState<string>(
    user?.kycStatus || ""
  );
  const [userKYCDetails, setUserKYCDetails] = useState<string>(
    user?.kycDetails || ""
  );
  const [userProfilePicture, setUserProfilePicture] = useState<string>(
    user?.profilePicture || ""
  );

  const handleUpdate = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_NODE_SERVER_BASE_URL}/api/v1/update-account-details`,
        {
          userId: user?._id,
          name: userName,
          email: userEmail,
          phoneNumber: userPhoneNo,
          about: userAbout,
        }
      );
      toast.success("Profile updated successfully");
      storeUser(res.data.user);
      setIsEditable(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChoosePicture = async () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.click();
    input.onchange = async () => {
      const file = input.files?.[0];
      if (file) {
        if (file.size > 4 * 1024 * 1024) {
          toast.error("File size is too large, please choose a smaller file");
          return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async () => {
          const base64Image = reader.result;
          await updateUserProfilePicture(base64Image);
        };
      }
    };
  };

  const updateUserProfilePicture = async (base64Image: any) => {
    try {
      const res = await axios.patch(
        `${process.env.REACT_APP_NODE_SERVER_BASE_URL}/api/v1/update-profile-picture`,
        {
          userId: user?._id,
          profilePicture: base64Image,
        }
      );
      toast.success("Profile picture updated successfully");
      storeUser(res.data.user);
    } catch (error) {
      console.log(error);
    }
  };

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
          <button
            className="text-gray-700 font-bold text-[10px] bg-[#F0EFFA] py-1.5 px-4 rounded-3xl"
            onClick={handleChoosePicture}
          >
            Change Picture
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3 border border-gray-200 w-full px-60 py-3 rounded-lg shadow-md">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold text-gray-600">
            {t("Your Name")}
          </p>
          <InfoInput
            oldValue={user?.name}
            value={userName}
            setValue={setUserName}
            handleUpdate={handleUpdate}
            placeholder="Add your name"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold text-gray-600">{t("Email")}</p>
          <InfoInput
            oldValue={user?.email}
            type="email"
            value={userEmail}
            setValue={setUserEmail}
            handleUpdate={handleUpdate}
            placeholder="Add your email"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold text-gray-600">{t("Phone")}</p>
          <InfoInput
            oldValue={user?.phoneNumber}
            value={userPhoneNo}
            setValue={setUserPhoneNo}
            handleUpdate={handleUpdate}
            placeholder="Add phone number"
          />
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
          <button
            className="text-gray-700 font-bold text-[10px] bg-[#F0EFFA] py-1.5 px-4 rounded-3xl"
            onClick={() => {
              if (isEditable && userAbout !== user?.about) {
                handleUpdate();
              }
              setIsEditable(!isEditable);
            }}
          >
            {isEditable ? "Save" : "Edit"}
          </button>
        </div>
        <textarea
          value={userAbout}
          onChange={(e) => setUserAbout(e.target.value)}
          className={`w-full h-24 text-sm font-semibold text-gray-900 bg-white outline-none resize-none ${
            isEditable ? "border-[1.5px] rounded-lg p-2 border-bluePrimary" : ""
          } ${!isEditable ? "cursor-default" : ""}`}
          placeholder="Add a short bio about yourself"
          disabled={!isEditable}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (isEditable && userAbout !== user?.about) {
                handleUpdate();
              }
              setIsEditable(!isEditable);
            }
          }}
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
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
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
