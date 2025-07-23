export const dynamic = "force-dynamic";

const PostListPage = async () => {
  const res = await fetch(`${process.env.BASE_API_URI}/posts`, {
    cache: "no-store",
  });
  const posts = await res.json();

  return (
    <>
      <h1>All Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            {post.title} --- {post.content}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostListPage;
