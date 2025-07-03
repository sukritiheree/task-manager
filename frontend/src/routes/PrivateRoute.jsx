import React from "react";
import { Outlet } from "react-router-dom";

const PrivateRoute = ({ allowedRoles }) => {
  // Just for now — no protection logic
  return <Outlet />;
};

export default PrivateRoute;
