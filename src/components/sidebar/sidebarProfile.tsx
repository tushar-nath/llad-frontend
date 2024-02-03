import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

const SidebarProfile = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <button>
        <img
          src={
            user?.profilePicture ||
            "https://media.licdn.com/dms/image/C4D03AQF2PvP5Mo9wjw/profile-displayphoto-shrink_800_800/0/1659554322605?e=1712188800&v=beta&t=QmQQari0XT7-2bCDzzHHfKHQumxxVzAQqNgXb8fujro"
          }
          alt="profile"
          className="w-16 h-16 rounded-full"
        />
      </button>
    </div>
  );
};

export default SidebarProfile;
