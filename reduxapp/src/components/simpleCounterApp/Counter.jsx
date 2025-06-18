import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  //   const [count, setCount] = useState(0);
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className="btn btn-danger me-2"
        onClick={() => dispatch({ type: "decrement", payload: 3 })}
      >
        Decrement by 3
      </button>
      {count}
      <button
        className="btn btn-success ms-2"
        onClick={() => dispatch({ type: "increment", payload: 3 })}
      >
        Increment by 3
      </button>
    </div>
  );
};

export default Counter;
