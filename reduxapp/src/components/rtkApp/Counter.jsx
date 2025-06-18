import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className="btn btn-danger me-2"
        onClick={() => dispatch(decrement())}
      >
        Decrement by 3
      </button>
      {count}
      <button
        className="btn btn-success ms-2"
        onClick={() => dispatch(increment(2))}
      >
        Increment by 3
      </button>
    </div>
  );
};

export default Counter;
