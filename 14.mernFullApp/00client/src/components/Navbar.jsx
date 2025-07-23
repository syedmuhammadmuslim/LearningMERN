import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addProfile, fetchProfile } from "../stateManagement/profileSlice";
import { API_BASE_URL } from "../api/config.js";

export const Navbar = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const { user, loading } = useSelector((store) => store.profileReducer);
  const loggedIn = !!user._id;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchProfile({ signal: controller.signal }));
    return () => controller.abort();
  }, [dispatch]);

  if (loading) {
    return <div className="alert alert-info">Loading...</div>;
  }

  const handleLogout = (e) => {
    e.preventDefault();
    setIsLoggingOut(true);
    fetch(`${API_BASE_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Logout failed");
        }
        dispatch(addProfile({}));
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      })
      .finally(() => setIsLoggingOut(false));
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand ms-2" to="/">
          HSMM Stack Overflow
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav me-2">
            {loggedIn ? (
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};
