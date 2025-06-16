import React, { useState } from "react";

const DataCard = (props) => {
  //   const [dummyData, setDummyData] = useState([
  //     {
  //       userId: 1,
  //       id: 1,
  //       title:
  //         "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  //       body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  //     },
  //     {
  //       userId: 1,
  //       id: 2,
  //       title: "qui est esse",
  //       body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  //     },
  //     {
  //       userId: 1,
  //       id: 3,
  //       title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
  //       body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  //     },
  //   ]);

  return (
    <>
      <div className="container my-3 px-3 py-3 border border-dark">
        <h1>My Data</h1>
        <ul className="list-group">
          {props.dataCardPosts
            ? props.dataCardPosts.map((post) => (
                <li key={post.id} className="list-group-item">
                  {post.body}
                </li>
              ))
            : ""}
        </ul>
      </div>
    </>
  );
};

export default DataCard;
