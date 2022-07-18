import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AppContext from "./Context/Context";

export default function RequireAuth({ children }) {
  const auth = useContext(AppContext);

  if (!auth.isLogIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
