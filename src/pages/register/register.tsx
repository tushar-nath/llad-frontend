import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthHeader from "../../components/auth/authHeader";
import RegisterButton from "../../components/register/registerButton";
import { UserContext } from "../../contexts/userContext";
import axios from "axios";

const Register = () => {
  const [norwegianLevel, setNorwegianLevel] = useState<string>("");
  const [nativeLanguage, setNativeLanguage] = useState<string>("english");
  const navigate = useNavigate();
  const { user, storeUser } = useContext(UserContext);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user && JSON.parse(user).currentNorwegianSkill) {
      navigate("/dashboard");
    }
  }, []);

  const updateAccount = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_NODE_SERVER_BASE_URL}/api/v1/updateNorwegianLevel`,
        {
          userId: user?._id,
          currentNorwegianSkill: norwegianLevel,
          nativeLanguage: nativeLanguage,
        }
      );
      storeUser(res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));
    } catch (error: any) {
      console.error(error);
    }
  };

  useEffect(() => {
    const url = window.location.href;
    const urlParams = new URL(url);
    const userData = urlParams.searchParams.get("user");

    if (userData) {
      const user = JSON.parse(userData);
      storeUser(user);
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, []);

  useEffect(() => {
    if (norwegianLevel && user) {
      updateAccount();
      navigate("/dashboard");
    }
  }, [norwegianLevel, user]);

  return (
    <div className="bg-white w-full h-[100vh]">
      <div className="flex flex-col gap-8 items-center justify-center h-full">
        <AuthHeader />
        <div className="flex flex-col xl:w-[480px] w-[380px] xl:h-[600px] h-[460px] bg-[#F9F9F9] rounded-[3rem] shadow-[8px_8px_22.7px_6px_rgba(0,_0,_0,_0.25)] py-6">
          <div className="flex flex-col items-center justify-center pt-4">
            <h1 className="text-gray-800 font-bold xl:text-2xl text-xl px-20 text-center">
              What is your current Norwegian Level?
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center mt-4">
            <RegisterButton label="Beginner" setValue={setNorwegianLevel} />
            <RegisterButton label="Intermediate" setValue={setNorwegianLevel} />
            <RegisterButton label="Advanced" setValue={setNorwegianLevel} />
          </div>
          <div className="flex flex-col items-center justify-center mt-auto xl:mb-10 mb-2">
            <div className="flex gap-1.5 items-center justify-center">
              <h2 className="text-gray-700 font-semibold text-sm">
                My Native Language:
              </h2>
              <select
                className="text-bluePrimary placeholder-bluePrimary outline-none text-sm font-semibold bg-transparent
                -500"
                onChange={(e) => setNativeLanguage(e.target.value)}
              >
                <option value="english">English</option>
                <option value="norwegian">Norwegian</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
