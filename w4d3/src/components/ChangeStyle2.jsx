import React, { useRef } from "react";

const ChangeStyle2 = () => {
  const btnRef = useRef(null);

  // TASK - CREATE A SIMPLE BUTTON AND WHEN YOU CLICK ON THAT BUTTON, THE CLASS OF THAT BUTTON SHOULD TOGGLE BETWEEN "" AND "btn btn-primary"
  return (
    <div className="container my-3">
      <button
        ref={btnRef}
        className="btn btn-primary btn-lg"
        onClick={() =>
          btnRef.current.className === "btn btn-primary btn-lg"
            ? (btnRef.current.className = "btn btn-success btn-lg")
            : (btnRef.current.className = "btn btn-primary btn-lg")
        }
      >
        Change Color
      </button>
    </div>
  );
};
export default ChangeStyle2;
