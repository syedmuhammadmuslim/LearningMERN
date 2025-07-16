import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { addProfile } from "../stateManagement/profileSlice";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loggedIn = !!useSelector((state) => state.profileReducer.user._id);

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch(addProfile(json.user));
        navigate("/");
      });
  };
  return loggedIn ? (
    <Navigate to="/" replace />
  ) : (
    <div className="d-flex justify-content-center">
      <form onSubmit={handleLogin}>
        <div className="container mt-3 row">
          <div className="form-group col-6">
            <label className="ms-2" htmlFor="regFormEmail">
              Email address
            </label>
            <input
              type="email"
              className="form-control mb-2"
              id="regFormEmail"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group col-6">
            <label className="ms-2" htmlFor="regFormPassword">
              Password
            </label>
            <input
              type="password"
              className="form-control mb-2"
              id="regFormPassword"
              placeholder="Enter your strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="col-12 d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
