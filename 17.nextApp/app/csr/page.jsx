// app/csr/page.jsx
"use client"; // Mark this as a client component

import { useEffect, useState } from "react";

export default function CSRPage() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => setQuote(data.body));
  }, []);

  return (
    <main>
      <h1>Client-Side Rendering</h1>
      {quote ? <p>{quote}</p> : <p>Loading...</p>}
    </main>
  );
}
