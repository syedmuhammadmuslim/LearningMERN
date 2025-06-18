import React, { useMemo, useState } from "react";

const fetchData = (input) => {
  console.log("Fetching data...");
  return `Result for ${input}`;
};

const APICallMemoization = () => {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);

  // With useMemo
  const result = useMemo(() => fetchData(query), [query]);

  //   // Without useMemo
  //   const result = fetchData(query);

  return (
    <div className="container mt-5">
      <h3>Simulated API with Memoization</h3>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Enter something..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="alert alert-dark">Result: {result}</div>
      <button
        className="btn btn-primary"
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
      >
        Check
      </button>
    </div>
  );
};

export default APICallMemoization;
