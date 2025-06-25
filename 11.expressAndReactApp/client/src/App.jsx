import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:3000/")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setPosts(data);
          return data;
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  return (
    <>
      <ul className="list-group">
        {posts ? (
          posts.map((post) => (
            <li key={post.id} className="list-group-item">
              {post.content}
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
