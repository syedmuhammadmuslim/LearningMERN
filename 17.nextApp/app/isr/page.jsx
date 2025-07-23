// app/isr/page.jsx
export const revalidate = 2; // Rebuild every 2 seconds

export default async function ISRPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();

  return (
    <main>
      <h1>Incremental Static Regeneration</h1>
      <p>{data.content}</p>
      <p style={{ fontSize: "0.9rem", color: "gray" }}>
        (This page updates every 10 seconds.)
      </p>
      <br />
      {Date.now()}
    </main>
  );
}
