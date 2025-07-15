import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../stateManagement/usersSlice";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((store) => store.usersReducer);
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("userToken");
    dispatch(logout());
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
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
          {loggedIn ? (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" onClick={handleLogout}>
                  Logout
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav">
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
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};
