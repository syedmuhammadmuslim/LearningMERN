import React, { useRef } from "react";

const ScrollToDiv2 = () => {
  const bt1ref = useRef(null);
  const bt2ref = useRef(null);

  return (
    <div className="container my-3">
      <button
        ref={bt1ref}
        className="btn btn-primary"
        onClick={() => bt2ref.current.scrollIntoView({ behavior: "instant" })}
      >
        Scroll to Button 2
      </button>
      <div style={{ height: "1000vh" }}></div>
      <button
        ref={bt2ref}
        className="btn btn-primary"
        onClick={() => bt1ref.current.scrollIntoView({ behavior: "smooth" })}
      >
        Scroll to Button 1
      </button>
    </div>
  );
};
export default ScrollToDiv2;
