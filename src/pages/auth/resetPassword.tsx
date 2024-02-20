import { useContext, useEffect, useState } from "react";
import CustomInput from "../../components/auth/customInput";
import { KeyIcon } from "../../svgs/keyIcon";
import { useNavigate } from "react-router-dom";
import AuthButton from "../../components/auth/authButton";
import axios from "axios";
import { UserContext } from "../../contexts/userContext";
import { ErrorModal } from "../../components/common/ErrorModal";
import { SuccessModal } from "../../components/common/SuccessModal";

const ResetPassword = () => {
  const [password, setPassword] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const { storeUser } = useContext(UserContext);

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
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/dashboard");
    }
  }, []);

  useEffect(() => {
    const url = window.location.href;
    const token = url.split("?")[1];
    setToken(token);
  }, []);

  const handleReset = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_NODE_SERVER_BASE_URL}/api/v1/reset-password`,
        {
          token: token,
          newPassword: password,
        }
      );
      setShowSuccessModal(true);
    } catch (error: any) {
      setErrorMessage(error.response.data.error);
      setShowErrorModal(true);
    }
  };

  return (
    <div className="bg-white w-full h-[100vh]">
      <div className="flex items-center justify-center h-full">
        <div className="w-[480px] h-[600px] bg-[#F9F9F9] flex flex-col justify-center items-center relative rounded-[3rem] shadow-[8px_8px_22.7px_6px_rgba(0,_0,_0,_0.25)] py-6">
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
      {showErrorModal && (
        <ErrorModal message={errorMessage} handleClose={() => navigate("/")} />
      )}
      {showSuccessModal && (
        <SuccessModal
          message="Password reset successfully, proceed with login"
          handleClose={() => navigate("/")}
        />
      )}
    </div>
  );
};

export default ResetPassword;
