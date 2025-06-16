import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import DataCard from "./components/DataCard";
import PostDataCard from "./components/PostDataCard";
import PutDataCard from "./components/PutDataCard";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);

  // Fetch API - GET Request
  const fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 5)));
  };

  // Fetch API - DELETE Request
  const handleDelete = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    }).then((response) => console.log(response));
  };

  return (
    <>
      <Navbar />
      {/* <DataCard dataCardPosts={posts} /> */}
      {/* <PostDataCard /> */}
      {/* <PutDataCard /> */}
      <div className="container my-3 px-3 py-3 border border-dark">
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete Data
        </button>
      </div>
    </>
  );
}

export default App;
