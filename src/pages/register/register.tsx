import { useEffect, useState } from "react";
import CustomInput from "../../components/auth/customInput";
import { EmailIcon } from "../../svgs/emailIcon";
import { GoogleIcon } from "../../svgs/googleIcon";
import { KeyIcon } from "../../svgs/keyIcon";
import { useNavigate } from "react-router-dom";
import AuthHeader from "../../components/auth/authHeader";
import AuthButton from "../../components/auth/authButton";
import RegisterButton from "../../components/register/registerButton";

const Register = () => {
  const [norwegianLevel, setNorwegianLevel] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    // register endpoint here
    if (norwegianLevel) {
      console.log(norwegianLevel);
      navigate("/dashboard");
    }
  }, [norwegianLevel]);

  return (
    <div className="bg-white w-full h-[100vh]">
      <div className="flex flex-col gap-8 items-center justify-center h-full">
        <AuthHeader />
        <div className="w-[480px] h-[600px] bg-[#F9F9F9] relative rounded-[3rem] shadow-[8px_8px_22.7px_6px_rgba(0,_0,_0,_0.25)] py-6">
          <div className="flex flex-col items-center justify-center pt-4">
            <h1 className="text-gray-800 font-bold text-2xl px-20 text-center">
              What is your current Norwegian Level?
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center mt-4">
            <RegisterButton label="Beginner" setValue={setNorwegianLevel} />
            <RegisterButton label="Intermediate" setValue={setNorwegianLevel} />
            <RegisterButton label="Advanced" setValue={setNorwegianLevel} />
            <div className="flex flex-col items-center justify-center bottom-0 absolute mb-10">
              <div className="flex gap-1.5 items-center justify-center">
                <h2 className="text-gray-700 font-semibold text-sm">
                  My Native Language:
                </h2>
                <select
                  className="text-[#7573FF] placeholder-[#7573FF] outline-none text-sm font-semibold bg-transparent
                -500"
                >
                  <option value="English">English</option>
                  <option value="Norwegian">Norwegian</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
