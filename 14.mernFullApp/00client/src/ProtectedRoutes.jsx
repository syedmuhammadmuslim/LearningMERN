import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const loggedIn = useSelector((state) => state.usersReducer.loggedIn);

  return loggedIn ? <Outlet /> : <Navigate to="/" replace />;
};
