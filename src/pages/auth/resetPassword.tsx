import { useContext, useEffect, useState } from "react";
import CustomInput from "../../components/auth/customInput";
import { GoogleIcon } from "../../svgs/googleIcon";
import { KeyIcon } from "../../svgs/keyIcon";
import { useNavigate } from "react-router-dom";
import AuthButton from "../../components/auth/authButton";
import axios from "axios";
import { UserContext } from "../../contexts/userContext";

const ResetPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const { storeUser } = useContext(UserContext);

  useEffect(() => {
    const url = window.location.href;
    const urlParams = new URL(url);

    console.log(url);
    const userData = urlParams.searchParams.get("user");

    console.log(userData);

    if (userData) {
      const user = JSON.parse(userData);
      storeUser(user);
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, []);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/dashboard");
    }
  }, []);

  const handleReset = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_NODE_SERVER_BASE_URL}/api/v1/login`,
        {
          email: email,
          password: password,
        }
      );
      localStorage.setItem("user", JSON.stringify(res.data.user));
      storeUser(res.data.user);
      navigate("/dashboard");
    } catch (error: any) {
      console.error(error);
      if (error.response.status === 400) {
        alert("Invalid credentials, please create an account.");
        return;
      }
    }
  };

  return (
    <div className="bg-white w-full h-[100vh]">
      <div className="flex items-center justify-center h-full">
        <div className="w-[480px] h-[600px] bg-[#F9F9F9] flex flex-col justify-center  items-center relative rounded-[3rem] shadow-[8px_8px_22.7px_6px_rgba(0,_0,_0,_0.25)] py-6">
          <h2 className="text-3xl font-bold text-bluePrimary text-center">
            Reset Password
          </h2>
          <div className="flex flex-col items-center justify-center mt-10">
            <div className="flex flex-col items-center justify-center">
              <CustomInput
                placeholder="New Password"
                icon={<KeyIcon />}
                value={password}
                setValue={setPassword}
              />
              <CustomInput
                placeholder="Confirm Password"
                icon={<KeyIcon />}
                value={password}
                setValue={setPassword}
              />
            </div>
          </div>
          <AuthButton label="Reset" handleAuth={handleReset} />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
