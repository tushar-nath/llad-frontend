import { useContext, useEffect, useState } from "react";
import CustomInput from "../../components/auth/customInput";
import { EmailIcon } from "../../svgs/emailIcon";
import { GoogleIcon } from "../../svgs/googleIcon";
import { KeyIcon } from "../../svgs/keyIcon";
import { useNavigate } from "react-router-dom";
import AuthHeader from "../../components/auth/authHeader";
import AuthButton from "../../components/auth/authButton";
import axios from "axios";
import { UserContext } from "../../contexts/userContext";

const Login = () => {
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

  const handleAuth = async () => {
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

  const handleGoogleAuth = async () => {
    window.location.href = `${process.env.REACT_APP_NODE_SERVER_BASE_URL}/api/v1/auth/google`;
  };

  const handleResetPassword = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_NODE_SERVER_BASE_URL}/api/v1/forgot-password`,
        {
          email: email,
        }
      );
      alert("Password reset link sent to your email.");
    } catch (error: any) {
      console.error(error);
      if (error.response.status === 400) {
        alert("Invalid email, please create an account.");
        return;
      }
    }
  };

  return (
    <div className="bg-white w-full h-[100vh]">
      <div className="flex items-center justify-center h-full">
        <div className="w-[480px] h-[600px] bg-[#F9F9F9] relative rounded-[3rem] shadow-[8px_8px_22.7px_6px_rgba(0,_0,_0,_0.25)] py-6">
          <AuthHeader />
          <div className="flex flex-col items-center justify-center mt-10">
            <div className="w-full px-16">
              <CustomInput
                placeholder="Email Address"
                icon={<EmailIcon />}
                value={email}
                setValue={setEmail}
              />
              <CustomInput
                placeholder="Password"
                icon={<KeyIcon />}
                value={password}
                setValue={setPassword}
              />
              <div className="flex justify-end">
                <button
                  className="text-bluePrimary hover:text-[#8b89ff] font-medium text-sm"
                  onClick={handleResetPassword}
                >
                  Forgot Password?
                </button>
              </div>
            </div>
            <AuthButton label="Login" handleAuth={handleAuth} />
            <div className="flex flex-col items-center justify-center bottom-0 absolute mb-10">
              <div className="flex flex-col items-center justify-center mt-4">
                <p className="text-gray-700 text-xs mb-2">Or login using</p>
                <button onClick={handleGoogleAuth}>
                  <GoogleIcon />
                </button>
              </div>
              <div className="flex items-center justify-center mt-4">
                <p className="text-gray-700 text-sm">
                  Don't have an account?{" "}
                  <button
                    className="text-bluePrimary hover:text-[#8b89ff]"
                    onClick={() => navigate("/signup")}
                  >
                    Create one
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
