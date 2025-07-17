import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const { user, loading } = useSelector((store) => store.profileReducer);
  if (loading) return <div className="alert alert-info">Loading...</div>;
  return user._id ? <Outlet /> : <Navigate to="/" />;
};
