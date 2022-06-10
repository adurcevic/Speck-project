import React from "react";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const ProtectedRoutes = ({
  children,
  redirectPath,
  isProfile = false,
  isRegisterSignIn = false,
}) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  if (isLoggedIn && isRegisterSignIn) {
    return <Navigate to={redirectPath} replace />;
  } else if (!isLoggedIn && isProfile) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoutes;
