import React, { useRef } from "react";

const ScrollToDiv = () => {
  const divRef = useRef(null);

  return (
    <div className="container my-3">
      <button
        className="btn btn-primary"
        onClick={() => divRef.current.scrollIntoView({ behavior: "smooth" })}
      >
        Scroll to Box
      </button>
      <div style={{ height: "100vh" }}></div>
      <div ref={divRef} style={{ height: 100, background: "lightblue" }}>
        Target Box
      </div>
    </div>
  );
};
export default ScrollToDiv;
