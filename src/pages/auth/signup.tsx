import { useContext, useEffect, useState } from "react";
import CustomInput from "../../components/auth/customInput";
import { EmailIcon } from "../../svgs/emailIcon";
import { GoogleIcon } from "../../svgs/googleIcon";
import { KeyIcon } from "../../svgs/keyIcon";
import { useNavigate } from "react-router-dom";
import { ProfileIcon } from "../../svgs/profileIcon";
import AuthHeader from "../../components/auth/authHeader";
import AuthButton from "../../components/auth/authButton";
import axios from "axios";
import { UserContext } from "../../contexts/userContext";

const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const { storeUser } = useContext(UserContext);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/dashboard");
    }
  }, []);

  const handleAuth = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_NODE_SERVER_BASE_URL}/api/v1/signup`,
        {
          name: fullName,
          email: email,
          password: password,
        },
      );
      localStorage.setItem("user", JSON.stringify(res.data.user));
      storeUser(res.data.user);
      navigate("/register");
    } catch (error: any) {
      console.error(error);
      if (error.response.status === 400) {
        alert("Account already exists, please login.");
        return;
      }
    }
  };

  return (
    <div className="bg-white w-full h-[100vh]">
      <div className="flex items-center justify-center h-full">
        <div className="w-[480px] h-[650px] bg-[#F9F9F9] relative rounded-[3rem] shadow-[8px_8px_22.7px_6px_rgba(0,_0,_0,_0.25)] py-6">
          <AuthHeader />
          <div className="flex flex-col items-center justify-center mt-10">
            <div className="w-full px-16">
              <CustomInput
                placeholder="Full Name"
                icon={<ProfileIcon />}
                value={fullName}
                setValue={setFullName}
              />
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
              <CustomInput
                placeholder="Confirm Password"
                icon={<KeyIcon />}
                value={password}
                setValue={setPassword}
              />
            </div>
            <AuthButton label="Create Account" handleAuth={handleAuth} />
            <div className="flex flex-col items-center justify-center bottom-0 absolute mb-10">
              <div className="flex flex-col items-center justify-center mt-4">
                <p className="text-gray-700 text-xs mb-2">Or register using</p>
                <button>
                  <GoogleIcon />
                </button>
              </div>
              <div className="flex items-center justify-center mt-4">
                <p className="text-gray-700 text-sm">
                  Already have an account?{" "}
                  <button
                    className="text-[#7573FF] hover:text-[#8b89ff]"
                    onClick={() => navigate("/")}
                  >
                    Click here
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

export default SignUp;
