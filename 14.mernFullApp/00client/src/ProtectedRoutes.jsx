import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const { user, loading, error } = useSelector((store) => store.profileReducer);
  if (loading) return <div className="alert alert-info">Loading...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;
  return user._id ? (console.log("here"), (<Outlet />)) : <Navigate to="/" />;
};
