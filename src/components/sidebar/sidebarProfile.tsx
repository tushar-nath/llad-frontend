import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { UserPlaceholder } from "../../svgs/userPlaceholder";

const SidebarProfile = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <button>
        {user?.profilePicture ? (
          <img
            src={user?.profilePicture}
            alt="profile"
            className="w-14 h-14 rounded-full"
          />
        ) : (
          <UserPlaceholder />
        )}
      </button>
    </div>
  );
};

export default SidebarProfile;
