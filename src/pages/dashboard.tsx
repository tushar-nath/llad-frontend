import { useNavigate } from "react-router-dom";
import { LogoutIcon } from "../svgs/logoutIcon";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white w-full h-[100vh] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-1.5 items-center justify-center">
          <h1 className="text-2xl font-bold text-gray-900 uppercase">
            Welcome to
          </h1>
          <p className="text-[#7573FF] font-bold text-2xl uppercase">
            Learning App
          </p>
        </div>
      </div>
      <button
        className="absolute bottom-4 left-4"
        onClick={() => {
          localStorage.removeItem("user");
          navigate("/");
        }}
      >
        <LogoutIcon />
      </button>
    </div>
  );
};
export default Dashboard;
