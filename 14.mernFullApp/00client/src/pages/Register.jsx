import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");

  const registerUser = (e) => {
    e.preventDefault();
    console.log("Submitted");
    fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => alert(JSON.stringify(json)));
  };
  return useSelector((state) => state.usersReducer.loggedIn) ? (
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
