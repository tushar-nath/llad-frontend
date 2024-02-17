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
import PasswordInput from "../../components/auth/passwordInput";
import { ErrorModal } from "../../components/common/ErrorModal";
import { SuccessModal } from "../../components/common/SuccessModal";

const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const { storeUser } = useContext(UserContext);
  const [strength, setStrength] = useState<number>(0);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/dashboard");
    }
  }, []);

  const validEmail = (email: string) => {
    const re =
      // eslint-disable-next-line no-useless-escape
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
  };

  const handleAuth = async () => {
    try {
      if (password !== confirmPassword) {
        setShowErrorModal(true);
        setErrorMessage("Passwords do not match, please check and try again.");
        return;
      }
      if (!validEmail(email)) {
        setShowErrorModal(true);
        setErrorMessage("Please enter a valid email address.");
        return;
      }
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
        setShowSuccessModal(true);
        return;
      }
    }
  };

  const handleGoogleAuth = async () => {
    window.location.href = `${process.env.REACT_APP_NODE_SERVER_BASE_URL}/api/v1/auth/google`;
  };

  return (
    <div className="bg-white w-full h-[100vh]">
      <div className="flex items-center justify-center h-full">
        <div className="w-[480px] h-[680px] bg-[#F9F9F9] relative rounded-[3rem] shadow-[8px_8px_22.7px_6px_rgba(0,_0,_0,_0.25)] py-6">
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
              <PasswordInput
                placeholder="Password"
                icon={<KeyIcon />}
                value={password}
                setValue={setPassword}
                strength={strength}
                setStrength={setStrength}
              />
              <PasswordInput
                placeholder="Confirm Password"
                icon={<KeyIcon />}
                value={confirmPassword}
                setValue={setConfirmPassword}
                strength={strength}
                setStrength={setStrength}
              />
              <div>
                <p className="text-gray-700 text-[9px] my-2 mx-2">
                  Password must be at least 10 characters long, contain at least
                  one uppercase letter, one lowercase letter, one number, and
                  one special character.
                </p>
              </div>
            </div>
            <AuthButton
              label="Create Account"
              handleAuth={handleAuth}
              disabled={strength < 3}
            />
            <div className="flex flex-col items-center justify-center bottom-0 absolute mb-10">
              <div className="flex flex-col items-center justify-center mt-4">
                <p className="text-gray-700 text-xs mb-2">Or register using</p>
                <button onClick={handleGoogleAuth}>
                  <GoogleIcon />
                </button>
              </div>
              <div className="flex items-center justify-center mt-4">
                <p className="text-gray-700 text-sm">
                  Already have an account?{" "}
                  <button
                    className="text-bluePrimary hover:text-[#8b89ff]"
                    onClick={() => navigate("/")}
                  >
                    Click here
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
        {showErrorModal && (
          <ErrorModal
            handleClose={() => setShowErrorModal(false)}
            message={errorMessage}
          />
        )}
        {showSuccessModal && (
          <SuccessModal
            handleClose={() => {
              setShowSuccessModal(false);
              navigate("/");
            }}
            message="User already exists, please login."
          />
        )}
      </div>
    </div>
  );
};

export default SignUp;
