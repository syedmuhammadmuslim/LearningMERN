import React, { useCallback, useState } from "react";

const FunctionMemoization = () => {
  const [count, setCount] = useState(0);

  // // Without useCallback
  // const increment = () => setCount((c) => c + 1);

  // With useCallback
  const increment = useCallback(() => setCount((c) => c + 1), []);

  return (
    <div className="container mt-5">
      <h3>Without useCallback</h3>
      <Button handleClick={increment} />
      <div className="mt-3">Count: {count}</div>
    </div>
  );
};

export default FunctionMemoization;

const Button = React.memo(({ handleClick }) => {
  console.log(`Rendering Button: Increment`);
  return (
    <button className="btn btn-outline-primary me-2" onClick={handleClick}>
      Increment
    </button>
  );
});

// const Button = ({ handleClick, label }) => {
//   console.log(`Rendering Button: ${label}`);
//   return (
//     <button className="btn btn-outline-primary me-2" onClick={handleClick}>
//       {label}
//     </button>
//   );
// };
