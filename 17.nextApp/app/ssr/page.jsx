// app/ssr/page.jsx
export default async function SSRPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    cache: "no-store", // 👈 This ensures data is fetched on every request (SSR)
  });
  const data = await res.json();

  return (
    <main>
      <h1>Server-Side Rendering</h1>
      <p>{data.body}</p>
    </main>
  );
}
