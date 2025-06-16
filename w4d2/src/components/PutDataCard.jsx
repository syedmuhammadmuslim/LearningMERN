import React, { useState } from "react";

const PutDataCard = () => {
  const [userID, setUserID] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  //   const [id, setId] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    // Fetch API - PUT Request
    // https://tinyurl.com/bd48dtm2
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: JSON.stringify({
        userId: userID,
        title: title,
        body: body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      //   .then((response)=>alert(response)) this wont work
      .then((response) => response.json())
      .then((json) => alert(JSON.stringify(json)));
  };
  return (
    <div className="container my-3 py-3 border border-dark">
      <h1>Put Data Example</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userID" className="form-label">
            UserID
          </label>
          <input
            type="text"
            className="form-control"
            id="userID"
            value={userID}
            onChange={(e) => {
              setUserID(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Body
          </label>
          <input
            type="text"
            className="form-control"
            id="body"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PutDataCard;
