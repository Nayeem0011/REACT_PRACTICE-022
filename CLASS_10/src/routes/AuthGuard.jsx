import React, { Fragment } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to={"/login"}/>;
  }
  return children;
};

export default AuthGuard;
