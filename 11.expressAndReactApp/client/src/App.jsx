import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState();

  // useEffect(() => {
  //   fetch("http://localhost:3000/")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setPosts(data);
  //       return data;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/");
      const data = await response.json();
      setPosts(data);
      console.log(data);
      return data;
    };
    const data = fetchData();
    console.log(data);
  }, []);

  return (
    <>
      <ul className="list-group">
        {posts ? (
          posts.map((post) => (
            <li key={post.id} className="list-group-item">
              {post.title} - {post.content}
            </li>
          ))
        ) : (
          <li className="list-group-item">No items yet</li>
        )}
      </ul>
    </>
  );
}

export default App;
