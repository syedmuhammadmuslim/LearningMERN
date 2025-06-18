import React from "react";
import { useState } from "react";

const W4D4 = () => {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);
  return (
    <div className="container mt-5">
      {console.log("This div has been rendered again")}
      <Component count={count} />
      <button
        className="btn btn-primary me-2"
        onClick={() => setCount(count + 1)}
      >
        Increment Count
      </button>
      <button className="btn btn-primary" onClick={() => setOther(other + 1)}>
        Change Other
      </button>
    </div>
  );
};

// const Component = ({ count }) => {
//   console.log("Rendering Component 1");
//   return (
//     <>
//       <h1>Without React.memo</h1>
//       <div className="alert alert-info">Count from parent: {count}</div>
//     </>
//   );
// };
// // React.memo(() => Component({ count })); This wont work. You have to encapsulate your component at the component definition time

// To optimize Child with React.memo
const Component = React.memo(({ count }) => {
  console.log("Rendering Component 1");
  return (
    <>
      <h1>With React.memo</h1>
      <div className="alert alert-success">Count from parent: {count}</div>
    </>
  );
});

export default W4D4;
