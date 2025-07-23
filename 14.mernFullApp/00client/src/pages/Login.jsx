import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { addProfile } from "../stateManagement/profileSlice";
import { API_BASE_URL } from "../api/config";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, loading } = useSelector((state) => state.profileReducer);
  if (loading) return <div className="alert alert-info">Loading...</div>;
  const loggedIn = !!user._id;
  const handleLogin = (e) => {
    e.preventDefault();
    fetch(`${API_BASE_URL}/auth/login`, {
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
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Login failed: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        dispatch(addProfile(json.user));
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        navigate("/login", { replace: true });
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
