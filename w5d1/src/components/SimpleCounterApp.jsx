import React, { useReducer } from "react";

const SimpleCounterApp = () => {
  const initCount = { counterState: 0 };

  const counterReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { counterState: state.counterState + 1 };
      case "DECREMENT":
        return { counterState: state.counterState - 1 };
      case "RESET":
        return { counterState: 0 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(counterReducer, initCount);

  return (
    <>
      <div className="my-3">
        <button
          className="btn btn-primary mx-2"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrement
        </button>
        {state.counterState}
        <button
          className="btn btn-primary mx-2"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increment
        </button>

        <button
          className="btn btn-primary mx-2"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default SimpleCounterApp;
