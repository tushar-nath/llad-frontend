import { useState } from "react";
import CustomInput from "../../components/auth/customInput";
import { EmailIcon } from "../../svgs/emailIcon";
import { GoogleIcon } from "../../svgs/googleIcon";
import { KeyIcon } from "../../svgs/keyIcon";
import { useNavigate } from "react-router-dom";
import AuthHeader from "../../components/auth/authHeader";
import AuthButton from "../../components/auth/authButton";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleAuth = () => {
    navigate("/dashboard");
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
                <button className="text-[#7573FF] hover:text-[#8b89ff] font-medium text-sm">
                  Forgot Password?
                </button>
              </div>
            </div>
            <AuthButton label="Login" handleAuth={handleAuth} />
            <div className="flex flex-col items-center justify-center bottom-0 absolute mb-10">
              <div className="flex flex-col items-center justify-center mt-4">
                <p className="text-gray-700 text-xs mb-2">Or login using</p>
                <button>
                  <GoogleIcon />
                </button>
              </div>
              <div className="flex items-center justify-center mt-4">
                <p className="text-gray-700 text-sm">
                  Don't have an account?{" "}
                  <button
                    className="text-[#7573FF] hover:text-[#8b89ff]"
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
