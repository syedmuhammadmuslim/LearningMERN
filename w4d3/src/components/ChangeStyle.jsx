import React, { useRef } from "react";

const ChangeStyle = () => {
  const paraRef = useRef(null);

  const changeColor = () => {
    paraRef.current.style.color = "red";
  };
  // TASK - CREATE A SIMPLE BUTTON AND WHEN YOU CLICK ON THAT BUTTON, THE CLASS OF THAT BUTTON SHOULD TOGGLE BETWEEN "" AND "btn btn-primary"
  return (
    <div className="container my-3">
      <p ref={paraRef}>This text will change color.</p>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};
export default ChangeStyle;
