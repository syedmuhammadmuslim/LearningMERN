export const dynamic = "force-dynamic";

const SinglePostPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`${process.env.BASE_API_URI}/posts/${id}`, {
    cache: "no-store",
  });
  const singlePost = await res.json();

  return (
    <>
      <h1>Single Post</h1>
      <ul>
        <li key={singlePost._id}>
          {singlePost.title} --- {singlePost.content}
        </li>
      </ul>
      {console.log(await params)}
    </>
  );
};

export default SinglePostPage;
