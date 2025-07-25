import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { addProfile } from "../stateManagement/profileSlice";
import { API_BASE_URL } from "../api/config";

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const { user, loading } = useSelector((state) => state.profileReducer);
  if (loading) return <div className="alert alert-info">Loading...</div>;
  const loggedIn = !!user._id;
  const registerUser = (e) => {
    e.preventDefault();
    fetch(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        age: age,
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
        navigate("/register", { replace: true });
      });
  };
  return loggedIn ? (
    <Navigate to="/" replace />
  ) : (
    <div className="d-flex justify-content-center">
      <form onSubmit={registerUser}>
        <div className="container mt-3 row">
          <div className="form-group col-6">
            <label className="ms-2" htmlFor="regFormName">
              Name
            </label>
            <input
              type="text"
              className="form-control mb-2"
              id="regFormName"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group col-6">
            <label className="ms-2" htmlFor="regFormAge">
              Age
            </label>
            <input
              type="number"
              className="form-control mb-2"
              id="regFormAge"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
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
