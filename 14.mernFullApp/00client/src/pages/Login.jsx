import React, { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    console.log("Submitted");
    fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
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
        localStorage.setItem("userToken", json.token);
        console.log(localStorage.getItem("userToken"));
      });
  };
  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={login}>
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
