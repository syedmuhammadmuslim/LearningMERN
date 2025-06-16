import React, { useRef, useState } from "react";

const ToggleVisibility = () => {
  const inputRef = useRef(null);
  const [inputData, setInputData] = useState("");

  const toggle = (e) => {
    const box = inputRef.current;
    box.style.display = box.style.display === "none" ? "block" : "none";
    e.target.className =
      e.target.className === "btn btn-primary my-3"
        ? "btn btn-success my-3"
        : "btn btn-primary my-3";
  };

  return (
    <div className="container my-3">
      <button className="btn btn-primary my-3" onClick={toggle}>
        Toggle Box
      </button>
      <input
        ref={inputRef}
        className="form-control my-3"
        placeholder="This input field will be hidden"
        value={inputData}
        onChange={(e) => {
          setInputData(e.target.value);
        }}
      />
    </div>
  );
};
export default ToggleVisibility;
