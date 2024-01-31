import { useContext, useEffect } from "react";
import { UserContext } from "./userContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { user } = useContext(UserContext);

  const checkShouldRender = () => {
    return user ? <Outlet /> : <Navigate to="/" />;
  };

  useEffect(() => {
    checkShouldRender();
  }, [user]);

  return checkShouldRender();
};

export default PrivateRoute;
