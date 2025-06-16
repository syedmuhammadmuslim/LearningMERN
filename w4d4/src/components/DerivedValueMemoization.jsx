import React, { useMemo, useState } from "react";

const DerivedValueMemoization = (props) => {
  const [counter, setCounter] = useState(0);
  const [someState, setSomeState] = useState(3);
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    let total = 0;
    for (let i = 0; i < 100; i++) {
      total += num;
    }
    return total;
  };

  // // Without useMemo
  // const result = expensiveCalculation(someState);

  // With useMemo
  const result = useMemo(() => expensiveCalculation(someState), [someState]);

  return (
    <div className="container alert alert-danger mt-3">
      {console.log("This div has been re-rendered")}
      Expensive Result: {result}
      <button
        className="btn btn-primary my-3"
        onClick={() =>
          counter === 10
            ? setCounter((c) => (c + 1, setSomeState(c)))
            : setCounter((c) => c + 1)
        }
      >
        Button Value {counter}
      </button>
    </div>
  );
};

export default DerivedValueMemoization;
