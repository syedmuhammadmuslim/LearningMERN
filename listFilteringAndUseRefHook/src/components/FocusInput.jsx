import React, { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);

  return (
    <div className="container my-3">
      <input
        className="form-control my-3"
        ref={inputRef}
        placeholder="Click the button to focus me"
      />
      <button
        className="btn btn-primary my-3"
        onClick={() => inputRef.current.focus()}
      >
        Focus Input
      </button>
    </div>
  );
};
export default FocusInput;
