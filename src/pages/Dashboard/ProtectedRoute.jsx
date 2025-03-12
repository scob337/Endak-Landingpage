import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = () => {
  const token = Cookies.get("authToken");
  if (token =="") return <Navigate to="/login" replace />;
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
