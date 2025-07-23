// app/ssg/page.jsx
export const revalidate = 0; // 👈 Prevents ISR (discussed next)

export default async function SSGPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    cache: "force-cache", // 👈 Pre-render at build time (SSG)
  });
  const data = await res.json();

  return (
    <main>
      <h1>Static Site Generation</h1>
      <p>{data.body}</p>
    </main>
  );
}
